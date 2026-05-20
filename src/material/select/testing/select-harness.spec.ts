import {MatFormFieldModule} from '@stagefright5/material/form-field';
import {MatSelectModule} from '@stagefright5/material/select';
import {MatSelectHarness} from './select-harness';
import {runHarnessTests} from './shared.spec';

describe('Non-MDC-based MatSelectHarness', () => {
  runHarnessTests(MatFormFieldModule, MatSelectModule, MatSelectHarness);
});
