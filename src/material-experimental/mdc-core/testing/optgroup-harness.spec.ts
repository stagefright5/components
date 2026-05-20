import {MatOptionModule} from '@stagefright5/material-experimental/mdc-core';
import {runHarnessTests} from '@stagefright5/material/core/testing/optgroup-shared.spec';
import {MatOptgroupHarness} from './optgroup-harness';

describe('MDC-based MatOptgroupHarness', () => {
  runHarnessTests(MatOptionModule, MatOptgroupHarness as any);
});
