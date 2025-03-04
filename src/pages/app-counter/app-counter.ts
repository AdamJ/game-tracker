import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../components/icons/mana-icon';
import '../../components/icons/mtg-symbols';
import '../../components/match-tracker/match-tracker'; // Import the component
import '../../components/fab';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/button/button.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/icon/icon.js';

@customElement('app-counter')
export class AppCounter extends LitElement {
  @state() fabDrawerOpen = false;
  openFabDrawer() {
    this.fabDrawerOpen = true;
  }
  closeFabDrawer() {
    this.fabDrawerOpen = false;
  }
  fabTab() {
    return html`
      <wa-tab slot="nav" panel="total">Total</wa-tab>
      <wa-tab slot="nav" panel="standings">Standings</wa-tab>
      <wa-tab slot="nav" panel="results">Results</wa-tab>
      <wa-tab slot="nav" panel="action-log">Log</wa-tab>
      <wa-tab slot="nav" panel="setup">Setup</wa-tab>
    `
  }
  static styles = css`
    wa-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;
  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <match-tracker></match-tracker>
      <wa-button variant="primary" size="large" class="fab" circle @click=${this.openFabDrawer}>
        <wa-icon name="gear" label="settings"></wa-icon>
      </wa-button>
      <fab-drawer
        .isOpen=${this.fabDrawerOpen}
        message=${this.fabTab}
        @close=${this.closeFabDrawer}
      ></fab-drawer>
    `;
  }
}
