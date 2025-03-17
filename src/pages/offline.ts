import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('offline-page')
export class OfflinePage extends LitElement {
  render() {
      return html`
        <h1>You are offline</h1>
        <p>Reconnect to a network and refresh the page</p>
      `
  };
};
