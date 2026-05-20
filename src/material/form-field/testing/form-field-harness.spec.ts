import {MatAutocompleteModule} from '@stagefright5/material/autocomplete';
import {MatNativeDateModule} from '@stagefright5/material/core';
import {MatDatepickerModule} from '@stagefright5/material/datepicker';
import {
  MatDatepickerInputHarness,
  MatDateRangeInputHarness,
} from '@stagefright5/material/datepicker/testing';
import {MatFormFieldModule} from '@stagefright5/material/form-field';
import {MatInputModule} from '@stagefright5/material/input';
import {MatInputHarness} from '@stagefright5/material/input/testing';
import {MatSelectModule} from '@stagefright5/material/select';
import {MatSelectHarness} from '@stagefright5/material/select/testing';

import {MatFormFieldHarness} from './form-field-harness';
import {runHarnessTests} from './shared.spec';

describe('Non-MDC-based MatFormFieldHarness', () => {
  runHarnessTests(
    [
      MatFormFieldModule,
      MatAutocompleteModule,
      MatInputModule,
      MatSelectModule,
      MatNativeDateModule,
      MatDatepickerModule,
    ],
    {
      formFieldHarness: MatFormFieldHarness,
      inputHarness: MatInputHarness,
      selectHarness: MatSelectHarness,
      datepickerInputHarness: MatDatepickerInputHarness,
      dateRangeInputHarness: MatDateRangeInputHarness,
      isMdcImplementation: false,
    },
  );
});
