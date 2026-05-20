import {MatInputModule} from '@stagefright5/material-experimental/mdc-input';
import {runInputHarnessTests} from '@stagefright5/material/input/testing/shared-input.spec';
import {MatInputHarness} from './index';

describe('MDC-based MatInputHarness', () => {
  runInputHarnessTests(MatInputModule, MatInputHarness);
});
