/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {SymbolRemovalUpgradeData, TargetVersion, VersionChanges} from '@stagefright5/cdk/schematics';

export const symbolRemoval: VersionChanges<SymbolRemovalUpgradeData> = {
  [TargetVersion.V13]: [
    {
      pr: 'https://github.com/angular/components/pull/23529',
      changes: [
        'CanColorCtor',
        'CanDisableRippleCtor',
        'CanDisableCtor',
        'CanUpdateErrorStateCtor',
        'HasInitializedCtor',
        'HasTabIndexCtor',
      ].map(name => ({
        name,
        module: '@stagefright5/material/core',
        message: `\`${name}\` is no longer necessary and has been removed.`,
      })),
    },
  ],
};
