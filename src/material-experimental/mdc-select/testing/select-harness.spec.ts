import {MatSelectModule} from '@stagefright5/material-experimental/mdc-select';
import {MatFormFieldModule} from '@stagefright5/material-experimental/mdc-form-field';
import {runHarnessTests} from '@stagefright5/material/select/testing/shared.spec';
import {MatSelectHarness} from './index';

describe('MDC-based MatSelectHarness', () => {
  runHarnessTests(MatFormFieldModule, MatSelectModule, MatSelectHarness as any);
});
