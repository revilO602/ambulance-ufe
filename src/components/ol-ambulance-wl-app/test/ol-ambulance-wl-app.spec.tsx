import { newSpecPage } from '@stencil/core/testing';
import { OlAmbulanceWlApp } from '../ol-ambulance-wl-app';

describe('ol-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [OlAmbulanceWlApp],
      html: `<ol-ambulance-wl-app base-path="/"></ol-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ol-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [OlAmbulanceWlApp],
      html: `<ol-ambulance-wl-app base-path="/ambulance-wl/"></ol-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ol-ambulance-wl-list");
  });
});
