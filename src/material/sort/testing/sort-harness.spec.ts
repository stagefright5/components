import {MatSortModule} from '@stagefright5/material/sort';
import {runHarnessTests} from '@stagefright5/material/sort/testing/shared.spec';
import {MatSortHarness} from './sort-harness';

describe('Non-MDC-based MatSortHarness', () => {
  runHarnessTests(MatSortModule, MatSortHarness);
});
