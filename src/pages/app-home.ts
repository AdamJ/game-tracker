// src/pages/app-home.ts
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
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
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 1fr;
        gap: 2rem;
      }
      .grid sl-card {
        position: relative;
      }
      .grid sl-card::part(base) {
        height: 100%;
      }
      .grid sl-card::part(body) {
        flex: 1 1 auto;
      }
      .grid sl-card > sl-button {
        padding-top: 2rem;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
      }
      sl-card::part(image) {
        background-color: var(--sl-color-neutral-100);
        display: flex;
        justify-content: center;
      }
      sl-card.work-in-progress::part(base) {
        border-color: var(--sl-color-warning-600);
      }
      sl-card::part(base) {
        background-color: transparent;
        height: 100%;
      }
      sl-card::part(body) {
        background-color: var(--sl-panel-background-color);
        flex: 1 1 auto;
      }
      sl-card::part(footer) {
          padding: .75rem 1rem;
      }
      .gameplay-features {
        margin-top: .75rem;
        margin-bottom: 2rem;
      }
      .gameplay-features ul {
        margin-block-start: 0 !important;
        padding-inline-start: 1rem !important;
      }
      sl-details.gameplay-features::part(base) {
        background-color: transparent;
      }
      sl-details.gameplay-features::part(header) {
        padding: .5rem;
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
      <main style="margin-bottom: 2.5rem;">
        <h1>Moonsilver Waypoints</h1>
        <content class="main">
          <h2>Select a gameplay method to get started</h2>
          <p>
            Click on the "features" button of each item to learn more.
          </p>
          <section class="grid">
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/bcore.svg"
                alt="Image of a stack of cards"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Tournament</strong></div>
              Running a tournament? Then this part is for you. Track Wins, Losses, Draws and match history.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Custom player name entry</li>
                  <li>Track Wins, Losses, and Draws</li>
                  <li>Ranking by Points and Win Percentage</li>
                  <li>Individual Match Results history</li>
                  <li>Export gameplay information to CSV</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${resolveRouterPath('game-tracker')}">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/cmd.svg"
                alt="Commander logo"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Commander</strong></div>
              For use with 4 player games, complete with a results table, standings, match log, and personalization.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Custom player name entry</li>
                  <li>Track Wins, Losses, and Draws</li>
                  <li>Match log for each round</li>
                  <li>Export gameplay information to CSV</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${resolveRouterPath('counter')}">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/xlcu.svg"
                alt="Generic image"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>1 v 1</strong></div>
              For those playing 1v1 games. Simple life counter that adapts to your device orientation for use on monitors, tablets, and phones.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Set starting life total</li>
                  <li>Simple +1 or -1 counter</li>
                  <li>Match log for each round</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${resolveRouterPath('standard-tracker')}">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/dice-solid.svg"
                alt="A die"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Dice Roller</strong></div>
              A simple D20 dice roller with history.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Roll a D20</li>
                  <li>View roll history</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${resolveRouterPath('roll-dice')}">Start</sl-button>
            </sl-card>
          </section>
        </content>
      </main>
      <app-navigation></app-navigation>
    `;
  }
}
