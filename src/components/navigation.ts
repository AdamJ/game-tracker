import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';

import { sharedStyles } from '../styles/shared-styles';

@customElement('app-navigation')
export class AppNavigation extends LitElement {
  static styles = [
    sharedStyles,
    css``
  ]
  render() {
    return html``
  }
}
