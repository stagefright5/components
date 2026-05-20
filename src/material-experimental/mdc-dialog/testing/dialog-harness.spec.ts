import {MatDialog, MatDialogModule} from '@stagefright5/material-experimental/mdc-dialog';
import {runHarnessTests} from '@stagefright5/material/dialog/testing/shared.spec';
import {MatDialogHarness} from './dialog-harness';

describe('MDC-based MatDialog', () => {
  runHarnessTests(MatDialogModule, MatDialogHarness as any, MatDialog as any);
});
