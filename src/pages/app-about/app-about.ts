import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../components/about-app/about-app'; // Import the component

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = css`

  `;
  render() {
    return html`
      <app-about></app-about>
      <app-navigation></app-navigation>
    `;
  }
}
