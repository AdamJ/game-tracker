import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-standings')
export class AppStandings extends LitElement {
  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <main>
        <h2>Standings</h2>
      </main>
    `;
  }
}
