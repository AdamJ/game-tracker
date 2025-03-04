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

  wa-card.player-one::part(body),
  wa-button.player-one::part(base) {
    background-color: #f19b79;
    color: var(--wa-color-gray-950);
  }
  wa-card.player-two::part(body),
  wa-button.player-two::part(base) {
    background-color: #bcdaf7;
    color: var(--wa-color-gray-950);
  }
  wa-card.player-three::part(body),
  wa-button.player-three::part(base) {
    background-color: #9fcba6;
    color: var(--wa-color-gray-950);
  }
  wa-card.player-four::part(body),
  wa-button.player-four::part(base) {
    background-color: #a7999e;
    color: var(--wa-color-gray-950);
  }
  wa-card,
  .card {
    width: 100%;
    --border-radius: 0;
    --border-width: 0;
  }
  wa-menu-item {
    background-color: var(--wa-color-gray-50);
  }
  wa-card::part(body) {
    padding: 0 !important;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  wa-button::part(base) {
    border-radius: 0;
    border: 0;
  }
  wa-card::part(base) {
    width: 100% !important;
  }
`;
