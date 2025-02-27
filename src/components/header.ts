import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'adamjolicoeur.me';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: transparent;
      padding: .75rem;
      padding-top: .75rem;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    nav a {
      margin-left: .75rem;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: .5rem;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: var(--sl-color-neutral-950);
      }

      nav a {
        color: initial;
      }
    }
  `;

  render() {
    return html`
      <header>
      <div id="back-button-block">
        ${this.enableBack ? html`
          <sl-button variant="neutral" size="medium" href="${resolveRouterPath()}">
            <sl-icon name="arrow-left"></sl-icon>
          </sl-button>
          ` : html
          `${this.title}`
        }
        </div>
      </header>
    `;
  }
}
