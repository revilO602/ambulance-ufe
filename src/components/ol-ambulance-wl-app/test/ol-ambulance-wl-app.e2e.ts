import { newE2EPage } from '@stencil/core/testing';

describe('ol-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ol-ambulance-wl-app></ol-ambulance-wl-app>');

    const element = await page.find('ol-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
