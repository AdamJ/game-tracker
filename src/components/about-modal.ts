import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('about-modal')
export class AboutModal extends LitElement {
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

  // confirm() {
  //   this.dispatchEvent(new CustomEvent('close'));
  //   this.close();
  // }

  render() {
    if (!this.isOpen) {
      return html``;
    }

    return html`
      <sl-dialog
        label="About"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="text" outline href="${resolveRouterPath('about')}">
          Read More
        </sl-button>
        <sl-button slot="footer" variant="primary" @click=${this.close}>
          Thanks
        </sl-button>
      </sl-dialog>
    `;
  }
}
