import {MatExpansionModule} from '@stagefright5/material/expansion';

import {MatAccordionHarness} from './accordion-harness';
import {MatExpansionPanelHarness} from './expansion-harness';
import {runHarnessTests} from './shared.spec';

describe('Non-MDC-based expansion harnesses', () => {
  runHarnessTests(MatExpansionModule, MatAccordionHarness, MatExpansionPanelHarness);
});
