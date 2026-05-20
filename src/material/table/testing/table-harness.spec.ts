import {MatTableModule} from '@stagefright5/material/table';
import {runHarnessTests} from '@stagefright5/material/table/testing/shared.spec';
import {MatTableHarness} from './table-harness';

describe('Non-MDC-based MatTableHarness', () => {
  runHarnessTests(MatTableModule, MatTableHarness);
});
