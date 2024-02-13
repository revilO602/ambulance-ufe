import { newSpecPage } from '@stencil/core/testing';
import { OlAmbulanceWlList } from '../ol-ambulance-wl-list';

describe('ol-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OlAmbulanceWlList],
      html: `<ol-ambulance-wl-list></ol-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ol-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ol-ambulance-wl-list>
    `);
  });
});
