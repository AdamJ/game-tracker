import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const homeStyles = css`
  @media (max-width: 800px) {
    .main {
      flex-direction: row !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
    }
    sl-card {
      max-width: 150px !important;
    }
    sl-card::part(header) {
      padding: calc(1rem / 2) 1rem !important;
    }
    sl-card::part(base) {
      --padding: .25rem !important;
      min-height: 200px !important;
    }
    p.game-intro,
    .ribbon {
      display: none;
    }
    sl-card [slot="footer"] {
      display: flex;
      justify-content: center !important;
      width: 100%;
    }
    p.card-icon sl-icon {
      font-size: 2rem !important;
    }
  }
  p.card-icon {
    display: flex !important;
    justify-content: center;
  }
  p.card-icon sl-icon {
    background: rgba(255, 255, 255, .8);
    border-radius: 50%;
    padding: 1rem;
    font-size: 4rem;
  }
  sl-card {
    max-width: 300px;
    width: 300px;
  }
  sl-card::part(base) {
    min-height: 350px;
  }
  sl-card::part(footer) {
    display: flex;
    justify-content: flex-end;
  }
`;
