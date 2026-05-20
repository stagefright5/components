import {MatProgressBarModule} from '@stagefright5/material/progress-bar';
import {runHarnessTests} from '@stagefright5/material/progress-bar/testing/shared.spec';
import {MatProgressBarHarness} from './progress-bar-harness';

describe('MatProgressBarHarness', () => {
  runHarnessTests(MatProgressBarModule, MatProgressBarHarness);
});
