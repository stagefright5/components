/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {coerceBooleanProperty} from '@stagefright5/cdk/coercion';
import {CdkSelection, SelectionChange} from '@stagefright5/cdk-experimental/selection';
import {Directive, Input, Output, EventEmitter} from '@angular/core';

/**
 * Manages the selection states of the items and provides methods to check and update the selection
 * states.
 * It must be applied to the parent element if `matSelectionToggle`, `matSelectAll`,
 * `matRowSelection` and `matSelectionColumn` are applied.
 */
@Directive({
  standalone: false,
  selector: '[matSelection]',
  exportAs: 'matSelection',
  providers: [{provide: CdkSelection, useExisting: MatSelection}],
})
// tslint:disable-next-line: coercion-types
export class MatSelection<T> extends CdkSelection<T> {
  /** Whether to support multiple selection */
  @Input('matSelectionMultiple')
  override get multiple(): boolean {
    return this._multiple;
  }
  override set multiple(multiple: boolean) {
    this._multiple = coerceBooleanProperty(multiple);
  }

  /** Emits when selection changes. */
  @Output('matSelectionChange') override readonly change = new EventEmitter<SelectionChange<T>>();
}

/**
 * Represents the change in the selection set.
 */
export {SelectionChange} from '@stagefright5/cdk-experimental/selection';
