import { css } from 'lit';

export const counterStyles = css`
  @media (max-width: 950px) {
    // sl-tab-group {
    //   --track-width: 0;
    //   --track-color: transparent;
    // }
    sl-card.player-one::part(base),
    sl-card.player-two::part(base),
    sl-card.player-three::part(base),
    sl-card.player-four::part(base) {
      height: 40vh;
    }
    sl-card::part(body) {
      height: 100%;
    }
  }
  sl-card.player-one::part(base),
  sl-button.player-one::part(base),
  sl-button.player-one-winner::part(base) {
    background-color: var(--ms-mana-r-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-one::part(base) {
    border-radius: 1rem 0 0 0;
  }
  sl-card.player-two::part(base),
  sl-button.player-two::part(base),
  sl-button.player-two-winner::part(base) {
    background-color: var(--ms-mana-u-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-two::part(base) {
    border-radius: 0 1rem 0 0;
  }
  sl-card.player-three::part(base),
  sl-button.player-three::part(base),
  sl-button.player-three-winner::part(base) {
    background-color: var(--ms-mana-g-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-three::part(base) {
    border-radius: 0 0 0 1rem;
  }
  sl-card.player-four::part(base),
  sl-button.player-four::part(base),
  sl-button.player-four-winner::part(base) {
    background-color: var(--ms-mana-c-bg);
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
    width: 100% !important;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  sl-button.player-one-winner::part(base):hover,
  sl-button.player-two-winner::part(base):hover,
  sl-button.player-three-winner::part(base):hover,
  sl-button.player-four-winner::part(base):hover {
    filter: brightness(80%);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: var(--sl-color-neutral-100);
  }
    /* @media (prefers-color-scheme: dark) {} */
    /* @media (min-width: 1200px) {} */
`;
