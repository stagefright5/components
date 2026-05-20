import {MatOptionModule} from '@stagefright5/material/core';
import {runHarnessTests} from './optgroup-shared.spec';
import {MatOptgroupHarness} from './optgroup-harness';

describe('Non-MDC-based MatOptgroupHarness', () => {
  runHarnessTests(MatOptionModule, MatOptgroupHarness);
});
