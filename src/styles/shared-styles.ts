import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`

  .main {
    padding: .75rem;
  }
  @media (max-width: 950px) {
    .hide-at-800,
    .main {
      flex-direction: column !important;
    }
    .hide-at-800 {
      display: none !important;
    }
    sl-card, sl-card::part(base) {
      max-width: 100% !important;
      width: 100% !important;
    }
  }
  sl-button, sl-button::part(base), sl-button::part(label), sl-card, sl-switch, sl-switch::part(base), sl-icon, sl-tooltip, sl-alert, sl-tab, sl-menu-label, sl-menu-item, sl-select, sl-radio-group, input, button {
    font-family: var(--font-family) !important;
  }

  sl-card::part(base) {
    border-radius: 1rem;
    background: var(--special-color-white);
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
    border-spacing: 0 !important;
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
    background-color: var(--sl-color-neutral-50) !important;
  }
  // @media (prefers-color-scheme: dark) {
  //   .table-striped>tbody>tr:nth-of-type(even)>* {
  //     background-color: var(--sl-color-neutral-700);
  //   }
  //   sl-card::part(base), .card {
  //     background-color: transparent !important;
  //   }
  // }
  table>tbody,
  .table>tbody {
    vertical-align: inherit;
  }
  table tbody tr td {
    padding: .75rem .75rem;
    background-color: inherit;
    border-bottom-width: 1px;
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
    color:  var(--special-color-white);
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
/* RIBBON STYLING */
  .ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
  }
  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: .25rem solid var(--sl-color-neutral-400);
  }
  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 1rem 0;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    color: #fff;
    font: 700 18px/1 var(--font-family);
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
    text-transform: uppercase;
    text-align: center;
  }
  .ribbon span.primary {
    background-color: var(--ms-mana-u-bg);
  }
  .ribbon span.neutral {
    background-color: var(--ms-mana-b-bg);
  }
  .ribbon span.danger {
    background-color: var(--ms-mana-r-bg);
  }
  .ribbon span.warning {
    background-color: var(--sl-color-warning-600);
  }
  .ribbon span.colorless {
    background-color: #beb9b2;
  }
  .ribbon span.edh {
    // background: linear-gradient(112deg, var(--ms-mana-w-bg) 0%, var(--ms-mana-u-bg) 25%, var(--ms-mana-b-bg) 50%, var(--ms-mana-r-bg) 75%, var(--ms-mana-g-bg) 100%);
    background: linear-gradient(112deg, rgb(255, 255, 255) 0, rgb(59, 107, 160) 25%, rgb(56, 52, 49) 50%, rgb(198, 85, 62) 75%, rgb(61, 104, 75) 100%);
  }
  /* top left*/
  .ribbon-top-left {
    top: -10px;
    left: -10px;
    border-radius: 1rem 0;
  }
  .ribbon-top-left::before,
  .ribbon-top-left::after {
    border-top-color: transparent;
    border-left-color: transparent;
  }
  .ribbon-top-left::before {
    top: 0;
    right: 0;
  }
  .ribbon-top-left::after {
    bottom: 0;
    left: 0;
  }
  .ribbon-top-left span {
    right: -25px;
    top: 30px;
    transform: rotate(-45deg);
  }

  /* top right*/
  .ribbon-top-right {
    top: -10px;
    right: -10px;
    border-radius: 1rem 0;
  }
  .ribbon-top-right::before,
  .ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }
  .ribbon-top-right::before {
    top: 0;
    left: 0;
  }
  .ribbon-top-right::after {
    bottom: 0;
    right: 0;
  }
  .ribbon-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
  }

  /* bottom left*/
  .ribbon-bottom-left {
    bottom: -10px;
    left: -10px;
    border-radius: 0 1rem;
  }
  .ribbon-bottom-left::before,
  .ribbon-bottom-left::after {
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  .ribbon-bottom-left::before {
    bottom: 0;
    right: 0;
  }
  .ribbon-bottom-left::after {
    top: 0;
    left: 0;
  }
  .ribbon-bottom-left span {
    right: -25px;
    bottom: 30px;
    transform: rotate(225deg);
  }

  /* bottom right*/
  .ribbon-bottom-right {
    bottom: -10px;
    right: -10px;
    border-radius: 0 1rem;
  }
  .ribbon-bottom-right::before,
  .ribbon-bottom-right::after {
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  .ribbon-bottom-right::before {
    bottom: 0;
    left: 0;
  }
  .ribbon-bottom-right::after {
    top: 0;
    right: 0;
  }
  .ribbon-bottom-right span {
    left: -25px;
    bottom: 30px;
    // transform: rotate(-225deg);
    transform: rotate(315deg);
  }
`;
