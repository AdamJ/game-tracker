import { css } from 'lit';

export const pvpStyles = css`
  @media screen and (min-width: 600px) {
    .pvp-tracker {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      grid-gap: 1rem;
    }
    sl-card.side-one::part(base),
    sl-card.side-two::part(base) {
      border-radius: 1rem !important;
    }
  }
  nav {
    padding: .25rem;
  }
  .tree-with-lines {
    --indent-guide-width: 1px;
    --indent-guide-color: var(--sl-color-primary-600);
  }
  sl-card.side-one::part(base),
  sl-card.side-two::part(base) {
    border-radius: 0 0 1rem 1rem;
  }
  sl-card.side-one::part(base),
  sl-button.side-one::part(base) {
    background-color: var(--ms-mana-b-bg);
    color: var(--sl-color-neutral-50);
    border: 0;
  }
  sl-card.side-two::part(base),
  sl-button.side-two::part(base) {
    background-color: var(--ms-mana-c-bg);
    color: var(--sl-color-neutral-900);
    border: 0;
  }
  table thead tr th {
    border-bottom: 1px solid var(--sl-color-neutral-500);
    padding: .5rem;
    background-color: inherit;
    border-bottom-width: 1px;
  }
  .table-striped tbody tr:nth-of-type(even)>* {
    background-color: var(--sl-color-neutral-100) !important;
  }
  .table-striped {
      width: 100%;
      border-collapse: collapse;
  }
  .table-striped td, .table-striped th {
      padding: 8px;
      text-align: left;
  }
  .form-2-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-player-input {
    width: 100%;
  }
  @media (min-width: 1000px) {
    .form-2-column {
      flex-direction: row;
    }
  }
  sl-card.side-one,
  sl-button.side-one {
    transition: transform 0.3s ease;
  }
  @media (orientation: portrait) {
    sl-card.side-one {
      transform: rotate(180deg);
    }
  }
  @media (orientation: landscape): {
    sl-card.side-one {
      transform: rotate(180deg);
    }
  }
  @media screen and (min-width: 600px) {
    sl-card.side-one {
      transform: rotate(0deg);
    }
  }
`;
