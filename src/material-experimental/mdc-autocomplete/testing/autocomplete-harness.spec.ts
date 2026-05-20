import {MatAutocompleteModule} from '@stagefright5/material-experimental/mdc-autocomplete';
import {runHarnessTests} from '@stagefright5/material/autocomplete/testing/shared.spec';
import {MatAutocompleteHarness} from './autocomplete-harness';

describe('MDC-based MatAutocompleteHarness', () => {
  runHarnessTests(MatAutocompleteModule, MatAutocompleteHarness as any);
});
