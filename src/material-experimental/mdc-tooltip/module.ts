/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {A11yModule} from '@stagefright5/cdk/a11y';
import {OverlayModule} from '@stagefright5/cdk/overlay';
import {CdkScrollableModule} from '@stagefright5/cdk/scrolling';
import {MatCommonModule} from '@stagefright5/material-experimental/mdc-core';
import {MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER} from '@stagefright5/material/tooltip';
import {MatTooltip, TooltipComponent} from './tooltip';

@NgModule({
  imports: [A11yModule, CommonModule, OverlayModule, MatCommonModule],
  exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
  declarations: [MatTooltip, TooltipComponent],
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MatTooltipModule {}
