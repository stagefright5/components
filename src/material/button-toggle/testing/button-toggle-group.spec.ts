import {MatButtonToggleModule} from '@stagefright5/material/button-toggle';
import {runHarnessTests} from './button-toggle-group-shared.spec';
import {MatButtonToggleGroupHarness} from './button-toggle-group-harness';

describe('Non-MDC-based MatButtonToggleGroupHarness', () => {
  runHarnessTests(MatButtonToggleModule, MatButtonToggleGroupHarness);
});
