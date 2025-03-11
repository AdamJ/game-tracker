import { css } from 'lit';

export const shoelaceStyles = css`
  sl-tab-group::part(tabs) {
    border-bottom: .25rem solid var(--sl-color-neutral-300);
  }
  sl-button, sl-button::part(base), sl-button::part(label), sl-card, sl-switch, sl-switch::part(base), sl-icon, sl-tooltip, sl-alert, sl-tab, sl-menu-label, sl-menu-item, sl-select, sl-radio-group, input, button {
    font-family: var(--font-family), var(--sl-font-sans) !important;
  }
  sl-tab-group {
    --indicator-color: var(--sl-color-primary-400);
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-400);
  }
  sl-tab {
    padding-bottom: .25rem;
  }
  sl-details::part(base),
  sl-card::part(base),
  sl-tab::part(base),
  sl-tab-panel::part(base) {
    border-radius: 1rem;
    border: 1px solid var(--windows-stroke-glass-specular);
    background: var(--Windows-Glass);
    background-blend-mode: luminosity;

    /* Blur */
    backdrop-filter: blur(50px);
  }
  sl-tab::part(base) {
    border-color: transparent;
    color: rgba(255,255,255,.8);
  }
  sl-tab::part(base):hover {
    border-color: var(--sl-color-primary-500);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
  }

  sl-tab::part(base):hover,
  sl-tab::part(base):focus {
    color: var(--sl-color-primary-400) !important;
  }
  sl-tab.ios-tab::part(base):focus-visible {
    --sl-focus-ring: var(--sl-color-primary-600) !important;
  }
  sl-tab.ios-tab::part(base) {
    background: linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.2);
    border-radius: 32px;
    // color: #fff;
    margin-left: .5rem;
    margin-right: .5rem;
  }
  sl-tab-panel::part(base) {
  }
  sl-tag::part(base) {
    border-radius: 0.5rem;
    background: linear-gradient(0deg, rgba(87, 87, 87, 0.04) 0%, rgba(87, 87, 87, 0.04) 100%), rgba(255, 255, 255, 0.07);
    background-blend-mode: color-dodge, lighten;
    color: rgba(255, 255, 255, 0.96) !important;
    text-align: center;
  }
  sl-tag::part(remove-button) {
    color: rgba(255, 255, 255, 0.96) !important;
  }
`;
