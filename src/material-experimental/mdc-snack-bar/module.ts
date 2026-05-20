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
import {MatButtonModule} from '@stagefright5/material-experimental/mdc-button';
import {MatCommonModule} from '@stagefright5/material-experimental/mdc-core';

import {SimpleSnackBar} from './simple-snack-bar';
import {MatSnackBarContainer} from './snack-bar-container';
import {MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel} from './snack-bar-content';

@NgModule({
  imports: [OverlayModule, PortalModule, CommonModule, MatButtonModule, MatCommonModule],
  exports: [
    MatCommonModule,
    MatSnackBarContainer,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
  declarations: [
    SimpleSnackBar,
    MatSnackBarContainer,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
})
export class MatSnackBarModule {}
