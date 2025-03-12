import { css } from 'lit';

export const gameTrackerStyles = css`
  sl-input::part(base) {
    border-radius: 0.75rem;
    background: var(--Recessed);
    background-blend-mode: luminosity, color-burn;
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
  }
  sl-radio-group::part(form-control-input) {
    display: flex;
    flex-direction: row;
    grid-gap: 1rem;
  }
`;
