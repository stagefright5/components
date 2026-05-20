import {MatCheckboxModule} from '@stagefright5/material/checkbox';
import {MatCheckboxHarness} from './checkbox-harness';
import {runHarnessTests} from '@stagefright5/material/checkbox/testing/shared.spec';

describe('Non-MDC-based MatCheckboxHarness', () => {
  runHarnessTests(MatCheckboxModule, MatCheckboxHarness);
});
