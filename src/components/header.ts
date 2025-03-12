import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';

import './about-modal.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @state() aboutModalOpen = false;
  @property({ type: String }) title = 'adamjolicoeur.me';

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: Boolean}) enableShare: boolean = false;
  @property({ type: Boolean}) enableAbout: boolean = false;

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
      background: var(--sl-color-neutral-100);

      position: fixed;
      left: env(titlebar-area-x, 0);
      bottom: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 75px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 10000;
    }
  `;

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'GameTracker',
        text: 'Tracking games of Magic: The Gathering and other TCG scores.',
        url: 'https://www.adamjolicoeur.me',
      });
    }
  }

  render() {
    return html`
      <nav>
        <!--<div id="back-button-block">-->
        <sl-button-group label="Navigation">
        ${this.enableBack ? html`
          <sl-button variant="default" size="small" pill aria-label="Back to start" label="Back to start" href="${resolveRouterPath()}">
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-button>
          ` : html
          ``
        }
        ${this.enableShare ? html`
          ${'share' in navigator
            ? html`
                <sl-button variant="default" size="small" pill @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share
                </sl-button>
            `: null
          }
        ` : html
        ``
        }
        ${this.enableAbout ? html`
            <sl-button variant="default" size="small" pill @click="${this.openAboutModal}">
              About
            </sl-button>
          ` : html
          ``
        }
        </sl-button-group>
        <!--</div>-->
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
