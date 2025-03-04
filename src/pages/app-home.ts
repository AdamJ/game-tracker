import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static styles = [
    styles,
    css`

    #welcomeBar {
      display: flex;
      // flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      grid-gap: 2rem;
      flex-wrap: wrap;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    // @media(min-width: 750px) {
    //   sl-card {
    //     width: 70vw;
    //   }
    // }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }
    }
}
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
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

  render() {
    return html`
      <app-header></app-header>

      <main class="main">
        <div id="welcomeBar">
          <sl-card>
            <div slot="header">Game Tracker</div>
            <p>For use with tracking games of Magic: The Gathering.</p>
            <div slot="footer">
              <sl-button href="${resolveRouterPath('game-tracker')}" variant="primary">View</sl-button>
            </div>
          </sl-card>
          <sl-card>
            <div slot="header">Match Tracking</div>
            <sl-alert variant="warning" open>
              <strong>Work in progress</strong>
            </sl-alert>
            <p>A customized tracker for matches of 4 player games (such as Commander/EDH). While it does have a way to track standings, results, and general "gain/loss" each time the respective buttons are pressed, it is best used for individual matches.
            </p>
            <div slot="footer">
              <sl-button href="${resolveRouterPath('counter')}" variant="warning">View</sl-button>
            </div>
          </sl-card>
          <sl-card>
            <p>Learn about these apps, resources used with them, and any other information available. If you like what you see, click the "share" button below!
            </p>
            <div slot="footer">
              <sl-button href="${resolveRouterPath('about')}" variant="neutral" outline>About</sl-button>
              ${'share' in navigator
                ? html`
                  <sl-button slot="footer" variant="neutral" outline @click="${this.share}">
                    <sl-icon slot="prefix" name="share"></sl-icon>
                      Share this site!
                  </sl-button>
                `: null
              }
            </div>
          </sl-card>
        </div>
      </main>
      <style>
        sl-alert::part(base) {
          background-color: var(--sl-color-warning-50);
        }
      </style>
    `;
  }
}
