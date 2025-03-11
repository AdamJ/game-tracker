import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const aboutStyles = css`
  .scorecard {
    max-width: 500px;
  }
  sl-alert::part(base) {
    background-color: var(--sl-color-primary-50);
  }
`;
