import {MatMenuModule} from '@stagefright5/material/menu';
import {runHarnessTests} from '@stagefright5/material/menu/testing/shared.spec';
import {MatMenuHarness} from './menu-harness';

describe('Non-MDC-based MatMenuHarness', () => {
  runHarnessTests(MatMenuModule, MatMenuHarness);
});
