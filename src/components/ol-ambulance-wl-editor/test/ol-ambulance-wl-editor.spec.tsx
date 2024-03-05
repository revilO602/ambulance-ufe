import { newSpecPage } from '@stencil/core/testing';
import { OlAmbulanceWlEditor } from '../ol-ambulance-wl-editor';

describe('ol-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OlAmbulanceWlEditor],
      html: `<ol-ambulance-wl-editor></ol-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <ol-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ol-ambulance-wl-editor>
    `);
  });
});
