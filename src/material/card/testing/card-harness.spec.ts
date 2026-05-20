import {MatCardModule} from '@stagefright5/material/card';
import {runHarnessTests} from '@stagefright5/material/card/testing/shared.spec';
import {MatCardHarness, MatCardSection} from './card-harness';

describe('Non-MDC-based MatCardHarness', () => {
  runHarnessTests(MatCardModule, MatCardHarness, {
    header: MatCardSection.HEADER,
    content: MatCardSection.CONTENT,
    actions: MatCardSection.ACTIONS,
    footer: MatCardSection.FOOTER,
  });
});
