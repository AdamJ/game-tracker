import { css } from 'lit';

export const shoelaceStyles = css`
  sl-button.rounded-angles::part(base) {
    border-radius: 1rem 0;
  }
  sl-button.custom-button::part(base) {
    border: 1px solid var(--windows-stroke-glass-specular);
    background: var(--Windows-Glass);
    background-blend-mode: luminosity;
    backdrop-filter: blur(50px);
    color: var(--sl-color-neutral-900);
  }
  sl-button.custom-button::part(base):hover,
  sl-button.custom-button::part(base):active {
    color: var(--sl-color-primary-700);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
    border-color: var(--sl-color-primary-700);
  }
  sl-button.custom-button::part(base):focus {
    color: var(--sl-color-primary-700);
    border-color: var(--sl-color-primary-700);
  }
  sl-tab-group {
    --indicator-color: var(--sl-color-primary-500);
    --track-width: 0;
    --track-color: var(--sl-color-neutral-500);
  }
  sl-tab-group::part(tabs) {
    background: var(--Views-Recessed-Material-View);
    padding-top: .25rem;
    padding-bottom: .25rem;
    border-radius: 1rem;
  }
  sl-tab-group::part(nav) {
    width: fit-content !important;
  }
  sl-card::part(base) {
    border: 1px solid var(--windows-stroke-glass-specular);
  }
  sl-details::part(base),
  sl-card::part(base),
  sl-tab-panel::part(base) {
    border-radius: 1rem;
    background: var(--Windows-Glass);
    background-blend-mode: luminosity;

    /* Blur
    backdrop-filter: blur(50px);
    */
    backdrop-filter: blur(10px);
  }
  sl-details::part(base),
  sl-tab-panel::part(base) {
    border: 0;
  }
  sl-tab::part(base) {
    border-color: transparent;
    background: var(--Controls-Idle, linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.07));
    background-blend-mode: color-dodge, normal;
  }
  sl-tab::part(base):hover {
    border-color: var(--sl-color-primary-500);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
    background: linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.2);
  }

  sl-tab::part(base):hover,
  sl-tab::part(base):focus {
    color: var(--sl-color-primary-600) !important;
  }
  sl-tab::part(base):focus-visible,
  sl-tab.ios-tab::part(base):focus-visible {
    --sl-focus-ring: var(--sl-color-primary-600) !important;
  }
  sl-tab::part(base),
  sl-tab.ios-tab::part(base) {
    border-radius: 1rem;
    margin-left: .5rem;
    margin-right: .5rem;
    padding: .75rem 1rem;
  }
  sl-tab-panel {
    margin-top: .25rem;
  }
  sl-tab-panel::part(base) {
    padding: 1rem;
  }
  sl-tag::part(base) {
    border-radius: 0.625rem;
    background: var(--Windows-Glass);
    background-blend-mode: color-dodge, lighten;
    color: rgba(255, 255, 255, 0.96) !important;
    text-align: center;
  }
  sl-tag.tab.tab--active:not(.tab--disabled)::part(base) {
    color: var(--sl-color-primary-600) !important;
  }
  sl-tag::part(remove-button) {
    color: rgba(255, 255, 255, 0.96) !important;
  }
  sl-tree-item::part(base) {
    color: var(--sl-color-neutral-950);
  }
  sl-input::part(base) {
    border-radius: 0.75rem;
    background: var(--Recessed, linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), rgba(208, 208, 208, 0.50));
    background-blend-mode: luminosity, color-burn;
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
  }
`;
