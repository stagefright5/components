/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {BaseHarnessFilters} from '@stagefright5/cdk/testing';
import {SortDirection} from '@stagefright5/material/sort';

export interface SortHarnessFilters extends BaseHarnessFilters {}

export interface SortHeaderHarnessFilters extends BaseHarnessFilters {
  label?: string | RegExp;
  sortDirection?: SortDirection;
}
