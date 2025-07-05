import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared-styles.js';
import { shoelaceStyles } from '../styles/shoelace-styles.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '../components/navigation.js';

@customElement('app-roll-dice')
export class AppRollDice extends LitElement {
  @state() private result: number | null = null;
  @state() private history: number[] = [];
  @query('.result-display') private resultDisplay!: HTMLDivElement;

  static styles = [
    sharedStyles,
    shoelaceStyles,
    css`
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding-bottom: 5rem; /* For navigation */
      }
      .result-display {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        font-weight: bold;
        color: var(--sl-color-primary-600);
        min-height: 6rem;
        min-width: 6rem;
        text-align: center;
        border-radius: var(--sl-border-radius-x-large);
        border: 1px solid var(--sl-color-neutral-300);
      }

      .result-display.animate {
        animation: flipInX 0.8s;
      }

      @keyframes flipInX {
        from {
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }

        40% {
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          animation-timing-function: ease-in;
        }

        60% {
          transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
          opacity: 1;
        }

        80% {
          transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }

        to {
          transform: perspective(400px);
        }
      }
      .history-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        margin-top: 1rem;
        max-width: 100%;
      }
      .roll-button {
        margin-top: 1rem;
      }
      sl-card {
        width: 100%;
        max-width: 600px;
      }
      sl-card::part(header) {
        padding: var(--sl-spacing-small) var(--sl-spacing-medium);
      }
      sl-card::part(body) {
        padding-top: var(--sl-spacing-medium);
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    const storedHistory = localStorage.getItem('diceRollHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    }
  }

  private rollDice() {
    this.result = Math.floor(Math.random() * 20) + 1;
    // Keep history to a reasonable size, e.g., last 50 rolls
    this.history = [this.result, ...this.history].slice(0, 50);
    localStorage.setItem('diceRollHistory', JSON.stringify(this.history));

    // Animate the result display
    if (this.resultDisplay) {
      this.resultDisplay.classList.add('animate');
      this.resultDisplay.addEventListener('animationend', () => {
        this.resultDisplay.classList.remove('animate');
      }, { once: true });
    }
  }

  private clearHistory() {
    this.result = null;
    this.history = [];
    localStorage.removeItem('diceRollHistory');
  }

  render() {
    return html`
      <main>
        <h1>Roll a D20</h1>
        <div class="result-display">${this.result !== null ? this.result : '?'}</div>
        <sl-button variant="primary" size="large" @click=${this.rollDice} class="roll-button">
          <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="prefix" style="fill: #fff;"></sl-icon>
          Roll Dice
        </sl-button>

        <sl-card>
          <div slot="header" class="display-flex" style="align-items: center; justify-content: space-between;">
            <h3 style="margin: 0;">History</h3>
            <sl-button variant="danger" outline size="small" @click=${this.clearHistory} ?disabled=${this.history.length === 0}>
              Clear History
            </sl-button>
          </div>
          ${this.history.length > 0
            ? html`
              <div class="history-container">
                ${this.history.map((roll, index) => html`<sl-badge pill variant=${index === 0 ? 'success' : 'neutral'}>${roll}</sl-badge>`)}
              </div>
            `
            : html`
              <p class="text-center">No rolls yet. Roll the dice to see history.</p>
            `
          }
        </sl-card>
      </main>
      <app-navigation></app-navigation>
      <style>
        sl-badge::part(base) {
          height: 2rem;
          width: 2rem;
        }
      </style>
    `;
  }
}
