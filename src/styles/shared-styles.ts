import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`

  main, .main {
    margin-top: 1rem;
    padding: .75rem;
  }
  sl-button, sl-button::part(base), sl-button::part(label), sl-card, sl-switch, sl-switch::part(base), sl-icon, sl-tooltip, sl-alert, sl-tab, sl-menu-label, sl-menu-item, sl-select, sl-radio-group, input, button {
    font-family: var(--font-family) !important;
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
  table {
    width: 100%;
  }
  table.border {
    border-width: 0;
    border-style: solid;
    border-color: var(--sl-color-neutral-300);
  }
  table>thead,
  .table>thead {
    vertical-align: bottom;
  }
  table thead tr th {
    border-bottom: 2px solid var(--sl-color-neutral-500);
    padding: .5rem .5rem;
    background-color: inherit;
    border-bottom-width: 1px;
  }
  .table-striped>tbody>tr:nth-of-type(even)>* {
    background-color: var(--sl-color-neutral-200);
  }
  @media (prefers-color-scheme: dark) {
    .table-striped>tbody>tr:nth-of-type(even)>* {
      background-color: var(--sl-color-neutral-700);
    }
  }
  table>tbody,
  .table>tbody {
    vertical-align: inherit;
  }
  table tbody tr td {
    padding: .75rem .75rem;
    background-color: inherit;
    border-bottom-width: 1px;
  }
  sl-button {
    width: 100%;
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
  .ms {
    position: relative;
  }
  .ms-small::after {
    top: -2px !important;
  }
  .ms-2x {
    font-size: 1.75em;
  }
  .ms-3x {
    font-size: 2.25em;
  }
  .ms-4x {
    font-size: 3em;
  }
  .ms-5x {
    font-size: 3.75em;
  }
  .ms-6x {
    font-size: 4.5em;
  }
  .ms-loyalty-up,
  .ms-loyalty-down,
  .ms-saga-1,
  .ms-saga-2,
  .ms-saga-3,
  .ms-saga-4 {
    position: relative;
    text-align: center;
  }
  .ms-loyalty-down.ms-4x,
  .ms-loyalty-up.ms-4x {
    top: -5px;
  }
  .ms-loyalty-down::after,
  .ms-loyalty-up::after,
  .ms-saga-1::after,
  .ms-saga-2::after,
  .ms-saga-3::after,
  .ms-saga-4::after {
    color:  var(--ms-mana-w);
    display: inline-block;
    font-size: 0.5em;
    font-family: var(--font-family);
    position: absolute;
    line-height: 2.25em;
    width: 100%;
  }
  .ms-saga-1::after,
  .ms-saga-2::after,
  .ms-saga-3::after,
  .ms-saga-4::after {
    top: -5px;
    left: 0;
  }
  .ms-loyalty-down::after {
    line-height: 2em;
  }
  .ms-loyalty-down::after {
    content: "-";
    top: -1px;
    left: 1px;
  }
  .ms-loyalty-up::after {
    content: "+";
    top: -1px;
    left: 1px;
  }
  .ms-saga-4::after {
    content: "4";
  }
  .ms-saga-3::after {
    content: "3";
  }
  .ms-saga-2::after {
    content: "2";
  }
  .ms-saga-1::after {
    content: "1";
  }
  .ms-g .ms-cost {
    background-color: var(--ms-mana-g-bg);
  }
  .ms-u .ms-cost {
    background-color: var(--ms-mana-u-bg);
  }
  .ms-w .ms-cost {
    background-color: var(--ms-mana-w-bg);
  }
  .ms-r .ms-cost {
    background-color: var(--ms-mana-r-bg);
  }
  .ms-b .ms-cost {
    background-color: var(--ms-mana-b-bg);
  }
  .ms-c .ms-cost {
    background-color: var(--ms-mana-c-bg);
  }

`;
