import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/game-tracker/standings-tracker'; // Import the component
import { sharedStyles } from '../styles/shared-styles';

@customElement('app-standings')
export class AppDashboard extends LitElement {
  static styles = [
    sharedStyles,
    css`
    `
  ]
  render() {
    return html`
      <main style="margin: 0 .5rem">
        <standings-tracker></standings-tracker>
      </main>
      <app-navigation></app-navigation>
      <style>
        sl-button::part(prefix) sl-icon {
          font-size: 1.125rem;
        }
      </style>
    `;
  }
}
