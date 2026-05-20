/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directive} from '@angular/core';
import {CdkStepLabel} from '@stagefright5/cdk/stepper';

@Directive({
  standalone: false,
  selector: '[matStepLabel]',
})
export class MatStepLabel extends CdkStepLabel {}
