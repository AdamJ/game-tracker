import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { sharedStyles } from '../../styles/shared-styles';
import { shoelaceStyles } from '../../styles/shoelace-styles';
import { tableStyles } from '../../styles/table-styles';

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

  static styles = [
    sharedStyles,
    shoelaceStyles,
    tableStyles,
    css`
  `];

  render() {
    return html`
      <table class="border table-striped" style="margin-bottom: 2.5rem;">
        <thead>
          <tr>
            <th style="text-align: left;">Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
            <th class="hide-at-950">Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          ${this.standings.map(standing => html`
            <tr>
              <td>${standing.name}</td>
              <td style="text-align: center;">${standing.wins}</td>
              <td style="text-align: center;">${standing.losses}</td>
              <td style="text-align: center;">${standing.draws}</td>
              <td style="text-align: center;">${standing.points}</td>
              <td class="hide-at-950" style="text-align: center;">${standing.winPercentage || 0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
