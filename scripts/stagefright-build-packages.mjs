import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const packages = [
  'src/cdk',
  'src/cdk-experimental',
  'src/material',
  'src/material-moment-adapter',
  'src/material-luxon-adapter',
  'src/material-date-fns-adapter',
  'src/material-experimental',
  'src/google-maps',
  'src/youtube-player',
];

const packageNames = new Map([
  ['src/cdk', '@stagefright5/cdk'],
  ['src/cdk-experimental', '@stagefright5/cdk-experimental'],
  ['src/material', '@stagefright5/material'],
  ['src/material-moment-adapter', '@stagefright5/material-moment-adapter'],
  ['src/material-luxon-adapter', '@stagefright5/material-luxon-adapter'],
  ['src/material-date-fns-adapter', '@stagefright5/material-date-fns-adapter'],
  ['src/material-experimental', '@stagefright5/material-experimental'],
  ['src/google-maps', '@stagefright5/google-maps'],
  ['src/youtube-player', '@stagefright5/youtube-player'],
]);

const baseConfig = JSON.parse(fs.readFileSync('tsconfig.stagefright.json', 'utf8'));
fs.mkdirSync('.stagefright', {recursive: true});

function packageDistPath(packageName) {
  return `./dist/stagefright5/${packageName.replace('@stagefright5/', '')}`;
}

function writeTsConfigForPackage(packageRoot, builtPackages) {
  const paths = {};
  for (const [root, packageName] of packageNames) {
    const target = builtPackages.has(root) ? packageDistPath(packageName) : `./${root}`;
    paths[packageName] = [target];
    paths[`${packageName}/*`] = [`${target}/*`];
  }

  const config = {
    ...baseConfig,
    extends: '../tsconfig.stagefright.json',
    compilerOptions: {
      ...baseConfig.compilerOptions,
      paths,
    },
  };
  const configPath = `.stagefright/tsconfig-${packageRoot.replaceAll('/', '-')}.json`;
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
  return configPath;
}

const builtPackages = new Set();

for (const packageRoot of packages) {
  console.info(`\nBuilding ${packageRoot}`);
  const tsconfig = writeTsConfigForPackage(packageRoot, builtPackages);
  const result = spawnSync(
    'pnpm',
    ['exec', 'ng-packagr', '-p', `${packageRoot}/ng-package.json`, '-c', tsconfig],
    {
      stdio: 'inherit',
      shell: process.platform === 'win32',
    },
  );
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  builtPackages.add(packageRoot);
}
