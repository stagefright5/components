/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TextFieldModule} from '@stagefright5/cdk/text-field';
import {NgModule} from '@angular/core';
import {ErrorStateMatcher, MatCommonModule} from '@stagefright5/material/core';
import {MatFormFieldModule} from '@stagefright5/material/form-field';
import {MatInput} from './input';

@NgModule({
  declarations: [MatInput],
  imports: [TextFieldModule, MatFormFieldModule, MatCommonModule],
  exports: [
    TextFieldModule,
    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
    // be used together with `MatFormField`.
    MatFormFieldModule,
    MatInput,
  ],
  providers: [ErrorStateMatcher],
})
export class MatInputModule {}
