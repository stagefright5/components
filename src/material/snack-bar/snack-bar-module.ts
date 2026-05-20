/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {OverlayModule} from '@stagefright5/cdk/overlay';
import {PortalModule} from '@stagefright5/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@stagefright5/material/core';
import {MatButtonModule} from '@stagefright5/material/button';
import {SimpleSnackBar} from './simple-snack-bar';
import {MatSnackBarContainer} from './snack-bar-container';

@NgModule({
  imports: [OverlayModule, PortalModule, CommonModule, MatButtonModule, MatCommonModule],
  exports: [MatSnackBarContainer, MatCommonModule],
  declarations: [MatSnackBarContainer, SimpleSnackBar],
})
export class MatSnackBarModule {}
