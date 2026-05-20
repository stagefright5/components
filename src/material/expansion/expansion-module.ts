/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CdkAccordionModule} from '@stagefright5/cdk/accordion';
import {PortalModule} from '@stagefright5/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@stagefright5/material/core';
import {MatAccordion} from './accordion';
import {MatExpansionPanel, MatExpansionPanelActionRow} from './expansion-panel';
import {MatExpansionPanelContent} from './expansion-panel-content';
import {
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from './expansion-panel-header';

@NgModule({
  imports: [CommonModule, MatCommonModule, CdkAccordionModule, PortalModule],
  exports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelContent,
  ],
  declarations: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelContent,
  ],
})
export class MatExpansionModule {}
