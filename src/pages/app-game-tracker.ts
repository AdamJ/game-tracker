import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/game-tracker/standings-tracker'; // Import the component

@customElement('app-standings')
export class AppDashboard extends LitElement {
// ... in your template:
  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <main style="padding-bottom: 5rem; margin: 0 .5rem">
        <standings-tracker></standings-tracker>
      </main>
      <style>
        sl-button::part(prefix) sl-icon {
          font-size: 1.125rem;
        }
      </style>
    `;
  }
}
