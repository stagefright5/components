/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@stagefright5/material/core';
import {MatButtonModule} from '@stagefright5/material/button';
import {MatSelectModule} from '@stagefright5/material/select';
import {MatTooltipModule} from '@stagefright5/material/tooltip';
import {MatPaginator} from './paginator';
import {MAT_PAGINATOR_INTL_PROVIDER} from './paginator-intl';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatSelectModule, MatTooltipModule, MatCommonModule],
  exports: [MatPaginator],
  declarations: [MatPaginator],
  providers: [MAT_PAGINATOR_INTL_PROVIDER],
})
export class MatPaginatorModule {}
