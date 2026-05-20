import {MatSlideToggleModule} from '@stagefright5/material/slide-toggle';
import {runHarnessTests} from '@stagefright5/material/slide-toggle/testing/shared.spec';
import {MatSlideToggleHarness} from './slide-toggle-harness';

describe('Non-MDC-based MatSlideToggleHarness', () => {
  runHarnessTests(MatSlideToggleModule, MatSlideToggleHarness);
});
