import {MatOptionModule, MatOption} from '@stagefright5/material-experimental/mdc-core';
import {runHarnessTests} from '@stagefright5/material/core/testing/option-shared.spec';
import {MatOptionHarness} from './option-harness';

describe('MDC-based MatOptionHarness', () => {
  runHarnessTests(MatOptionModule, MatOptionHarness as any, MatOption);
});
