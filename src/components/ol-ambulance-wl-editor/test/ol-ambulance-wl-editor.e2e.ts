import { newE2EPage } from '@stencil/core/testing';

describe('ol-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ol-ambulance-wl-editor></ol-ambulance-wl-editor>');

    const element = await page.find('ol-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
