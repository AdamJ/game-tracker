import { css } from 'lit';

export const gameTrackerStyles = css`
  sl-input::part(base) {
    border-radius: 0.75rem;
    background: var(--Recessed);
    background-blend-mode: luminosity, color-burn;
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
  }
  // sl-option::part(base) {
  //   color: var(--sl-color-neutral-50);
  // }
  // sl-option::part(base):hover {
  //   background: var(--sl-color-primary-200);
  //   color: var(--sl-color-primary-900);
  // }
//   sl-tab {
//   background: var(--Views-Recessed-Material-View, linear-gradient(0deg, rgba(208, 208, 208, 0.50) 0%, rgba(208, 208, 208, 0.50) 100%), rgba(0, 0, 0, 0.10));
// background-blend-mode: color-burn, luminosity;
// box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
// border-radius: 8px;}
  sl-radio-group::part(form-control-input) {
    display: flex;
    flex-direction: row;
    grid-gap: 1rem;
  }
`;
