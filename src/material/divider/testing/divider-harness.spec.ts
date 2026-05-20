import {MatDividerModule} from '@stagefright5/material/divider';
import {MatDividerHarness} from './divider-harness';
import {runHarnessTests} from './shared.spec';

describe('Non-MDC-based MatButtonHarness', () => {
  runHarnessTests(MatDividerModule, MatDividerHarness);
});
