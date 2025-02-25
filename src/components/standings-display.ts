import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Standing {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  winPercentage?: number;
}

@customElement('standings-display')
export class StandingsDisplay extends LitElement {
  @property({ type: Array }) standings: Standing[] = [];

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          ${this.standings.map(standing => html`
            <tr>
              <td>${standing.name}</td>
              <td>${standing.wins}</td>
              <td>${standing.losses}</td>
              <td>${standing.draws}</td>
              <td>${standing.points}</td>
              <td>${standing.winPercentage || 0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid var(--sl-color-neutral-700);
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: var(--sl-color-neutral-200);
    }
    // tbody tr:first-of-type {
    //   background-color: var(--sl-color-primary-800);
    //   color: var(--sl-color-neutral-50);
    // }
    tbody tr:nth-of-type(even) {
      background-color: var(--sl-color-neutral-100);
    }
  `;
}
