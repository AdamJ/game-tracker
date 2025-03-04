import { css } from 'lit';

export const styles = css`
  :root {
    --ms-mana-b: #a7999e;
    --ms-mana-c: #d0c6bb;
    --ms-mana-g: #9fcba6;
    --ms-mana-r: #f19b79;
    --ms-mana-u: #bcdaf7;
    --ms-mana-w: #fdfbce;
  }

  sl-card.player-one::part(base),
  sl-button.player-one::part(base) {
    background-color: #f19b79;
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-two::part(base),
  sl-button.player-two::part(base) {
    background-color: #bcdaf7;
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-three::part(base),
  sl-button.player-three::part(base) {
    background-color: #9fcba6;
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-four::part(base),
  sl-button.player-four::part(base) {
    background-color: #a7999e;
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
