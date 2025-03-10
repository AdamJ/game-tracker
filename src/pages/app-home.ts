import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static styles = [
    styles,
    css`
      .main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        grid-gap: 1rem;
      }
      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }
      sl-card {
        max-width: 300px;
      }
      sl-card::part(base) {
        background-color: var(--special-color-white);
        min-height: 350px;
        justify-content: space-between;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
        border-radius: 1rem 1rem 1rem 0;
      }
      sl-card [slot='header'] {
        font-weight: var(--sl-font-weight-bold);
      }
      .font-toggle {
        position: fixed;
        bottom: 4rem;
        left: 1rem;
        z-index: 10000;
        padding: 0.5rem .5rem .75rem;
        background-color: var(--sl-color-neutral-50);
        color: var(--sl-color-neutral-900);
        border: 1px solid var(--sl-color-primary-700);
        border-radius: var(--sl-input-height-medium);
      }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
    this.applyInitialFont();
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'adamjolicoeur.me',
        text: 'Check out the random web apps I build!',
        url: 'https://github.com/adamj',
      });
    }
  }

  customFont = '"Oswald", sans-serif';

  updateSelectFonts() {
    const selects = this.shadowRoot?.querySelectorAll('sl-select');
    if (selects) {
      selects.forEach((select: any) => {
        select.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--sl-font-sans');
        //you may need to get the shadowroot of the select, and change the internal elements, but css parts are prefered.
      });
    }
  }

  toggleFont(event: CustomEvent) {
    const root = document.documentElement;
    const useDefault = (event.target as any).checked;

    if (useDefault) {
      root.style.setProperty(
        '--font-family',
        '"Grenze Gotisch", sans-serif'
      );
      root.style.setProperty(
        '--sl-font-sans',
        '"Grenze Gotisch", sans-serif'
      );
      root.style.setProperty('--sl-font-mono', 'Menlo, monospace');
    } else {
      root.style.setProperty('--font-family', this.customFont);
      root.style.setProperty('--sl-font-sans', this.customFont);
      root.style.setProperty('--sl-font-mono', 'Menlo, monospace'); //replace with your monospace font.
    }

    localStorage.setItem('useDefaultFont', useDefault.toString());
    this.updateSelectFonts();
  }

  applyInitialFont() {
    const storedFontPreference = localStorage.getItem('useDefaultFont');
    const root = document.documentElement;

    if (storedFontPreference === 'true') {
      root.style.setProperty(
        '--font-family',
        '"Grenze Gotisch", sans-serif'
      );
      root.style.setProperty(
        '--sl-font-sans',
        '"Grenze Gotisch", sans-serif'
      );
      root.style.setProperty('--sl-font-mono', 'Menlo, monospace');
      (this.shadowRoot?.querySelector('sl-switch') as any).checked = true;
    } else {
      root.style.setProperty('--font-family', this.customFont);
      root.style.setProperty('--sl-font-sans', this.customFont);
      root.style.setProperty('--sl-font-mono', 'Menlo, monospace'); //replace with your monospace font.
    }
    this.updateSelectFonts();
  }

  render() {
    return html`
      <app-header ?enableShare="${true}"></app-header>

      <div class="font-toggle">
        <sl-switch size="medium" @sl-change=${this.toggleFont}>
          Toggle fancy font
        </sl-switch>
      </div>

      <main style="padding-bottom: 5rem;">
        <sl-alert variant="primary" open closable>
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <strong>Looking for my portfolio site?</strong><br />
          Visit <a href="https://www.adamjolicoeur.com" target="blank" alt="Link to adamjolicoeur.com">www.adamjolicoeur.com</a> to view all of my designs, demos, and more!
        </sl-alert>
        <content class="main">
          <section>
            <sl-card style="position: relative;">
              <div slot="header">Tournament Tracker</div>
              <p>For use with tracking games of Magic: The Gathering.</p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="primary">
                  Tournament
                </span>
              </div>
              <div slot="footer">
                <sl-button href="${resolveRouterPath('game-tracker')}" variant="primary" pill outline>Start</sl-button>
              </div>
            </sl-card>
          </section>
          <section>
            <sl-card class="card-header two-item-footer" style="position: relative;">
              <div slot="header">
                EDH Event Tracking
              </div>
              <p>
                A customized tracker for matches of 4 player games such as Commander/EDH.
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="edh">
                  4 player
                </span>
              </div>
              <div slot="footer">
                <sl-button href="${resolveRouterPath('counter')}" variant="warning" pill outline>Start</sl-button>
              </div>
            </sl-card>
          </section>
          <section>
            <sl-card class="card-header two-item-footer" style="position: relative;">
              <div slot="header">
                PVP Counter
              </div>
              <p>
                A simplified life counter for PVP (head-to-head) matches. Each "side" is designed to face the user to provide clearest view.
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="colorless">
                  Coming Soon
                </span>
              </div>
              <div slot="footer">
                <sl-button href="${resolveRouterPath('pvp-tracker')}" variant="neutral" pill>Start</sl-button>
              </div>
            </sl-card>
          </section>
        </content>
      </main>
      <style>
        sl-card.work-in-progress::part(base) {
          border-color: var(--sl-color-warning-600);
        }
        sl-card.ready::part(base) {
          border-color: var(--sl-color-brand-600);
        }
        sl-card::part(footer) {
          padding: .5rem;
        }
      </style>
      <script>
        const alert = document.querySelector('.alert-closable');
        alert.addEventListener('sl-after-hide', () => {
          setTimeout(() => (alert.open = true), 2000);
        });
      </script>
    `;
  }
}
