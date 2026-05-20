import {MatChipsModule} from '@stagefright5/material/chips';
import {runHarnessTests} from '@stagefright5/material/chips/testing/shared.spec';
import {MatIconModule} from '@stagefright5/material/icon';
import {MatIconHarness} from '@stagefright5/material/icon/testing';
import {MatChipListHarness} from './chip-list-harness';
import {MatChipHarness} from './chip-harness';
import {MatChipInputHarness} from './chip-input-harness';
import {MatChipRemoveHarness} from './chip-remove-harness';
import {MatChipListboxHarness} from './chip-listbox-harness';
import {MatChipOptionHarness} from './chip-option-harness';

describe('Non-MDC-based MatChipListHarness', () => {
  runHarnessTests(
    MatChipsModule,
    MatChipListHarness,
    MatChipListboxHarness,
    MatChipHarness,
    MatChipOptionHarness,
    MatChipInputHarness,
    MatChipRemoveHarness,
    MatIconModule,
    MatIconHarness,
  );
});
