import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

@customElement('fab-drawer')
  export class FabDrawer extends LitElement {
    @property({ type: String }) icon = 'arrow-left'

    @property({ type: Boolean }) isOpen: boolean = false;
    @property({ type: String }) message: string = '';
    @property({ type: String }) pointsTracker: string = '';

    openFab(pointsTracker: string) {
      this.pointsTracker = pointsTracker;
      this.isOpen = true;
    }
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
        style="--size: 50vh;"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <sl-icon-button slot="header-actions" name="info-circle" href="${resolveRouterPath('about')}"></sl-icon-button>
                <sl-input
          type="number"
          label="Starting Points"
          size="medium"
          pill
          placeholder="Enter a number greater than 0"
          type="number"
          value=${this.pointsTracker}
          @sl-change=${this.pointsTracker}
          min="0"
          style="text-align: center;"
        >
        </sl-input>
        ${this.message}
        <sl-button slot="footer" variant="primary" data-drawer="close" @click=${this.close}>Close</sl-button>
      </sl-drawer>
    `;
  }
}
