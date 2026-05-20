import {MatOptionModule, MatOption} from '@stagefright5/material/core';
import {runHarnessTests} from './option-shared.spec';
import {MatOptionHarness} from './option-harness';

describe('Non-MDC-based MatOptionHarness', () => {
  runHarnessTests(MatOptionModule, MatOptionHarness, MatOption);
});
