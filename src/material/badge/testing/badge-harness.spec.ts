import {MatBadgeModule} from '@stagefright5/material/badge';
import {runHarnessTests} from '@stagefright5/material/badge/testing/shared.spec';
import {MatBadgeHarness} from './badge-harness';

describe('Non-MDC-based MatBadgeHarness', () => {
  runHarnessTests(MatBadgeModule, MatBadgeHarness);
});
