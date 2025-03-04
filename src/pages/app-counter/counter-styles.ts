import { css } from 'lit';

export const styles = css`

  sl-card.player-one::part(base),
  sl-button.player-one::part(base) {
    background-color:  var(--ms-mana-r-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-two::part(base),
  sl-button.player-two::part(base) {
    background-color: var(--ms-mana-u-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-three::part(base),
  sl-button.player-three::part(base) {
    background-color:  var(--ms-mana-g-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-four::part(base),
  sl-button.player-four::part(base) {
    background-color:  var(--ms-mana-b-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card,
  .card {
    width: 100%;
    --border-radius: 0;
    --border-width: 0;
  }
  sl-menu-item {
    background-color: var(--sl-color-neutral-50);
  }
  sl-card::part(base) {
    padding: 0 !important;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  sl-button::part(base) {
    border-radius: 0;
    border: 0;
  }
  sl-card::part(base) {
    width: 100% !important;
  }
`;
