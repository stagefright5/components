import {MatProgressSpinnerModule} from '@stagefright5/material/progress-spinner';
import {runHarnessTests} from '@stagefright5/material/progress-spinner/testing/shared.spec';
import {MatProgressSpinnerHarness} from './progress-spinner-harness';

describe('Non-MDC-based MatProgressSpinnerHarness', () => {
  runHarnessTests(MatProgressSpinnerModule, MatProgressSpinnerHarness);
});
