import{i as u,s as H,a as $,n as d,b as c,r as f,E as g,x as p,t as b,c as L}from"./index-zlDiaMpD.js";import{t as P}from"./table-styles-Cnx7C_mH.js";import{c as O,l as v}from"./counter-styles-DU0bTR9z.js";import"./chunk.CVHNT5ZP-ClrhBmZw.js";const k=u`
.ms {
  position: relative;
}
.ms-small::after {
  top: -2px !important;
}
.ms-2x {
  font-size: 1.75em;
}
.ms-3x {
  font-size: 2.25em;
}
.ms-4x {
  font-size: 3em;
}
.ms-5x {
  font-size: 3.75em;
}
.ms-6x {
  font-size: 4.5em;
}
.ms-loyalty-up,
.ms-loyalty-down,
.ms-saga-1,
.ms-saga-2,
.ms-saga-3,
.ms-saga-4 {
  position: relative;
  text-align: center;
}
.ms-loyalty-down.ms-4x,
.ms-loyalty-up.ms-4x {
  top: -5px;
}
.ms-loyalty-down::after,
.ms-loyalty-up::after,
.ms-saga-1::after,
.ms-saga-2::after,
.ms-saga-3::after,
.ms-saga-4::after {
  color:  var(--special-color-white);
  display: inline-block;
  font-size: 0.5em;
  font-family: var(--font-family);
  position: absolute;
  line-height: 2.25em;
  width: 100%;
}
.ms-saga-1::after,
.ms-saga-2::after,
.ms-saga-3::after,
.ms-saga-4::after {
  top: -5px;
  left: 0;
}
.ms-loyalty-down::after {
  line-height: 2em;
}
.ms-loyalty-down::after {
  content: "-";
  top: -1px;
  left: 1px;
}
.ms-loyalty-up::after {
  content: "+";
  top: -1px;
  left: 1px;
}
.ms-saga-4::after {
  content: "4";
}
.ms-saga-3::after {
  content: "3";
}
.ms-saga-2::after {
  content: "2";
}
.ms-saga-1::after {
  content: "1";
}
.ms-g .ms-cost {
  background-color: var(--ms-mana-g-bg);
}
.ms-u .ms-cost {
  background-color: var(--ms-mana-u-bg);
}
.ms-w .ms-cost {
  background-color: var(--ms-mana-w-bg);
}
.ms-r .ms-cost {
  background-color: var(--ms-mana-r-bg);
}
.ms-b .ms-cost {
  background-color: var(--ms-mana-b-bg);
}
.ms-c .ms-cost {
  background-color: var(--ms-mana-c-bg);
}
`;var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,r=(e,s,l,n)=>{for(var t=n>1?void 0:n?T(s,l):s,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(n?o(s,l,t):o(t))||t);return n&&t&&S(s,l,t),t};let i=class extends f{constructor(){super(),this.handle1={life:20},this.handle2={life:20},this.handle3={life:20},this.handle4={life:20},this.matchResults=[],this.playerHandle1="Player 1",this.playerHandle2="Player 2",this.playerHandle3="Player 3",this.playerHandle4="Player 4",this.initialLifeTracker=20,this.storageKey="playerData",this.gameHistory=[],this.playerLogs=[],this.playerHandle1Actions=[],this.playerHandle2Actions=[],this.playerHandle3Actions=[],this.playerHandle4Actions=[],this.loadFromStorage()}firstUpdated(){this.saveToStorage()}updateLife(e,s,l){const t={1:{handle:this.handle1,playerHandle:this.playerHandle1,setter:a=>{this.handle1=a}},2:{handle:this.handle2,playerHandle:this.playerHandle2,setter:a=>{this.handle2=a}},3:{handle:this.handle3,playerHandle:this.playerHandle3,setter:a=>{this.handle3=a}},4:{handle:this.handle4,playerHandle:this.playerHandle4,setter:a=>{this.handle4=a}}}[e];if(t){const a=Math.max(0,t.handle.life+s);t.setter({...t.handle,life:a}),console.log(`${l} ${Math.abs(s)} to ${a} for ${t.playerHandle}`),this.playerLogs=[...this.playerLogs,{player:t.playerHandle,action:`${l}`,life:a}],this.saveToStorage()}}getPlayerIconVariant(e){return e.action.includes("Lose")?"loyalty-down":e.action.includes("Gain")?"loyalty-up":void 0}getPlayerBadgeVariant(e){return e.action.includes("Lose")?"danger":e.action.includes("Gain")?"success":void 0}setInitialLifeTracker(e){const s=e.target,l=parseInt(s.value,10);!isNaN(l)&&l>=0?(this.initialLifeTracker=l,this.handle1={life:l},this.handle2={life:l},this.handle3={life:l},this.handle4={life:l},this.saveToStorage()):(alert("Please enter a valid positive number for starting life."),s.value=this.initialLifeTracker.toString())}handlePlayerHandleChange(e,s){const n={1:{name:"Player 1",setter:t=>{this.playerHandle1=t}},2:{name:"Player 2",setter:t=>{this.playerHandle2=t}},3:{name:"Player 3",setter:t=>{this.playerHandle3=t}},4:{name:"Player 4",setter:t=>{this.playerHandle4=t}}}[e];if(n){const t=s.target.value||n.name;n.setter(t),this.saveToStorage()}}recordResult(e){let s="loss",l="loss",n="loss",t="loss";e===1?(s="win",l="loss",n="loss",t="loss"):e===2?(s="loss",l="win",n="loss",t="loss"):e===3?(s="loss",l="loss",n="win",t="loss"):e===4?(s="loss",l="loss",n="loss",t="win"):e==="draw"&&(s="draw",l="draw",n="draw",t="draw");const a={player1Handle:this.playerHandle1,player2Handle:this.playerHandle2,player3Handle:this.playerHandle3,player4Handle:this.playerHandle4,player1LifeTracker:this.handle1.life,player2LifeTracker:this.handle2.life,player3LifeTracker:this.handle3.life,player4LifeTracker:this.handle4.life,player1Outcome:s,player2Outcome:l,player3Outcome:n,player4Outcome:t};this.matchResults=[...this.matchResults,a],this.saveToStorage(),this.resetGame()}resetGame(){this.handle1={life:this.initialLifeTracker},this.handle2={life:this.initialLifeTracker},this.handle3={life:this.initialLifeTracker},this.handle4={life:this.initialLifeTracker}}saveToStorage(){const e={initialLifeTracker:this.initialLifeTracker,matchResults:this.matchResults,handle1:this.handle1,handle2:this.handle2,handle3:this.handle3,handle4:this.handle4,playerHandle1:this.playerHandle1,playerHandle2:this.playerHandle2,playerHandle3:this.playerHandle3,playerHandle4:this.playerHandle4,playerLogs:this.playerLogs};v.setItem(this.storageKey,e).catch(console.error)}loadFromStorage(){v.getItem(this.storageKey).then(e=>{e&&(this.initialLifeTracker=e.initialLifeTracker||20,this.matchResults=e.matchResults||[],this.handle1=e.handle1||{life:20},this.handle2=e.handle2||{life:20},this.handle3=e.handle3||{life:20},this.handle4=e.handle4||{life:20},this.playerHandle1=e.playerHandle1||"Player 1",this.playerHandle2=e.playerHandle2||"Player 2",this.playerHandle3=e.playerHandle3||"Player 3",this.playerHandle4=e.playerHandle4||"Player 4",this.playerHandle1Actions=e.playerHandle1Actions||[],this.playerHandle2Actions=e.playerHandle2Actions||[],this.playerHandle3Actions=e.playerHandle3Actions||[],this.playerHandle4Actions=e.playerHandle4Actions||[])}).catch(console.error)}getPlayerStats(e){const s=this.matchResults.filter(a=>a.player1Handle===e||a.player2Handle===e||a.player3Handle===e||a.player4Handle===e),l=s.filter(a=>a.player1Handle===e&&a.player1Outcome==="win"||a.player2Handle===e&&a.player2Outcome==="win"||a.player3Handle===e&&a.player3Outcome==="win"||a.player4Handle===e&&a.player4Outcome==="win").length,n=s.filter(a=>a.player1Handle===e&&a.player1Outcome==="loss"||a.player2Handle===e&&a.player2Outcome==="loss"||a.player3Handle===e&&a.player3Outcome==="loss"||a.player4Handle===e&&a.player4Outcome==="loss").length,t=s.filter(a=>a.player1Handle===e&&a.player1Outcome==="draw"||a.player2Handle===e&&a.player2Outcome==="draw"||a.player3Handle===e&&a.player3Outcome==="draw"||a.player4Handle===e&&a.player4Outcome==="draw").length;return{wins:l,losses:n,draws:t}}exportToCSV(){const e="data:text/csv;charset=utf-8,"+this.convertArrayOfObjectsToCSV(this.matchResults),s=encodeURI(e),l=document.createElement("a");l.setAttribute("href",s),l.setAttribute("download","game_results.csv"),document.body.appendChild(l),l.click(),document.body.removeChild(l)}convertArrayOfObjectsToCSV(e){if(!e||e.length===0)return"";const s=Object.keys(e[0]).join(","),l=e.map(n=>Object.values(n).map(t=>`"${t}"`).join(",")).join(`
`);return s+`
`+l}render(){const e=new Map;this.playerLogs.forEach(t=>{e.has(t.player)||e.set(t.player,[]);const a=this.getPlayerIconVariant(t),o=this.getPlayerBadgeVariant(t),x=p`
          <sl-menu-item>
            ${a?p`<sl-icon slot="prefix" library="mana" name=${String(a)}></sl-icon>`:g}
            ${t.action}
            ${o?p`<sl-badge variant=${String(o)} pill>1</sl-badge>`:g} life to <sl-badge variant="neutral">${t.life}</sl-badge>
          </sl-menu-item>
        `;e.get(t.player)?.push(x)});const s=[];for(const[t,a]of e)s.push(p`
           <sl-menu-label>${t}</sl-menu-label>
           ${a.map(o=>p`
            ${o}
           `)}
        `);const l=p`
      <sl-menu-item disabled>
        <sl-icon slot="prefix" name="info-circle"></sl-icon>
        No match actions to display.
      </sl-menu-item>
    `,n=s.length>0?s:l;return p`
      <app-header ?enableBack="${!0}"></app-header>
      <main style="padding-bottom: 5rem;">
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-tab-group>
          <sl-tab slot="nav" panel="tracker" class="hide-at-800">Tracker</sl-tab>
          <sl-tab slot="nav" panel="standings" class="hide-at-800">Standings</sl-tab>
          <sl-tab slot="nav" panel="results" class="hide-at-800">Results</sl-tab>
          <sl-tab slot="nav" panel="action-log" class="hide-at-800">Log</sl-tab>
          <sl-tab slot="nav" panel="setup" class="hide-at-800">Setup</sl-tab>
          <sl-tab-panel name="tracker">
            <div style="display: flex; flex-direction: row;justify-content: around; flex-wrap: wrap;">
              <div style="width: 50%;">
                <sl-card class="player-one" id="topLeft">
                  <form style="position: relative; height: 100%; justify-content: space-between;">
                    <sl-button variant="default" size="large" class="life-counter player-one" @click=${()=>this.updateLife(1,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle1.life}
                    </p>
                    <sl-button variant="default" size="large" class="life-counter player-one" @click=${()=>this.updateLife(1,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span class="hide-at-800" style="position: absolute; right: 8px; bottom: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
                <sl-card class="player-three" id="topRight">
                  <form style="position: relative; height: 100%; justify-content: space-between;">
                    <sl-button variant="default" size="large" class="life-counter player-three" @click=${()=>this.updateLife(3,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle3.life}
                    </p>
                    <sl-button variant="default" size="large" class="life-counter player-three" @click=${()=>this.updateLife(3,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span class="hide-at-800" style="position: absolute; right: 8px; top: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
              </div>
              <div style="width: 50%;">
                <sl-card class="player-two" id="bottomLeft">
                  <form style="position: relative; height: 100%; justify-content: space-between;">
                    <sl-button variant="default" size="large" class="life-counter player-two" @click=${()=>this.updateLife(2,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle2.life}
                    </p>
                    <sl-button variant="default" size="large" class="life-counter player-two" @click=${()=>this.updateLife(2,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span class="hide-at-800" style="position: absolute; left: 8px; bottom: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
                <sl-card class="player-four" id="bottomRight">
                  <form style="position: relative; height: 100%; justify-content: space-between;">
                    <sl-button variant="default" size="large" class="life-counter player-four" @click=${()=>this.updateLife(4,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle4.life}
                    </p>
                    <sl-button variant="default" outline size="large" class="life-counter player-four" @click=${()=>this.updateLife(4,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span class="hide-at-800" style="position: absolute; left: 8px; top: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
              </div>
              <style>
              sl-button.life-counter::part(base) {
                height: 4rem;
                justify-content: center;
                line-height: 4rem;
              }
              </style>
            </div>
          </sl-tab-panel>
          <sl-tab-panel name="standings">
            <table class="border table-striped">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>Draws</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${this.playerHandle1}</td>
                  <td>${this.getPlayerStats(this.playerHandle1).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle1).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle1).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerHandle2}</td>
                  <td>${this.getPlayerStats(this.playerHandle2).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle2).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle2).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerHandle3}</td>
                  <td>${this.getPlayerStats(this.playerHandle3).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle3).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle3).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerHandle4}</td>
                  <td>${this.getPlayerStats(this.playerHandle4).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle4).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle4).draws}</td>
                </tr>
              </tbody>
            </table>
          </sl-tab-panel>
          <sl-tab-panel name="setup">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: .5rem;">
              <sl-input
                type="number"
                label="Starting Life"
                size="medium"
                pill
                help-text="Enter a number greater than 0"
                type="number"
                value=${this.initialLifeTracker}
                @sl-change=${this.setInitialLifeTracker}
                min="0"
                style="width: 25%; text-align: center;"
              >
                <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
              </sl-input>
            </div>
            <div class="form-2-column">
              <form class="form-player-input">
                <sl-input
                  inputmode="text"
                  label="Player 1"
                  size="medium"
                  pill
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle1}
                  @sl-change=${t=>this.handlePlayerHandleChange(1,t)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
                </sl-input>
                <sl-input
                  label="Player 3"
                  size="medium"
                  clearable
                  pill
                  placeholder="Add player name"
                  value=${this.playerHandle3}
                  @sl-change=${t=>this.handlePlayerHandleChange(3,t)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-small"></sl-icon>
                </sl-input>
              </form>
              <form class="form-player-input">
                <sl-input
                  label="Player 2"
                  size="medium"
                  clearable
                  pill
                  placeholder="Add player name"
                  value=${this.playerHandle2}
                  @sl-change=${t=>this.handlePlayerHandleChange(2,t)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-small"></sl-icon>
                </sl-input>
                <sl-input
                  label="Player 4"
                  size="medium"
                  clearable
                  pill
                  placeholder="Add player name"
                  value=${this.playerHandle4}
                  @sl-change=${t=>this.handlePlayerHandleChange(4,t)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-small"></sl-icon>
                </sl-input>
              </form>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; padding-top: 1rem;">
              <sl-button variant="success" pill style="width: 25%;" @click=${this.exportToCSV}>
                Export to CSV
                <sl-icon name="file-earmark-excel-fill" slot="suffix"></sl-icon>
              </sl-button>
            </div>
          </sl-tab-panel>
          <sl-tab-panel name="action-log">
            <sl-menu>
              <sl-menu>
                ${n}
              </sl-menu>
            </sl-menu>
          </sl-tab-panel>
          <sl-tab-panel name="results">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
              <sl-button-group label="Alignment">
                <sl-button size="medium" pill class="player-one-winner" @click=${()=>this.recordResult(1)}>
                  Winner
                </sl-button>
                <sl-button size="medium" pill class="player-two-winner" @click=${()=>this.recordResult(2)}>
                  Winner
                </sl-button>
                <sl-button size="medium" pill class="player-three-winner" @click=${()=>this.recordResult(3)}>
                  Winner
                </sl-button>
                <sl-button size="medium" pill class="player-four-winner" @click=${()=>this.recordResult(4)}>
                  Winner
                </sl-button>
              </sl-button-group>
            </div>
            <table class="border table-striped">
              <thead>
                <tr>
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(1)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle1}
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(2)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle2}
                  </th>
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(3)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle3}
                  </th>
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(4)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle4}
                  </th>
                </tr>
              </thead>
              <tbody>
                ${this.matchResults.map(t=>p`
                    <tr>
                      <td>${t.player1Outcome}</td>
                      <td>${t.player2Outcome}</td>
                      <td>${t.player3Outcome}</td>
                      <td>${t.player4Outcome}</td>
                    </tr>
                  `)}
              </tbody>
            </table>
          </sl-tab-panel>
        </sl-tab-group>
        </div>
      </main>
    `}};i.styles=[H,$,P,O,k,u`
      .form-2-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .form-player-input {
        width: 100%;
        margin-right: 1rem;
        margin-left: 1rem;
      }
      @media (min-width: 1000px) {
        .form-2-column {
          flex-direction: row;
        }
      }
    `];r([d({type:Object})],i.prototype,"handle1",2);r([d({type:Object})],i.prototype,"handle2",2);r([d({type:Object})],i.prototype,"handle3",2);r([d({type:Object})],i.prototype,"handle4",2);r([c()],i.prototype,"matchResults",2);r([c()],i.prototype,"playerHandle1",2);r([c()],i.prototype,"playerHandle2",2);r([c()],i.prototype,"playerHandle3",2);r([c()],i.prototype,"playerHandle4",2);r([c()],i.prototype,"initialLifeTracker",2);r([d({type:Array})],i.prototype,"gameHistory",2);r([c()],i.prototype,"playerLogs",2);r([c()],i.prototype,"playerHandle1Actions",2);r([c()],i.prototype,"playerHandle2Actions",2);r([c()],i.prototype,"playerHandle3Actions",2);r([c()],i.prototype,"playerHandle4Actions",2);i=r([b("match-tracker")],i);var R=Object.defineProperty,A=Object.getOwnPropertyDescriptor,y=(e,s,l,n)=>{for(var t=n>1?void 0:n?A(s,l):s,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(n?o(s,l,t):o(t))||t);return n&&t&&R(s,l,t),t};let h=class extends f{constructor(){super(...arguments),this.icon="arrow-left",this.isOpen=!1,this.message="",this.pointsTracker=""}openFab(e){this.pointsTracker=e,this.isOpen=!0}open(e){this.message=e,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}render(){return this.isOpen?p`
      <sl-drawer
        placement="top"
        label="Drawer"
        with-header
        with-footer
        class="drawer-contained"
        style="--size: 50vh;"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <sl-icon-button slot="header-actions" name="info-circle" href="${L("about")}"></sl-icon-button>
                <sl-input
          type="number"
          label="Starting Points"
          size="medium"
          pill
          placeholder="Enter a number greater than 0"
          type="number"
          value=${this.pointsTracker}
          @sl-change=${this.pointsTracker}
          min="0"
          style="text-align: center;"
        >
        </sl-input>
        ${this.message}
        <sl-button slot="footer" variant="primary" data-drawer="close" @click=${this.close}>Close</sl-button>
      </sl-drawer>
    `:p``}};y([d({type:String})],h.prototype,"icon",2);y([d({type:Boolean})],h.prototype,"isOpen",2);y([d({type:String})],h.prototype,"message",2);y([d({type:String})],h.prototype,"pointsTracker",2);h=y([b("fab-drawer")],h);var j=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=(e,s,l,n)=>{for(var t=n>1?void 0:n?z(s,l):s,a=e.length-1,o;a>=0;a--)(o=e[a])&&(t=(n?o(s,l,t):o(t))||t);return n&&t&&j(s,l,t),t};let m=class extends f{constructor(){super(...arguments),this.fabDrawerOpen=!1}openFabDrawer(){this.fabDrawerOpen=!0}closeFabDrawer(){this.fabDrawerOpen=!1}fabTab(){return p`
      <sl-tab slot="nav" panel="total">Total</sl-tab>
      <sl-tab slot="nav" panel="standings">Standings</sl-tab>
      <sl-tab slot="nav" panel="results">Results</sl-tab>
      <sl-tab slot="nav" panel="action-log">Log</sl-tab>
      <sl-tab slot="nav" panel="setup">Setup</sl-tab>
    `}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <match-tracker></match-tracker>
    `}};m.styles=u`
    sl-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;w([c()],m.prototype,"fabDrawerOpen",2);m=w([b("app-counter")],m);export{m as AppCounter};
//# sourceMappingURL=app-counter-eR-20uow.js.map
