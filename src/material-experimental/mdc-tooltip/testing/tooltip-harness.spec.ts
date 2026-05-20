import {MatTooltipModule} from '@stagefright5/material-experimental/mdc-tooltip';
import {runHarnessTests} from '@stagefright5/material/tooltip/testing/shared.spec';
import {MatTooltipHarness} from './index';

describe('MDC-based MatTooltipHarness', () => {
  runHarnessTests(MatTooltipModule, MatTooltipHarness as any);
});
