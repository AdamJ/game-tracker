import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import localForage from 'localforage';
import '../icons/mana-icon';
import '../icons/mtg-symbols';

import { styles as sharedStyles } from '../../styles/shared-styles';
import { styles } from '../../pages/app-counter/counter-styles';

import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/card/card.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/button/button.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/badge/badge.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/button-group/button-group.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/input/input.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/details/details.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/tab/tab.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/tab-group/tab-group.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/tab-panel/tab-panel.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/menu/menu.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/menu-item/menu-item.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/menu-label/menu-label.js';

interface Player {
  life: number;
}

interface Game {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  result: 'win' | 'loss' | 'draw';
  winner: string | "draw" | null;
}

interface MatchResult {
  player1Handle: string;
  player2Handle: string;
  player3Handle: string;
  player4Handle: string;
  player1LifeTracker: number;
  player2LifeTracker: number;
  player3LifeTracker: number;
  player4LifeTracker: number;
  player1Outcome: 'win' | 'loss' | 'draw';
  player2Outcome: 'win' | 'loss' | 'draw';
  player3Outcome: 'win' | 'loss' | 'draw';
  player4Outcome: 'win' | 'loss' | 'draw';
}

interface LogEntry {
  player: string;
  action: string;
  life: number;
}

@customElement('match-tracker')
export class MatchTracker extends LitElement {
  @property({ type: Object }) handle1: Player = { life: 20 };
  @property({ type: Object }) handle2: Player = { life: 20 };
  @property({ type: Object }) handle3: Player = { life: 20 };
  @property({ type: Object }) handle4: Player = { life: 20 };

  @state() matchResults: MatchResult[] = []; // Array to store game results
  @state() playerHandle1: string = "Player 1";
  @state() playerHandle2: string = "Player 2";
  @state() playerHandle3: string = "Player 3";
  @state() playerHandle4: string = "Player 4";
  @state() initialLifeTracker: number = 20;

  private storageKey = 'playerData'; // Key for localForage

  @property({ type: Array }) gameHistory: Game[] = [];

  constructor() {
    super();
    this.loadFromStorage(); // Load data when component initializes
  }

  firstUpdated() { // Called after the first render
      this.saveToStorage(); // Save initial data to storage.
  }

  static styles = [
    sharedStyles,
    styles
  ]
  @state() playerLogs: LogEntry[] = [];

  @state() playerHandle1Actions: string[] = []; // Array to store Player 1's actions
  @state() playerHandle2Actions: string[] = []; // Array to store Player 2's actions
  @state() playerHandle3Actions: string[] = []; // Array to store Player 3's actions
  @state() playerHandle4Actions: string[] = []; // Array to store Player 4's actions

  private updateLife(player: 1 | 2 | 3 | 4, change: number, action: 'Gain' | 'Lose') {
    // Define a map to quickly access player data
    const playerMap = {
      1: { handle: this.handle1, playerHandle: this.playerHandle1, setter: (value: Player) => { this.handle1 = value; } },
      2: { handle: this.handle2, playerHandle: this.playerHandle2, setter: (value: Player) => { this.handle2 = value; } },
      3: { handle: this.handle3, playerHandle: this.playerHandle3, setter: (value: Player) => { this.handle3 = value; } },
      4: { handle: this.handle4, playerHandle: this.playerHandle4, setter: (value: Player) => { this.handle4 = value; } },
    };

    const playerData = playerMap[player];

    if (playerData) {
        // Update the life total, ensuring it doesn't go below 0
        const newLife = Math.max(0, playerData.handle.life + change);

        // Update the player state
        playerData.setter({...playerData.handle, life: newLife});

        // Log the action
        console.log(`${action} ${Math.abs(change)} to ${newLife} for ${playerData.playerHandle}`);

        // Record the action
        // playerData.actions = [...playerData.actions, `${action} ${Math.abs(change)} to ${newLife}`];
        this.playerLogs = [...this.playerLogs, { player: playerData.playerHandle, action: `${action}`, life: newLife }];

        //Update the main storage
        this.saveToStorage();
    }
  }

  private getPlayerIconVariant(game: LogEntry): string | undefined {
    if (game.action.includes("Lose")) {
      return 'loyalty-down';
    } else if (game.action.includes("Gain")) {
      return 'loyalty-up';
    } else {
      return undefined;
    }
  }
  private getPlayerBadgeVariant(game: LogEntry): string | undefined {
    if (game.action.includes("Lose")) {
      return 'danger';
    } else if (game.action.includes("Gain")) {
      return 'success';
    } else {
      return undefined;
    }
  }

  private setInitialLifeTracker(event: CustomEvent) {
    const input = event.target as HTMLInputElement;
    const newLife = parseInt(input.value, 10);

    if (!isNaN(newLife) && newLife >= 0) {
      this.initialLifeTracker = newLife;
      this.handle1 = { life: newLife };
      this.handle2 = { life: newLife };
      this.handle3 = { life: newLife };
      this.handle4 = { life: newLife };
      this.saveToStorage(); // Save after initial life change
    } else {
      alert("Please enter a valid positive number for starting life.");
      input.value = this.initialLifeTracker.toString();
    }
  }

  private handlePlayerHandleChange(player: 1 | 2 | 3 | 4, event: CustomEvent) {
    const playerMap = {
      1: { name: "Player 1", setter: (value: string) => { this.playerHandle1 = value; } },
      2: { name: "Player 2", setter: (value: string) => { this.playerHandle2 = value; } },
      3: { name: "Player 3", setter: (value: string) => { this.playerHandle3 = value; } },
      4: { name: "Player 4", setter: (value: string) => { this.playerHandle4 = value; } },
    };

    const playerData = playerMap[player];

    if (playerData) {
      const newName = (event.target as HTMLInputElement).value || playerData.name;
      playerData.setter(newName);
      this.saveToStorage();
    }
  }

  private recordResult(winner: 1 | 2 | 3 | 4 | 'draw') {
    let player1Outcome: 'win' | 'loss' | 'draw' = 'loss';
    let player2Outcome: 'win' | 'loss' | 'draw' = 'loss';
    let player3Outcome: 'win' | 'loss' | 'draw' = 'loss';
    let player4Outcome: 'win' | 'loss' | 'draw' = 'loss';

    if (winner === 1) {
      player1Outcome = 'win';
      player2Outcome = 'loss';
      player3Outcome = 'loss';
      player4Outcome = 'loss';
    } else if (winner === 2) {
      player1Outcome = 'loss';
      player2Outcome = 'win';
      player3Outcome = 'loss';
      player4Outcome = 'loss';
    } else if (winner === 3) {
      player1Outcome = 'loss';
      player2Outcome = 'loss';
      player3Outcome = 'win';
      player4Outcome = 'loss';
    } else if (winner === 4) {
      player1Outcome = 'loss';
      player2Outcome = 'loss';
      player3Outcome = 'loss';
      player4Outcome = 'win';
    } else if (winner === 'draw') {
      player1Outcome = 'draw';
      player2Outcome = 'draw';
      player3Outcome = 'draw';
      player4Outcome = 'draw';
    }

    const newResult: MatchResult = {
      player1Handle: this.playerHandle1,
      player2Handle: this.playerHandle2,
      player3Handle: this.playerHandle3,
      player4Handle: this.playerHandle4,
      player1LifeTracker: this.handle1.life,
      player2LifeTracker: this.handle2.life,
      player3LifeTracker: this.handle3.life,
      player4LifeTracker: this.handle4.life,
      player1Outcome,
      player2Outcome,
      player3Outcome,
      player4Outcome,
    };

    this.matchResults = [...this.matchResults, newResult];
    this.saveToStorage();
    this.resetGame(); // Reset the game for a new round
  }

  private resetGame() {
      this.handle1 = { life: this.initialLifeTracker };
      this.handle2 = { life: this.initialLifeTracker };
      this.handle3 = { life: this.initialLifeTracker };
      this.handle4 = { life: this.initialLifeTracker };
  }

  private saveToStorage() {
    const data = {
      initialLifeTracker: this.initialLifeTracker,
      matchResults: this.matchResults,
      handle1: this.handle1,
      handle2: this.handle2,
      handle3: this.handle3,
      handle4: this.handle4,
      playerHandle1: this.playerHandle1,
      playerHandle2: this.playerHandle2,
      playerHandle3: this.playerHandle3,
      playerHandle4: this.playerHandle4,
      playerLogs: this.playerLogs,
    };
    localForage.setItem(this.storageKey, data).catch(console.error);
  }

  private loadFromStorage() {
    localForage.getItem(this.storageKey).then((data: any) => {
      if (data) {
        this.initialLifeTracker = data.initialLifeTracker || 20;
        this.matchResults = data.matchResults || [];
        this.handle1 = data.handle1 || { life: 20 };
        this.handle2 = data.handle2 || { life: 20 };
        this.handle3 = data.handle3 || { life: 20 };
        this.handle4 = data.handle4 || { life: 20 };
        this.playerHandle1 = data.playerHandle1 || "Player 1";
        this.playerHandle2 = data.playerHandle2 || "Player 2";
        this.playerHandle3 = data.playerHandle3 || "Player 3";
        this.playerHandle4 = data.playerHandle4 || "Player 4";
        this.playerHandle1Actions = data.playerHandle1Actions || [];
        this.playerHandle2Actions = data.playerHandle2Actions || [];
        this.playerHandle3Actions = data.playerHandle3Actions || [];
        this.playerHandle4Actions = data.playerHandle4Actions || [];
        // this.playerLogs = data.playerLogs;
      }
    }).catch(console.error);
  }

  private getPlayerStats(playerHandle: string) {
    const playerResults = this.matchResults.filter(
      (result) => result.player1Handle === playerHandle || result.player2Handle === playerHandle || result.player3Handle === playerHandle || result.player4Handle === playerHandle
    );

    const wins = playerResults.filter(
      (result) =>
        (result.player1Handle === playerHandle && result.player1Outcome === 'win') ||
        (result.player2Handle === playerHandle && result.player2Outcome === 'win') ||
        (result.player3Handle === playerHandle && result.player3Outcome === 'win') ||
        (result.player4Handle === playerHandle && result.player4Outcome === 'win')
    ).length;

    const losses = playerResults.filter(
      (result) =>
        (result.player1Handle === playerHandle && result.player1Outcome === 'loss') ||
        (result.player2Handle === playerHandle && result.player2Outcome === 'loss') ||
        (result.player3Handle === playerHandle && result.player3Outcome === 'loss') ||
        (result.player4Handle === playerHandle && result.player4Outcome === 'loss')
    ).length;

    const draws = playerResults.filter(
      (result) =>
        (result.player1Handle === playerHandle && result.player1Outcome === 'draw') ||
        (result.player2Handle === playerHandle && result.player2Outcome === 'draw') ||
        (result.player3Handle === playerHandle && result.player3Outcome === 'draw') ||
        (result.player4Handle === playerHandle && result.player4Outcome === 'draw')
    ).length;

    return { wins, losses, draws };
  }

  private exportToCSV() {
    const csvContent = "data:text/csv;charset=utf-8," + this.convertArrayOfObjectsToCSV(this.matchResults);

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "game_results.csv"); // Set the filename
    document.body.appendChild(link); // Required for FF
    link.click(); // Simulate click to download
    document.body.removeChild(link); // Clean up
  }

  private convertArrayOfObjectsToCSV(arr: any[]) {
    if (!arr || arr.length === 0) {
      return "";
    }

    const header = Object.keys(arr[0]).join(","); // Get header from keys
    const rows = arr.map(obj => {
      return Object.values(obj).map(value => `"${value}"`).join(","); // Escape values with quotes
    }).join("\n");

    return header + "\n" + rows;
  }

  render() {
    // Clear previous log items
    const playerLogItems = new Map<string, string[]>();

    this.playerLogs.forEach(log => {
        if (!playerLogItems.has(log.player)) {
            playerLogItems.set(log.player, []);
        }
        const iconName = this.getPlayerIconVariant(log);
        const badgeName = this.getPlayerBadgeVariant(log);
        const logItem = html`
          <wa-menu-item>
            ${iconName ? html`<wa-icon slot="prefix" library="mana" name=${String(iconName)}></wa-icon>` : nothing}
            ${log.action}
            ${badgeName ? html`<wa-badge variant=${String(badgeName)} pill>1</wa-badge>` : nothing} life to <wa-badge variant="neutral">${log.life}</wa-badge>
          </wa-menu-item>
        `;
        // @ts-ignore
        playerLogItems.get(log.player)?.push(logItem);
    });

    // Render menu items for each player
    const playerMenuItems = [];
    for (const [player, logs] of playerLogItems) {
        playerMenuItems.push(html`
           <wa-menu-label>${player}</wa-menu-label>
           ${logs.map(log => html`
            ${log}
           `)}
        `);
    }
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <main>
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <wa-tab-group>
          <wa-tab slot="nav" panel="total">Total</wa-tab>
          <wa-tab slot="nav" panel="standings">Standings</wa-tab>
          <wa-tab slot="nav" panel="results">Results</wa-tab>
          <wa-tab slot="nav" panel="action-log">Log</wa-tab>
          <wa-tab slot="nav" panel="setup">Setup</wa-tab>
          <wa-tab-panel name="total">
            <div style="display: flex; flex-direction: row; grid-gap:1; justify-content: around; flex-wrap: wrap;">
              <div style="width: 50%;">
                <wa-card class="player-one" id="topLeft">
                  <form style="position: relative;">
                    <wa-button variant="default" size="large" class="life-counter player-one" @click=${() => this.updateLife(1, 1, 'Gain')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></wa-icon>
                      Gain
                    </wa-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle1.life}
                    </p>
                    <wa-button variant="default" size="large" class="life-counter player-one" @click=${() => this.updateLife(1, -1, 'Lose')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></wa-icon>
                      Lose
                    </wa-button>
                    <span style="position: absolute; right: 8px; bottom: 8px;">
                      <wa-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-4x"></wa-icon>
                    </span>
                  </form>
                </wa-card>
                <wa-card class="player-two" id="bottomLeft">
                  <form style="position: relative;">
                    <wa-button variant="default" size="large" class="life-counter player-two" @click=${() => this.updateLife(2, 1, 'Gain')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></wa-icon>
                      Gain
                    </wa-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle2.life}
                    </p>
                    <span style="position: absolute; right: 8px; top: 8px;">
                      <wa-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-4x"></wa-icon>
                    </span>
                    <wa-button variant="default" size="large" class="life-counter player-two" @click=${() => this.updateLife(2, -1, 'Lose')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></wa-icon>
                      Lose
                    </wa-button>
                  </form>
                </wa-card>
              </div>
              <div style="width: 50%;">
                <wa-card class="player-three" id="topRight">
                  <form style="position: relative;">
                    <wa-button variant="default" size="large" class="life-counter player-three" @click=${() => this.updateLife(3, 1, 'Gain')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></wa-icon>
                      Gain
                    </wa-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle3.life}
                    </p>
                    <wa-button variant="default" size="large" class="life-counter player-three" @click=${() => this.updateLife(3, -1, 'Lose')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></wa-icon>
                      Lose
                    </wa-button>
                    <span style="position: absolute; left: 8px; bottom: 8px;">
                      <wa-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-4x"></wa-icon>
                    </span>
                  </form>
                </wa-card>
                <wa-card class="player-four" id="bottomRight">
                  <form style="position: relative;">
                    <wa-button variant="default" size="large" class="life-counter player-four" @click=${() => this.updateLife(4, 1, 'Gain')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></wa-icon>
                      Gain
                    </wa-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle4.life}
                    </p>
                    <wa-button variant="default" outline size="large" class="life-counter player-four" @click=${() => this.updateLife(4, -1, 'Lose')}>
                      <wa-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></wa-icon>
                      Lose
                    </wa-button>
                    <span style="position: absolute; left: 8px; top: 8px;">
                      <wa-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-4x"></wa-icon>
                    </span>
                  </form>
                </wa-card>
              </div>
              <style>
              wa-button.life-counter::part(base) {
                height: 4rem;
                justify-content: center;
                line-height: 4rem;
              }
              </style>
            </div>
          </wa-tab-panel>
          <wa-tab-panel name="standings">
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
          </wa-tab-panel>
          <wa-tab-panel name="setup">
            <div style="display: flex; flex-direction: row; flex-wrap; wrap; gap: 1rem;">
              <form>
                <wa-input
                  type="number"
                  label="Starting Life"
                  size="large"
                  type="number"
                  value=${this.initialLifeTracker}
                  @wa-change=${this.setInitialLifeTracker}
                  min="0"
                >
                  <wa-icon library="keyrune" name="s99" slot="prefix"></wa-icon>
                </wa-input>
              </form>
              <form>
                <wa-input
                  inputmode="text"
                  label="Player 1"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle1}
                  @wa-change=${(e: CustomEvent) => this.handlePlayerHandleChange(1, e)}
                >
                  <wa-icon library="keyrune" name="lea" slot="prefix"></wa-icon>
                </wa-input>
                <wa-input
                  label="Player 2"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle2}
                  @wa-change=${(e: CustomEvent) => this.handlePlayerHandleChange(2, e)}
                >
                  <wa-icon library="keyrune" name="leb" slot="prefix"></wa-icon>
                </wa-input>
              </form>
              <form>
                <wa-input
                  label="Player 3"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle3}
                  @wa-change=${(e: CustomEvent) => this.handlePlayerHandleChange(3, e)}
                >
                  <wa-icon library="keyrune" name="2ed" slot="prefix"></wa-icon>
                </wa-input>
                <wa-input
                  label="Player 4"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle4}
                  @wa-change=${(e: CustomEvent) => this.handlePlayerHandleChange(4, e)}
                >
                  <wa-icon library="keyrune" name="3ed" slot="prefix"></wa-icon>
                </wa-input>
              </form>
            </div>
            <wa-button @click=${this.exportToCSV}>Export to CSV</wa-button>
          </wa-tab-panel>
          <wa-tab-panel name="action-log">
          <wa-menu>
            ${playerMenuItems}
          </wa-menu>
          </wa-tab-panel>
          <wa-tab-panel name="results">
            <div style="display: flex; width: 100%;>
              <div>
                <wa-button-group label="Alignment">
                  <wa-button size="medium" variant="neutral" class="player-one" @click=${() => this.recordResult(1)}><wa-icon slot="prefix" library="keyrune" name="3ed"></wa-icon>${this.playerHandle1} Wins</wa-button>
                  <wa-button size="medium" class="player-two" @click=${() => this.recordResult(2)}>
                    <wa-icon slot="prefix" library="keyrune" name="3ed"></wa-icon>
                    ${this.playerHandle2} Wins
                  </wa-button>
                  <wa-button size="medium" class="player-three" @click=${() => this.recordResult(3)}><wa-icon slot="prefix" library="keyrune" name="3ed"></wa-icon>${this.playerHandle3} Wins</wa-button>
                  <wa-button size="medium" class="player-four" @click=${() => this.recordResult(4)}><wa-icon slot="prefix" library="keyrune" name="3ed"></wa-icon>${this.playerHandle4} Wins</wa-button>
                </wa-button-group>
                <style>
                  wa-button-group {
                  display: flex; flex-direction: row;}
                  wa-button {
                  width: 100%;}
                </style>
              </div>
              <table bordered table-striped>
                <thead>
                  <tr>
                    <th>${this.playerHandle1}</th>
                    <th>${this.playerHandle2}</th>
                    <th>${this.playerHandle3}</th>
                    <th>${this.playerHandle4}</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.matchResults.map(
                    (result) => html`
                      <tr>
                        <td>${result.player1Outcome}</td>
                        <td>${result.player2Outcome}</td>
                        <td>${result.player3Outcome}</td>
                        <td>${result.player4Outcome}</td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            </div>
          </wa-tab-panel>
        </wa-tab-group>
      </main>
    `;
  }
}
