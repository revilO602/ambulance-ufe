import { newSpecPage } from '@stencil/core/testing';
import { OlAmbulanceWlList } from '../ol-ambulance-wl-list';

describe('ol-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OlAmbulanceWlList],
      html: `<ol-ambulance-wl-list></ol-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as OlAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
