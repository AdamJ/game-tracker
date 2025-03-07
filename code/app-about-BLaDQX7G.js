import{i as n,r as d,x as c,s as p,t as h}from"./index-BXgxrI9R.js";import"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/format-date/format-date.js";const m=n`
  .scorecard {
    max-width: 500px;
  }
  sl-alert::part(base) {
    background-color: var(--sl-color-primary-50);
  }
`;var f=Object.getOwnPropertyDescriptor,w=(r,s,l,i)=>{for(var a=i>1?void 0:i?f(s,l):s,t=r.length-1,o;t>=0;t--)(o=r[t])&&(a=o(a)||a);return a};let e=class extends d{render(){return c`
      <app-header ?enableBack="${!0}" ?enableShare=${!0}></app-header>
      <main style="padding-bottom: 5rem;">
        <h1>About</h1>
        <section style="display: flex; flex-direction: row; grid-gap: 1rem; align-items: flex-start; flex-wrap: wrap;">
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
          <sl-card class="two-item-footer">
            <div slot="header">What?</div>
            <p>Task what? Task It.</p>
            <p>
              I wanted to make a task tracking app that kept data in the browser's cache, which I would export daily to a spreadsheet. Unfortunately, I was sidetracked while listening to YouTube and went down the road of creating a game tracking interface for when I play MTG: The Gathering. I'm sure I'll get to the task tracking part eventually.
            </p>
          </sl-card>
          <br /><br />
          <sl-card class="two-item-footer">
            <div slot="header">Resources and Credits</div>
            <ul>
              <li>
                The tapped symbol is from the <a href="https://mana.andrewgioia.com/icons.html" target="blank">Mana Icons</a> library by <a href="https://andrewgioia.com" target="blank">Andrew Gioia</a>
              </li>
              <li>
                <a href="https://mana.andrewgioia.com/icons.html" target="blank">Mana and Card icons</a> by <a href="https://andrewgioia.com" target="blank">Andrew Gioia</a>
              </li>
              <li>
                <a href="https://www.pwabuilder.com/" target="blank">PWA Builder</a>
              </li>
            </ul>
          </sl-card>
          <br /><br />
          <sl-card class="two-item-footer">
            <img
              slot="image"
              src="/assets/PWAReportCard.png"
              alt="PWA Builder Scorecard"
            />
            <strong>PWA Builder Scorecard</strong>
            <ul>
              <li>
                <small>Manifest:</small> 21/29
              </li>
              <li>
                <small>Service Worker:</small> +3
                <ul>
                  <li>
                    <sl-icon name="patch-check-fill"></sl-icon>
                    has service work
                  </li>
                  <li>
                    <sl-icon name="patch-check-fill"></sl-icon>
                    push notifications
                  </li>
                  <li>
                    <sl-icon name="patch-check-fill"></sl-icon>
                    offline support
                  </li>
                </ul>
              </li>
              <li><small>App Capabilities:</small> +4</li>
            </ul>
            <div slot="footer">
              <div>
                  <sl-format-date month="long" day="numeric" year="numeric" date="2025-03-04T09:12:00-05:00"></sl-format-date>
              </div>
              <sl-button variant="text" href="https://www.pwabuilder.com/reportcard?site=https://www.adamjolicoeur.me">Report Card</sl-button>
            </div>
          </sl-card>
        </section>
      </main>
      <style>
        sl-card {
          max-width: 350px;
        }
      </style>
    `}};e.styles=[p,m];e=w([h("app-about")],e);export{e as AppAbout};
//# sourceMappingURL=app-about-BLaDQX7G.js.map
