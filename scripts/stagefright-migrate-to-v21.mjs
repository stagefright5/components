import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const packageRoots = [
  'src/cdk',
  'src/cdk-experimental',
  'src/material',
  'src/material-experimental',
  'src/material-moment-adapter',
  'src/material-luxon-adapter',
  'src/material-date-fns-adapter',
  'src/google-maps',
  'src/youtube-player',
];

const extraEntrypoints = ['src/material/form-field/testing/control'];

const packageNameMap = new Map([
  ['@angular/material-date-fns-adapter', '@stagefright5/material-date-fns-adapter'],
  ['@angular/material-moment-adapter', '@stagefright5/material-moment-adapter'],
  ['@angular/material-luxon-adapter', '@stagefright5/material-luxon-adapter'],
  ['@angular/material-experimental', '@stagefright5/material-experimental'],
  ['@angular/cdk-experimental', '@stagefright5/cdk-experimental'],
  ['@angular/google-maps', '@stagefright5/google-maps'],
  ['@angular/youtube-player', '@stagefright5/youtube-player'],
  ['@angular/material', '@stagefright5/material'],
  ['@angular/cdk', '@stagefright5/cdk'],
]);

const angularVersion = '21.2.11';
const angularDevkitVersion = '21.2.9';
const forkVersion = '0.0.0-stagefright5';

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readJsonc(filePath) {
  return JSON.parse(
    fs
      .readFileSync(filePath, 'utf8')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/,\s*([}\]])/g, '$1'),
  );
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function walk(dir, predicate, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (entry.name === 'node_modules' || entry.name === 'bazel-bin' || entry.name === 'bazel-out') {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, predicate, files);
    } else if (predicate(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function replaceAngularPackageNames(text) {
  let result = text;
  for (const [from, to] of packageNameMap) {
    result = result.split(from).join(to);
  }
  return result;
}

function migrateRootPackageJson() {
  const filePath = path.join(repoRoot, 'package.json');
  const pkg = readJson(filePath);

  pkg.version = forkVersion;
  pkg.packageManager = 'pnpm@10.33.2';
  const previousBuildScript =
    pkg.scripts['build:bazel'] ?? 'ts-node --project scripts/tsconfig.json ./scripts/build-packages-dist.ts';
  pkg.scripts = {
    ...pkg.scripts,
    'build:bazel': previousBuildScript,
    build: 'node ./scripts/stagefright-build-packages.mjs',
    'build:packages': 'node ./scripts/stagefright-build-packages.mjs',
  };

  const deps = pkg.dependencies;
  for (const name of [
    '@angular/animations',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/platform-browser',
  ]) {
    deps[name] = angularVersion;
  }
  deps.rxjs = '^6.6.7 || ^7.4.0';
  deps.tslib = '^2.3.0';
  deps['zone.js'] = '~0.16.0';
  deps.typescript = '5.9.2';

  const devDeps = pkg.devDependencies;
  for (const name of [
    '@angular/localize',
    '@angular/platform-browser-dynamic',
    '@angular/platform-server',
    '@angular/router',
    '@angular/compiler-cli',
  ]) {
    devDeps[name] = angularVersion;
  }
  for (const name of [
    '@angular-devkit/build-angular',
    '@angular-devkit/core',
    '@angular-devkit/schematics',
    '@angular/cli',
    '@schematics/angular',
  ]) {
    devDeps[name] = angularDevkitVersion;
  }
  devDeps['ng-packagr'] = '21.2.3';
  devDeps.typescript = '5.9.2';
  devDeps['@types/node'] = '^22.14.1';
  devDeps.prettier = '^3.5.3';
  delete devDeps['@angular/bazel'];
  delete devDeps['@angular/dev-infra-private'];

  pkg.engines = {
    node: '^20.19.0 || ^22.12.0 || ^24.0.0',
    pnpm: '10.33.2',
    npm: 'Please use pnpm instead of NPM to install dependencies.',
    yarn: 'Please use pnpm instead of Yarn to install dependencies.',
  };
  delete pkg.resolutions;

  writeJson(filePath, pkg);
}

function migrateTsConfig() {
  const filePath = path.join(repoRoot, 'tsconfig.json');
  const tsconfig = readJsonc(filePath);
  tsconfig.compilerOptions.module = 'esnext';
  tsconfig.compilerOptions.moduleResolution = 'bundler';
  tsconfig.compilerOptions.target = 'es2022';
  tsconfig.compilerOptions.lib = ['es2022', 'dom'];
  tsconfig.compilerOptions.paths = {
    ...tsconfig.compilerOptions.paths,
    '@stagefright5/cdk': ['./src/cdk'],
    '@stagefright5/cdk/*': ['./src/cdk/*'],
    '@stagefright5/cdk-experimental': ['./src/cdk-experimental'],
    '@stagefright5/cdk-experimental/*': ['./src/cdk-experimental/*'],
    '@stagefright5/material': ['./src/material'],
    '@stagefright5/material/*': ['./src/material/*'],
    '@stagefright5/material-experimental': ['./src/material-experimental'],
    '@stagefright5/material-experimental/*': ['./src/material-experimental/*'],
    '@stagefright5/material-moment-adapter': ['./src/material-moment-adapter'],
    '@stagefright5/material-luxon-adapter': ['./src/material-luxon-adapter'],
    '@stagefright5/material-date-fns-adapter': ['./src/material-date-fns-adapter'],
    '@stagefright5/google-maps': ['./src/google-maps'],
    '@stagefright5/youtube-player': ['./src/youtube-player'],
  };
  tsconfig.angularCompilerOptions = {
    ...tsconfig.angularCompilerOptions,
    compilationMode: 'partial',
  };
  writeJson(filePath, tsconfig);

  writeJson(path.join(repoRoot, 'tsconfig.stagefright.json'), {
    extends: './tsconfig.json',
    compilerOptions: {
      types: ['zone.js'],
      skipLibCheck: true,
      strictPropertyInitialization: false,
      useDefineForClassFields: false,
    },
    angularCompilerOptions: {
      strictTemplates: false,
      compilationMode: 'partial',
    },
  });
}

function migrateWorkspace() {
  fs.writeFileSync(
    path.join(repoRoot, 'pnpm-workspace.yaml'),
    `packages:
  - .
  - src/cdk
  - src/cdk-experimental
  - src/google-maps
  - src/material
  - src/material-date-fns-adapter
  - src/material-experimental
  - src/material-luxon-adapter
  - src/material-moment-adapter
  - src/youtube-player

minimumReleaseAge: 1440
minimumReleaseAgeExclude:
  - '@angular-devkit/*'
  - '@angular/*'
  - '@ngtools/webpack'
  - '@schematics/*'
  - 'ng-packagr'
`,
  );
}

function migrateSourceReferences() {
  const extensions = new Set(['.ts', '.scss', '.css', '.json', '.md', '.html']);
  const files = packageRoots.flatMap(packageRoot =>
    walk(path.join(repoRoot, packageRoot), filePath => extensions.has(path.extname(filePath))),
  );
  for (const filePath of files) {
    const original = fs.readFileSync(filePath, 'utf8');
    const next = replaceAngularPackageNames(original)
      .replaceAll('0.0.0-NG', '^21.0.0')
      .replaceAll('0.0.0-RXJS', '^6.5.3 || ^7.4.0')
      .replaceAll('0.0.0-TSLIB', '^2.3.0')
      .replaceAll('0.0.0-PLACEHOLDER', forkVersion)
      .replaceAll('0.0.0-MDC', '14.0.0-canary.9736ddce9.0')
      .replaceAll('standalone: false,  ', 'standalone: false,\n  ')
      .replaceAll(
        '_control.onContainerClick && _control.onContainerClick($event)',
        '_control.onContainerClick($event)',
      )
      .replaceAll(
        'MatDatepickerBase<MatDatepickerControl<unknown>, unknown>',
        'MatDatepickerBase<MatDatepickerControl<any>, any>',
      )
      .replaceAll('Object.keys(data)', 'Object.keys(data as any)')
      .replaceAll('private _destroyed = new Subject();', 'private _destroyed = new Subject<void>();')
      .replaceAll(
        'return this.googleMap.overlayMapTypes;',
        'return this.googleMap.overlayMapTypes as google.maps.MVCArray<google.maps.MapType>;',
      )
      .replaceAll(
        'return this.kmlLayer.getStatus();',
        'return this.kmlLayer.getStatus() as google.maps.KmlLayerStatus;',
      )
      .replaceAll(
        'return this.marker.getLabel() || null;',
        'return (this.marker.getLabel() || null) as google.maps.MarkerLabel | null;',
      )
      .replaceAll(
        'observer.next({result: result || undefined, status});',
        'observer.next({result: result || undefined, status: status as google.maps.DirectionsStatus});',
      )
      .replaceAll(
        'observer.next({results: results || [], status});',
        'observer.next({results: results || [], status: status as google.maps.GeocoderStatus});',
      )
      .replaceAll("'(focusin)': '_focusin($event)'", "'(focusin)': '_focusin()'")
      .replaceAll("'(focusout)': '_focusout($event)'", "'(focusout)': '_focusout()'")
      .replaceAll(
        'implements AfterContentInit, OnDestroy, ControlValueAccessor\n{\n  /**\n   * Function when touched.',
        'implements AfterContentInit, OnDestroy, ControlValueAccessor\n{\n  /** Value for aria-describedby property. */\n  _ariaDescribedby?: string;\n\n  /**\n   * Function when touched.',
      )
      .replace(/,\n\s+InjectFlags/g, '')
      .replaceAll('InjectFlags.Self | InjectFlags.Optional', '{self: true, optional: true}')
      .replaceAll('InjectFlags.Optional', '{optional: true}');
    if (next !== original) {
      fs.writeFileSync(filePath, next);
    }
  }
}

function migratePackageJsonFiles() {
  for (const packageRoot of packageRoots) {
    const filePath = path.join(repoRoot, packageRoot, 'package.json');
    const pkg = readJson(filePath);
    pkg.name = packageNameMap.get(pkg.name) ?? pkg.name;
    pkg.version = forkVersion;
    if (pkg.peerDependencies) {
      for (const [from, to] of packageNameMap) {
        if (pkg.peerDependencies[from]) {
          pkg.peerDependencies[to] = pkg.peerDependencies[from];
          delete pkg.peerDependencies[from];
        }
      }
      for (const peerName of Object.keys(pkg.peerDependencies)) {
        if (peerName.startsWith('@stagefright5/')) {
          pkg.devDependencies ??= {};
          pkg.devDependencies[peerName] = 'workspace:*';
        }
      }
    }
    pkg.dependencies = {
      ...pkg.dependencies,
      tslib: '^2.3.0',
    };
    writeJson(filePath, pkg);
  }
}

function addStandaloneFalse() {
  const files = packageRoots.flatMap(packageRoot =>
    walk(path.join(repoRoot, packageRoot), filePath => filePath.endsWith('.ts')),
  );
  const decoratorPattern = /@(Component|Directive|Pipe)\(\{\n(?![\s\S]*?\n\s*standalone\s*:)([\s\S]*?)\n\}\)/g;
  for (const filePath of files) {
    const original = fs.readFileSync(filePath, 'utf8');
    const next = original
      .replace(decoratorPattern, (match, kind, body) => {
        // Restrict the negative check to this decorator body.
        if (body.includes('standalone:')) {
          return match;
        }
        return `@${kind}({\n  standalone: false,${body}\n})`;
      })
      .replace(/@(Component|Directive|Pipe)\(\{([^{}\n]*?)\}\)/g, (match, kind, body) => {
        if (body.includes('standalone:')) {
          return match;
        }
        return `@${kind}({standalone: false, ${body}})`;
      });
    if (next !== original) {
      fs.writeFileSync(filePath, next);
    }
  }
}

function pointStyleUrlsAtScssSources() {
  const files = packageRoots.flatMap(packageRoot =>
    walk(path.join(repoRoot, packageRoot), filePath => filePath.endsWith('.ts')),
  );
  for (const filePath of files) {
    const dir = path.dirname(filePath);
    const original = fs.readFileSync(filePath, 'utf8');
    const next = original.replace(/(['"])([^'"]+)\.css\1/g, (match, quote, stylePath) => {
      if (fs.existsSync(path.join(dir, `${stylePath}.scss`))) {
        return `${quote}${stylePath}.scss${quote}`;
      }
      return match;
    });
    if (next !== original) {
      fs.writeFileSync(filePath, next);
    }
  }
}

function writeNgPackageConfigs() {
  for (const packageRoot of packageRoots) {
    const absoluteRoot = path.join(repoRoot, packageRoot);
    const pkg = readJson(path.join(absoluteRoot, 'package.json'));
    const destName = pkg.name.replace('@stagefright5/', '');
    writeJson(path.join(absoluteRoot, 'ng-package.json'), {
      $schema: '../../node_modules/ng-packagr/ng-package.schema.json',
      dest: `../../dist/stagefright5/${destName}`,
      allowedNonPeerDependencies: ['.*'],
      assets: [
        {glob: '**/*.scss', input: '.', output: '.'},
        {glob: '**/*.css', input: '.', output: '.'},
        {glob: 'README.md', input: '.', output: '.'},
        {glob: 'schematics/**', input: '.', output: 'schematics'},
      ],
      lib: {
        entryFile: fs.existsSync(path.join(absoluteRoot, 'public-api.ts')) ? 'public-api.ts' : 'index.ts',
      },
    });

    for (const publicApi of walk(absoluteRoot, filePath => path.basename(filePath) === 'public-api.ts')) {
      const dir = path.dirname(publicApi);
      if (dir === absoluteRoot) {
        continue;
      }
      const segments = path.relative(absoluteRoot, dir).split(path.sep);
      if (segments.includes('schematics') || segments.includes('private')) {
        continue;
      }
      writeJson(path.join(dir, 'ng-package.json'), {
        $schema: path
          .relative(dir, path.join(repoRoot, 'node_modules/ng-packagr/ng-package.schema.json'))
          .replaceAll(path.sep, '/'),
        lib: {
          entryFile: 'public-api.ts',
        },
      });
    }
  }

  for (const entrypoint of extraEntrypoints) {
    const dir = path.join(repoRoot, entrypoint);
    writeJson(path.join(dir, 'ng-package.json'), {
      $schema: path
        .relative(dir, path.join(repoRoot, 'node_modules/ng-packagr/ng-package.schema.json'))
        .replaceAll(path.sep, '/'),
      lib: {
        entryFile: 'index.ts',
      },
    });
  }
}

migrateRootPackageJson();
migrateTsConfig();
migrateWorkspace();
migrateSourceReferences();
migratePackageJsonFiles();
addStandaloneFalse();
pointStyleUrlsAtScssSources();
writeNgPackageConfigs();
