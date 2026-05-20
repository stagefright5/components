import {MatTabsModule} from '@stagefright5/material/tabs';
import {runTabGroupHarnessTests} from '@stagefright5/material/tabs/testing/tab-group-shared.spec';
import {MatTabGroupHarness} from './tab-group-harness';

describe('Non-MDC-based MatTabGroupHarness', () => {
  runTabGroupHarnessTests(MatTabsModule, MatTabGroupHarness);
});
