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

  sl-tab {
    padding-bottom: .5rem;
  }
  sl-tab::part(base) {
    background: #E0F1FE;
  }
  sl-tab[active] sl-icon {
    fill: var(--sl-color-primary-50) !important;
  }
  sl-tab::part(base):hover,
  sl-tab::part(base):focus,
  sl-tab:hover sl-icon {
    color: var(--sl-color-primary-50) !important;
    fill: var(--sl-color-primary-50) !important;
    background: #0163a3 !important;
  }
  sl-tab::part(base):focus-visible,
  sl-tab.ios-tab::part(base):focus-visible {
    --sl-focus-ring: var(--sl-color-primary-600) !important;
  }
  sl-tab::part(base),
  sl-tab.ios-tab::part(base) {
    margin-right: .125rem;
    padding: .75rem 1rem;
  }
  sl-tab[active]::part(base) {
    background: #0163a3 !important;
    color: var(--sl-color-primary-50) !important;
  }

  // sl-tag::part(base) {
  //   border-radius: 0.625rem;
  //   background: var(--Windows-Glass);
  //   background-blend-mode: color-dodge, lighten;
  //   color: rgba(255, 255, 255, 0.96) !important;
  //   text-align: center;
  // }
  // sl-tag::part(remove-button) {
  //   color: rgba(255, 255, 255, 0.96) !important;
  // }
  sl-tree-item::part(base) {
    color: var(--sl-color-neutral-950);
  }
`;
