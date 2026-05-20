import {MatTabsModule} from '@stagefright5/material-experimental/mdc-tabs';
import {runTabGroupHarnessTests} from '@stagefright5/material/tabs/testing/tab-group-shared.spec';
import {MatTabGroupHarness} from './tab-group-harness';

describe('MDC-based MatTabGroupHarness', () => {
  runTabGroupHarnessTests(MatTabsModule, MatTabGroupHarness as any);
});
