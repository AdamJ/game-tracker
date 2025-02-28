import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS separate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <main>
        <h1>About</h1>
        <sl-card>
          <div slot="header">What?</div>
          <p>Task what? Task It.</p>
          <p>
            I wanted to make a task tracking app that kept data in the browser's cache, which I would export daily to a spreadsheet. Unfortunately, I was sidetracked while listening to YouTube and went down the road of creating a game tracking interface for when I play MTG: The Gathering. I'm sure I'll get to the task tracking part eventually.
          </p>
        </sl-card>
        <br /><br />
        <sl-card>
          <div slot="header">Resources and Credits</div>
          <ul>
            <li>The tapped symbol is from the <a href="https://mana.andrewgioia.com/icons.html" target="blank">Mana Icons</a> library by <a href="https://andrewgioia.com" target="blank">Andrew Gioia</a></li>
            <li><a href="https://mana.andrewgioia.com/icons.html" target="blank">Mana and Card icons</a> by <a href="https://andrewgioia.com" target="blank">Andrew Gioia</a></li>
            <li><a href="https://www.pwabuilder.com/" target="blank">PWA Builder</a></li>
          </ul>
        </sl-card>
        <br /><br />
        <sl-alert open>
          <strong>Disclaimer</strong>
          <p>
            Magic: The Gathering is © <a href="https://company.wizards.com/en" target="blank">Wizards of the Coast</a>. This project is not affiliated nor produced nor endorsed by Wizards of the Coast.
          </p>
          <p>
            All card images, mana symbols, expansions and art related to Magic the Gathering is a property of Wizards of the Coast/Hasbro.
          </p>
          <p>
            This project may use the trademarks and other intellectual property of Wizards of the Coast LLC as permitted under Wizards' Fan Site Policy. MAGIC: THE GATHERING® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at <a href="https://company.wizards.com/" target="blank">https://company.wizards.com/</a>.
          </p>
        </sl-alert>
        <br/><br/>
        <img src="/assets/PWABuilder%20Report%20Card.png" alt="PWA Builder Report Card" />
      </main>
      <style>
        sl-alert::part(base) {
          background-color: var(--sl-color-primary-50);
        }
      </style>
    `;
  }
}
