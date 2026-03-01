import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import localForage from 'localforage';
import '../icons/mana-icon';
import '../icons/mtg-symbols';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/tree/tree';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item';

import { sharedStyles } from '../../styles/shared-styles';
import { shoelaceStyles } from '../../styles/shoelace-styles';
import { counterStyles } from '../../pages/app-counter/counter-styles';
import { standardStyles } from './standard-styles';
import { tableStyles } from '../../styles/table-styles';
import { alertStyles } from '../../styles/alert-styles';

interface Side {
  points: number;
}

interface Game {
  sideOne: string;
  sideTwo: string;
  result: 'win' | 'loss' | 'draw';
  victor: string | 'draw' | null;
}

interface MatchResult {
  sideOneHandle: string;
  sideTwoHandle: string;
  sideOnePointsTracker: number;
  sideTwoPointsTracker: number;
  sideOneOutcome: 'win' | 'loss' | 'draw';
  sideTwoOutcome: 'win' | 'loss' | 'draw';
}

interface LogEntry {
  side: string;
  action: string;
  points: number;
}

@customElement('standard-tracker')
export class MatchTracker extends LitElement {
  @property({ type: Object }) side1: Side = { points: 20 };
  @property({ type: Object }) side2: Side = { points: 20 };

  @state() matchResults: MatchResult[] = []; // Array to store game results
  @state() sideHandle1: string = 'Side 1';
  @state() sideHandle2: string = 'Side 2';
  @state() initialPointsTracker: number = 20;
  @state() isDrawerOpen = false; //Add a state to track if the drawer is open.
  @state() isAlertOpen = false; //Add a state to track if the drawer is open.

  @query('.drawer-custom-size') drawer: any; // Query for the drawer element
  @query('.alert-closable') alert: any; // Query for the drawer element

  private storageKey = 'sideData'; // Key for localForage

  @property({ type: Array }) gameHistory: Game[] = [];

  constructor() {
    super();
    this.loadFromStorage(); // Load data when component initializes
  }

  firstUpdated() {
    // Called after the first render
    this.saveToStorage(); // Save initial data to storage.
  }

  static styles = [
    sharedStyles,
    shoelaceStyles,
    counterStyles,
    tableStyles,
    alertStyles,
    standardStyles,
    css`
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
        .settings-fab {
          position: absolute;
          display: block;
          top: 50%;
          right: 50%;
          width: 28px;
        }
      }
      @media screen and (min-width: 600px) {
        .standard-tracker,
        .side-one,
        .side-two,
        sl-card::part(base) {
          height: 100%;
        }
        sl-card::part(body) {
          height: 100%;
          display: flex;
          justify-content: center;
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
          align-items: center;
          grid-gap: 1rem;
        }
        sl-button.reset-points-button::part(base) {
          margin-top: 1rem;
        }
      }
      .standard-tracker,
      .side-one,
      .side-two,
      sl-card::part(base) {
        height: 100%;
        align-items: center;
        align-content: center;
        color: var(--sl-color-neutral-50);
      }
      sl-button [slot='prefix'] {
        color: var(--sl-color-neutral-50) !important;
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
    `,
  ];
  @state() sideLogs: LogEntry[] = [];

  @state() sideHandle1Actions: string[] = [];
  @state() sideHandle2Actions: string[] = [];

  private updatePoints(side: 1 | 2, change: number, action: 'Plus' | 'Minus') {
    const sideMap = {
      1: {
        side: this.side1,
        sideHandle: this.sideHandle1,
        setter: (value: Side) => {
          this.side1 = value;
        },
      },
      2: {
        side: this.side2,
        sideHandle: this.sideHandle2,
        setter: (value: Side) => {
          this.side2 = value;
        },
      },
    };

    const sideData = sideMap[side];

    if (sideData) {
      // Update the life total, ensuring it doesn't go below 0
      const newPoints = Math.max(0, sideData.side.points + change);

      // Update the side state
      sideData.setter({ ...sideData.side, points: newPoints });

      // Log the action
      console.log(
        `${action} ${Math.abs(change)} to ${newPoints} for ${sideData.sideHandle}`
      );

      // Record the action
      this.sideLogs = [
        ...this.sideLogs,
        { side: sideData.sideHandle, action: `${action}`, points: newPoints },
      ];

      //Update the main storage
      this.saveToStorage();
    }
  }

  private setInitialPointsTracker(event: CustomEvent) {
    const input = event.target as HTMLInputElement;
    const newPoints = parseInt(input.value, 10);

    if (!isNaN(newPoints) && newPoints >= 0) {
      this.initialPointsTracker = newPoints;
      this.side1 = { points: newPoints };
      this.side2 = { points: newPoints };
      this.saveToStorage(); // Save after initial points change
    } else {
      alert('Please enter a valid positive number for starting points.');
      input.value = this.initialPointsTracker.toString();
    }
  }

  // private handleSideHandleChange(side: 1 | 2, event: CustomEvent) {
  //   const sideMap = {
  //     1: { name: "side 1", setter: (value: string) => { this.sideHandle1 = value; } },
  //     2: { name: "side 2", setter: (value: string) => { this.sideHandle2 = value; } },
  //   };

  //   const sideData = sideMap[side];

  //   if (sideData) {
  //     const newName = (event.target as HTMLInputElement).value || sideData.name;
  //     sideData.setter(newName);
  //     this.saveToStorage();
  //   }
  // }

  private toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  private closeDrawer() {
    this.isDrawerOpen = false;
  }
  private closeAlert() {
    this.isAlertOpen = false;
  }
  private resetWithAlert() {
    this.resetGame();
    this.isAlertOpen = true;
  }

  // private recordResult(victor: 1 | 2 | 'draw') {
  //   let sideOneOutcome: 'win' | 'loss' | 'draw' = 'loss';
  //   let sideTwoOutcome: 'win' | 'loss' | 'draw' = 'loss';

  //   if (victor === 1) {
  //     sideOneOutcome = 'win';
  //     sideTwoOutcome = 'loss';
  //   } else if (victor === 2) {
  //     sideOneOutcome = 'loss';
  //     sideTwoOutcome = 'win';
  //   } else if (victor === 'draw') {
  //     sideOneOutcome = 'draw';
  //     sideTwoOutcome = 'draw';
  //   }

  //   const newResult: MatchResult = {
  //     sideOneHandle: this.sideHandle1,
  //     sideTwoHandle: this.sideHandle2,
  //     sideOnePointsTracker: this.side1.points,
  //     sideTwoPointsTracker: this.side2.points,
  //     sideOneOutcome,
  //     sideTwoOutcome,
  //   };

  //   this.matchResults = [...this.matchResults, newResult];
  //   this.saveToStorage();
  //   this.resetGame(); // Reset the game for a new round
  // }

  private resetGame() {
    this.side1 = { points: this.initialPointsTracker };
    this.side2 = { points: this.initialPointsTracker };
  }

  private saveToStorage() {
    const data = {
      initialPointsTracker: this.initialPointsTracker,
      matchResults: this.matchResults,
      side1: this.side1,
      side2: this.side2,
      sideHandle1: this.sideHandle1,
      sideHandle2: this.sideHandle2,
      sideLogs: this.sideLogs,
    };
    localForage.setItem(this.storageKey, data).catch(console.error);
  }

  private loadFromStorage() {
    localForage
      .getItem(this.storageKey)
      .then((data: any) => {
        if (data) {
          this.initialPointsTracker = data.initialPointsTracker || 20;
          this.matchResults = data.matchResults || [];
          this.side1 = data.side1 || { points: 20 };
          this.side2 = data.side2 || { points: 20 };
          this.sideHandle1 = data.sideHandle1 || 'Side 1';
          this.sideHandle2 = data.sideHandle2 || 'Side 2';
          this.sideHandle1Actions = data.sideHandle1Actions || [];
          this.sideHandle2Actions = data.sideHandle2Actions || [];
        }
      })
      .catch(console.error);
  }
  // private getSideStats(playerHandle: string) {
  //   const sideResults = this.matchResults.filter(
  //     (result) => result.sideOneHandle === playerHandle || result.sideTwoHandle === playerHandle
  //   );

  //   const wins = sideResults.filter(
  //     (result) =>
  //       (result.sideOneHandle === playerHandle && result.sideOneOutcome === 'win') ||
  //       (result.sideTwoHandle === playerHandle && result.sideTwoOutcome === 'win')
  //   ).length;

  //   const losses = playerResults.filter(
  //     (result) =>
  //       (result.sideOneHandle === playerHandle && result.sideOneOutcome === 'loss') ||
  //       (result.sideTwoHandle === playerHandle && result.sideTwoOutcome === 'loss')
  //   ).length;

  //   const draws = playerResults.filter(
  //     (result) =>
  //       (result.sideOneHandle === playerHandle && result.sideOneOutcome === 'draw') ||
  //       (result.sideTwoHandle === playerHandle && result.sideTwoOutcome === 'draw')
  //   ).length;

  //   return { wins, losses, draws };
  // }
  render() {
    // Clear previous log items
    const sideLogItems = new Map<string, string[]>();

    this.sideLogs.forEach((log) => {
      if (!sideLogItems.has(log.side)) {
        sideLogItems.set(log.side, []);
      }
      // const iconName = this.getSideIconVariant(log);
      // const badgeName = this.getSideBadgeVariant(log);
      const logItem = html`
        <sl-tree-item>
          ${log.action} to
          <sl-badge variant="neutral" pill style="padding-left: 2px;"
            >${log.points}</sl-badge
          >
        </sl-tree-item>
      `;
      // @ts-ignore
      sideLogItems.get(log.side)?.push(logItem);
    });
    // Render menu items for each player
    const sideMenuItems = [];
    for (const [player, logs] of sideLogItems) {
      sideMenuItems.push(html`
        <sl-tree-item
          >${player}
          ${logs.map(
            (log) => html`
          ${log}
        </sl-tree-item>
        `
          )}
        </sl-tree-item>
      `);
    }
    // Empty state logic
    const emptyState = html`
      <sl-tree-item> No match history to display. </sl-tree-item>
    `;

    const menuContent = sideMenuItems.length > 0 ? sideMenuItems : emptyState;

    return html`
      <main
        style="height: calc(100vh - 125px); padding: 0; margin: 0 .5rem; margin-top: .5rem;"
      >
        <div class="standard-tracker">
          <sl-card class="side-one">
            <form class="card-form" style="position: relative;">
              <sl-button
                variant="default"
                size="large"
                class="life-counter side-one"
                @click=${() => this.updatePoints(1, 1, 'Plus')}
              >
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-direction: column; font-size: 1.25rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(244, 244, 244)" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>

                  Plus
                </div>
              </sl-button>
              <p
                class="text-center ms-4x"
                style="line-height: normal; margin: 0;"
              >
                ${this.side1.points}
              </p>
              <sl-button
                variant="default"
                size="large"
                class="life-counter side-one"
                @click=${() => this.updatePoints(1, -1, 'Minus')}
              >
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-direction: column;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(244, 244, 244)" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM232 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296z"/></svg>

                  Minus
                </div>
              </sl-button>
            </form>
          </sl-card>
          <sl-card class="side-two">
            <form class="card-form" style="position: relative;">
              <sl-button
                variant="default"
                size="large"
                class="life-counter side-two"
                @click=${() => this.updatePoints(2, 1, 'Plus')}
              >
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-direction: column; font-size: 1.25rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(244, 244, 244)" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>

                  Plus
                </div>
              </sl-button>
              <p
                class="text-center ms-4x"
                style="line-height: normal; margin: 0;"
              >
                ${this.side2.points}
              </p>
              <sl-button
                variant="default"
                size="large"
                class="life-counter side-two"
                @click=${() => this.updatePoints(2, -1, 'Minus')}
              >
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-direction: column;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(244, 244, 244)" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM232 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296z"/></svg>

                  Minus
                </div>
              </sl-button>
            </form>
          </sl-card>
        </div>
        <sl-drawer
          label="Configuration"
          placement="top"
          class="drawer-custom-size"
          ?open=${this.isDrawerOpen}
          @sl-after-hide=${this.closeDrawer}
        >
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
          <sl-alert
            variant="primary"
            open
            duration="1500"
            closable
            class="alert-closable"
            ?open=${this.isAlertOpen}
            @sl-after-hide=${this.closeAlert}
          >
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            Starting points have been reset to ${this.initialPointsTracker}.
          </sl-alert>
          <h3>History</h3>
          <sl-tree
            class="tree-with-lines"
            style="color: var(--sl-color-neutral-50);"
          >
            ${menuContent}
          </sl-tree>
          <sl-button
            slot="footer"
            variant="primary"
            pill
            @click=${this.closeDrawer}
            >Close</sl-button
          >
        </sl-drawer>
        <div class="fab-container">
          <sl-button
            variant="neutral"
            size="large"
            circle
            @click=${this.toggleDrawer}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(244, 244, 244)" d="M102.8 57.3C108.2 51.9 116.6 51.1 123 55.3L241.9 134.5C250.8 140.4 256.1 150.4 256.1 161.1L256.1 210.7L346.9 301.5C380.2 286.5 420.8 292.6 448.1 320L574.2 446.1C592.9 464.8 592.9 495.2 574.2 514L514.1 574.1C495.4 592.8 465 592.8 446.2 574.1L320.1 448C292.7 420.6 286.6 380.1 301.6 346.8L210.8 256L161.2 256C150.5 256 140.5 250.7 134.6 241.8L55.4 122.9C51.2 116.6 52 108.1 57.4 102.7L102.8 57.3zM247.8 360.8C241.5 397.7 250.1 436.7 274 468L179.1 563C151 591.1 105.4 591.1 77.3 563C49.2 534.9 49.2 489.3 77.3 461.2L212.7 325.7L247.9 360.8zM416.1 64C436.2 64 455.5 67.7 473.2 74.5C483.2 78.3 485 91 477.5 98.6L420.8 155.3C417.8 158.3 416.1 162.4 416.1 166.6L416.1 208C416.1 216.8 423.3 224 432.1 224L473.5 224C477.7 224 481.8 222.3 484.8 219.3L541.5 162.6C549.1 155.1 561.8 156.9 565.6 166.9C572.4 184.6 576.1 203.9 576.1 224C576.1 267.2 558.9 306.3 531.1 335.1L482 286C448.9 253 403.5 240.3 360.9 247.6L304.1 190.8L304.1 161.1L303.9 156.1C303.1 143.7 299.5 131.8 293.4 121.2C322.8 86.2 366.8 64 416.1 63.9z"/></svg>
          </sl-button>
        </div>
        <style>
          @media screen and (max-width: 600px) {
            .fab-container {
              top: calc(50vh - 72px) !important;
            }
          }
          .fab-container {
            position: absolute;
            top: calc(50% - 24px);
            right: calc(50vw - 1.5rem);
            box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, .5);
            border-radius: 50%;
          }
          .fab-container svg {
            vertical-align: text-top;
          }
        </style>
      </main>
    `;
  }
}

