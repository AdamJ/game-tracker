import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import localForage from 'localforage';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
// import { styles } from './about-styles';
interface Player {
  life: number;
}

import { styles as sharedStyles } from '../../styles/shared-styles'
import { styles } from './counter-styles';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';

interface GameResult {
  player1Name: string;
  player2Name: string;
  player1Life: number;
  player2Life: number;
  player1Result: 'win' | 'loss' | 'draw';
  player2Result: 'win' | 'loss' | 'draw';
}

@customElement('app-counter')
export class AppCounter extends LitElement {
  @property({ type: Object }) player1: Player = { life: 20 };
  @property({ type: Object }) player2: Player = { life: 20 };

  @state() gameResults: GameResult[] = []; // Array to store game results
  @state() playerName1: string = "Player 1";
  @state() playerName2: string = "Player 2";
  @state() initialLife: number = 20;

  private storageKey = 'playerData'; // Key for localForage

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

  @state() player1Actions: string[] = []; // Array to store Player 1's actions
  @state() player2Actions: string[] = []; // Array to store Player 2's actions

  private updateLife(player: 1 | 2, change: number, action: 'Gain' | 'Lose') {
    if (player === 1) {
      this.player1 = { ...this.player1, life: Math.max(0, this.player1.life + change) };
      console.log(`${action} ${Math.abs(change)} to ${this.player1.life}`); // Log the action
      this.player1Actions = [...this.player1Actions, `${action} ${Math.abs(change)} to ${this.player1.life}`];
    } else {
      this.player2 = { ...this.player2, life: Math.max(0, this.player2.life + change) };
      console.log(`${action} ${Math.abs(change)} to ${this.player2.life}`); // Log the action
      this.player2Actions = [...this.player2Actions, `${action} ${Math.abs(change)} to ${this.player2.life}`];
    }
    this.saveToStorage();
  }

  private setInitialLife(event: CustomEvent) {
    const input = event.target as HTMLInputElement;
    const newLife = parseInt(input.value, 10);

    if (!isNaN(newLife) && newLife >= 0) {
      this.initialLife = newLife;
      this.player1 = { life: newLife };
      this.player2 = { life: newLife };
      this.saveToStorage(); // Save after initial life change
    } else {
      alert("Please enter a valid positive number for starting life.");
      input.value = this.initialLife.toString();
    }
  }

  private handlePlayerNameChange(player: 1 | 2, event: CustomEvent) {
    const newName = (event.target as HTMLInputElement).value || (player === 1 ? "Player 1" : "Player 2");
    if (player === 1) {
      this.playerName1 = newName;
    } else {
      this.playerName2 = newName;
    }
    this.saveToStorage(); // Save after name change
  }

  private recordResult(winner: 1 | 2 | 'draw') {
    let player1Result: 'win' | 'loss' | 'draw' = 'loss';
    let player2Result: 'win' | 'loss' | 'draw' = 'loss';

    if (winner === 1) {
      player1Result = 'win';
      player2Result = 'loss';
    } else if (winner === 2) {
      player1Result = 'loss';
      player2Result = 'win';
    } else if (winner === 'draw') {
      player1Result = 'draw';
      player2Result = 'draw';
    }

    const newResult: GameResult = {
      player1Name: this.playerName1,
      player2Name: this.playerName2,
      player1Life: this.player1.life,
      player2Life: this.player2.life,
      player1Result,
      player2Result,
    };

    this.gameResults = [...this.gameResults, newResult];
    this.saveToStorage();
    this.resetGame(); // Reset the game for a new round
  }

  private resetGame() {
      this.player1 = { life: this.initialLife };
      this.player2 = { life: this.initialLife };
  }

  private saveToStorage() {
    const data = {
      player1: this.player1,
      player2: this.player2,
      playerName1: this.playerName1,
      playerName2: this.playerName2,
      initialLife: this.initialLife,
      gameResults: this.gameResults,
      player1Actions: this.player1Actions,
      player2Actions: this.player2Actions,
    };
    localForage.setItem(this.storageKey, data).catch(console.error);
  }

  private loadFromStorage() {
    localForage.getItem(this.storageKey).then((data: any) => {
      if (data) {
        this.player1 = data.player1 || { life: 20 };
        this.player2 = data.player2 || { life: 20 };
        this.playerName1 = data.playerName1 || "Player 1";
        this.playerName2 = data.playerName2 || "Player 2";
        this.initialLife = data.initialLife || 20;
        this.gameResults = data.gameResults || [];
        this.player1Actions = data.player1Actions || [];
        this.player2Actions = data.player2Actions || [];
      }
    }).catch(console.error);
  }

  private getPlayerStats(playerName: string) {
    const playerResults = this.gameResults.filter(
      (result) => result.player1Name === playerName || result.player2Name === playerName
    );

    const wins = playerResults.filter(
      (result) =>
        (result.player1Name === playerName && result.player1Result === 'win') ||
        (result.player2Name === playerName && result.player2Result === 'win')
    ).length;

    const losses = playerResults.filter(
      (result) =>
        (result.player1Name === playerName && result.player1Result === 'loss') ||
        (result.player2Name === playerName && result.player2Result === 'loss')
    ).length;

    const draws = playerResults.filter(
      (result) =>
        (result.player1Name === playerName && result.player1Result === 'draw') ||
        (result.player2Name === playerName && result.player2Result === 'draw')
    ).length;

    return { wins, losses, draws };
  }

  private exportToCSV() {
    const csvContent = "data:text/csv;charset=utf-8," + this.convertArrayOfObjectsToCSV(this.gameResults);

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
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <main>
        <h2>Counter Page</h2>
        <sl-details summary="Game Details">
          <div style="display: flex; flex-direction: row;">
            <sl-input
              type="number"
              label="Starting Life"
              size="small"
              type="number"
              value=${this.initialLife}
              @sl-change=${this.setInitialLife}
              min="0"
            ></sl-input>
            <sl-input
              inputmode="text"
              label="Player 1"
              size="small"
              clearable
              placeholder="Add player name"
              value=${this.playerName1}
              @sl-change=${(e: CustomEvent) => this.handlePlayerNameChange(1, e)}
            ></sl-input>
            <sl-input
              label="Player 2"
              size="small"
              clearable
              placeholder="Add player name"
              value=${this.playerName2}
              @sl-change=${(e: CustomEvent) => this.handlePlayerNameChange(2, e)}
            ></sl-input>
          </div>
          <sl-button @click=${this.exportToCSV}>Export to CSV</sl-button>
        </sl-details>
        <sl-tab-group>
          <sl-tab slot="nav" panel="total">Total</sl-tab>
          <sl-tab slot="nav" panel="track">Track</sl-tab>
          <sl-tab-panel name="total">
            <div class="display-flex flex-direction-row gap-1 justify-content-around">
              <sl-card>
                <form>
                  <span class="text-center text-xlarge">${this.player1.life}</span>
                  <sl-button @click=${() => this.updateLife(1, -1, 'Lose')}>
                    <sl-icon name="subtract" slot="prefix"></sl-icon>
                    Lose Life
                  </sl-button>
                  <sl-button @click=${() => this.updateLife(1, 1, 'Gain')}>
                    <sl-icon name="plus" slot="prefix"></sl-icon>
                    Gain Life
                  </sl-button>
                </form>
              </sl-card>
              <sl-card>
                <form>
                  <span class="text-center text-xlarge">${this.player2.life}</span>
                  <sl-button @click=${() => this.updateLife(2, -1, 'Lose')}>
                    <sl-icon name="subtract" slot="prefix"></sl-icon>
                    Lose Life
                  </sl-button>
                  <sl-button @click=${() => this.updateLife(2, 1, 'Gain')}>
                    <sl-icon name="plus" slot="prefix"></sl-icon>
                    Gain Life
                  </sl-button>
                </form>
              </sl-card>
            </div>
          </sl-tab-panel>
          <sl-tab-panel name="track">
            <div style="display: flex; justify-content: space-around;">
            <div>
            <strong>${this.playerName1}</strong>
            <ul class="list-group list-group-flush">
              ${this.player1Actions.map(action => html`<li class="list-group-item" title=${action}>${action}</li>`)}
            </ul>
            </div>
            <div>
            <strong>${this.playerName2}</strong>
            <ul class="list-group list-group-flush">
              ${this.player2Actions.map(action => html`<li class="list-group-item">${action}</li>`)}
            </ul>
            </div>
            </div>
          </sl-tab-panel>
        </sl-tab-group>
        <div style="display: flex;
        width: 100%;
        >
          <sl-button-group label="Alignment">
            <sl-button size="medium" @click=${() => this.recordResult(1)}>${this.playerName1} Wins</sl-button>
            <sl-button size="medium" @click=${() => this.recordResult('draw')}>Draw</sl-button>
            <sl-button size="medium" @click=${() => this.recordResult(2)}>${this.playerName2} Wins</sl-button>
          </sl-button-group>
          <style>
            sl-button-group {
            display: flex; flex-direction: row;}
            sl-button {
            width: 100%;}
          </style>
        </div>
        <sl-card class="tab-card">
        <sl-tab-group>
          <sl-tab slot="nav" panel="results">Results</sl-tab>
          <sl-tab slot="nav" panel="standings">Standings</sl-tab>
          <sl-tab-panel name="results">
            <table bordered table-striped>
              <thead>
                <tr>
                  <th>${this.playerName1}</th>
                  <th>${this.playerName2}</th>
                </tr>
              </thead>
              <tbody>
                ${this.gameResults.map(
                  (result) => html`
                    <tr>
                      <td>${result.player1Result}</td>
                      <td>${result.player2Result}</td>
                    </tr>
                  `
                )}
              </tbody>
            </table>
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
                  <td>${this.playerName1}</td>
                  <td>${this.getPlayerStats(this.playerName1).wins}</td>
                  <td>${this.getPlayerStats(this.playerName1).losses}</td>
                  <td>${this.getPlayerStats(this.playerName1).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerName2}</td>
                  <td>${this.getPlayerStats(this.playerName2).wins}</td>
                  <td>${this.getPlayerStats(this.playerName2).losses}</td>
                  <td>${this.getPlayerStats(this.playerName2).draws}</td>
                </tr>
              </tbody>
            </table>
          </sl-tab-panel>
        </sl-tab-group>
        </sl-card>
      </main>
    `;
  }
}
