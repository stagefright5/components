import {MatInputModule} from '@stagefright5/material/input';
import {MatInputHarness} from './input-harness';
import {runInputHarnessTests} from './shared-input.spec';

describe('Non-MDC-based MatInputHarness', () => {
  runInputHarnessTests(MatInputModule, MatInputHarness);
});
