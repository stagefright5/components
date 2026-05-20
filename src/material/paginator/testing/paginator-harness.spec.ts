import {MatPaginatorModule} from '@stagefright5/material/paginator';
import {runHarnessTests} from './shared.spec';
import {MatPaginatorHarness} from './paginator-harness';

describe('Non-MDC-based MatPaginatorHarness', () => {
  runHarnessTests(MatPaginatorModule, MatPaginatorHarness);
});
