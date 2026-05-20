/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRippleModule, MatPseudoCheckboxModule} from '@stagefright5/material/core';
import {MatOption} from './option';
import {MatOptgroup} from './optgroup';

@NgModule({
  imports: [MatRippleModule, CommonModule, MatPseudoCheckboxModule],
  exports: [MatOption, MatOptgroup],
  declarations: [MatOption, MatOptgroup],
})
export class MatOptionModule {}

export * from './option';
export * from './optgroup';
export {
  MatOptionSelectionChange,
  MatOptionParentComponent,
  MAT_OPTION_PARENT_COMPONENT,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
} from '@stagefright5/material/core';
