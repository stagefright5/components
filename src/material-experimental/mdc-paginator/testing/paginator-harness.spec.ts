import {MatPaginatorModule} from '@stagefright5/material-experimental/mdc-paginator';
import {runHarnessTests} from '@stagefright5/material/paginator/testing/shared.spec';
import {MatPaginatorHarness} from './paginator-harness';

describe('MDC-based MatPaginatorHarness', () => {
  runHarnessTests(MatPaginatorModule, MatPaginatorHarness as any);
});
