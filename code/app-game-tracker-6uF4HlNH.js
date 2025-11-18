import{s as S,a as w,i as M,n as y,r as o,b as u,x as n,t as m}from"./index-BXUZZy4M.js";import{l as j,t as z}from"./table-styles-fj59AIDj.js";const h={PLAYERS:"players",MATCH_HISTORY:"matchHistory",PLAYER_DATA:"playerData",APP_SETTINGS:"appSettings"};class L{constructor(){this.store=j.createInstance({name:"game-tracker-db",storeName:"game_data",description:"Game tracker application data"})}async getItem(t){try{return await this.store.getItem(t)}catch(s){return console.error(`Error getting item ${t}:`,s),null}}async setItem(t,s){try{return await this.store.setItem(t,s),!0}catch(r){return console.error(`Error setting item ${t}:`,r),!1}}async removeItem(t){try{return await this.store.removeItem(t),!0}catch(s){return console.error(`Error removing item ${t}:`,s),!1}}async clear(){try{return await this.store.clear(),!0}catch(t){return console.error("Error clearing storage:",t),!1}}async keys(){try{return await this.store.keys()}catch(t){return console.error("Error getting keys:",t),[]}}async length(){try{return await this.store.length()}catch(t){return console.error("Error getting length:",t),0}}async getPlayers(){return await this.getItem(h.PLAYERS)||[]}async savePlayers(t){return await this.setItem(h.PLAYERS,t)}async getMatchHistory(){return await this.getItem(h.MATCH_HISTORY)||[]}async saveMatchHistory(t){return await this.setItem(h.MATCH_HISTORY,t)}async getPlayerData(){return await this.getItem(h.PLAYER_DATA)}async savePlayerData(t){return await this.setItem(h.PLAYER_DATA,t)}async getAppSettings(){return await this.getItem(h.APP_SETTINGS)||{theme:"auto",defaultLifeTotal:40,enableNotifications:!0}}async saveAppSettings(t){return await this.setItem(h.APP_SETTINGS,t)}async migrateFromLocalStorage(){try{const t=localStorage.getItem("players");if(t){const r=JSON.parse(t);await this.savePlayers(r),console.log("Migrated players from localStorage")}const s=localStorage.getItem("matchHistory");if(s){const r=JSON.parse(s);await this.saveMatchHistory(r),console.log("Migrated match history from localStorage")}}catch(t){console.error("Error migrating from localStorage:",t)}}async exportAllData(){const t={},s=await this.keys();for(const r of s)t[r]=await this.store.getItem(r);return t}async importData(t){try{for(const[s,r]of Object.entries(t))await this.store.setItem(s,r);return!0}catch(s){return console.error("Error importing data:",s),!1}}}const c=new L;var H=Object.freeze,A=Object.defineProperty,W=Object.getOwnPropertyDescriptor,O=(e,t,s,r)=>{for(var a=r>1?void 0:r?W(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&A(t,s,a),a},q=(e,t)=>H(A(e,"raw",{value:H(e.slice())})),I;let f=class extends u{constructor(){super(...arguments),this.players=[],this.newPlayer="",this.errorMessage=""}handleSubmit(e){e.preventDefault(),this.addPlayer()}addPlayer(){if(this.newPlayer&&this.validatePlayerName(this.newPlayer)){this.dispatchEvent(new CustomEvent("player-added",{detail:this.newPlayer})),this.newPlayer="";const e=this.shadowRoot.querySelector("sl-input");e&&(e.helpText="")}else{const e=this.shadowRoot.querySelector("sl-input");e&&(e.helpText=this.errorMessage)}}handleInputChange(e){const t=e.target;this.newPlayer=t.value;const s=this.shadowRoot.querySelector("sl-input");s&&(this.validatePlayerName(this.newPlayer)?s.helpText="":s.helpText=this.errorMessage)}validatePlayerName(e){return/^[a-zA-Z0-9]+$/.test(e)?(this.errorMessage="",!0):(this.errorMessage="Enter a Name containing only letters or numbers with no spaces or special characters.",!1)}removePlayer(e){this.dispatchEvent(new CustomEvent("remove-player",{detail:e}))}clearAllPlayers(){this.dispatchEvent(new CustomEvent("clear-all-players"))}render(){return n(I||(I=q([`
      <div style="display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap; grid-gap: 1rem; padding-left: 1rem; padding-right: 1rem;">
        <form
          class="input-validation-custom"
          @submit=`,`
        >
          <sl-input
            .value=`,`
            @sl-input=`,`
            spellcheck="true"
            name="name"
            label="Name"
            required
            clearable
            autofocus
            autocomplete="off"
            help-text=`,`
            class="player-input"
            style="min-width: 20rem;"
          >
            <sl-icon library="default" name="person" slot="prefix"></sl-icon>
          </sl-input>
          <sl-button
            type="button"
            variant="primary"
            outline
            @click=`,`
            class="larger-icon"
          >
            <sl-icon library="default" slot="prefix" name="person-fill-add"></sl-icon>
            Add Player
          </sl-button>
        </form>
        <div style="display: flex; flex-direction: column; grid-gap: .5rem; flex: 1;">
          <p style="margin-top: .25rem; margin-bottom: .25rem;">
            <strong>Player List</strong>
          </p>
          <sl-alert open closable class="alert-closable">
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            Removing a player from the list does <u>not</u> remove them from the Standings or History.
          </sl-alert>
          <script>
            const alert = document.querySelector('.alert-closable');
            alert.addEventListener('sl-after-hide', () => {
              setTimeout(() => (alert.open = true), 2000);
            });
          <\/script>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; grid-gap: .5rem; width: 100%;">
            `,`
          </div>
        </div>
      </div>
      <style>
        sl-tab-panel {
          margin-left: 1rem;
          margin-right: 1rem;
        }
        sl-card {
          width: 100%;
        }
        .player-input::part(form-control-help-text) {
          color: var(--sl-color-danger-600);
        }
        .player-input::part(form-control-help-text)[attr="All fixed!"] {
          color: var(--sl-color-success-600);
        }
        .input-validation-custom {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: .5rem;
          flex: 1;
        }
      </style>
      `])),this.handleSubmit,this.newPlayer,this.handleInputChange,this.errorMessage,this.addPlayer,this.players.map(e=>n`
              <sl-tag variant="primary" removable @sl-remove=${()=>this.removePlayer(e)}>
                ${e}
              </sl-tag>
            `))}};f.styles=[S,w,M`

    `];O([y({type:Array})],f.prototype,"players",2);O([o()],f.prototype,"newPlayer",2);O([o()],f.prototype,"errorMessage",2);f=O([m("player-input")],f);const D=M`
  sl-input::part(base) {
    border-radius: 0.75rem;
    background: var(--Recessed);
    background-blend-mode: luminosity, color-burn;
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
  }
  sl-radio-group::part(form-control-input) {
    display: flex;
    flex-direction: row;
    grid-gap: 1rem;
  }
`;var N=Object.defineProperty,V=Object.getOwnPropertyDescriptor,b=(e,t,s,r)=>{for(var a=r>1?void 0:r?V(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&N(t,s,a),a};let g=class extends u{constructor(){super(...arguments),this.players=[],this.player1="",this.player2="",this.winner="draw"}recordMatch(){if(this.player1&&this.player2&&this.player1!==this.player2){let e;this.winner==="draw"?e="draw":this.winner===this.player1?e="win":e="loss",this.dispatchEvent(new CustomEvent("match-recorded",{detail:{player1:this.player1,player2:this.player2,result:e,winner:this.winner}}))}}handlePlayer1Change(e){const t=e.target;this.player1=t.value,(this.winner===this.player2||this.winner===this.player1)&&(this.winner="draw")}handlePlayer2Change(e){const t=e.target;this.player2=t.value,(this.winner===this.player1||this.winner===this.player2)&&(this.winner="draw")}handleWinnerChange(e){const t=e.target;this.winner=t.value==="draw"?"draw":t.value}render(){const e=this.players.filter(l=>l.name!==this.player2),t=this.players.filter(l=>l.name!==this.player1),s=this.player1!==""&&this.player2!=="",r=this.player1===""?"Player 1":this.player1,a=this.player2===""?"Player 2":this.player2;return n`
      <form style="
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
      ">
        <sl-select
          value=${this.player1}
          @sl-change=${this.handlePlayer1Change}
          clearable
          class="label-on-left"
          help-text="Select a player"
        >
          <!-- <sl-option value="">Select a player</sl-option> -->
          ${e.map(l=>n`<sl-option value=${l.name}>${l.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-select
          value=${this.player2}
          @sl-change=${this.handlePlayer2Change}
          class="label-on-left"
          help-text="Select a player"
          clearable
        >
          ${t.map(l=>n`<sl-option value=${l.name}>${l.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.winner}"
          aria-label="Win selector group"
          style="display: flex; flex-direction: row;"
        >
          <sl-radio
            value=${this.player1}
            ?disabled="${!s}"
            aria-label="select for player one"
          >
            ${r}
          </sl-radio>
          <sl-radio
            value="draw"
            ?disabled="${!s}"
            aria-label="select for a draw"
          >
            Draw
          </sl-radio>
          <sl-radio
            value=${this.player2}
            ?disabled="${!s}"
            aria-label="select for player two"
          >
            ${a}
          </sl-radio>
        </sl-radio-group>
        <br />
        <sl-button variant="primary" @click=${this.recordMatch} ?disabled=${!s}>
          Record Result</sl-button>
      </form>
      <style>
          .label-on-left {
            --label-width: 5rem;
            --gap-width: 1rem;
          }

          .label-on-left + .label-on-left {
            margin-top: var(--sl-spacing-medium);
          }

          // .label-on-left::part(form-control) {
          //   display: grid;
          //   grid: auto / var(--label-width) 1fr;
          //   gap: var(--sl-spacing-3x-small) var(--gap-width);
          //   align-items: center;
          // }

          .label-on-left::part(form-control-label) {
            text-align: right;
          }

          .label-on-left::part(form-control-help-text) {
            grid-column-start: 2;
          }
          sl-select::part(form-control-input) {
            max-width: 550px;
          }
      </style>
    `}};g.styles=[w,D];b([y({type:Array})],g.prototype,"players",2);b([o()],g.prototype,"player1",2);b([o()],g.prototype,"player2",2);b([o()],g.prototype,"winner",2);g=b([m("match-input")],g);var U=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,T=(e,t,s,r)=>{for(var a=r>1?void 0:r?Y(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&U(t,s,a),a};let $=class extends u{constructor(){super(...arguments),this.standings=[]}render(){return n`
      <table class="border table-striped" style="margin-bottom: 2.5rem;">
        <thead>
          <tr>
            <th style="text-align: left;">Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
            <th class="hide-at-800">Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          ${this.standings.map(e=>n`
            <tr>
              <td>${e.name}</td>
              <td style="text-align: center;">${e.wins}</td>
              <td style="text-align: center;">${e.losses}</td>
              <td style="text-align: center;">${e.draws}</td>
              <td style="text-align: center;">${e.points}</td>
              <td class="hide-at-800" style="text-align: center;">${e.winPercentage||0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}};$.styles=[S,w,z,M`
  `];T([y({type:Array})],$.prototype,"standings",2);$=T([m("standings-display")],$);var B=Object.defineProperty,G=Object.getOwnPropertyDescriptor,_=(e,t,s,r)=>{for(var a=r>1?void 0:r?G(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&B(t,s,a),a};let v=class extends u{constructor(){super(...arguments),this.match=null,this.isOpen=!1,this.editedWinner="draw"}open(e){this.match=e,this.editedWinner=e.winner,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}confirm(){if(this.match){let e;this.editedWinner==="draw"?e="draw":this.editedWinner===this.match.player1?e="win":e="loss",this.dispatchEvent(new CustomEvent("match-edited",{detail:{...this.match,result:e,winner:this.editedWinner}})),this.close()}}handleWinnerChange(e){const t=e.target;this.editedWinner=t.value==="draw"?"draw":t.value}render(){return!this.isOpen||!this.match?n``:n`
      <sl-dialog
        label="Edit Results"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p style="text-align: center;">
          <strong>Matchup:</strong>
          <br />
          <span style="font-size: 2rem;">${this.match.player1} vs ${this.match.player2}</span>

        </p>
        <div style="text-align: center;">
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.editedWinner}"
        >
          <sl-radio-button
            value=${this.match.player1}
          >
            ${this.match.player1}
          </sl-radio-button>
          <sl-radio-button
            value="draw"
          >
            Draw
          </sl-radio-button>
          <sl-radio-button
            value=${this.match.player2}
          >
            ${this.match.player2}
          </sl-radio-button>
        </sl-radio-group>
        </div>
        <sl-button slot="footer" variant="default" outline @click=${this.close}>
          Cancel
        </sl-button>
        <sl-button slot="footer" variant="success" @click=${this.confirm}>
          Update
        </sl-button>
      </sl-dialog>
      <style>
        sl-dialog::part(header-actions) {
          display: none;
        }
        .larger-icon::part(prefix) {
          font-size: 1.125rem;
        }
      </style>
    `}};_([y({type:Object})],v.prototype,"match",2);_([y({type:Boolean})],v.prototype,"isOpen",2);_([o()],v.prototype,"editedWinner",2);v=_([m("edit-modal")],v);var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,R=(e,t,s,r)=>{for(var a=r>1?void 0:r?J(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&F(t,s,a),a};let P=class extends u{constructor(){super(...arguments),this.matchHistory=[]}editMatch(e){this.dispatchEvent(new CustomEvent("edit-match",{detail:e}))}getPlayerBadgeVariant(e,t){return t.winner==="draw"?"neutral":t.winner===e?"success":"danger"}getPlayerIconVariant(e,t){return t.winner==="draw"?"bookmarks":t.winner===e?"trophy":"emoji-frown"}getPlayerResultString(e,t){return t.winner==="draw"?"draw":t.winner===e?"win":"loss"}render(){return n`
      <sl-menu>
        ${this.matchHistory.map((e,t)=>n`
            <sl-menu-item>
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(e.player1,e)}"
              >
                <span>${this.getPlayerResultString(e.player1,e)}</span>
              </sl-badge>
                ${e.player1} vs ${e.player2}
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(e.player2,e)}"
              >
                <span>${this.getPlayerResultString(e.player2,e)}</span>
              </sl-badge>
              <sl-button
                slot="suffix"
                variant="default"
                outline
                @click=${()=>this.editMatch(t)}
                >Edit</sl-button
              >
            </sl-menu-item>
          `)}
      </sl-menu>
    `}};P.styles=[w];R([y({type:Array})],P.prototype,"matchHistory",2);P=R([m("match-history")],P);var K=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,E=(e,t,s,r)=>{for(var a=r>1?void 0:r?Z(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&K(t,s,a),a};let x=class extends u{constructor(){super(...arguments),this.isOpen=!1,this.message=""}open(e){this.message=e,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.close()}render(){return this.isOpen?n`
      <sl-dialog
        label="Clear All Data"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="danger" @click=${this.confirm}>
          Confirm
        </sl-button>
        <sl-button slot="footer" variant="default" @click=${this.close}>
          Cancel
        </sl-button>
      </sl-dialog>
    `:n``}};E([y({type:Boolean})],x.prototype,"isOpen",2);E([y({type:String})],x.prototype,"message",2);x=E([m("confirmation-modal")],x);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,d=(e,t,s,r)=>{for(var a=r>1?void 0:r?X(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=(r?i(t,s,a):i(a))||a);return r&&a&&Q(t,s,a),a};let p=class extends u{constructor(){super(...arguments),this.activeTab="standings",this.players=[],this.matchHistory=[],this.standings=[],this.isLoading=!0,this.editModalOpen=!1,this.editMatchIndex=null,this.confirmationModalOpen=!1}connectedCallback(){super.connectedCallback(),this.loadData()}async loadData(){try{const e=localStorage.getItem("players"),t=localStorage.getItem("matchHistory");(e||t)&&(console.log("Migrating data from localStorage to centralizedStorage"),await c.migrateFromLocalStorage(),localStorage.removeItem("players"),localStorage.removeItem("matchHistory")),this.players=await c.getPlayers(),this.matchHistory=await c.getMatchHistory()}catch(e){console.error("Error loading data:",e),this.players=[],this.matchHistory=[],await c.savePlayers(this.players)}finally{this.isLoading=!1,this.calculateStandings()}}async addPlayer(e){this.players=[...this.players,e],await c.savePlayers(this.players),this.calculateStandings(),this.requestUpdate()}async removePlayer(e){this.players=this.players.filter(t=>t!==e),await c.savePlayers(this.players),this.calculateStandings(),this.requestUpdate()}async clearAllPlayers(){this.players=[],await c.savePlayers(this.players),this.calculateStandings(),this.requestUpdate()}async recordMatch(e){this.matchHistory=[...this.matchHistory,e],await c.saveMatchHistory(this.matchHistory),this.calculateStandings(),this.requestUpdate()}calculateStandings(){const e=this.initializeStandings();this.matchHistory.forEach(t=>this.applyMatchResult(t,e)),this.finalizeStandings(e)}initializeStandings(){const e=new Map;return this.players.forEach(t=>{e.set(t,{wins:0,losses:0,draws:0,points:0,winPercentage:0})}),e}applyMatchResult(e,t){const s=t.get(e.player1),r=t.get(e.player2);s&&r?e.result==="win"?(s.wins++,s.points+=3,r.losses++):e.result==="loss"?(r.wins++,r.points+=3,s.losses++):(s.draws++,s.points++,r.draws++,r.points++):(s||console.error(`Player not found in standings: ${e.player1}`),r||console.error(`Player not found in standings: ${e.player2}`))}finalizeStandings(e){this.players.forEach(t=>{const s=e.get(t),r=s.wins+s.losses+s.draws;s.winPercentage=r>0?s.wins/r*100:0,s.winPercentage=parseFloat(s.winPercentage.toFixed(2))}),this.standings=Array.from(e.entries()).map(([t,s])=>({name:t,wins:s.wins,losses:s.losses,draws:s.draws,points:s.points,winPercentage:s.winPercentage})),this.standings.sort((t,s)=>s.points!==t.points?s.points-t.points:(s.winPercentage||0)-(t.winPercentage||0))}openEditModal(e){this.editMatchIndex=e,this.editModalOpen=!0}async editMatch(e){this.editMatchIndex!==null&&(this.matchHistory=this.matchHistory.map((t,s)=>s===this.editMatchIndex?e:t),await c.saveMatchHistory(this.matchHistory),this.calculateStandings(),this.editMatchIndex=null,this.editModalOpen=!1,this.requestUpdate())}exportMatchResults(){const e=this.matchHistory.map(t=>`${t.player1},${t.player2},${t.result}`).join(`
`);this.downloadCSV(e,"match-results.csv")}exportStandings(){const e=this.standings.map(t=>`${t.name},${t.wins},${t.losses},${t.draws},${t.points},${t.winPercentage||0}`).join(`
`);this.downloadCSV(e,"standings.csv")}downloadCSV(e,t){const s=new Blob([e],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(s),a=document.createElement("a");a.href=r,a.setAttribute("download",t),document.body.appendChild(a),a.click(),document.body.removeChild(a)}async clearMatchResultsConfirmed(){this.matchHistory=[],await c.saveMatchHistory(this.matchHistory),this.calculateStandings(),this.requestUpdate()}openConfirmationModal(){this.confirmationModalOpen=!0}closeConfirmationModal(){this.confirmationModalOpen=!1}async clearStandingsConfirmed(){this.standings=[],this.matchHistory=[],await c.removeItem(h.MATCH_HISTORY),this.calculateStandings(),this.requestUpdate(),this.closeConfirmationModal()}setActiveTab(e){this.activeTab=e}render(){return this.isLoading?n`
        <p>Loading...</p>
        <sl-spinner style="font-size: 3rem;"></sl-spinner>
      `:n`
      <div class="page-header">
        <h1 class="text-truncate">Tournament</h1>
        <sl-button-group>
          <sl-button variant="success" outline  size="small" label="export standings" @click=${this.exportStandings}>
            Export Standings
          </sl-button>
          <sl-button variant="warning" outline size="small" label="action to clear standings"  @click=${this.clearStandingsConfirmed}>
            Clear Standings
          </sl-button>
          <sl-button variant="danger" outline size="small" label="launch a modal to confirm clearing of match data" @click=${this.openConfirmationModal}>
            Clear All
          </sl-button>
        </sl-button-group>
      </div>
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-details summary="Match details" open>
          <match-input .players=${this.players.map(e=>({name:e}))} @match-recorded=${e=>this.recordMatch(e.detail)}></match-input>
        </sl-details>
        <sl-tab-group active-tab=${this.activeTab}>
          <sl-tab slot="nav" panel="standings" class="ios-tab">
            <sl-icon src="/assets/svg/ranking-star-solid.svg" style="font-size: 1rem; fill: var(--sl-color-neutral-600); padding-right: 4px;"></sl-icon> Standings
          </sl-tab>
          <sl-tab slot="nav" panel="history" class="ios-tab">
            <sl-icon src="/assets/svg/timeline-solid.svg" style="font-size: 1rem; fill: var(--sl-color-neutral-600); padding-right: 4px;"></sl-icon> History</sl-tab>
          <sl-tab slot="nav" panel="players" class="ios-tab">
            <sl-icon src="/assets/svg/users-solid.svg" style="font-size: 1rem; fill: var(--sl-color-neutral-600); padding-right: 4px;"></sl-icon>
            Players</sl-tab>
          <sl-tab-panel name="standings">
            <standings-display .standings=${this.standings}></standings-display>
          </sl-tab-panel>
          <sl-tab-panel name="history">
            <div slot="header">
              <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; grid-gap: .5rem; width: 100%;">
                Match results
                <sl-tooltip content="Export Results">
                  <sl-button variant="success" size="small" pill label="export match results" @click=${this.exportMatchResults}>
                    <sl-icon slot="prefix" library="default" name="file-earmark-excel-fill" label="Export Results"></sl-icon>
                    Export <span class="hide-at-800">Standings</span>
                  </sl-button>
                </sl-tooltip>
              </div>
            </div>
            <match-history .matchHistory=${this.matchHistory} @edit-match=${e=>this.openEditModal(e.detail)}></match-history>
          </sl-tab-panel>
          <sl-tab-panel name="players">
            <player-input
              @player-added=${e=>this.addPlayer(e.detail)}
              @remove-player=${e=>this.removePlayer(e.detail)}
              @clear-all-players=${()=>this.clearAllPlayers()}
              .players=${this.players}
            ></player-input>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
      <edit-modal .match=${this.editMatchIndex!==null?this.matchHistory[this.editMatchIndex]:null} .isOpen=${this.editModalOpen} @match-edited=${e=>this.editMatch(e.detail)} @close=${()=>this.editModalOpen=!1}></edit-modal>
      <confirmation-modal
        .isOpen=${this.confirmationModalOpen}
        message="Are you sure you want to clear the match data? Standings and History will be deleted. Players must be removed individually."
        @confirm=${this.clearMatchResultsConfirmed}
        @close=${this.closeConfirmationModal}
      ></confirmation-modal>
      <style>
        sl-card {
          width: 100%;
        }
        sl-menu-item {
          background-color: var(--sl-color-neutral-50);
        }
      </style>
    `}};p.styles=[S,w,D];d([o()],p.prototype,"activeTab",2);d([o()],p.prototype,"players",2);d([o()],p.prototype,"matchHistory",2);d([o()],p.prototype,"standings",2);d([o()],p.prototype,"isLoading",2);d([o()],p.prototype,"editModalOpen",2);d([o()],p.prototype,"editMatchIndex",2);d([o()],p.prototype,"confirmationModalOpen",2);p=d([m("standings-tracker")],p);var k=Object.getOwnPropertyDescriptor,ee=(e,t,s,r)=>{for(var a=r>1?void 0:r?k(t,s):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(a=i(a)||a);return a};let C=class extends u{render(){return n`
      <main style="margin: 0 .5rem">
        <standings-tracker></standings-tracker>
      </main>
      <app-navigation></app-navigation>
      <style>
        sl-button::part(prefix) sl-icon {
          font-size: 1.125rem;
        }
      </style>
    `}};C.styles=[S,M`
    `];C=ee([m("app-standings")],C);export{C as AppDashboard};
//# sourceMappingURL=app-game-tracker-6uF4HlNH.js.map
