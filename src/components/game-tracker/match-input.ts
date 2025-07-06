import { LitElement, html } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import '../icons/mana-icon.js';

import { shoelaceStyles } from '../../styles/shoelace-styles.js';
import { gameTrackerStyles } from './game-tracker-styles.js';

interface Player {
  name: string;
}

@customElement('match-input')
export class MatchInput extends LitElement {
  @property({ type: Array }) players: Player[] = [];
  @state() player1: string = ''; // Initialize to empty strings
  @state() player2: string = ''; // Initialize to empty strings
  @state() winner: string | null = 'draw'; // Initialize to "draw"

  static styles = [
    shoelaceStyles,
    gameTrackerStyles
  ]

  recordMatch() {
    if (this.player1 && this.player2 && this.player1 !== this.player2) {
      let result: 'win' | 'loss' | 'draw';
      if (this.winner === 'draw') {
        result = 'draw';
      } else if (this.winner === this.player1) {
        result = 'win';
      } else {
        result = 'loss';
      }

      this.dispatchEvent(
        new CustomEvent('match-recorded', {
          detail: {
            player1: this.player1,
            player2: this.player2,
            result: result,
            winner: this.winner, // include the winner in the details
          },
        })
      );
    }
  }

  handlePlayer1Change(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.player1 = select.value as string;
    if (this.winner === this.player2 || this.winner === this.player1) {
      this.winner = 'draw';
    }
  }

  handlePlayer2Change(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.player2 = select.value as string;
        if (this.winner === this.player1 || this.winner === this.player2) {
          this.winner = 'draw';
        }
  }

  handleWinnerChange(event: Event) {
    const radioGroup = event.target as HTMLInputElement;
    this.winner = radioGroup.value === 'draw' ? 'draw' : radioGroup.value as string | null;
  }

  render() {
    // Dynamically generate options for Player 1
    const player1Options = this.players.filter(
      (player) => player.name !== this.player2
    );

    // Dynamically generate options for Player 2
    const player2Options = this.players.filter(
      (player) => player.name !== this.player1
    );

      // Check if both players are selected
      const playersSelected = this.player1 !== '' && this.player2 !== '';
      const playerOneValue = this.player1 === '' ? 'Player 1' : this.player1;
      const playerTwoValue = this.player2 === '' ? 'Player 2' : this.player2;

    return html`
      <form style="
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
      ">
        <sl-select
          value=${this.player1}
          @sl-change=${this.handlePlayer1Change}
          clearable
          class="label-on-left"
          help-text="Select a player"
        >
          <!-- <sl-option value="">Select a player</sl-option> -->
          ${player1Options.map(
            (player) =>
              html`<sl-option value=${player.name}>${player.name}</sl-option>`
          )}
        </sl-select>
        <br />
        <sl-select
          value=${this.player2}
          @sl-change=${this.handlePlayer2Change}
          class="label-on-left"
          help-text="Select a player"
          clearable
        >
          ${player2Options.map(
            (player) =>
              html`<sl-option value=${player.name}>${player.name}</sl-option>`
          )}
        </sl-select>
        <br />
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.winner}"
          aria-label="Win selector group"
          style="display: flex; flex-direction: row;"
        >
          <sl-radio
            value=${this.player1}
            ?disabled="${!playersSelected}"
            aria-label="select for player one"
          >
            ${playerOneValue}
          </sl-radio>
          <sl-radio
            value="draw"
            ?disabled="${!playersSelected}"
            aria-label="select for a draw"
          >
            Draw
          </sl-radio>
          <sl-radio
            value=${this.player2}
            ?disabled="${!playersSelected}"
            aria-label="select for player two"
          >
            ${playerTwoValue}
          </sl-radio>
        </sl-radio-group>
        <br />
        <sl-button variant="primary" @click=${this.recordMatch} ?disabled=${!playersSelected}>
          Record Result</sl-button>
      </form>
      <style>
          .label-on-left {
            --label-width: 5rem;
            --gap-width: 1rem;
          }

          .label-on-left + .label-on-left {
            margin-top: var(--sl-spacing-medium);
          }

          // .label-on-left::part(form-control) {
          //   display: grid;
          //   grid: auto / var(--label-width) 1fr;
          //   gap: var(--sl-spacing-3x-small) var(--gap-width);
          //   align-items: center;
          // }

          .label-on-left::part(form-control-label) {
            text-align: right;
          }

          .label-on-left::part(form-control-help-text) {
            grid-column-start: 2;
          }
          sl-select::part(form-control-input) {
            max-width: 550px;
          }
      </style>
    `;
  }
}
