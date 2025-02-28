import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';

@customElement('app-404')
export class App404 extends LitElement {
    render(){
        return html`
        <sl-alert variant="danger" open>
          <sl-icon slot="icon" name="exclamation-triangle-fill"></sl-icon>
          <strong>Error 404:</strong> Page not found.
        </sl-alert>
        `;
    }
}
