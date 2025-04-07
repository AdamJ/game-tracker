import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

// import { shoelaceStyles } from '../styles/shoelace-styles';

@customElement('toggle-gameplay-info')
export class ToggleGameplayInfo extends LitElement {
  @property({ type: Boolean }) isOpen: boolean = false;
  @property({ type: String }) message: string = '';

  static styles = [
    // shoelaceStyles
  ]

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
        label="Gameplay Information"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="primary" @click=${this.close}>
          Close
        </sl-button>
      </sl-dialog>
    `;
  }
}
