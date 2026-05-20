import {MatButtonModule} from '@stagefright5/material/button';
import {runHarnessTests} from '@stagefright5/material/button/testing/shared.spec';
import {MatButtonHarness} from './button-harness';

describe('Non-MDC-based MatButtonHarness', () => {
  runHarnessTests(MatButtonModule, MatButtonHarness);
});
