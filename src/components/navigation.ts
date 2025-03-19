import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import { sharedStyles } from '../styles/shared-styles';
import { shoelaceStyles } from '../styles/shoelace-styles';

@customElement('app-navigation')
export class AppNavigation extends LitElement {
  static styles = [
    sharedStyles,
    shoelaceStyles,
    css`
    `
  ]
  render() {
    return html`
      <div class="toolbar" style="display: flex; flex-direction: row; grid-gap: 1rem; position: absolute; bottom: -2rem; left: 0; right: 0; padding: .75rem; margin: 0 auto; width: fit-content;">
        <sl-button-group label="Navigation">
          <sl-button variant="primary" size="medium" pill class="custom-button" href="/">
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-button>
          <sl-button variant="primary" size="medium" pill class="custom-button" href="/game-tracker">Tournament</sl-button>
          <sl-button variant="default" outline size="medium" pill class="custom-button" href="/counter">EDH</sl-button>
          <sl-button variant="primary" size="medium" pill class="custom-button" href="/standard-tracker">1v1</sl-button>
        </sl-button-group>
      </div>
    `
  }
}
