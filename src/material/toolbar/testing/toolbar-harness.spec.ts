import {runHarnessTests} from '@stagefright5/material/toolbar/testing/shared.spec';
import {MatToolbarModule} from '@stagefright5/material/toolbar';
import {MatToolbarHarness} from '@stagefright5/material/toolbar/testing';

describe('Non-MDC-based MatToolbarHarness', () => {
  runHarnessTests(MatToolbarModule, MatToolbarHarness);
});
