import {MatStepperModule} from '@stagefright5/material/stepper';
import {runHarnessTests} from '@stagefright5/material/stepper/testing/shared.spec';
import {MatStepperHarness} from './stepper-harness';
import {MatStepperNextHarness, MatStepperPreviousHarness} from './stepper-button-harnesses';

describe('Non-MDC-based MatStepperHarness', () => {
  runHarnessTests(
    MatStepperModule,
    MatStepperHarness,
    MatStepperNextHarness,
    MatStepperPreviousHarness,
  );
});
