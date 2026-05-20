import {MatBottomSheetModule} from '@stagefright5/material/bottom-sheet';
import {runHarnessTests} from '@stagefright5/material/bottom-sheet/testing/shared.spec';
import {MatBottomSheetHarness} from './bottom-sheet-harness';

describe('Non-MDC-based MatBottomSheetHarness', () => {
  runHarnessTests(MatBottomSheetModule, MatBottomSheetHarness);
});
