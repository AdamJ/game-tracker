import { LitElement, html, css } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';

import { sharedStyles } from '../../styles/shared-styles';
import { shoelaceStyles } from '../../styles/shoelace-styles';

@customElement('player-input')
export class PlayerInput extends LitElement {
  static styles = [
    sharedStyles,
    shoelaceStyles,
    css `

    `
  ]

  @property({ type: Array }) players: string[] = [];
  @state() newPlayer: string = '';
  @state() errorMessage: string = '';

  handleSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior (page refresh)
    this.addPlayer();
  }

  addPlayer() { // Add the event parameter
    if (this.newPlayer && this.validatePlayerName(this.newPlayer)) {
        this.dispatchEvent(new CustomEvent('player-added', { detail: this.newPlayer }));
        this.newPlayer = '';
        const inputElement = this.shadowRoot!.querySelector('sl-input');
        if(inputElement){
          inputElement.helpText = '';
        }
    } else {
      const inputElement = this.shadowRoot!.querySelector('sl-input');
      if(inputElement){
        inputElement.helpText = this.errorMessage;
      }
    }
  }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newPlayer = input.value;
    const inputElement = this.shadowRoot!.querySelector('sl-input');
    if(inputElement){
        if(!this.validatePlayerName(this.newPlayer)){
          inputElement.helpText = this.errorMessage;
        } else{
          inputElement.helpText = '';
        }
    }
  }

  validatePlayerName(playerName: string){
    const isValid = /^[a-zA-Z0-9]+$/.test(playerName);
    if (isValid) {
      this.errorMessage = '';
      return true;
    } else {
      this.errorMessage = 'Enter a Name containing only letters or numbers with no spaces or special characters.';
      return false;
    }
  }

  removePlayer(playerName: string) {
    this.dispatchEvent(new CustomEvent('remove-player', { detail: playerName }));
  }

  clearAllPlayers() {
    this.dispatchEvent(new CustomEvent('clear-all-players'));
  }

  render() {
    return html`
      <div style="display: flex; flex-direction: row; justify-content: space-between; flex-wrap: wrap; grid-gap: 1rem; padding-left: 1rem; padding-right: 1rem;">
        <form
          class="input-validation-custom"
          @submit=${this.handleSubmit}
        >
          <sl-input
            .value=${this.newPlayer}
            @sl-input=${this.handleInputChange}
            spellcheck="true"
            name="name"
            label="Name"
            required
            clearable
            autofocus
            autocomplete="off"
            help-text=${this.errorMessage}
            class="player-input"
            style="min-width: 20rem;"
          >
            <sl-icon library="default" name="person" slot="prefix"></sl-icon>
          </sl-input>
          <sl-button
            type="button"
            variant="primary"
            outline
            @click=${this.addPlayer}
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
          </script>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; grid-gap: .5rem; width: 100%;">
            ${this.players.map(player => html`
              <sl-tag variant="primary" removable @sl-remove=${() => this.removePlayer(player)}>
                ${player}
              </sl-tag>
            `)}
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
      `;
    }
}
