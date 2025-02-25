import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('confirmation-modal')
export class ConfirmationModal extends LitElement {
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

  confirm() {
    this.dispatchEvent(new CustomEvent('confirm'));
    this.close();
  }

  render() {
    if (!this.isOpen) {
      return html``;
    }

    return html`
      <sl-dialog
        label="Clear All Data"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="danger" @click=${this.confirm}>
          Confirm
        </sl-button>
        <sl-button slot="footer" variant="default" @click=${this.close}>
          Cancel
        </sl-button>
      </sl-dialog>
    `;
  }
}
