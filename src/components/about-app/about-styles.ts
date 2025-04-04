import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const aboutStyles = css`
  .details-group-example > sl-details:first-of-type::part(base) {
    border-radius: 8px 8px 0 0;
  }
  .details-group-example > sl-details::part(base) {
    border-radius: 0;
  }
  .details-group-example > sl-details:last-of-type::part(base) {
    border-radius: 0 0 8px 8px;
  }
`;
