import {MatInputModule} from '@stagefright5/material-experimental/mdc-input';
import {runNativeSelectHarnessTests} from '@stagefright5/material/input/testing/shared-native-select.spec';
import {MatNativeSelectHarness} from './index';

describe('MDC-based MatNativeSelectHarness', () => {
  runNativeSelectHarnessTests(MatInputModule, MatNativeSelectHarness);
});
