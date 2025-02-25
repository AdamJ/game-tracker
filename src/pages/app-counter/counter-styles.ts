import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  form {
    display: flex;
    flex-direction: column;
  }
  sl-button::part(base) {
    border-radius: 0;
    border: 0;
  }
  sl-card::part(base) {
    width: 100% !important;
  }
`;
