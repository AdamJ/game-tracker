import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/game-tracker/standings-tracker'; // Import the component
import '../components/navigation.js';
import { sharedStyles } from '../styles/shared-styles';

@customElement('app-standings')
export class AppDashboard extends LitElement {
  static styles = [
    sharedStyles,
    css`
      main {
        margin: 0 .5rem;
      }
      sl-button::part(prefix) sl-icon {
        font-size: 1.125rem;
      }
    `
  ]
  render() {
    return html`
      <main>
        <standings-tracker></standings-tracker>
      </main>
      <app-navigation></app-navigation>
    `;
  }
}
