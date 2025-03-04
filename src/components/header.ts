import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

// import '@shoelace-style/shoelace/dist/components/button/button.js';
// import '@shoelace-style/shoelace/dist/components/icon/icon.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'adamjolicoeur.me';

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: Boolean}) enableHeader: boolean = false;

  static styles = css`
    nav {
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

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: .5rem;
    }
  `;

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'adamjolicoeur.me',
        text: 'Check out the random web apps I build!',
        url: 'https://github.com/adamj',
      });
    }
  }

  render() {
    return html`
      <nav>
        <div id="back-button-block">
        ${this.enableBack ? html`
          <sl-button variant="neutral" size="medium" circle aria-label="Back to start" label="Back to start" href="${resolveRouterPath()}">
            <sl-icon name="arrow-left"></sl-icon>
          </sl-button>
          ` : html
          ``
        }
        ${this.enableHeader ? html`
          ${'share' in navigator
            ? html`
              <div style=" width: 25%; position: absolute; right: 1rem; top: 1rem;">
                <sl-button slot="footer" variant="primary" size="small" outline @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share this site!
                </sl-button>
              </div>
            `: null
          }
        ` : html
        ``
        }
        </div>
      </nav>
    `;
  }
}
