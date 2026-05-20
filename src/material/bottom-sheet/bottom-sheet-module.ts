/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {OverlayModule} from '@stagefright5/cdk/overlay';
import {PortalModule} from '@stagefright5/cdk/portal';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@stagefright5/material/core';
import {MatBottomSheetContainer} from './bottom-sheet-container';

@NgModule({
  imports: [OverlayModule, MatCommonModule, PortalModule],
  exports: [MatBottomSheetContainer, MatCommonModule],
  declarations: [MatBottomSheetContainer],
})
export class MatBottomSheetModule {}
