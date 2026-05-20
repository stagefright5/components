import {MatTooltipModule} from '@stagefright5/material/tooltip';
import {runHarnessTests} from '@stagefright5/material/tooltip/testing/shared.spec';
import {MatTooltipHarness} from './tooltip-harness';

describe('Non-MDC-based MatTooltipHarness', () => {
  runHarnessTests(MatTooltipModule, MatTooltipHarness);
});
