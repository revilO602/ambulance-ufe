import { newE2EPage } from '@stencil/core/testing';

describe('ol-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ol-ambulance-wl-list></ol-ambulance-wl-list>');

    const element = await page.find('ol-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
