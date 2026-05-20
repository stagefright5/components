import {MatAutocompleteModule} from '@stagefright5/material/autocomplete';
import {runHarnessTests} from '@stagefright5/material/autocomplete/testing/shared.spec';
import {MatAutocompleteHarness} from './autocomplete-harness';

describe('Non-MDC-based MatAutocompleteHarness', () => {
  runHarnessTests(MatAutocompleteModule, MatAutocompleteHarness);
});
