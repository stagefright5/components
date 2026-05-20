import {MatIconModule, MatIconRegistry} from '@stagefright5/material/icon';
import {runHarnessTests} from '@stagefright5/material/icon/testing/shared.spec';
import {MatIconHarness} from './icon-harness';

describe('Non-MDC-based MatIconHarness', () => {
  runHarnessTests(MatIconModule, MatIconRegistry, MatIconHarness);
});
