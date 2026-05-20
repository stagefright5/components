import {HarnessLoader} from '@stagefright5/cdk/testing';
import {browser} from 'protractor';
import {ProtractorHarnessEnvironment} from '@stagefright5/cdk/testing/protractor';
import {MatToolbarHarness} from '@stagefright5/material/toolbar/testing';

describe('toolbar harness', () => {
  let loader: HarnessLoader;

  beforeEach(async () => await browser.get('/toolbar'));

  beforeEach(() => {
    loader = ProtractorHarnessEnvironment.loader();
  });

  it('should get toolbar text', async () => {
    const toolbar = await loader.getHarness(MatToolbarHarness);

    expect(await toolbar.getRowsAsText()).toEqual([
      'Custom Toolbar',
      'Second Lineverified_user',
      'Third Linefavoritedelete',
    ]);
  });

  it('should have multiple rows', async () => {
    const toolbar = await loader.getHarness(MatToolbarHarness);

    expect(await toolbar.hasMultipleRows()).toBe(true);
  });
});
