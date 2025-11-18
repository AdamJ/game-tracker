import{i as h,s as w,a as y,d as v,n as m,r as l,e as f,b as g,x as c,t as b}from"./index-CcTr4ZfK.js";import{t as x,l as u}from"./table-styles-DGActeWR.js";import{c as P}from"./counter-styles-B2XUwgq6.js";const $=h`
  @media screen and (min-width: 600px) {
    .standard-tracker {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 1rem;
    }
    sl-card.side-one::part(base),
    sl-card.side-two::part(base) {
      border-radius: 1rem !important;
    }
  }
  nav {
    padding: .25rem;
  }
  .tree-with-lines {
    --indent-guide-width: 1px;
    --indent-guide-color: var(--sl-color-primary-600);
  }
  sl-card.side-one::part(base),
  sl-card.side-two::part(base) {
    border-radius: 0 0 1rem 1rem;
  }
  sl-card.side-one::part(base),
  sl-button.side-one::part(base) {
    background-color: var(--ms-mana-p-bg);
    color: var(--sl-color-neutral-50);
    border: 0;
  }
  sl-card.side-two::part(base),
  sl-button.side-two::part(base) {
    background-color: var(--ms-mana-b-bg);
    color: var(--sl-color-neutral-100);
    border: 0;
  }
  .form-2-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-player-input {
    width: 100%;
  }
  @media (min-width: 1200px) {
    .form-2-column {
      flex-direction: row;
    }
  }
  sl-card.side-one,
  sl-button.side-one {
    transition: transform 0.3s ease;
  }
  @media (orientation: portrait) {
    sl-card.side-one {
      transform: rotate(180deg);
    }
  }
  @media (orientation: landscape) {
    sl-card.side-one {
      transform: rotate(180deg);
    }
  }
  @media screen and (min-width: 600px) {
    sl-card.side-one {
      transform: rotate(0deg);
    }
  }
  sl-tree::part(base) {
    height: 100%;
  }
`;var H=Object.defineProperty,k=Object.getOwnPropertyDescriptor,n=(t,i,a,o)=>{for(var e=o>1?void 0:o?k(i,a):i,s=t.length-1,d;s>=0;s--)(d=t[s])&&(e=(o?d(i,a,e):d(e))||e);return o&&e&&H(i,a,e),e};let r=class extends g{constructor(){super(),this.side1={points:20},this.side2={points:20},this.matchResults=[],this.sideHandle1="Side 1",this.sideHandle2="Side 2",this.initialPointsTracker=20,this.isDrawerOpen=!1,this.isAlertOpen=!1,this.storageKey="sideData",this.gameHistory=[],this.sideLogs=[],this.sideHandle1Actions=[],this.sideHandle2Actions=[],this.loadFromStorage()}firstUpdated(){this.saveToStorage()}updatePoints(t,i,a){const e={1:{side:this.side1,sideHandle:this.sideHandle1,setter:s=>{this.side1=s}},2:{side:this.side2,sideHandle:this.sideHandle2,setter:s=>{this.side2=s}}}[t];if(e){const s=Math.max(0,e.side.points+i);e.setter({...e.side,points:s}),console.log(`${a} ${Math.abs(i)} to ${s} for ${e.sideHandle}`),this.sideLogs=[...this.sideLogs,{side:e.sideHandle,action:`${a}`,points:s}],this.saveToStorage()}}setInitialPointsTracker(t){const i=t.target,a=parseInt(i.value,10);!isNaN(a)&&a>=0?(this.initialPointsTracker=a,this.side1={points:a},this.side2={points:a},this.saveToStorage()):(alert("Please enter a valid positive number for starting points."),i.value=this.initialPointsTracker.toString())}toggleDrawer(){this.isDrawerOpen=!this.isDrawerOpen}closeDrawer(){this.isDrawerOpen=!1}closeAlert(){this.isAlertOpen=!1}resetWithAlert(){this.resetGame(),this.isAlertOpen=!0}resetGame(){this.side1={points:this.initialPointsTracker},this.side2={points:this.initialPointsTracker}}saveToStorage(){const t={initialPointsTracker:this.initialPointsTracker,matchResults:this.matchResults,side1:this.side1,side2:this.side2,sideHandle1:this.sideHandle1,sideHandle2:this.sideHandle2,sideLogs:this.sideLogs};u.setItem(this.storageKey,t).catch(console.error)}loadFromStorage(){u.getItem(this.storageKey).then(t=>{t&&(this.initialPointsTracker=t.initialPointsTracker||20,this.matchResults=t.matchResults||[],this.side1=t.side1||{points:20},this.side2=t.side2||{points:20},this.sideHandle1=t.sideHandle1||"Side 1",this.sideHandle2=t.sideHandle2||"Side 2",this.sideHandle1Actions=t.sideHandle1Actions||[],this.sideHandle2Actions=t.sideHandle2Actions||[])}).catch(console.error)}render(){const t=new Map;this.sideLogs.forEach(e=>{t.has(e.side)||t.set(e.side,[]);const s=c`
      <sl-tree-item>
        ${e.action}
        to <sl-badge variant="neutral" pill style="padding-left: 2px;">${e.points}</sl-badge>
      </sl-tree-item>
    `;t.get(e.side)?.push(s)});const i=[];for(const[e,s]of t)i.push(c`
        <sl-tree-item>${e}
        ${s.map(d=>c`
          ${d}
        </sl-tree-item>
        `)}
      `);const a=c`
    <sl-tree-item>
      No match history to display.
    </sl-tree-item>
  `,o=i.length>0?i:a;return c`
    <main>
      <div class="standard-tracker">
        <sl-card class="side-one">
          <form class="card-form">
            <sl-button variant="default" size="large" class="life-counter side-one" @click=${()=>this.updatePoints(1,1,"Plus")}>
              <sl-icon slot="prefix" name="shield-fill-plus"></sl-icon>
              Plus
            </sl-button>
            <p class="text-center ms-4x">
              ${this.side1.points}
            </p>
            <sl-button variant="default" size="large" class="life-counter side-one" @click=${()=>this.updatePoints(1,-1,"Minus")}>
              <sl-icon slot="prefix" name="shield-fill-minus"></sl-icon>
              Minus
            </sl-button>
          </form>
        </sl-card>
        <sl-card class="side-two">
          <form class="card-form">
            <sl-button variant="default" size="large" class="life-counter side-two" @click=${()=>this.updatePoints(2,1,"Plus")}>
              <sl-icon slot="prefix" name="shield-fill-plus" class="icon-plus"></sl-icon>
              Plus
            </sl-button>
            <p class="text-center ms-4x">
              ${this.side2.points}
            </p>
            <sl-button variant="default" size="large" class="life-counter side-two" @click=${()=>this.updatePoints(2,-1,"Minus")}>
              <sl-icon slot="prefix" name="shield-fill-minus" class="icon-minus"></sl-icon>
              Minus
            </sl-button>
          </form>
        </sl-card>
      </div>
      <sl-drawer label="Configuration" placement="top" class="drawer-custom-size" ?open=${this.isDrawerOpen} @sl-after-hide=${this.closeDrawer}>
          <form class="reset-points-form">
            <sl-input
              type="number"
              label="Starting Points"
              size="medium"
              pill
              placeholder="Starting points must be greater than 0"
              value=${this.initialPointsTracker}
              @sl-change=${this.setInitialPointsTracker}
              min="0"
            >
            </sl-input>
            <sl-button
              variant="danger"
              size="small"
              pill
              @click=${this.resetWithAlert}
              class="reset-points-button"
            >
              Reset Starting Points
            </sl-button>
          </form>
          <sl-alert variant="primary" open duration="1500" closable class="alert-closable" ?open=${this.isAlertOpen} @sl-after-hide=${this.closeAlert}>
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            Starting points have been reset to ${this.initialPointsTracker}.
          </sl-alert>
          <h3>History</h3>
          <sl-tree class="tree-with-lines">
            ${o}
          </sl-tree>
        <sl-button slot="footer" variant="primary" pill @click=${this.closeDrawer}>Close</sl-button>
      </sl-drawer>
      <div class="fab-container ${this.isDrawerOpen?"hidden":""}">
        <sl-button variant="neutral" size="large" circle @click=${this.toggleDrawer}>
          <sl-icon name="gear" label="settings"></sl-icon>
        </sl-button>
      </div>
    </main>
  `}};r.styles=[w,y,P,x,v,$,h`
      main {
        height: calc(100vh - 80px);
        padding: 0 !important;
        margin: 0 !important;
        position: relative;
        overflow: hidden;
      }

      sl-drawer {
        --size: 90vh !important;
      }

      .standard-tracker {
        height: 100%;
        width: 100%;
      }

      .side-one,
      .side-two,
      sl-card::part(base) {
        height: 100%;
        align-items: center;
        align-content: center;
      }

      sl-card::part(body) {
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 0;
      }

      .card-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
      }

      .card-form > sl-button {
        width: 100%;
        max-width: 300px;
      }

      .card-form > p {
        font-size: calc(16px * 4);
        line-height: normal;
        margin: 0;
        color: var(--sl-color-neutral-950);
        font-weight: bold;
      }

      /* Icon colors - override for visibility */
      .side-one sl-icon {
        color: var(--sl-color-neutral-950);
        font-size: 1.75rem;
      }

      .side-two sl-icon {
        font-size: 1.75rem;
      }

      .side-two .icon-plus {
        color: var(--sl-color-warning-600);
      }

      .side-two .icon-minus {
        color: var(--sl-color-neutral-50);
      }

      @media screen and (max-width: 600px) {
        main {
          height: calc(100vh - 80px);
        }

        .standard-tracker {
          display: flex;
          flex-direction: column;
        }

        .side-one,
        .side-two {
          flex: 1;
          min-height: 50%;
        }

        .card-form > p {
          font-size: calc(16px * 3);
        }
      }

      @media screen and (min-width: 600px) {
        main {
          height: calc(100vh - 80px);
        }

        .card-form > sl-button {
          width: 40vw;
          max-width: 400px;
        }
      }

      /* Drawer styles */
      .reset-points-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .reset-points-form sl-input {
        text-align: center;
      }

      .tree-with-lines {
        color: var(--sl-color-neutral-50);
      }

      @media screen and (min-width: 600px) {
        .reset-points-form {
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
        }
      }

      /* FAB positioning - centered horizontally */
      .fab-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }

      .fab-container.hidden {
        opacity: 0;
        visibility: hidden;
      }

      @media screen and (max-width: 600px) {
        .fab-container {
          top: 50%;
        }
      }
    `];n([m({type:Object})],r.prototype,"side1",2);n([m({type:Object})],r.prototype,"side2",2);n([l()],r.prototype,"matchResults",2);n([l()],r.prototype,"sideHandle1",2);n([l()],r.prototype,"sideHandle2",2);n([l()],r.prototype,"initialPointsTracker",2);n([l()],r.prototype,"isDrawerOpen",2);n([l()],r.prototype,"isAlertOpen",2);n([f(".drawer-custom-size")],r.prototype,"drawer",2);n([f(".alert-closable")],r.prototype,"alert",2);n([m({type:Array})],r.prototype,"gameHistory",2);n([l()],r.prototype,"sideLogs",2);n([l()],r.prototype,"sideHandle1Actions",2);n([l()],r.prototype,"sideHandle2Actions",2);r=n([b("standard-tracker")],r);var S=Object.getOwnPropertyDescriptor,O=(t,i,a,o)=>{for(var e=o>1?void 0:o?S(i,a):i,s=t.length-1,d;s>=0;s--)(d=t[s])&&(e=d(e)||e);return e};let p=class extends g{render(){return c`
      <standard-tracker></standard-tracker>
      <app-navigation></app-navigation>
    `}};p.styles=h`
    sl-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;p=O([b("app-standard")],p);export{p as PvpCounter};
//# sourceMappingURL=app-standard-CWIYOMbh.js.map
