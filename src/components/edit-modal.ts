import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { customElement, property } from 'lit/decorators.js';

interface Match {
  player1: string;
  player2: string;
  result: 'win' | 'loss' | 'draw';
  winner: string | "draw" | null;
}

@customElement('edit-modal')
export class EditModal extends LitElement {
  @property({ type: Object }) match: Match | null = null;
  @property({ type: Boolean }) isOpen: boolean = false;
  @state() editedWinner: string | "draw" | null = 'draw'; // Track the winner directly

  open(match: Match) {
    this.match = match;
    this.editedWinner = match.winner; // Initialize with the current winner
    this.isOpen = true;
  }

  close() {
    this.dispatchEvent(new CustomEvent('close'));
    this.isOpen = false;
  }

  confirm() {
    if (this.match) {
      let result: 'win' | 'loss' | 'draw';
        if (this.editedWinner === "draw") {
          result = 'draw';
        } else if (this.editedWinner === this.match.player1) {
          result = 'win';
        } else {
          result = 'loss';
        }
      this.dispatchEvent(new CustomEvent('match-edited', {
        detail: {
          ...this.match,
          result: result,
          winner: this.editedWinner,
        } }));
      this.close();
    }
  }

  handleWinnerChange(event: Event) {
    const radioGroup = event.target as HTMLInputElement;
    this.editedWinner = radioGroup.value === 'draw' ? 'draw' : radioGroup.value as string | null;
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
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.editedWinner}"
        >
          <sl-radio-button
            value=${this.match.player1}
          >
            ${this.match.player1}
          </sl-radio-button>
          <sl-radio-button
            value="draw"
          >
            Draw
          </sl-radio-button>
          <sl-radio-button
            value=${this.match.player2}
          >
            ${this.match.player2}
          </sl-radio-button>
        </sl-radio-group>
        </div>
        <sl-button slot="footer" variant="default" outline @click=${this.close}>
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
