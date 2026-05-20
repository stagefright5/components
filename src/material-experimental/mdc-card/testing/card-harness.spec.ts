import {MatCardModule} from '@stagefright5/material-experimental/mdc-card';
import {runHarnessTests} from '@stagefright5/material/card/testing/shared.spec';
import {MatCardHarness, MatCardSection} from './card-harness';

describe('MDC-based MatCardHarness', () => {
  runHarnessTests(MatCardModule, MatCardHarness as any, {
    header: MatCardSection.HEADER,
    content: MatCardSection.CONTENT,
    actions: MatCardSection.ACTIONS,
    footer: MatCardSection.FOOTER,
  });
});
