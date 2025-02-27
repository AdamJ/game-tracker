import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/standings-tracker'; // Import the component
// import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

// registerIconLibrary('ms', {
//   resolver: name => `https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${name}.svg`,
// });

@customElement('app-standings')
export class AppDashboard extends LitElement {
// ... in your template:
  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <br/>
      <h1>Game Tracker</h1>
      <standings-tracker></standings-tracker>
      <style>
        sl-button::part(prefix) sl-icon {
          font-size: 1.125rem;
        }
      </style>
    `;
  }
}
