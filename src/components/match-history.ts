import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';

interface Match {
  player1: string;
  player2: string;
  result: 'win' | 'loss' | 'draw';
}

@customElement('match-history')
export class MatchHistory extends LitElement {
  @property({ type: Array }) matchHistory: Match[] = [];

  editMatch(index: number) {
    this.dispatchEvent(new CustomEvent('edit-match', { detail: index }));
  }

  getBadgeVariant(result: string): string {
    switch (result) {
      case 'win':
        return 'success';
      case 'loss':
        return 'danger';
      case 'draw':
        return 'neutral';
      default:
        return 'default';
    }
  }

  render() {
    return html`
      <sl-menu>
      ${this.matchHistory.map((match, index) => html`
        <sl-menu-item>
          <sl-badge pill variant="${this.getBadgeVariant(match.result)}" style="width: 3rem;">
            ${match.result}
          </sl-badge> ${match.player1} vs ${match.player2}
          <sl-button slot="suffix" variant="default" @click=${() => this.editMatch(index)}>Edit</sl-button>
        </sl-menu-item>
      `)}
      </sl-menu>
    `;
  }
}
