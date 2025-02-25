import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';

interface Match {
  player1: string;
  player2: string;
  result: 'win' | 'loss' | 'draw';
}

@customElement('edit-modal')
export class EditModal extends LitElement {
  @property({ type: Object }) match: Match | null = null;
  @property({ type: Boolean }) isOpen: boolean = false;
  @state() editedResult: 'win' | 'loss' | 'draw' = 'win';

  open(match: Match) {
    this.match = match;
    this.editedResult = match.result;
    this.isOpen = true;
  }

  close() {
    this.dispatchEvent(new CustomEvent('close'));
    this.isOpen = false;
  }

  confirm() {
    if (this.match) {
      this.dispatchEvent(new CustomEvent('match-edited', { detail: { ...this.match, result: this.editedResult } }));
      this.close();
    }
  }

  handleSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.editedResult = select.value as 'win' | 'loss' | 'draw';
  }

  render() {
    if (!this.isOpen || !this.match) {
      return html``;
    }

    return html`
      <sl-dialog
        label="Edit Results"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p style="text-align: center;">
          <strong>Matchup:</strong>
          <br />
          <span style="font-size: 2rem;">${this.match.player1} vs ${this.match.player2}</span>

        </p>
        <div style="text-align: center;">
          <sl-radio-group size="medium" help-text="Select the updated result" name="result" variant="default" value=${this.editedResult}
            @sl-change=${this.handleSelectChange}>
            <sl-radio-button variant="primary" value="win" class="larger-icon">
              <sl-icon slot="prefix" name="trophy-fill"></sl-icon>
              Win
            </sl-radio-button>
            <sl-radio-button variant="error" value="loss" class="larger-icon">
              <sl-icon slot="prefix" name="person-x-fill"></sl-icon>
              Loss
            </sl-radio-button>
            <sl-radio-button value="draw" class="larger-icon">
              <sl-icon slot="prefix" name="person-lines-fill"></sl-icon>
              Draw
            </sl-radio-button>
          </sl-radio-group>
        </div>
        <sl-button slot="footer" variant="neutral" outline @click=${this.close}>
          Cancel
        </sl-button>
        <sl-button slot="footer" variant="success" @click=${this.confirm}>
          Update
        </sl-button>
      </sl-dialog>
      <style>
        sl-dialog::part(header-actions) {
          display: none;
        }
        .larger-icon::part(prefix) {
          font-size: 1.125rem;
        }
      </style>
    `;
  }
}
