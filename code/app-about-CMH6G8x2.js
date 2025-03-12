import{i as n,r as d,x as p,s as c,a as h,t as m}from"./index-BcZRJ4Ia.js";import"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/format-date/format-date.js";import"./chunk.CVHNT5ZP-YUE0IqaG.js";const u=n`
  // .scorecard {
  //   max-width: 500px;
  // }
  // sl-alert::part(base) {
  //   background-color: var(--sl-color-primary-50);
  // }
  .details-group-example > sl-details:first-of-type::part(base) {
    border-radius: 8px 8px 0 0;
  }
  .details-group-example > sl-details::part(base) {
    border-radius: 0;
  }
  .details-group-example > sl-details:last-of-type::part(base) {
    border-radius: 0 0 8px 8px;
  }
`;var f=Object.getOwnPropertyDescriptor,b=(r,s,o,i)=>{for(var a=i>1?void 0:i?f(s,o):s,e=r.length-1,l;e>=0;e--)(l=r[e])&&(a=l(a)||a);return a};let t=class extends d{render(){return p`
      <app-header ?enableBack="${!0}" ?enableShare=${!0} ?enableAbout=${!1}></app-header>
      <main>
        <section>
          <div class="details-group-example">
            <sl-details summary="DISCLAIMER" open>
              <sl-alert open>
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
            </sl-details>
            <sl-details summary="What is this?" open>
              I wanted to make a task tracking app that kept data in the browser's cache, which I would export daily to a spreadsheet. Unfortunately, I was sidetracked while listening to YouTube and went down the road of creating a game tracking interface for when I play MTG: The Gathering. I'm sure I'll get to the task tracking part eventually.
            </sl-details>
            <sl-details summary="Resources and Credits" open>
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
            </sl-details>
            <sl-details summary="PWA Scorecard" open>
              <div style="display: flex; flex-direction: row; grid-gap: 1rem;">
                <div class="hide-at-800">
                  <img
                    src="/assets/PWAReportCard.png"
                    alt="PWA Builder Scorecard"
                    width="400px"
                  />
                </div>
                <div>
                  <strong>Stats</strong>
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
                </div>
                <div>
                  <strong>Last Updated</strong>
                  <br />
                  <sl-format-date month="long" day="numeric" year="numeric" date="2025-03-04T09:12:00-05:00"></sl-format-date>
                  <br />
                  <sl-button variant="text" href="https://www.pwabuilder.com/reportcard?site=https://www.adamjolicoeur.me" target="blank">View Full Report Card</sl-button>
                </div>
              </div>
            </sl-details>
          </div>
        </section>
      </main>
      <style>
        sl-card {
          max-width: 350px;
        }
      </style>
    `}};t.styles=[c,h,u];t=b([m("app-about")],t);export{t as AppAbout};
//# sourceMappingURL=app-about-CMH6G8x2.js.map
