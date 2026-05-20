import {MatRadioModule} from '@stagefright5/material/radio';
import {runHarnessTests} from '@stagefright5/material/radio/testing/shared.spec';
import {MatRadioButtonHarness, MatRadioGroupHarness} from './radio-harness';

describe('Non-MDC-based', () => {
  runHarnessTests(MatRadioModule, MatRadioGroupHarness, MatRadioButtonHarness);
});
