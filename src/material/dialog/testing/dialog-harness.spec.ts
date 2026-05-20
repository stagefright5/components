import {MatDialog, MatDialogModule} from '@stagefright5/material/dialog';
import {runHarnessTests} from '@stagefright5/material/dialog/testing/shared.spec';
import {MatDialogHarness} from './dialog-harness';

describe('Non-MDC-based MatDialogHarness', () => {
  runHarnessTests(MatDialogModule, MatDialogHarness, MatDialog);
});
