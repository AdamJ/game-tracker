import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../components/icons/mana-icon';
import '../../components/icons/mtg-symbols';
import '../../components/match-tracker/match-tracker'; // Import the component
import '../../components/fab';
// import '@shoelace-style/shoelace/dist/components/button/button.js';
// import '@shoelace-style/shoelace/dist/components/icon/icon.js';

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
      <sl-tab slot="nav" panel="total">Total</sl-tab>
      <sl-tab slot="nav" panel="standings">Standings</sl-tab>
      <sl-tab slot="nav" panel="results">Results</sl-tab>
      <sl-tab slot="nav" panel="action-log">Log</sl-tab>
      <sl-tab slot="nav" panel="setup">Setup</sl-tab>
    `
  }
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
      <app-header ?enableBack="${true}"></app-header>
      <match-tracker></match-tracker>
    `;
  }
}

// <sl-button variant="primary" size="large" class="fab" circle @click=${this.openFabDrawer}>
// <sl-icon name="gear" label="settings"></sl-icon>
// </sl-button>
// <fab-drawer
// .isOpen=${this.fabDrawerOpen}
// message=${this.fabTab}
// @close=${this.closeFabDrawer}
// ></fab-drawer>
