// src/pages/app-home.ts
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
import '../components/icons/font-awesome';
import '../components/icons/mtg-symbols';
import "../components/header";
import "../components/navigation";

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
      // .main {
      //   display: flex;
      //   flex-direction: row;
      //   flex-wrap: wrap;
      //   justify-content: flex-start;
      //   grid-gap: 1rem;
      // }
      // sl-card::part(base) {
      //   justify-content: space-between;
      //   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12);
      //   border-radius: 1rem 1rem 1rem 0;
      // }
      // sl-card [slot='header'] {
      //   font-weight: var(--sl-font-weight-bold);
      // }
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
      <!-- <app-header ?enableShare="${true}" ?enableAbout=${true}></app-header> -->
      <main>
        <h1>Moonsilver Waypoints</h1>
        <content class="main">
          <section style="display: flex; padding: 0 1.5rem 2rem 1.5rem; align-items: start; align-content: flex-start; gap: 1rem 1.5rem; align-self: stretch; flex-wrap: wrap;">
            <sl-card style="min-height: 10rem; min-width: 7.5rem; max-width: 10rem;">
              <p class="card-icon">
                <sl-icon-button href="${resolveRouterPath('game-tracker')}" src="/assets/svg/bcore.svg" style="font-size: 4rem;">Play</sl-icon-button>
              </p>
              <div slot="footer">
                Tournament
              </div>
            </sl-card>
            <sl-card style="min-height: 10rem; min-width: 7.5rem; max-width: 10rem;">
              <p class="card-icon">
                <sl-icon-button href="${resolveRouterPath('counter')}" src="/assets/svg/cmd.svg" style="font-size: 4rem;">Play</sl-icon-button>
              </p>
              <div slot="footer">
                EDH
              </div>
            </sl-card>
            <sl-card style="min-height: 10rem; min-width: 7.5rem; max-width: 10rem;">
              <p class="card-icon">
                <sl-icon-button href="${resolveRouterPath('standard-tracker')}" src="/assets/svg/xlcu.svg" style="font-size: 4rem;">Play</sl-icon-button>
              </p>
              <div slot="footer">
                Standard
              </div>
            </sl-card>
          </section>
        </content>
      </main>
      <app-navigation></app-navigation>
      <style>
        sl-card.work-in-progress::part(base) {
          border-color: var(--sl-color-warning-600);
        }
        sl-card::part(base) {
          background-color: transparent;
        }
        sl-card::part(body) {
          background-color: var(--sl-panel-background-color);
        }
        // sl-card.ready::part(base) {
        //   border-color: var(--sl-color-brand-600);
        // }
        sl-card::part(footer) {
           padding: .75rem 1rem;
        }
      </style>
    `;
  }
}
