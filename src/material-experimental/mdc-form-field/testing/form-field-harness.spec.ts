import {MatFormFieldModule} from '@stagefright5/material-experimental/mdc-form-field';
import {MatInputModule} from '@stagefright5/material-experimental/mdc-input';
import {MatAutocompleteModule} from '@stagefright5/material-experimental/mdc-autocomplete';
import {MatInputHarness} from '@stagefright5/material-experimental/mdc-input/testing';
import {MatSelectModule} from '@stagefright5/material-experimental/mdc-select';
import {MatSelectHarness} from '@stagefright5/material-experimental/mdc-select/testing';
import {runHarnessTests} from '@stagefright5/material/form-field/testing/shared.spec';
import {MatDatepickerModule} from '@stagefright5/material/datepicker';
import {MatNativeDateModule} from '@stagefright5/material-experimental/mdc-core';
import {
  MatDatepickerInputHarness,
  MatDateRangeInputHarness,
} from '@stagefright5/material/datepicker/testing';
import {MatFormFieldHarness} from './form-field-harness';

describe('MDC-based MatFormFieldHarness', () => {
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
      formFieldHarness: MatFormFieldHarness as any,
      inputHarness: MatInputHarness,
      selectHarness: MatSelectHarness,
      datepickerInputHarness: MatDatepickerInputHarness,
      dateRangeInputHarness: MatDateRangeInputHarness,
      isMdcImplementation: true,
    },
  );
});
