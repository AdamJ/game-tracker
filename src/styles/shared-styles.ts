import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const sharedStyles = css`
  main {
    padding: .25rem 0 3rem 0;
    margin: 0 .5rem;
  }
  .main {
    padding: .75rem;
  }
  .text-truncate {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  a {
    color: var(--sl-color-primary-500);
  }
  a:hover,
  a:active,
  a:focus {
    color: var(--sl-color-primary-700);
  }
  a:visited {
    color: var(--sl-color-violet-800);
  }
  @media (max-width: 950px) {
    .hide-at-800 {
      flex-direction: column !important;
      display: none !important;
    }
  }
  .display-flex {
    display: flex;
  }
  .flex-direction-row {
    flex-direction: row;
  }
  .gap-1 {
    gap: 1rem;
  }
  .justify-content-around {
    justify-content: space-around;
  }
  .text-center {
    text-align: center;
  }
  .two-item-footer [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tab-card::part(base) {
    width: 100%;
  }
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
  .list-group>:last-child {
    margin-bottom: 0;
  }
  .list-group-flush {
    border-radius: 0;
  }
  .list-group-flush>.list-group-item:first-child {
    border-top-width: 0;
  }
  .list-group-flush>.list-group-item:last-child {
    border-bottom-width: 0;
  }
  .list-group-item {
    position: relative;
    display: block;
    padding: .5rem 1rem;
    color: var(--sl-color-neutral-800);
    text-decoration: none;
    background-color: transparent;
    border-bottom: 1px solid var(--sl-color-neutral-600);
  }
  .list-group-item[title~=Lose] {
    background-color: var(--sl-color-red-100);
  }
  .list-group-item[title~=Gain] {
    background-color: var(--sl-color-green-100);
  }
  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  sl-drawer::part(base) {
    top: -.5rem !important;
  }
  .toolbar {
    /* same as sl-tab-group */
    padding-top: .25rem;
    padding-bottom: .25rem;
    background: linear-gradient(340deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 41%, rgba(255, 255, 255, 0) 57%, rgba(255, 255, 255, 0.40) 100%);
    background-color: rgba(52, 52, 52, .9);
    border-radius: 1rem;
    border-width: 1.4px;
    border-style: solid;
    border-color: rgba(255, 255, 255, .2);
  }
  .toolbar sl-button-group::part(base) {
    grid-gap: .75rem;
  }
  .toolbar sl-button::part(base) {
    border-color: transparent;
    background: var(--Controls-Idle, linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.07));
    background-blend-mode: color-dodge, normal;
    border-radius: 1rem;
  }
`;
