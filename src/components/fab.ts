import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/button/button.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/icon/icon.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/icon-button/icon-button.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/drawer/drawer.js';

@customElement('fab-drawer')
  export class FabDrawer extends LitElement {
    @property({ type: String }) icon = 'arrow-left'

    @property({ type: Boolean }) isOpen: boolean = false;
    @property({ type: String }) message: string = '';

    open(message: string) {
      this.message = message;
      this.isOpen = true;
    }
    close() {
      this.dispatchEvent(new CustomEvent('close'));
      this.isOpen = false;
    }
  render() {
    if (!this.isOpen) {
      return html``;
    }
    return html `
      <wa-drawer
        placement="top"
        label="Drawer"
        with-header
        with-footer
        class="drawer-contained"
        style="--size: 50%;"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <wa-icon-button slot="header-actions" name="info-circle" href="${resolveRouterPath('about')}"></wa-icon-button>
        ${this.message}
        <wa-button slot="footer" variant="brand" data-drawer="close" @click=${this.close}>Close</wa-button>
      </wa-drawer>
    `;
  }
}
