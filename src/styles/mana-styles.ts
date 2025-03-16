import { css } from 'lit';

export const manaStyles = css`
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
  font-family: var(--sl-font-sans);
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
