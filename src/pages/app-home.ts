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
      main, .main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        grid-gap: 1rem;
        margin-top: 3rem;
      }
      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }
      sl-card {
        max-width: 350px;
      }
      sl-card [slot='header'] {
        font-weight: var(--sl-font-weight-bold);
      }
      .card-header [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .font-toggle {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 1000;
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

  customFont = '"Grenze Gotisch", sans-serif';

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
        'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      );
      root.style.setProperty(
        '--sl-font-sans',
        'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      );
      root.style.setProperty('--sl-font-mono', '"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace');
    } else {
      root.style.setProperty('--font-family', this.customFont);
      root.style.setProperty('--sl-font-sans', this.customFont);
      root.style.setProperty('--sl-font-mono', '"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace'); //replace with your monospace font.
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
        'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      );
      root.style.setProperty(
        '--sl-font-sans',
        'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      );
      root.style.setProperty('--sl-font-mono', '"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace');
      (this.shadowRoot?.querySelector('sl-switch') as any).checked = true;
    } else {
      root.style.setProperty('--font-family', this.customFont);
      root.style.setProperty('--sl-font-sans', this.customFont);
      root.style.setProperty('--sl-font-mono', '"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace'); //replace with your monospace font.
    }
    this.updateSelectFonts();
  }

  render() {
    return html`
      <app-header ?enableHeader="${true}"></app-header>

      <div class="font-toggle">
        <sl-switch size="medium" @sl-change=${this.toggleFont}>
          Toggle system font
        </sl-switch>
      </div>

      <main class="main">
        <section>
          <sl-card class="two-item-footer ready">
            <div slot="header">Game Tracker</div>
            <p>For use with tracking games of Magic: The Gathering.</p>
            <div slot="footer">
              <sl-button href="${resolveRouterPath('game-tracker')}" variant="primary">Let's Play</sl-button>
            </div>
          </sl-card>
        </section>
        <section>
          <sl-card class="card-header two-item-footer work-in-progress">
            <div slot="header">
              Match Tracking
            </div>
            <p>
              A customized tracker for matches of 4 player games (such as Commander/EDH). While it does have a way to track standings, results, and general "gain/loss" each time the respective buttons are pressed, it is best used for individual matches.
            </p>
            <div slot="footer">
              <sl-button href="${resolveRouterPath('counter')}" variant="warning" outline>Let's Play</sl-button>
            </div>
          </sl-card>
        </section>
        <section>
          <sl-card>
            <p>Learn about these apps, resources used with them, and any other information available. If you like what you see, click the "share" button at the top of the page!
            </p>
            <div slot="footer">
              <sl-button href="${resolveRouterPath('about')}" variant="neutral" outline>About</sl-button>
            </div>
          </sl-card>
        </section>
      </main>
      <style>
        sl-alert::part(base) {
          background-color: var(--sl-color-warning-50);
        }
        sl-card.work-in-progress::part(base) {
          border-color: var(--sl-color-warning-600);
        }
        sl-card.ready::part(base) {
          border-color: var(--sl-color-brand-600);
        }
      </style>
    `;
  }
}
