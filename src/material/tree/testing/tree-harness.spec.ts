import {MatTreeHarness} from '@stagefright5/material/tree/testing';
import {MatTreeModule} from '@stagefright5/material/tree';
import {runHarnessTests} from '@stagefright5/material/tree/testing/shared.spec';

describe('Non-MDC-based MatTreeHarness', () => {
  runHarnessTests(MatTreeModule, MatTreeHarness);
});
