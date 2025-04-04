import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const homeStyles = css`
  p.card-icon {
    display: flex !important;
    justify-content: center;
  }
  p.card-icon sl-icon-button {
    background: rgba(255, 255, 255, .8);
    border-radius: 50%;
    padding: .5rem;
    font-size: 4rem;
  }
`;
