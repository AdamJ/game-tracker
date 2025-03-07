import { css } from 'lit';

export const styles = css`

  sl-card.player-one::part(base),
  sl-button.player-one::part(base) {
    background-color: var(--ms-mana-r-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-one::part(base) {
    border-radius: 1rem 0 0 0;
  }
  sl-card.player-two::part(base),
  sl-button.player-two::part(base) {
    background-color: var(--ms-mana-u-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-two::part(base) {
    border-radius: 0 1rem 0 0;
  }
  sl-card.player-three::part(base),
  sl-button.player-three::part(base) {
    background-color: var(--ms-mana-g-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-three::part(base) {
    border-radius: 0 0 0 1rem;
  }
  sl-card.player-four::part(base),
  sl-button.player-four::part(base) {
    background-color: var(--ms-mana-b-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-four::part(base) {
    border-radius: 0 0 1rem 0;
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
  sl-card::part(base) {
    width: 100% !important;
  }
    .table-striped>tbody>tr:nth-of-type(even)>* {
    background-color: var(--sl-color-neutral-50) !important;
  }
    /* @media (prefers-color-scheme: dark) {} */
    /* @media (min-width: 1200px) {} */
`;
