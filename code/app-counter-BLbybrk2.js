import{i,b as o,a as u,r as f,t as c}from"./shoelace-styles-DuBzW-jG.js";import"./table-styles-DrheAqdc.js";import"./alert-styles-cAzKvmdU.js";import"./fab-CVo2YgrU.js";import"./counter-styles-D82i61Ku.js";import"./app-home-CPzBWFH8.js";var v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,b=(l,t,s,e)=>{for(var a=e>1?void 0:e?m(t,s):t,p=l.length-1,n;p>=0;p--)(n=l[p])&&(a=(e?n(t,s,a):n(a))||a);return e&&a&&v(t,s,a),a};let r=class extends i{constructor(){super(...arguments),this.fabDrawerOpen=!1}openFabDrawer(){this.fabDrawerOpen=!0}closeFabDrawer(){this.fabDrawerOpen=!1}fabTab(){return o`
      <sl-tab slot="nav" panel="total">Total</sl-tab>
      <sl-tab slot="nav" panel="standings">Standings</sl-tab>
      <sl-tab slot="nav" panel="results">Results</sl-tab>
      <sl-tab slot="nav" panel="action-log">Log</sl-tab>
      <sl-tab slot="nav" panel="setup">Setup</sl-tab>
    `}render(){return o`
      <!-- <app-header ?enableBack="${!0}"></app-header> -->
      <match-tracker></match-tracker>
      <app-navigation></app-navigation>
    `}};r.styles=u`
    sl-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;b([f()],r.prototype,"fabDrawerOpen",2);r=b([c("app-counter")],r);export{r as AppCounter};
//# sourceMappingURL=app-counter-BLbybrk2.js.map
