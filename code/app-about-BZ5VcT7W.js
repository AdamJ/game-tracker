import{i as p,s as h,a as u,b as d,x as c,t as m}from"./index-BXUZZy4M.js";import"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/format-date/format-date.js";const g=p`
  .details-group-example > sl-details:first-of-type::part(base) {
    border-radius: 8px 8px 0 0;
  }
  .details-group-example > sl-details::part(base) {
    border-radius: 0;
  }
  .details-group-example > sl-details:last-of-type::part(base) {
    border-radius: 0 0 8px 8px;
  }
`;var f=Object.getOwnPropertyDescriptor,b=(t,r,l,s)=>{for(var a=s>1?void 0:s?f(r,l):r,e=t.length-1,i;e>=0;e--)(i=t[e])&&(a=i(a)||a);return a};let o=class extends d{render(){return c`
      <main style="padding-bottom: 8rem;">
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
      <app-navigation></app-navigation>
    `}};o.styles=[h,u,g];o=b([m("app-about")],o);var w=Object.getOwnPropertyDescriptor,y=(t,r,l,s)=>{for(var a=s>1?void 0:s?w(r,l):r,e=t.length-1,i;e>=0;e--)(i=t[e])&&(a=i(a)||a);return a};let n=class extends d{render(){return c`
      <app-about></app-about>
      <app-navigation></app-navigation>
    `}};n.styles=p`

  `;n=y([m("app-about")],n);export{n as AppAbout};
//# sourceMappingURL=app-about-BZ5VcT7W.js.map
