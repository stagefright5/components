import {MatTableModule} from '@stagefright5/material-experimental/mdc-table';
import {runHarnessTests} from '@stagefright5/material/table/testing/shared.spec';
import {MatTableHarness} from './table-harness';

describe('MDC-based MatTableHarness', () => {
  runHarnessTests(MatTableModule, MatTableHarness as any);
});
