import{b as d,x as l,s as m,a as h,i as y,r as c,e as u,t as g}from"./index-CcTr4ZfK.js";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,a=(t,s,o,r)=>{for(var e=r>1?void 0:r?v(s,o):s,n=t.length-1,p;n>=0;n--)(p=t[n])&&(e=(r?p(s,o,e):p(e))||e);return r&&e&&f(s,o,e),e};let i=class extends d{constructor(){super(...arguments),this.result=null,this.history=[]}connectedCallback(){super.connectedCallback();const t=localStorage.getItem("diceRollHistory");t&&(this.history=JSON.parse(t))}rollDice(){this.result=Math.floor(Math.random()*20)+1,this.history=[this.result,...this.history].slice(0,50),localStorage.setItem("diceRollHistory",JSON.stringify(this.history)),this.resultDisplay&&(this.resultDisplay.classList.add("animate"),this.resultDisplay.addEventListener("animationend",()=>{this.resultDisplay.classList.remove("animate")},{once:!0}))}clearHistory(){this.result=null,this.history=[],localStorage.removeItem("diceRollHistory")}render(){return l`
      <main>
        <h1>Roll a D20</h1>
        <div class="result-display">${this.result!==null?this.result:"?"}</div>
        <sl-button variant="primary" size="large" @click=${this.rollDice} class="roll-button">
          <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="prefix" style="fill: #fff;"></sl-icon>
          Roll Dice
        </sl-button>

        <sl-card>
          <div slot="header" class="display-flex" style="align-items: center; justify-content: space-between;">
            <h3 style="margin: 0;">History</h3>
            <sl-button variant="danger" outline size="small" @click=${this.clearHistory} ?disabled=${this.history.length===0}>
              Clear History
            </sl-button>
          </div>
          ${this.history.length>0?l`
              <div class="history-container">
                ${this.history.map((t,s)=>l`<sl-badge pill variant=${s===0?"success":"neutral"}>${t}</sl-badge>`)}
              </div>
            `:l`
              <p class="text-center">No rolls yet. Roll the dice to see history.</p>
            `}
        </sl-card>
      </main>
      <app-navigation></app-navigation>
    `}};i.styles=[m,h,y`
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding-bottom: 5rem; /* For navigation */
      }
      .result-display {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        font-weight: bold;
        color: var(--sl-color-primary-600);
        min-height: 6rem;
        min-width: 6rem;
        text-align: center;
        border-radius: var(--sl-border-radius-x-large);
        border: 1px solid var(--sl-color-neutral-300);
      }

      .result-display.animate {
        animation: flipInX 0.8s;
      }

      @keyframes flipInX {
        from {
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }

        40% {
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          animation-timing-function: ease-in;
        }

        60% {
          transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
          opacity: 1;
        }

        80% {
          transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }

        to {
          transform: perspective(400px);
        }
      }
      .history-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        margin-top: 1rem;
        max-width: 100%;
      }
      .roll-button {
        margin-top: 1rem;
      }
      sl-card {
        width: 100%;
        max-width: 600px;
      }
      sl-card::part(header) {
        padding: var(--sl-spacing-small) var(--sl-spacing-medium);
      }
      sl-card::part(body) {
        padding-top: var(--sl-spacing-medium);
      }
      sl-badge::part(base) {
        height: 2rem;
        width: 2rem;
      }
    `];a([c()],i.prototype,"result",2);a([c()],i.prototype,"history",2);a([u(".result-display")],i.prototype,"resultDisplay",2);i=a([g("app-roll-dice")],i);export{i as AppRollDice};
//# sourceMappingURL=app-roll-dice-BZI71AhT.js.map
