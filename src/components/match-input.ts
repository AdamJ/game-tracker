import { LitElement, html } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import './mana-icon.js';

interface Player {
  name: string;
}

@customElement('match-input')
export class MatchInput extends LitElement {
  @property({ type: Array }) players: Player[] = [];
  @state() player1: string = '';
  @state() player2: string = '';
  @state() matchResult: 'win' | 'loss' | 'draw' = 'win';

  recordMatch() {
    if (this.player1 && this.player2 && this.player1 !== this.player2) {
      this.dispatchEvent(new CustomEvent('match-recorded', { detail: { player1: this.player1, player2: this.player2, result: this.matchResult } }));
    }
  }

  handlePlayer1Change(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.player1 = select.value as string;
  }

  handlePlayer2Change(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.player2 = select.value as string;
  }

  handleMatchResultChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.matchResult = select.value as 'win' | 'loss' | 'draw';
  }

  render() {

    // Dynamically generate options for Player 1
    const player1Options = this.players.filter(player => player.name !== this.player2);

    // Dynamically generate options for Player 2
    const player2Options = this.players.filter(player => player.name !== this.player1);

    return html`
      <form>
        <sl-select
          value=${this.player1}
          @sl-change=${this.handlePlayer1Change}
          label="Player 1"
          clearable
        >
          <sl-option value="">Select a player</sl-option>
          ${player1Options.map(player => html`<sl-option value=${player.name}>${player.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-select
          value=${this.player2}
          @sl-change=${this.handlePlayer2Change}
          label="Player 2"
          clearable
        >
          <sl-option value="">Select a player</sl-option>
          ${player2Options.map(player => html`<sl-option value=${player.name}>${player.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-radio-group size="medium" label="Result" help-text="Player 1 - win, loss, or draw?" name="result" value=${this.matchResult}
          @sl-change=${this.handleMatchResultChange}>
          <sl-radio-button variant="primary" value="win">
              <sl-icon library="ms" name="u"></sl-icon>
              Win
            </sl-radio-button>
            <sl-radio-button variant="error" value="loss">
              <sl-icon library="ms" name="u"></sl-icon>
              Loss
            </sl-radio-button>
            <sl-radio-button value="draw">
              <div style="font-size: 1.125rem; color: #fff;">
              <sl-icon library="ms" name="u"></sl-icon>
              </div>
              Draw
            </sl-radio-button>
        </sl-radio-group>
        <br />
        <sl-button variant="primary" @click=${this.recordMatch}>
          Record Result</sl-button>
      </form>
    `;
  }
}
