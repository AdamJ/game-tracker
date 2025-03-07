import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Match {
  player1: string;
  player2: string;
  result: 'win' | 'loss' | 'draw';
  winner: string | "draw" | null;
}

@customElement('match-history')
export class MatchHistory extends LitElement {
  @property({ type: Array }) matchHistory: Match[] = [];

  editMatch(index: number) {
    this.dispatchEvent(new CustomEvent('edit-match', { detail: index }));
  }
  getPlayerBadgeVariant(player: string, match: Match): string {
    if (match.winner === "draw") {
      return 'neutral';
    } else if (match.winner === player) {
      return 'success';
    } else {
      return 'danger';
    }
  }
  getPlayerIconVariant(player: string, match: Match): string {
      if (match.winner === "draw") {
          return 'bookmarks';
      } else if (match.winner === player) {
          return 'trophy';
      } else {
          return 'emoji-frown';
      }
  }
  getPlayerResultString(player: string, match: Match): string {
    if (match.winner === "draw") {
      return 'draw';
    } else if (match.winner === player) {
      return 'win';
    } else {
      return 'loss';
    }
  }


  render() {

    return html`
      <sl-menu>

        ${this.matchHistory.map(
          (match, index) => html`
            <sl-menu-item>
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(
                  match.player1,
                  match
                )}"
                style="width: 3rem;"
              >
                <sl-icon name="${this.getPlayerIconVariant(match.player1, match)}"></sl-icon>
                <span style="padding-left: 2px;">${this.getPlayerResultString(match.player1, match)}</span>
              </sl-badge>
                ${match.player1} vs
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(
                  match.player2,
                  match
                )}"
                style="width: 3rem;"
              >
              <sl-icon name="${this.getPlayerIconVariant(match.player2, match)}"></sl-icon>
                <span style="padding-left: 2px;">${this.getPlayerResultString(match.player2, match)}</span>
              </sl-badge>
                 ${match.player2}
              <sl-button
                slot="suffix"
                variant="neutral"
                outline
                @click=${() => this.editMatch(index)}
                >Edit</sl-button
              >
            </sl-menu-item>
          `
        )}
      </sl-menu>
    `;
  }
}
