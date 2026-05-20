/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {LiveAnnouncer} from '@stagefright5/cdk/a11y';
import {BreakpointObserver} from '@stagefright5/cdk/layout';
import {Overlay} from '@stagefright5/cdk/overlay';
import {Inject, Injectable, Injector, Optional, SkipSelf} from '@angular/core';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  _MatSnackBarBase,
} from '@stagefright5/material/snack-bar';
import {MatSnackBarModule} from './module';
import {SimpleSnackBar} from './simple-snack-bar';
import {MatSnackBarContainer} from './snack-bar-container';

/**
 * Service to dispatch Material Design snack bar messages.
 */
@Injectable({providedIn: MatSnackBarModule})
export class MatSnackBar extends _MatSnackBarBase {
  protected override simpleSnackBarComponent = SimpleSnackBar;
  protected override snackBarContainerComponent = MatSnackBarContainer;
  protected override handsetCssClass = 'mat-mdc-snack-bar-handset';

  constructor(
    overlay: Overlay,
    live: LiveAnnouncer,
    injector: Injector,
    breakpointObserver: BreakpointObserver,
    @Optional() @SkipSelf() parentSnackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS) defaultConfig: MatSnackBarConfig,
  ) {
    super(overlay, live, injector, breakpointObserver, parentSnackBar, defaultConfig);
  }
}
