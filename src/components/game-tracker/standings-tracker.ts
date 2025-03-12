import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './player-input.js';
import './match-input.js';
import './standings-display.js';
import '../edit-modal.js';
import './match-history.js';
import '../confirmation-modal.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

import { sharedStyles } from '../../styles/shared-styles';
import { shoelaceStyles } from '../../styles/shoelace-styles';
import { gameTrackerStyles } from './game-tracker-styles';

interface Match {
  player1: string;
  player2: string;
  result: 'win' | 'loss' | 'draw';
}

interface Standing {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  winPercentage?: number; // Optional tiebreaker property
}

@customElement('standings-tracker')
export class StandingsTracker extends LitElement {

  static styles = [
    sharedStyles,
    shoelaceStyles,
    gameTrackerStyles
  ]

  @state() activeTab: string = 'standings'; // Initial active tab
  @state() players: string[] = [];
  @state() matchHistory: Match[] = JSON.parse(localStorage.getItem('matchHistory') || '[]');
  @state() standings: Standing[] = [];
  @state() isLoading: boolean = true;
  @state() editModalOpen = false;
  @state() editMatchIndex: number | null = null;
  @state() confirmationModalOpen = false;

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
  }

  async loadData() {
    try {
      const playersData = localStorage.getItem('players');
      const matchHistoryData = localStorage.getItem('matchHistory');

      this.players = playersData ? JSON.parse(playersData) : [];
      this.matchHistory = matchHistoryData ? JSON.parse(matchHistoryData) : [];
    } catch (error) {
      console.error('Error loading data:', error);
      this.players = [];
      localStorage.setItem('players', JSON.stringify(this.players));
    } finally {
      this.isLoading = false;
      this.calculateStandings();
    }
  }

  addPlayer(playerName: string) {
    this.players = [...this.players, playerName];
    localStorage.setItem('players', JSON.stringify(this.players));
    this.calculateStandings();
    this.requestUpdate();
  }

  removePlayer(playerName: string) {
    this.players = this.players.filter(p => p !== playerName);
    localStorage.setItem('players', JSON.stringify(this.players));
    this.calculateStandings();
    this.requestUpdate();
  }

  clearAllPlayers() {
    this.players = [];
    localStorage.setItem('players', JSON.stringify(this.players));
    this.calculateStandings();
    this.requestUpdate();
  }

  recordMatch(match: Match) {
    this.matchHistory = [...this.matchHistory, match];
    localStorage.setItem('matchHistory', JSON.stringify(this.matchHistory));
    this.calculateStandings();
    this.requestUpdate();
  }

  calculateStandings() {
    console.log('calculateStandings called');
    const standingsMap = this.initializeStandings();
    this.matchHistory.forEach(match => this.applyMatchResult(match, standingsMap));
    this.finalizeStandings(standingsMap);
    console.log('standings:', this.standings);
  }

  initializeStandings() {
    const standingsMap = new Map<string, { wins: number; losses: number; draws: number; points: number, winPercentage: number }>();
    this.players.forEach(player => {
        standingsMap.set(player, {wins: 0, losses: 0, draws: 0, points: 0, winPercentage: 0})
    });
    return standingsMap;
  }

  applyMatchResult(match: Match, standingsMap: Map<string, { wins: number; losses: number; draws: number; points: number; winPercentage: number }>) {
    const player1Stats = standingsMap.get(match.player1);
    const player2Stats = standingsMap.get(match.player2);

    if (player1Stats && player2Stats) {
        if (match.result === 'win') {
            player1Stats.wins++;
            player1Stats.points += 3;
            player2Stats.losses++;
        } else if (match.result === 'loss') {
            player2Stats.wins++;
            player2Stats.points += 3;
            player1Stats.losses++;
        } else {
            player1Stats.draws++;
            player1Stats.points++;
            player2Stats.draws++;
            player2Stats.points++;
        }
    } else {
        if(!player1Stats){
            console.error(`Player not found in standings: ${match.player1}`);
        }
        if(!player2Stats){
            console.error(`Player not found in standings: ${match.player2}`);
        }
    }
  }

  finalizeStandings(standingsMap: Map<string, { wins: number; losses: number; draws: number; points: number; winPercentage: number }>) {
    // Calculate win percentages and update standingsMap
    this.players.forEach(player => {
        const stats = standingsMap.get(player)!;
        const totalMatches = stats.wins + stats.losses + stats.draws;
        stats.winPercentage = totalMatches > 0 ? (stats.wins / totalMatches) * 100 : 0;
        stats.winPercentage = parseFloat(stats.winPercentage.toFixed(2)); // Round to 2 decimal places
    });

    // Create standings array from standingsMap
    this.standings = Array.from(standingsMap.entries()).map(([name, stats]) => ({
        name: name,
        wins: stats.wins,
        losses: stats.losses,
        draws: stats.draws,
        points: stats.points,
        winPercentage: stats.winPercentage,
    }));

    // Sort by points, then win percentage
    this.standings.sort((a, b) => {
        if (b.points !== a.points) {
            return b.points - a.points; // Sort by points first
        } else {
            return (b.winPercentage || 0) - (a.winPercentage || 0); // Sort by win percentage if points are equal
        }
    });
  }

  openEditModal(index: number) {
    this.editMatchIndex = index;
    this.editModalOpen = true;
  }

  editMatch(editedMatch: Match) {
    if (this.editMatchIndex !== null) {
      this.matchHistory = this.matchHistory.map((match, index) =>
        index === this.editMatchIndex ? editedMatch : match
      );
      localStorage.setItem('matchHistory', JSON.stringify(this.matchHistory));
      this.calculateStandings();
      this.editMatchIndex = null;
      this.editModalOpen = false;
      this.requestUpdate();
    }
  }

  exportMatchResults() {
    const csv = this.matchHistory.map(match =>
      `${match.player1},${match.player2},${match.result}`
    ).join('\n');
    this.downloadCSV(csv, 'match-results.csv');
  }

  exportStandings() {
    const csv = this.standings.map(standing =>
      `${standing.name},${standing.wins},${standing.losses},${standing.draws},${standing.points},${standing.winPercentage || 0}`
    ).join('\n');
    this.downloadCSV(csv, 'standings.csv');
  }

  downloadCSV(csv: string, filename: string) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  clearMatchResultsConfirmed() {
    this.matchHistory = [];
    localStorage.setItem('matchHistory', JSON.stringify(this.matchHistory));
    this.calculateStandings();
    this.requestUpdate();
  }

  openConfirmationModal() {
    this.confirmationModalOpen = true;
  }

  closeConfirmationModal() {
    this.confirmationModalOpen = false;
  }

  clearStandingsConfirmed() {
    this.standings = [];
    // this.players = [];
    localStorage.removeItem('matchHistory'); // Remove the old localStorage
    // localStorage.removeItem('players'); // remove the old players data
    this.requestUpdate();
    this.closeConfirmationModal();
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

  render() {
    if (this.isLoading) {
      return html`
        <p>Loading...</p>
        <sl-spinner style="font-size: 3rem;"></sl-spinner>
      `; // Loading indicator
    }

    return html `
      <div class="page-header">
        <sl-button-group label="game actions">
          <sl-tooltip content="Export Standings">
            <sl-button variant="success" size="small" pill label="export standings" @click=${this.exportStandings}>
              <sl-icon slot="prefix" library="default" name="file-earmark-excel-fill" label="Export Standings"></sl-icon>
              Export <span class="hide-at-800">Standings</span>
            </sl-button>
          </sl-tooltip>
          <sl-tooltip content="Clear Standings">
            <sl-button variant="warning" size="small" pill label="action to clear standings"  @click=${this.clearStandingsConfirmed}>
              <sl-icon slot="prefix" library="default" name="trash-fill" label="Clear Standings"></sl-icon>
              <span class="hide-at-800">Clear</span> Standings
            </sl-button>
          </sl-tooltip>
          <sl-tooltip content="Clear All Data">
            <sl-button variant="danger" size="small" pill label="launch a modal to confirm clearing of match data" @click=${this.openConfirmationModal}>
            <sl-icon slot="prefix" library="default" name="trash-fill" label="Clear All Data"></sl-icon>
            <span class="hide-at-800">Clear All</span> Data
            </sl-button>
          </sl-tooltip>
        </sl-button-group>
      </div>
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-details summary="Match Results" open>
          <match-input .players=${this.players.map(player => ({ name: player }))} @match-recorded=${(e: CustomEvent) => this.recordMatch(e.detail)}></match-input>
        </sl-details>
        <sl-tab-group active-tab=${this.activeTab}>
          <sl-tab slot="nav" panel="standings" class="ios-tab">Standings</sl-tab>
          <sl-tab slot="nav" panel="history" class="ios-tab">History</sl-tab>
          <sl-tab slot="nav" panel="players" class="ios-tab">Players</sl-tab>
          <sl-tab-panel name="standings">
            <standings-display .standings=${this.standings}></standings-display>
          </sl-tab-panel>
          <sl-tab-panel name="history">
            <div slot="header">
              <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; grid-gap: .5rem; width: 100%;">
                Match History
                <sl-tooltip content="Export Results">
                  <sl-button variant="success" size="small" pill label="export match results" @click=${this.exportMatchResults}>
                    <sl-icon slot="prefix" library="default" name="file-earmark-excel-fill" label="Export Results"></sl-icon>
                    Export <span class="hide-at-800">Standings</span>
                  </sl-button>
                </sl-tooltip>
              </div>
            </div>
            <match-history .matchHistory=${this.matchHistory} @edit-match=${(e: CustomEvent) => this.openEditModal(e.detail)}></match-history>
          </sl-tab-panel>
          <sl-tab-panel name="players">
            <player-input
              @player-added=${(e: CustomEvent) => this.addPlayer(e.detail)}
              @remove-player=${(e: CustomEvent) => this.removePlayer(e.detail)}
              @clear-all-players=${() => this.clearAllPlayers()}
              .players=${this.players}
            ></player-input>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
      <edit-modal .match=${this.editMatchIndex !== null ? this.matchHistory[this.editMatchIndex] : null} .isOpen=${this.editModalOpen} @match-edited=${(e: CustomEvent) => this.editMatch(e.detail)} @close=${() => this.editModalOpen = false}></edit-modal>
      <confirmation-modal
        .isOpen=${this.confirmationModalOpen}
        message="Are you sure you want to clear the match data? This will also clear all related information."
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
    `;
  }
}
