/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CdkTreeNodeToggle} from '@stagefright5/cdk/tree';
import {Directive} from '@angular/core';

/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 */
@Directive({
  standalone: false,
  selector: '[matTreeNodeToggle]',
  providers: [{provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle}],
  inputs: ['recursive: matTreeNodeToggleRecursive'],
})
export class MatTreeNodeToggle<T, K = T> extends CdkTreeNodeToggle<T, K> {}
