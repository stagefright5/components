import {MatTabsModule} from '@stagefright5/material/tabs';
import {runTabNavBarHarnessTests} from '@stagefright5/material/tabs/testing/tab-nav-bar-shared.spec';
import {MatTabNavBarHarness} from './tab-nav-bar-harness';

describe('Non-MDC-based MatTabNavBarHarness', () => {
  runTabNavBarHarnessTests(MatTabsModule, MatTabNavBarHarness);
});
