import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '../components/icons/tabler';
import '../components/icons/mtg-symbols';

import { sharedStyles } from '../styles/shared-styles';
import { shoelaceStyles } from '../styles/shoelace-styles';
import { ribbonStyles } from '../styles/ribbon-styles';
import { alertStyles } from '../styles/alert-styles';
import { homeStyles } from '../styles/home-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  @property() message = 'Welcome!';

  static styles = [
    sharedStyles,
    shoelaceStyles,
    ribbonStyles,
    alertStyles,
    homeStyles,
    css`
      .main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        grid-gap: 1rem;
      }
      sl-card::part(base) {
        justify-content: space-between;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12);
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
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Moonsilver Waypoints',
        text: 'Tracking games of Magic: The Gathering and other TCG scores.',
        url: 'https://www.adamjolicoeur.me',
      });
    }
  }

  render() {
    return html`
      <app-header ?enableShare="${true}" ?enableAbout=${true}></app-header>

      <main style="padding-bottom: 5rem;">
        <content class="main">
          <section>
            <sl-card style="position: relative;">
              <div slot="header">Tournament</div>
              <!-- <p class="game-intro">For use with tracking games of Magic: The Gathering.</p> -->
              <p class="card-icon">
                <sl-icon src="/assets/svg/xlcu.svg" style="font-size: 4rem;"></sl-icon>
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="primary">
                  Tournament
                </span>
              </div>
              <div slot="footer">
                <sl-button href="${resolveRouterPath('game-tracker')}" variant="neutral" pill class="custom-button">Play</sl-button>
              </div>
            </sl-card>
          </section>
          <section>
            <sl-card class="card-header" style="position: relative;">
              <div slot="header">
                EDH
              </div>
              <!-- <p class="game-intro">
                A customized tracker for matches of 4 player games such as Commander/EDH.
              </p> -->
              <p class="card-icon">
                <sl-icon src="/assets/svg/cmd.svg" style="font-size: 4rem;"></sl-icon>
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="edh">
                  4 player
                </span>
              </div>
              <div slot="footer">
                <sl-button href="${resolveRouterPath('counter')}" variant="neutral" pill class="custom-button">Play</sl-button>
              </div>
            </sl-card>
          </section>
          <section>
            <sl-card class="card-header" style="position: relative;">
              <div slot="header">
                Standard
              </div>
              <!-- <p class="game-intro">
                A simplified life counter for standard (head-to-head) matches. Each "side" is designed to face the user to provide the clearest view of their life total.
              </p> -->
              <p class="card-icon">
                <sl-icon src="/assets/svg/bcore.svg"></sl-icon>
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="colorless">
                  Standard 1v1
                </span>
              </div>
              <div slot="footer">
                <sl-button href="${resolveRouterPath('standard-tracker')}" variant="neutral" pill class="custom-button">Play</sl-button>
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
    `;
  }
}
