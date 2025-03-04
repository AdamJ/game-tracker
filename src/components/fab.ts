import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

// import '@shoelace-style/shoelace/dist/components/button/button.js';
// import '@shoelace-style/shoelace/dist/components/icon/icon.js';
// import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
// import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';

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
      <sl-drawer
        placement="top"
        label="Drawer"
        with-header
        with-footer
        class="drawer-contained"
        style="--size: 50%;"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <sl-icon-button slot="header-actions" name="info-circle" href="${resolveRouterPath('about')}"></sl-icon-button>
        ${this.message}
        <sl-button slot="footer" variant="primary" data-drawer="close" @click=${this.close}>Close</sl-button>
      </sl-drawer>
    `;
  }
}
