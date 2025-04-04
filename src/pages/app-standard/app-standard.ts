import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../components/icons/mana-icon';
import '../../components/icons/mtg-symbols';
import '../../components/standard-tracker/standard-tracker'; // Import the component

@customElement('app-standard')
export class PvpCounter extends LitElement {
  static styles = css`
    sl-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;
  render() {
    return html`
      <standard-tracker></standard-tracker>
      <app-navigation></app-navigation>
    `;
  }
}
