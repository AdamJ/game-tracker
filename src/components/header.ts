import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import './about-modal.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @state() aboutModalOpen = false;
  @property({ type: String }) title = 'adamjolicoeur.me';

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: Boolean}) enableShare: boolean = false;

  openAboutModal() {
    this.aboutModalOpen = true;
  }

  closeAboutModal() {
    this.aboutModalOpen = false;
  }

  static styles = css`
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      // background: linear-gradient(var(--sl-color-primary-200), var(--sl-color-primary-50));
      background: var(--sl-color-neutral-100);
      padding: .75rem;
      padding-top: .75rem;

      position: fixed;
      left: env(titlebar-area-x, 0);
      bottom: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 10000;
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
          <sl-button variant="default" size="small" pill aria-label="Back to start" label="Back to start" href="${resolveRouterPath()}" style="position: absolute; left: 1rem;">
            Back
            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
          </sl-button>
          ` : html
          ``
        }
        ${this.enableShare ? html`
          ${'share' in navigator
            ? html`
                <sl-button slot="footer" variant="neutral" size="small" pill @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share this site!
                </sl-button>
            `: null
          }
              <sl-button variant="neutral" size="small" pill @click="${this.openAboutModal}">About</sl-button>
        ` : html
        ``
        }
        </div>
        <about-modal
          .isOpen=${this.aboutModalOpen}
          message="Learn about this site, resources used to create it, and various disclaimers. If you like what you see, be sure to click the share button!"
          @confirm=${resolveRouterPath('about')}
          @close=${this.closeAboutModal}
        ></about-modal>
      </nav>
    `;
  }
}
