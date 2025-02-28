import{i as R,c as F,S as Pt,_ as n,n as c,b as B,L as be,e as V,x as b,d as S,f as Jt,g as Qt,w as A,h as G,p as wt,j as ee,k as U,l as j,m as ue,a as k,t as ye,r as ve,o as Dt,E as Be,q as Tt,T as Zt,u as zt,v as dt,F as Lt,H as Re,y as es,z as ts,A as ss,B as is,C as Ne,D as os,G as ls,I as as,J as ns,K as rs,M as cs}from"./index-pvutR0jk.js";import{f as Rt,s as ds,S as hs,l as xt,u as _t}from"./chunk.BWPPYEQO-DUd7Ne4X.js";var ps=R`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,we=class extends B{constructor(){super(...arguments),this.localize=new be(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return b`
      <span
        part="base"
        class=${V({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?b`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};we.styles=[F,ps];we.dependencies={"sl-icon-button":Pt};n([c({reflect:!0})],we.prototype,"variant",2);n([c({reflect:!0})],we.prototype,"size",2);n([c({type:Boolean,reflect:!0})],we.prototype,"pill",2);n([c({type:Boolean})],we.prototype,"removable",2);we.define("sl-tag");var us=R`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,fs=R`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const fe=Math.min,M=Math.max,We=Math.round,He=Math.floor,te=e=>({x:e,y:e}),ms={left:"right",right:"left",bottom:"top",top:"bottom"},gs={start:"end",end:"start"};function ot(e,t,s){return M(e,fe(t,s))}function Oe(e,t){return typeof e=="function"?e(t):e}function me(e){return e.split("-")[0]}function Ee(e){return e.split("-")[1]}function Mt(e){return e==="x"?"y":"x"}function ht(e){return e==="y"?"height":"width"}function xe(e){return["top","bottom"].includes(me(e))?"y":"x"}function pt(e){return Mt(xe(e))}function bs(e,t,s){s===void 0&&(s=!1);const i=Ee(e),o=pt(e),l=ht(o);let a=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(a=qe(a)),[a,qe(a)]}function ys(e){const t=qe(e);return[lt(e),t,lt(t)]}function lt(e){return e.replace(/start|end/g,t=>gs[t])}function vs(e,t,s){const i=["left","right"],o=["right","left"],l=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return s?t?o:i:t?i:o;case"left":case"right":return t?l:a;default:return[]}}function ws(e,t,s,i){const o=Ee(e);let l=vs(me(e),s==="start",i);return o&&(l=l.map(a=>a+"-"+o),t&&(l=l.concat(l.map(lt)))),l}function qe(e){return e.replace(/left|right|bottom|top/g,t=>ms[t])}function xs(e){return{top:0,right:0,bottom:0,left:0,...e}}function It(e){return typeof e!="number"?xs(e):{top:e,right:e,bottom:e,left:e}}function Ue(e){const{x:t,y:s,width:i,height:o}=e;return{width:i,height:o,top:s,left:t,right:t+i,bottom:s+o,x:t,y:s}}function Ct(e,t,s){let{reference:i,floating:o}=e;const l=xe(t),a=pt(t),r=ht(a),d=me(t),h=l==="y",p=i.x+i.width/2-o.width/2,f=i.y+i.height/2-o.height/2,g=i[r]/2-o[r]/2;let u;switch(d){case"top":u={x:p,y:i.y-o.height};break;case"bottom":u={x:p,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:f};break;case"left":u={x:i.x-o.width,y:f};break;default:u={x:i.x,y:i.y}}switch(Ee(t)){case"start":u[a]-=g*(s&&h?-1:1);break;case"end":u[a]+=g*(s&&h?-1:1);break}return u}const _s=async(e,t,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:l=[],platform:a}=s,r=l.filter(Boolean),d=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:f}=Ct(h,i,d),g=i,u={},m=0;for(let y=0;y<r.length;y++){const{name:x,fn:v}=r[y],{x:C,y:$,data:E,reset:O}=await v({x:p,y:f,initialPlacement:i,placement:g,strategy:o,middlewareData:u,rects:h,platform:a,elements:{reference:e,floating:t}});p=C??p,f=$??f,u={...u,[x]:{...u[x],...E}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(h=O.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):O.rects),{x:p,y:f}=Ct(h,g,d)),y=-1)}return{x:p,y:f,placement:g,strategy:o,middlewareData:u}};async function ut(e,t){var s;t===void 0&&(t={});const{x:i,y:o,platform:l,rects:a,elements:r,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:g=!1,padding:u=0}=Oe(t,e),m=It(u),x=r[g?f==="floating"?"reference":"floating":f],v=Ue(await l.getClippingRect({element:(s=await(l.isElement==null?void 0:l.isElement(x)))==null||s?x:x.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(r.floating)),boundary:h,rootBoundary:p,strategy:d})),C=f==="floating"?{x:i,y:o,width:a.floating.width,height:a.floating.height}:a.reference,$=await(l.getOffsetParent==null?void 0:l.getOffsetParent(r.floating)),E=await(l.isElement==null?void 0:l.isElement($))?await(l.getScale==null?void 0:l.getScale($))||{x:1,y:1}:{x:1,y:1},O=Ue(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:r,rect:C,offsetParent:$,strategy:d}):C);return{top:(v.top-O.top+m.top)/E.y,bottom:(O.bottom-v.bottom+m.bottom)/E.y,left:(v.left-O.left+m.left)/E.x,right:(O.right-v.right+m.right)/E.x}}const Cs=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:i,placement:o,rects:l,platform:a,elements:r,middlewareData:d}=t,{element:h,padding:p=0}=Oe(e,t)||{};if(h==null)return{};const f=It(p),g={x:s,y:i},u=pt(o),m=ht(u),y=await a.getDimensions(h),x=u==="y",v=x?"top":"left",C=x?"bottom":"right",$=x?"clientHeight":"clientWidth",E=l.reference[m]+l.reference[u]-g[u]-l.floating[m],O=g[u]-l.reference[u],W=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let T=W?W[$]:0;(!T||!await(a.isElement==null?void 0:a.isElement(W)))&&(T=r.floating[$]||l.floating[m]);const ae=E/2-O/2,J=T/2-y[m]/2-1,q=fe(f[v],J),ce=fe(f[C],J),Q=q,de=T-y[m]-ce,L=T/2-y[m]/2+ae,Ce=ot(Q,L,de),ne=!d.arrow&&Ee(o)!=null&&L!==Ce&&l.reference[m]/2-(L<Q?q:ce)-y[m]/2<0,Z=ne?L<Q?L-Q:L-de:0;return{[u]:g[u]+Z,data:{[u]:Ce,centerOffset:L-Ce-Z,...ne&&{alignmentOffset:Z}},reset:ne}}}),ks=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:o,middlewareData:l,rects:a,initialPlacement:r,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...x}=Oe(e,t);if((s=l.arrow)!=null&&s.alignmentOffset)return{};const v=me(o),C=xe(r),$=me(r)===r,E=await(d.isRTL==null?void 0:d.isRTL(h.floating)),O=g||($||!y?[qe(r)]:ys(r)),W=m!=="none";!g&&W&&O.push(...ws(r,y,m,E));const T=[r,...O],ae=await ut(t,x),J=[];let q=((i=l.flip)==null?void 0:i.overflows)||[];if(p&&J.push(ae[v]),f){const L=bs(o,a,E);J.push(ae[L[0]],ae[L[1]])}if(q=[...q,{placement:o,overflows:J}],!J.every(L=>L<=0)){var ce,Q;const L=(((ce=l.flip)==null?void 0:ce.index)||0)+1,Ce=T[L];if(Ce)return{data:{index:L,overflows:q},reset:{placement:Ce}};let ne=(Q=q.filter(Z=>Z.overflows[0]<=0).sort((Z,he)=>Z.overflows[1]-he.overflows[1])[0])==null?void 0:Q.placement;if(!ne)switch(u){case"bestFit":{var de;const Z=(de=q.filter(he=>{if(W){const pe=xe(he.placement);return pe===C||pe==="y"}return!0}).map(he=>[he.placement,he.overflows.filter(pe=>pe>0).reduce((pe,Xt)=>pe+Xt,0)]).sort((he,pe)=>he[1]-pe[1])[0])==null?void 0:de[0];Z&&(ne=Z);break}case"initialPlacement":ne=r;break}if(o!==ne)return{reset:{placement:ne}}}return{}}}};async function $s(e,t){const{placement:s,platform:i,elements:o}=e,l=await(i.isRTL==null?void 0:i.isRTL(o.floating)),a=me(s),r=Ee(s),d=xe(s)==="y",h=["left","top"].includes(a)?-1:1,p=l&&d?-1:1,f=Oe(t,e);let{mainAxis:g,crossAxis:u,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return r&&typeof m=="number"&&(u=r==="end"?m*-1:m),d?{x:u*p,y:g*h}:{x:g*h,y:u*p}}const Ss=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,i;const{x:o,y:l,placement:a,middlewareData:r}=t,d=await $s(t,e);return a===((s=r.offset)==null?void 0:s.placement)&&(i=r.arrow)!=null&&i.alignmentOffset?{}:{x:o+d.x,y:l+d.y,data:{...d,placement:a}}}}},Os=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:o}=t,{mainAxis:l=!0,crossAxis:a=!1,limiter:r={fn:x=>{let{x:v,y:C}=x;return{x:v,y:C}}},...d}=Oe(e,t),h={x:s,y:i},p=await ut(t,d),f=xe(me(o)),g=Mt(f);let u=h[g],m=h[f];if(l){const x=g==="y"?"top":"left",v=g==="y"?"bottom":"right",C=u+p[x],$=u-p[v];u=ot(C,u,$)}if(a){const x=f==="y"?"top":"left",v=f==="y"?"bottom":"right",C=m+p[x],$=m-p[v];m=ot(C,m,$)}const y=r.fn({...t,[g]:u,[f]:m});return{...y,data:{x:y.x-s,y:y.y-i,enabled:{[g]:l,[f]:a}}}}}},Es=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,i;const{placement:o,rects:l,platform:a,elements:r}=t,{apply:d=()=>{},...h}=Oe(e,t),p=await ut(t,h),f=me(o),g=Ee(o),u=xe(o)==="y",{width:m,height:y}=l.floating;let x,v;f==="top"||f==="bottom"?(x=f,v=g===(await(a.isRTL==null?void 0:a.isRTL(r.floating))?"start":"end")?"left":"right"):(v=f,x=g==="end"?"top":"bottom");const C=y-p.top-p.bottom,$=m-p.left-p.right,E=fe(y-p[x],C),O=fe(m-p[v],$),W=!t.middlewareData.shift;let T=E,ae=O;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(ae=$),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(T=C),W&&!g){const q=M(p.left,0),ce=M(p.right,0),Q=M(p.top,0),de=M(p.bottom,0);u?ae=m-2*(q!==0||ce!==0?q+ce:M(p.left,p.right)):T=y-2*(Q!==0||de!==0?Q+de:M(p.top,p.bottom))}await d({...t,availableWidth:ae,availableHeight:T});const J=await a.getDimensions(r.floating);return m!==J.width||y!==J.height?{reset:{rects:!0}}:{}}}};function Ge(){return typeof window<"u"}function Ae(e){return Vt(e)?(e.nodeName||"").toLowerCase():"#document"}function I(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function oe(e){var t;return(t=(Vt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vt(e){return Ge()?e instanceof Node||e instanceof I(e).Node:!1}function K(e){return Ge()?e instanceof Element||e instanceof I(e).Element:!1}function se(e){return Ge()?e instanceof HTMLElement||e instanceof I(e).HTMLElement:!1}function kt(e){return!Ge()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof I(e).ShadowRoot}function Me(e){const{overflow:t,overflowX:s,overflowY:i,display:o}=Y(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(o)}function As(e){return["table","td","th"].includes(Ae(e))}function Xe(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Je(e){const t=ft(),s=K(e)?Y(e):e;return["transform","translate","scale","rotate","perspective"].some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function Ps(e){let t=ge(e);for(;se(t)&&!$e(t);){if(Je(t))return t;if(Xe(t))return null;t=ge(t)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $e(e){return["html","body","#document"].includes(Ae(e))}function Y(e){return I(e).getComputedStyle(e)}function Qe(e){return K(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ge(e){if(Ae(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kt(e)&&e.host||oe(e);return kt(t)?t.host:t}function Ht(e){const t=ge(e);return $e(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&Me(t)?t:Ht(t)}function Te(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const o=Ht(e),l=o===((i=e.ownerDocument)==null?void 0:i.body),a=I(o);if(l){const r=at(a);return t.concat(a,a.visualViewport||[],Me(o)?o:[],r&&s?Te(r):[])}return t.concat(o,Te(o,[],s))}function at(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ft(e){const t=Y(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=se(e),l=o?e.offsetWidth:s,a=o?e.offsetHeight:i,r=We(s)!==l||We(i)!==a;return r&&(s=l,i=a),{width:s,height:i,$:r}}function mt(e){return K(e)?e:e.contextElement}function ke(e){const t=mt(e);if(!se(t))return te(1);const s=t.getBoundingClientRect(),{width:i,height:o,$:l}=Ft(t);let a=(l?We(s.width):s.width)/i,r=(l?We(s.height):s.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!r||!Number.isFinite(r))&&(r=1),{x:a,y:r}}const Ds=te(0);function Bt(e){const t=I(e);return!ft()||!t.visualViewport?Ds:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ts(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==I(e)?!1:t}function _e(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const o=e.getBoundingClientRect(),l=mt(e);let a=te(1);t&&(i?K(i)&&(a=ke(i)):a=ke(e));const r=Ts(l,s,i)?Bt(l):te(0);let d=(o.left+r.x)/a.x,h=(o.top+r.y)/a.y,p=o.width/a.x,f=o.height/a.y;if(l){const g=I(l),u=i&&K(i)?I(i):i;let m=g,y=at(m);for(;y&&i&&u!==m;){const x=ke(y),v=y.getBoundingClientRect(),C=Y(y),$=v.left+(y.clientLeft+parseFloat(C.paddingLeft))*x.x,E=v.top+(y.clientTop+parseFloat(C.paddingTop))*x.y;d*=x.x,h*=x.y,p*=x.x,f*=x.y,d+=$,h+=E,m=I(y),y=at(m)}}return Ue({width:p,height:f,x:d,y:h})}function gt(e,t){const s=Qe(e).scrollLeft;return t?t.left+s:_e(oe(e)).left+s}function Nt(e,t,s){s===void 0&&(s=!1);const i=e.getBoundingClientRect(),o=i.left+t.scrollLeft-(s?0:gt(e,i)),l=i.top+t.scrollTop;return{x:o,y:l}}function zs(e){let{elements:t,rect:s,offsetParent:i,strategy:o}=e;const l=o==="fixed",a=oe(i),r=t?Xe(t.floating):!1;if(i===a||r&&l)return s;let d={scrollLeft:0,scrollTop:0},h=te(1);const p=te(0),f=se(i);if((f||!f&&!l)&&((Ae(i)!=="body"||Me(a))&&(d=Qe(i)),se(i))){const u=_e(i);h=ke(i),p.x=u.x+i.clientLeft,p.y=u.y+i.clientTop}const g=a&&!f&&!l?Nt(a,d,!0):te(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-d.scrollLeft*h.x+p.x+g.x,y:s.y*h.y-d.scrollTop*h.y+p.y+g.y}}function Ls(e){return Array.from(e.getClientRects())}function Rs(e){const t=oe(e),s=Qe(e),i=e.ownerDocument.body,o=M(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),l=M(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-s.scrollLeft+gt(e);const r=-s.scrollTop;return Y(i).direction==="rtl"&&(a+=M(t.clientWidth,i.clientWidth)-o),{width:o,height:l,x:a,y:r}}function Ms(e,t){const s=I(e),i=oe(e),o=s.visualViewport;let l=i.clientWidth,a=i.clientHeight,r=0,d=0;if(o){l=o.width,a=o.height;const h=ft();(!h||h&&t==="fixed")&&(r=o.offsetLeft,d=o.offsetTop)}return{width:l,height:a,x:r,y:d}}function Is(e,t){const s=_e(e,!0,t==="fixed"),i=s.top+e.clientTop,o=s.left+e.clientLeft,l=se(e)?ke(e):te(1),a=e.clientWidth*l.x,r=e.clientHeight*l.y,d=o*l.x,h=i*l.y;return{width:a,height:r,x:d,y:h}}function $t(e,t,s){let i;if(t==="viewport")i=Ms(e,s);else if(t==="document")i=Rs(oe(e));else if(K(t))i=Is(t,s);else{const o=Bt(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Ue(i)}function Wt(e,t){const s=ge(e);return s===t||!K(s)||$e(s)?!1:Y(s).position==="fixed"||Wt(s,t)}function Vs(e,t){const s=t.get(e);if(s)return s;let i=Te(e,[],!1).filter(r=>K(r)&&Ae(r)!=="body"),o=null;const l=Y(e).position==="fixed";let a=l?ge(e):e;for(;K(a)&&!$e(a);){const r=Y(a),d=Je(a);!d&&r.position==="fixed"&&(o=null),(l?!d&&!o:!d&&r.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Me(a)&&!d&&Wt(e,a))?i=i.filter(p=>p!==a):o=r,a=ge(a)}return t.set(e,i),i}function Hs(e){let{element:t,boundary:s,rootBoundary:i,strategy:o}=e;const a=[...s==="clippingAncestors"?Xe(t)?[]:Vs(t,this._c):[].concat(s),i],r=a[0],d=a.reduce((h,p)=>{const f=$t(t,p,o);return h.top=M(f.top,h.top),h.right=fe(f.right,h.right),h.bottom=fe(f.bottom,h.bottom),h.left=M(f.left,h.left),h},$t(t,r,o));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Fs(e){const{width:t,height:s}=Ft(e);return{width:t,height:s}}function Bs(e,t,s){const i=se(t),o=oe(t),l=s==="fixed",a=_e(e,!0,l,t);let r={scrollLeft:0,scrollTop:0};const d=te(0);if(i||!i&&!l)if((Ae(t)!=="body"||Me(o))&&(r=Qe(t)),i){const g=_e(t,!0,l,t);d.x=g.x+t.clientLeft,d.y=g.y+t.clientTop}else o&&(d.x=gt(o));const h=o&&!i&&!l?Nt(o,r):te(0),p=a.left+r.scrollLeft-d.x-h.x,f=a.top+r.scrollTop-d.y-h.y;return{x:p,y:f,width:a.width,height:a.height}}function tt(e){return Y(e).position==="static"}function St(e,t){if(!se(e)||Y(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return oe(e)===s&&(s=s.ownerDocument.body),s}function qt(e,t){const s=I(e);if(Xe(e))return s;if(!se(e)){let o=ge(e);for(;o&&!$e(o);){if(K(o)&&!tt(o))return o;o=ge(o)}return s}let i=St(e,t);for(;i&&As(i)&&tt(i);)i=St(i,t);return i&&$e(i)&&tt(i)&&!Je(i)?s:i||Ps(e)||s}const Ns=async function(e){const t=this.getOffsetParent||qt,s=this.getDimensions,i=await s(e.floating);return{reference:Bs(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ws(e){return Y(e).direction==="rtl"}const Fe={convertOffsetParentRelativeRectToViewportRelativeRect:zs,getDocumentElement:oe,getClippingRect:Hs,getOffsetParent:qt,getElementRects:Ns,getClientRects:Ls,getDimensions:Fs,getScale:ke,isElement:K,isRTL:Ws};function Ut(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function qs(e,t){let s=null,i;const o=oe(e);function l(){var r;clearTimeout(i),(r=s)==null||r.disconnect(),s=null}function a(r,d){r===void 0&&(r=!1),d===void 0&&(d=1),l();const h=e.getBoundingClientRect(),{left:p,top:f,width:g,height:u}=h;if(r||t(),!g||!u)return;const m=He(f),y=He(o.clientWidth-(p+g)),x=He(o.clientHeight-(f+u)),v=He(p),$={rootMargin:-m+"px "+-y+"px "+-x+"px "+-v+"px",threshold:M(0,fe(1,d))||1};let E=!0;function O(W){const T=W[0].intersectionRatio;if(T!==d){if(!E)return a();T?a(!1,T):i=setTimeout(()=>{a(!1,1e-7)},1e3)}T===1&&!Ut(h,e.getBoundingClientRect())&&a(),E=!1}try{s=new IntersectionObserver(O,{...$,root:o.ownerDocument})}catch{s=new IntersectionObserver(O,$)}s.observe(e)}return a(!0),l}function Us(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:r=typeof IntersectionObserver=="function",animationFrame:d=!1}=i,h=mt(e),p=o||l?[...h?Te(h):[],...Te(t)]:[];p.forEach(v=>{o&&v.addEventListener("scroll",s,{passive:!0}),l&&v.addEventListener("resize",s)});const f=h&&r?qs(h,s):null;let g=-1,u=null;a&&(u=new ResizeObserver(v=>{let[C]=v;C&&C.target===h&&u&&(u.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var $;($=u)==null||$.observe(t)})),s()}),h&&!d&&u.observe(h),u.observe(t));let m,y=d?_e(e):null;d&&x();function x(){const v=_e(e);y&&!Ut(y,v)&&s(),y=v,m=requestAnimationFrame(x)}return s(),()=>{var v;p.forEach(C=>{o&&C.removeEventListener("scroll",s),l&&C.removeEventListener("resize",s)}),f?.(),(v=u)==null||v.disconnect(),u=null,d&&cancelAnimationFrame(m)}}const js=Ss,Ks=Os,Ys=ks,Ot=Es,Gs=Cs,Xs=(e,t,s)=>{const i=new Map,o={platform:Fe,...s},l={...o.platform,_c:i};return _s(e,t,{...o,platform:l})};function Js(e){return Qs(e)}function st(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Qs(e){for(let t=e;t;t=st(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=st(e);t;t=st(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||Je(s)||t.tagName==="BODY"))return t}return null}function Zs(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var _=class extends B{constructor(){super(...arguments),this.localize=new be(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,l=0,a=0,r=0,d=0,h=0,p=0;s?e.top<t.top?(i=e.left,o=e.bottom,l=e.right,a=e.bottom,r=t.left,d=t.top,h=t.right,p=t.top):(i=t.left,o=t.bottom,l=t.right,a=t.bottom,r=e.left,d=e.top,h=e.right,p=e.top):e.left<t.left?(i=e.right,o=e.top,l=t.left,a=t.top,r=e.right,d=e.bottom,h=t.left,p=t.bottom):(i=t.right,o=t.top,l=e.left,a=e.top,r=t.right,d=t.bottom,h=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${l}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Zs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Us(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[js({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ot({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ys({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ks({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ot({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Gs({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>Fe.getOffsetParent(s,Js):Fe.getOffsetParent;Xs(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Jt(Qt({},Fe),{getOffsetParent:t})}).then(({x:s,y:i,middlewareData:o,placement:l})=>{const a=this.localize.dir()==="rtl",r={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];if(this.setAttribute("data-current-placement",l),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const d=o.arrow.x,h=o.arrow.y;let p="",f="",g="",u="";if(this.arrowPlacement==="start"){const m=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=a?m:"",u=a?"":m}else if(this.arrowPlacement==="end"){const m=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=a?"":m,u=a?m:"",g=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof d=="number"?`${d}px`:"",p=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:p,right:f,bottom:g,left:u,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${V({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${V({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?b`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};_.styles=[F,fs];n([S(".popup")],_.prototype,"popup",2);n([S(".popup__arrow")],_.prototype,"arrowEl",2);n([c()],_.prototype,"anchor",2);n([c({type:Boolean,reflect:!0})],_.prototype,"active",2);n([c({reflect:!0})],_.prototype,"placement",2);n([c({reflect:!0})],_.prototype,"strategy",2);n([c({type:Number})],_.prototype,"distance",2);n([c({type:Number})],_.prototype,"skidding",2);n([c({type:Boolean})],_.prototype,"arrow",2);n([c({attribute:"arrow-placement"})],_.prototype,"arrowPlacement",2);n([c({attribute:"arrow-padding",type:Number})],_.prototype,"arrowPadding",2);n([c({type:Boolean})],_.prototype,"flip",2);n([c({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],_.prototype,"flipFallbackPlacements",2);n([c({attribute:"flip-fallback-strategy"})],_.prototype,"flipFallbackStrategy",2);n([c({type:Object})],_.prototype,"flipBoundary",2);n([c({attribute:"flip-padding",type:Number})],_.prototype,"flipPadding",2);n([c({type:Boolean})],_.prototype,"shift",2);n([c({type:Object})],_.prototype,"shiftBoundary",2);n([c({attribute:"shift-padding",type:Number})],_.prototype,"shiftPadding",2);n([c({attribute:"auto-size"})],_.prototype,"autoSize",2);n([c()],_.prototype,"sync",2);n([c({type:Object})],_.prototype,"autoSizeBoundary",2);n([c({attribute:"auto-size-padding",type:Number})],_.prototype,"autoSizePadding",2);n([c({attribute:"hover-bridge",type:Boolean})],_.prototype,"hoverBridge",2);var P=class extends B{constructor(){super(),this.localize=new be(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=wt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=wt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ee(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=U(this,"tooltip.show",{dir:this.localize.dir()});await j(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ee(this.body);const{keyframes:s,options:i}=U(this,"tooltip.hide",{dir:this.localize.dir()});await j(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ue(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ue(this,"sl-after-hide")}render(){return b`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${V({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};P.styles=[F,us];P.dependencies={"sl-popup":_};n([S("slot:not([name])")],P.prototype,"defaultSlot",2);n([S(".tooltip__body")],P.prototype,"body",2);n([S("sl-popup")],P.prototype,"popup",2);n([c()],P.prototype,"content",2);n([c()],P.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],P.prototype,"disabled",2);n([c({type:Number})],P.prototype,"distance",2);n([c({type:Boolean,reflect:!0})],P.prototype,"open",2);n([c({type:Number})],P.prototype,"skidding",2);n([c()],P.prototype,"trigger",2);n([c({type:Boolean})],P.prototype,"hoist",2);n([A("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);n([A(["content","distance","hoist","placement","skidding"])],P.prototype,"handleOptionsChange",1);n([A("disabled")],P.prototype,"handleDisabledChange",1);G("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});G("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});P.define("sl-tooltip");var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,Ze=(e,t,s,i)=>{for(var o=i>1?void 0:i?ti(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&ei(t,s,o),o};let ze=class extends ve{constructor(){super(...arguments),this.players=[],this.newPlayer="",this.errorMessage=""}addPlayer(){if(console.log("addPlayer called"),this.newPlayer&&this.validatePlayerName(this.newPlayer)){this.dispatchEvent(new CustomEvent("player-added",{detail:this.newPlayer})),this.newPlayer="";const e=this.shadowRoot.querySelector("sl-input");e&&(e.helpText="")}else{const e=this.shadowRoot.querySelector("sl-input");e&&(e.helpText=this.errorMessage)}}handleInputChange(e){const t=e.target;this.newPlayer=t.value;const s=this.shadowRoot.querySelector("sl-input");s&&(this.validatePlayerName(this.newPlayer)?s.helpText="":s.helpText=this.errorMessage)}validatePlayerName(e){const t=/^[a-zA-Z0-9]+$/.test(e);return console.log("isValid:",t),t?(this.errorMessage="",!0):(this.errorMessage="Enter a Name containing only letters or numbers with no spaces or special characters.",!1)}removePlayer(e){this.dispatchEvent(new CustomEvent("remove-player",{detail:e}))}clearAllPlayers(){this.dispatchEvent(new CustomEvent("clear-all-players"))}render(){return b`
      <sl-card>
        <div slot="header">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            Player Setup
            <sl-tooltip content="Clear Player List">
              <sl-button label="clear player list" variant="warning" outline @click=${this.clearAllPlayers}>
                <sl-icon library="default" name="trash-fill" label="Clear Standings"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
          <form class="input-validation-custom">
            <sl-input
              .value=${this.newPlayer}
              @sl-input=${this.handleInputChange}
              spellcheck="true"
              name="name"
              label="Name"
              required
              clearable
              autocomplete="off"
              help-text=${this.errorMessage}
              class="player-input"
            >
              <sl-icon library="default" name="person" slot="prefix"></sl-icon>
            </sl-input>
            <br />
            <sl-button type="button" variant="primary" outline @click=${this.addPlayer} class="larger-icon">
              <sl-icon library="default" slot="prefix" name="person-fill-add"></sl-icon>
              Add Player
            </sl-button>
          </form>
          <p><strong>Players</strong></p>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; grid-gap: .5rem; width: 100%;">
            ${this.players.map(e=>b`
              <sl-tag removable @sl-remove=${()=>this.removePlayer(e)}>
                ${e}
              </sl-tag>
            `)}
          </div>
        </div>
      </sl-card>
      <style>
        sl-card {
          width: 100%;
        }
        .player-input::part(form-control-help-text) {
          color: var(--sl-color-danger-600);
        }
        .player-input::part(form-control-help-text)[attr="All fixed!"] {
          color: var(--sl-color-success-600);
        }
      </style>
      `}};Ze([c({type:Array})],ze.prototype,"players",2);Ze([k()],ze.prototype,"newPlayer",2);Ze([k()],ze.prototype,"errorMessage",2);ze=Ze([ye("player-input")],ze);var si=R`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends Dt{constructor(t){if(super(t),this.it=Be,t.type!==Tt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Be||t==null)return this._t=void 0,this.it=t;if(t===Zt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};nt.directiveName="unsafeHTML",nt.resultType=1;const ii=zt(nt);var w=class extends B{constructor(){super(...arguments),this.formControlController=new Lt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Re(this,"help-text","label"),this.localize=new be(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>b`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(s||i)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),l=o.indexOf(this.currentOption);let a=Math.max(0,l);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=l+1,a>o.length-1&&(a=0)):e.key==="ArrowUp"?(a=l-1,a<0&&(a=o.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=o.length-1),this.setCurrentOption(o[a])}if(e.key&&e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const l of o)if(l.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(l);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(t)?t:[t],i=[];e.forEach(o=>i.push(o.value)),this.setSelectedOptions(e.filter(o=>s.includes(o.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s;const i=this.getAllOptions();this.selectedOptions=i.filter(l=>l.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(l=>l.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const l=this.selectedOptions[0];this.value=(e=l?.value)!=null?e:"",this.displayLabel=(s=(t=l?.getTextLabel)==null?void 0:t.call(l))!=null?s:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return b`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof s=="string"?ii(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return b`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return b``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),e==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ee(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=U(this,"select.show",{dir:this.localize.dir()});await j(this.popup.popup,e,t),this.currentOption&&ds(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ee(this);const{keyframes:e,options:t}=U(this,"select.hide",{dir:this.localize.dir()});await j(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ue(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ue(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,l=this.placeholder&&this.value&&this.value.length<=0;return b`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${V({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":l,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?b`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?b`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};w.styles=[F,Rt,si];w.dependencies={"sl-icon":dt,"sl-popup":_,"sl-tag":we};n([S(".select")],w.prototype,"popup",2);n([S(".select__combobox")],w.prototype,"combobox",2);n([S(".select__display-input")],w.prototype,"displayInput",2);n([S(".select__value-input")],w.prototype,"valueInput",2);n([S(".select__listbox")],w.prototype,"listbox",2);n([k()],w.prototype,"hasFocus",2);n([k()],w.prototype,"displayLabel",2);n([k()],w.prototype,"currentOption",2);n([k()],w.prototype,"selectedOptions",2);n([k()],w.prototype,"valueHasChanged",2);n([c()],w.prototype,"name",2);n([k()],w.prototype,"value",1);n([c({attribute:"value"})],w.prototype,"defaultValue",2);n([c({reflect:!0})],w.prototype,"size",2);n([c()],w.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],w.prototype,"multiple",2);n([c({attribute:"max-options-visible",type:Number})],w.prototype,"maxOptionsVisible",2);n([c({type:Boolean,reflect:!0})],w.prototype,"disabled",2);n([c({type:Boolean})],w.prototype,"clearable",2);n([c({type:Boolean,reflect:!0})],w.prototype,"open",2);n([c({type:Boolean})],w.prototype,"hoist",2);n([c({type:Boolean,reflect:!0})],w.prototype,"filled",2);n([c({type:Boolean,reflect:!0})],w.prototype,"pill",2);n([c()],w.prototype,"label",2);n([c({reflect:!0})],w.prototype,"placement",2);n([c({attribute:"help-text"})],w.prototype,"helpText",2);n([c({reflect:!0})],w.prototype,"form",2);n([c({type:Boolean,reflect:!0})],w.prototype,"required",2);n([c()],w.prototype,"getTag",2);n([A("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);n([A(["defaultValue","value"],{waitUntilFirstUpdate:!0})],w.prototype,"handleValueChange",1);n([A("open",{waitUntilFirstUpdate:!0})],w.prototype,"handleOpenChange",1);G("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});G("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});w.define("sl-select");var oi=R`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,N=class extends B{constructor(){super(...arguments),this.localize=new be(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(t+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(t+=s.textContent)}),t.trim()}render(){return b`
      <div
        part="base"
        class=${V({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};N.styles=[F,oi];N.dependencies={"sl-icon":dt};n([S(".option__label")],N.prototype,"defaultSlot",2);n([k()],N.prototype,"current",2);n([k()],N.prototype,"selected",2);n([k()],N.prototype,"hasHover",2);n([c({reflect:!0})],N.prototype,"value",2);n([c({type:Boolean,reflect:!0})],N.prototype,"disabled",2);n([A("disabled")],N.prototype,"handleDisabledChange",1);n([A("selected")],N.prototype,"handleSelectedChange",1);n([A("value")],N.prototype,"handleValueChange",1);N.define("sl-option");var li=R`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,D=class extends B{constructor(){super(...arguments),this.formControlController=new Lt(this),this.hasSlotController=new Re(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?es:e?ts:ss}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!t||t.disabled||(this.value=t.value,s.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(r=>!r.disabled),i=(t=s.find(r=>r.checked))!=null?t:s[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,l=this.value;let a=s.indexOf(i)+o;a<0&&(a=s.length-1),a>s.length-1&&(a=0),this.getAllRadios().forEach(r=>{r.checked=!1,this.hasButtonGroup||r.setAttribute("tabindex","-1")}),this.value=s[a].value,s[a].checked=!0,this.hasButtonGroup?s[a].shadowRoot.querySelector("button").focus():(s[a].setAttribute("tabindex","0"),s[a].focus()),this.value!==l&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),s=t.find(l=>l.checked),i=t.find(l=>!l.disabled),o=s||i;o&&o.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=b`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return b`
      <fieldset
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?b`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};D.styles=[F,Rt,li];D.dependencies={"sl-button-group":hs};n([S("slot:not([name])")],D.prototype,"defaultSlot",2);n([S(".radio-group__validation-input")],D.prototype,"validationInput",2);n([k()],D.prototype,"hasButtonGroup",2);n([k()],D.prototype,"errorMessage",2);n([k()],D.prototype,"defaultValue",2);n([c()],D.prototype,"label",2);n([c({attribute:"help-text"})],D.prototype,"helpText",2);n([c()],D.prototype,"name",2);n([c({reflect:!0})],D.prototype,"value",2);n([c({reflect:!0})],D.prototype,"size",2);n([c({reflect:!0})],D.prototype,"form",2);n([c({type:Boolean,reflect:!0})],D.prototype,"required",2);n([A("size",{waitUntilFirstUpdate:!0})],D.prototype,"handleSizeChange",1);n([A("value")],D.prototype,"handleValueChange",1);D.define("sl-radio-group");var ai=R`
  ${is}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,X=class extends B{constructor(){super(...arguments),this.hasSlotController=new Re(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return os`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${V({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Ne(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};X.styles=[F,ai];n([S(".button")],X.prototype,"input",2);n([S(".hidden-input")],X.prototype,"hiddenInput",2);n([k()],X.prototype,"hasFocus",2);n([c({type:Boolean,reflect:!0})],X.prototype,"checked",2);n([c()],X.prototype,"value",2);n([c({type:Boolean,reflect:!0})],X.prototype,"disabled",2);n([c({reflect:!0})],X.prototype,"size",2);n([c({type:Boolean,reflect:!0})],X.prototype,"pill",2);n([A("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);X.define("sl-radio-button");R`

`;ls("ms",{resolver:e=>`https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${e.replace(/^ms-/,"")}.svg`,mutator:e=>e.setAttribute("fill","currentColor")});var ni=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,Ie=(e,t,s,i)=>{for(var o=i>1?void 0:i?ri(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&ni(t,s,o),o};let Se=class extends ve{constructor(){super(...arguments),this.players=[],this.player1="",this.player2="",this.winner="draw"}recordMatch(){if(this.player1&&this.player2&&this.player1!==this.player2){let e;this.winner==="draw"?e="draw":this.winner===this.player1?e="win":e="loss",this.dispatchEvent(new CustomEvent("match-recorded",{detail:{player1:this.player1,player2:this.player2,result:e,winner:this.winner}}))}}handlePlayer1Change(e){const t=e.target;this.player1=t.value,(this.winner===this.player2||this.winner===this.player1)&&(this.winner="draw")}handlePlayer2Change(e){const t=e.target;this.player2=t.value,(this.winner===this.player1||this.winner===this.player2)&&(this.winner="draw")}handleWinnerChange(e){const t=e.target;this.winner=t.value==="draw"?"draw":t.value}render(){const e=this.players.filter(l=>l.name!==this.player2),t=this.players.filter(l=>l.name!==this.player1),s=this.player1!==""&&this.player2!=="",i=this.player1===""?"Player 1":this.player1,o=this.player2===""?"Player 2":this.player2;return b`
      <form>
        <sl-select
          value=${this.player1}
          @sl-change=${this.handlePlayer1Change}
          label="Player 1"
          clearable
        >
          <sl-option value="">Select a player</sl-option>
          ${e.map(l=>b`<sl-option value=${l.name}>${l.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-select
          value=${this.player2}
          @sl-change=${this.handlePlayer2Change}
          label="Player 2"
          clearable
        >
          <sl-option value="">Select a player</sl-option>
          ${t.map(l=>b`<sl-option value=${l.name}>${l.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.winner}"
          aria-label="Win selector group"
        >
          <sl-radio-button
            value=${this.player1}
            ?disabled="${!s}"
            aria-label="select for player one"
          >
            ${i}
          </sl-radio-button>
          <sl-radio-button
            value=${this.player2}
            ?disabled="${!s}"
            aria-label="select for player two"
          >
            ${o}
          </sl-radio-button>
          <sl-radio-button
            value="draw"
            ?disabled="${!s}"
            aria-label="select for a draw"
          >
            Draw
          </sl-radio-button>
        </sl-radio-group>
        <br />
        <sl-button variant="success" outline @click=${this.recordMatch} ?disabled=${!s}>
          Record Result</sl-button>
      </form>
    `}};Ie([c({type:Array})],Se.prototype,"players",2);Ie([k()],Se.prototype,"player1",2);Ie([k()],Se.prototype,"player2",2);Ie([k()],Se.prototype,"winner",2);Se=Ie([ye("match-input")],Se);var ci=Object.defineProperty,di=Object.getOwnPropertyDescriptor,jt=(e,t,s,i)=>{for(var o=i>1?void 0:i?di(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&ci(t,s,o),o};let je=class extends ve{constructor(){super(...arguments),this.standings=[]}render(){return b`
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          ${this.standings.map(e=>b`
            <tr>
              <td>${e.name}</td>
              <td>${e.wins}</td>
              <td>${e.losses}</td>
              <td>${e.draws}</td>
              <td>${e.points}</td>
              <td>${e.winPercentage||0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}};je.styles=R`
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid var(--sl-color-neutral-700);
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: var(--sl-color-neutral-200);
    }
    // tbody tr:first-of-type {
    //   background-color: var(--sl-color-primary-800);
    //   color: var(--sl-color-neutral-50);
    // }
    tbody tr:nth-of-type(even) {
      background-color: var(--sl-color-neutral-100);
    }
  `;jt([c({type:Array})],je.prototype,"standings",2);je=jt([ye("standings-display")],je);var Et=new WeakMap;function Kt(e){let t=Et.get(e);return t||(t=window.getComputedStyle(e,null),Et.set(e,t)),t}function hi(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Kt(e);return t.visibility!=="hidden"&&t.display!=="none"}function pi(e){const t=Kt(e),{overflowY:s,overflowX:i}=t;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function ui(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const l=e.getRootNode(),a=`input[type='radio'][name="${e.getAttribute("name")}"]`,r=l.querySelector(`${a}:checked`);return r?r===e:l.querySelector(a)===e}return hi(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:pi(e):!1}function fi(e){var t,s;const i=rt(e),o=(t=i[0])!=null?t:null,l=(s=i[i.length-1])!=null?s:null;return{start:o,end:l}}function mi(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function rt(e){const t=new WeakMap,s=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!s.includes(o)&&ui(o)&&s.push(o),o instanceof HTMLSlotElement&&mi(o,e)&&o.assignedElements({flatten:!0}).forEach(l=>{i(l)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const l of o.children)i(l)}return i(e),s.sort((o,l)=>{const a=Number(o.getAttribute("tabindex"))||0;return(Number(l.getAttribute("tabindex"))||0)-a})}function*bt(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*as(bt(e.shadowRoot.activeElement))))}function gi(){return[...bt()].pop()}var Pe=[],bi=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var s;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=gi();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=rt(this.element);let l=o.findIndex(r=>r===i);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){l+a>=o.length?l=0:l+a<0?l=o.length-1:l+=a,this.previousFocus=this.currentFocus;const r=o[l];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||r&&this.possiblyHasTabbableChildren(r))return;t.preventDefault(),this.currentFocus=r,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const d=[...bt()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Pe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Pe=Pe.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Pe[Pe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=rt(this.element);if(!this.element.matches(":focus-within")){const t=e[0],s=e[e.length-1],i=this.tabDirection==="forward"?t:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},yi=R`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,le=class extends B{constructor(){super(...arguments),this.hasSlotController=new Re(this,"footer"),this.localize=new be(this),this.modal=new bi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),xt(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),_t(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=U(this,"dialog.denyClose",{dir:this.localize.dir()});j(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),xt(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ee(this.dialog),ee(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=U(this,"dialog.show",{dir:this.localize.dir()}),s=U(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([j(this.panel,t.keyframes,t.options),j(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ee(this.dialog),ee(this.overlay)]);const e=U(this,"dialog.hide",{dir:this.localize.dir()}),t=U(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([j(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),j(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,_t(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ue(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ue(this,"sl-after-hide")}render(){return b`
      <div
        part="base"
        class=${V({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ne(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ne(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":b`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};le.styles=[F,yi];le.dependencies={"sl-icon-button":Pt};n([S(".dialog")],le.prototype,"dialog",2);n([S(".dialog__panel")],le.prototype,"panel",2);n([S(".dialog__overlay")],le.prototype,"overlay",2);n([c({type:Boolean,reflect:!0})],le.prototype,"open",2);n([c({reflect:!0})],le.prototype,"label",2);n([c({attribute:"no-header",type:Boolean,reflect:!0})],le.prototype,"noHeader",2);n([A("open",{waitUntilFirstUpdate:!0})],le.prototype,"handleOpenChange",1);G("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});G("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});G("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});G("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});G("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});le.define("sl-dialog");var vi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,et=(e,t,s,i)=>{for(var o=i>1?void 0:i?wi(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&vi(t,s,o),o};let Le=class extends ve{constructor(){super(...arguments),this.match=null,this.isOpen=!1,this.editedWinner="draw"}open(e){this.match=e,this.editedWinner=e.winner,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}confirm(){if(this.match){let e;this.editedWinner==="draw"?e="draw":this.editedWinner===this.match.player1?e="win":e="loss",this.dispatchEvent(new CustomEvent("match-edited",{detail:{...this.match,result:e,winner:this.editedWinner}})),this.close()}}handleWinnerChange(e){const t=e.target;this.editedWinner=t.value==="draw"?"draw":t.value}render(){return!this.isOpen||!this.match?b``:b`
      <sl-dialog
        label="Edit Results"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p style="text-align: center;">
          <strong>Matchup:</strong>
          <br />
          <span style="font-size: 2rem;">${this.match.player1} vs ${this.match.player2}</span>

        </p>
        <div style="text-align: center;">
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.editedWinner}"
        >
          <sl-radio-button
            value=${this.match.player1}
          >
            ${this.match.player1}
          </sl-radio-button>
          <sl-radio-button
            value=${this.match.player2}
          >
            ${this.match.player2}
          </sl-radio-button>
          <sl-radio-button
            value="draw"
          >
            Draw
          </sl-radio-button>
        </sl-radio-group>
        </div>
        <sl-button slot="footer" variant="neutral" outline @click=${this.close}>
          Cancel
        </sl-button>
        <sl-button slot="footer" variant="success" @click=${this.confirm}>
          Update
        </sl-button>
      </sl-dialog>
      <style>
        sl-dialog::part(header-actions) {
          display: none;
        }
        .larger-icon::part(prefix) {
          font-size: 1.125rem;
        }
      </style>
    `}};et([c({type:Object})],Le.prototype,"match",2);et([c({type:Boolean})],Le.prototype,"isOpen",2);et([k()],Le.prototype,"editedWinner",2);Le=et([ye("edit-modal")],Le);var xi=R`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ve=class extends B{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return b`
      <span
        part="base"
        class=${V({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ve.styles=[F,xi];n([c({reflect:!0})],Ve.prototype,"variant",2);n([c({type:Boolean,reflect:!0})],Ve.prototype,"pill",2);n([c({type:Boolean,reflect:!0})],Ve.prototype,"pulse",2);Ve.define("sl-badge");var _i=R`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,yt=class extends B{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),i=s.find(r=>{var d;return t.includes(((d=r?.getAttribute)==null?void 0:d.call(r,"role"))||"")});if(!i||s.find(r=>{var d;return((d=r?.getAttribute)==null?void 0:d.call(r,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return b`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};yt.styles=[F,_i];n([S("slot")],yt.prototype,"defaultSlot",2);yt.define("sl-menu");var Ci=R`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(t,!1),De(i,t);return!0},Ke=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Yt=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Si(t)}};function ki(e){this._$AN!==void 0?(Ke(this),this._$AM=e,Yt(this)):this._$AM=e}function $i(e,t=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let l=s;l<i.length;l++)De(i[l],!1),Ke(i[l]);else i!=null&&(De(i,!1),Ke(i));else De(this,e)}const Si=e=>{e.type==Tt.CHILD&&(e._$AP??=$i,e._$AQ??=ki)};class Oi extends Dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Yt(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(De(this,t),Ke(this))}setValue(t){if(ns(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=()=>new Ai;class Ai{}const it=new WeakMap,Pi=zt(class extends Oi{render(e){return Be}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Be}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=it.get(t);s===void 0&&(s=new WeakMap,it.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?it.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Di=class{constructor(e,t){this.popupRef=Ei(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:l,top:a,width:r,height:d}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?l+r:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?l+r:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+d}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,l)=>{var a;const r=(a=t.get(l))!=null?a:new CSSUnitValue(0,"px"),h=(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px");return o-h.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?b`
      <sl-popup
        ${Pi(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:b` <slot name="submenu" hidden></slot> `}},H=class extends B{constructor(){super(...arguments),this.localize=new be(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Re(this,"submenu"),this.submenuController=new Di(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return cs(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return b`
      <div
        id="anchor"
        part="base"
        class=${V({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?b` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};H.styles=[F,Ci];H.dependencies={"sl-icon":dt,"sl-popup":_,"sl-spinner":rs};n([S("slot:not([name])")],H.prototype,"defaultSlot",2);n([S(".menu-item")],H.prototype,"menuItem",2);n([c()],H.prototype,"type",2);n([c({type:Boolean,reflect:!0})],H.prototype,"checked",2);n([c()],H.prototype,"value",2);n([c({type:Boolean,reflect:!0})],H.prototype,"loading",2);n([c({type:Boolean,reflect:!0})],H.prototype,"disabled",2);n([A("checked")],H.prototype,"handleCheckedChange",1);n([A("disabled")],H.prototype,"handleDisabledChange",1);n([A("type")],H.prototype,"handleTypeChange",1);H.define("sl-menu-item");var Ti=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Gt=(e,t,s,i)=>{for(var o=i>1?void 0:i?zi(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Ti(t,s,o),o};let ct=class extends ve{constructor(){super(...arguments),this.matchHistory=[]}editMatch(e){this.dispatchEvent(new CustomEvent("edit-match",{detail:e}))}getPlayerBadgeVariant(e,t){return t.winner==="draw"?"neutral":t.winner===e?"success":"danger"}getPlayerIconVariant(e,t){return t.winner==="draw"?"bookmarks":t.winner===e?"trophy":"emoji-frown"}getPlayerResultString(e,t){return t.winner==="draw"?"draw":t.winner===e?"win":"loss"}render(){return b`
      <sl-menu>
        ${this.matchHistory.map((e,t)=>b`
            <sl-menu-item>
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(e.player1,e)}"
                style="width: 3rem;"
              >
                <sl-icon name="${this.getPlayerIconVariant(e.player1,e)}"></sl-icon>
                <span style="padding-left: 2px;">${this.getPlayerResultString(e.player1,e)}</span>
              </sl-badge>
                &nbsp; ${e.player1} vs
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(e.player2,e)}"
                style="width: 3rem;"
              >
              <sl-icon name="${this.getPlayerIconVariant(e.player2,e)}"></sl-icon>
                <span style="padding-left: 2px;">${this.getPlayerResultString(e.player2,e)}</span>
              </sl-badge>
                 ${e.player2}
              <sl-button
                slot="suffix"
                variant="neutral"
                outline
                @click=${()=>this.editMatch(t)}
                >Edit</sl-button
              >
            </sl-menu-item>
          `)}
      </sl-menu>
    `}};Gt([c({type:Array})],ct.prototype,"matchHistory",2);ct=Gt([ye("match-history")],ct);var Li=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,vt=(e,t,s,i)=>{for(var o=i>1?void 0:i?Ri(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Li(t,s,o),o};let Ye=class extends ve{constructor(){super(...arguments),this.isOpen=!1,this.message=""}open(e){this.message=e,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.close()}render(){return this.isOpen?b`
      <sl-dialog
        label="Clear All Data"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="danger" @click=${this.confirm}>
          Confirm
        </sl-button>
        <sl-button slot="footer" variant="default" @click=${this.close}>
          Cancel
        </sl-button>
      </sl-dialog>
    `:b``}};vt([c({type:Boolean})],Ye.prototype,"isOpen",2);vt([c({type:String})],Ye.prototype,"message",2);Ye=vt([ye("confirmation-modal")],Ye);var Mi=R`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,z=class extends B{constructor(){super(...arguments),this.localize=new be(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,o;const l=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||l?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>fi(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ue(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ue(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ee(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=U(this,"dropdown.show",{dir:this.localize.dir()});await j(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ee(this);const{keyframes:e,options:t}=U(this,"dropdown.hide",{dir:this.localize.dir()});await j(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return b`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Ne(this.sync?this.sync:void 0)}
        class=${V({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};z.styles=[F,Mi];z.dependencies={"sl-popup":_};n([S(".dropdown")],z.prototype,"popup",2);n([S(".dropdown__trigger")],z.prototype,"trigger",2);n([S(".dropdown__panel")],z.prototype,"panel",2);n([c({type:Boolean,reflect:!0})],z.prototype,"open",2);n([c({reflect:!0})],z.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],z.prototype,"disabled",2);n([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],z.prototype,"stayOpenOnSelect",2);n([c({attribute:!1})],z.prototype,"containingElement",2);n([c({type:Number})],z.prototype,"distance",2);n([c({type:Number})],z.prototype,"skidding",2);n([c({type:Boolean})],z.prototype,"hoist",2);n([c({reflect:!0})],z.prototype,"sync",2);n([A("open",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpenChange",1);G("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});G("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});z.define("sl-dropdown");var Ii=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,re=(e,t,s,i)=>{for(var o=i>1?void 0:i?Vi(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=(i?a(t,s,o):a(o))||o);return i&&o&&Ii(t,s,o),o};let ie=class extends ve{constructor(){super(...arguments),this.activeTab="standings",this.players=[],this.matchHistory=JSON.parse(localStorage.getItem("matchHistory")||"[]"),this.standings=[],this.isLoading=!0,this.editModalOpen=!1,this.editMatchIndex=null,this.confirmationModalOpen=!1}connectedCallback(){super.connectedCallback(),this.loadData()}async loadData(){try{const e=localStorage.getItem("players"),t=localStorage.getItem("matchHistory");this.players=e?JSON.parse(e):[],this.matchHistory=t?JSON.parse(t):[]}catch(e){console.error("Error loading data:",e),this.players=[],localStorage.setItem("players",JSON.stringify(this.players))}finally{this.isLoading=!1,this.calculateStandings()}}addPlayer(e){this.players=[...this.players,e],localStorage.setItem("players",JSON.stringify(this.players)),this.calculateStandings(),this.requestUpdate()}removePlayer(e){this.players=this.players.filter(t=>t!==e),localStorage.setItem("players",JSON.stringify(this.players)),this.calculateStandings(),this.requestUpdate()}clearAllPlayers(){this.players=[],localStorage.setItem("players",JSON.stringify(this.players)),this.calculateStandings(),this.requestUpdate()}recordMatch(e){this.matchHistory=[...this.matchHistory,e],localStorage.setItem("matchHistory",JSON.stringify(this.matchHistory)),this.calculateStandings(),this.requestUpdate()}calculateStandings(){console.log("calculateStandings called");const e=this.initializeStandings();this.matchHistory.forEach(t=>this.applyMatchResult(t,e)),this.finalizeStandings(e),console.log("standings:",this.standings)}initializeStandings(){const e=new Map;return this.players.forEach(t=>{e.set(t,{wins:0,losses:0,draws:0,points:0,winPercentage:0})}),e}applyMatchResult(e,t){const s=t.get(e.player1),i=t.get(e.player2);s&&i?e.result==="win"?(s.wins++,s.points+=3,i.losses++):e.result==="loss"?(i.wins++,i.points+=3,s.losses++):(s.draws++,s.points++,i.draws++,i.points++):(s||console.error(`Player not found in standings: ${e.player1}`),i||console.error(`Player not found in standings: ${e.player2}`))}finalizeStandings(e){this.players.forEach(t=>{const s=e.get(t),i=s.wins+s.losses+s.draws;s.winPercentage=i>0?s.wins/i*100:0,s.winPercentage=parseFloat(s.winPercentage.toFixed(2))}),this.standings=Array.from(e.entries()).map(([t,s])=>({name:t,wins:s.wins,losses:s.losses,draws:s.draws,points:s.points,winPercentage:s.winPercentage})),this.standings.sort((t,s)=>s.points!==t.points?s.points-t.points:(s.winPercentage||0)-(t.winPercentage||0))}openEditModal(e){this.editMatchIndex=e,this.editModalOpen=!0}editMatch(e){this.editMatchIndex!==null&&(this.matchHistory=this.matchHistory.map((t,s)=>s===this.editMatchIndex?e:t),localStorage.setItem("matchHistory",JSON.stringify(this.matchHistory)),this.calculateStandings(),this.editMatchIndex=null,this.editModalOpen=!1,this.requestUpdate())}exportMatchResults(){const e=this.matchHistory.map(t=>`${t.player1},${t.player2},${t.result}`).join(`
`);this.downloadCSV(e,"match-results.csv")}exportStandings(){const e=this.standings.map(t=>`${t.name},${t.wins},${t.losses},${t.draws},${t.points},${t.winPercentage||0}`).join(`
`);this.downloadCSV(e,"standings.csv")}downloadCSV(e,t){const s=new Blob([e],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.setAttribute("download",t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}clearMatchResultsConfirmed(){this.matchHistory=[],localStorage.setItem("matchHistory",JSON.stringify(this.matchHistory)),this.calculateStandings(),this.requestUpdate()}openConfirmationModal(){this.confirmationModalOpen=!0}closeConfirmationModal(){this.confirmationModalOpen=!1}clearStandingsConfirmed(){this.standings=[],this.players=[],localStorage.removeItem("matchHistory"),localStorage.removeItem("players"),this.requestUpdate(),this.closeConfirmationModal()}setActiveTab(e){this.activeTab=e}render(){return this.isLoading?b`<p>Loading...</p>`:b`
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-details summary="Match Results" open>
          <match-input .players=${this.players.map(e=>({name:e}))} @match-recorded=${e=>this.recordMatch(e.detail)}></match-input>
        </sl-details>
        <sl-tab-group active-tab=${this.activeTab}>
          <sl-tab slot="nav" panel="standings">Standings</sl-tab>
          <sl-tab slot="nav" panel="history">History</sl-tab>
          <sl-tab slot="nav" panel="players">Players</sl-tab>
          <sl-tab-panel name="standings">
            <sl-card>
              <div slot="header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  Match Standings
                  <sl-button-group label="game actions">
                    <sl-tooltip content="Export Standings">
                      <sl-button variant="success" outline label="export standings" @click=${this.exportStandings}>
                        <sl-icon library="default" name="file-earmark-excel-fill" label="Export Standings"></sl-icon>
                      </sl-button>
                    </sl-tooltip>
                    <sl-tooltip content="Clear All Data">
                      <sl-button variant="warning" outline label="action to clear standings" @click=${this.clearStandingsConfirmed}>
                        <sl-icon library="default" name="trash-fill" label="Clear Standings"></sl-icon>
                      </sl-button>
                    </sl-tooltip>
                    <sl-tooltip content="Clear Data">
                      <sl-button variant="danger" outline label="launch a modal to confirm clearing of match data" @click=${this.openConfirmationModal}>
                        <sl-icon library="default" name="exclamation-triangle-fill" label="Clear Data"></sl-icon>
                       </sl-button>
                    </sl-tooltip>
                  </sl-button-group>
                </div>
              </div>
              <standings-display .standings=${this.standings}></standings-display>
            </sl-card>
          </sl-tab-panel>
          <sl-tab-panel name="history">
            <sl-card>
              <div slot="header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  Match History
                  <sl-tooltip content="Export Results">
                    <sl-button variant="success" outline label="export match results" @click=${this.exportMatchResults}>
                      <sl-icon library="default" name="file-earmark-excel-fill" label="Export Results"></sl-icon>
                    </sl-button>
                  </sl-tooltip>
                </div>
              </div>
              <match-history .matchHistory=${this.matchHistory} @edit-match=${e=>this.openEditModal(e.detail)}></match-history>
            </sl-card>
          </sl-tab-panel>
          <sl-tab-panel name="players">
            <player-input
              @player-added=${e=>this.addPlayer(e.detail)}
              @remove-player=${e=>this.removePlayer(e.detail)}
              @clear-all-players=${()=>this.clearAllPlayers()}
              .players=${this.players}
            ></player-input>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
      <edit-modal .match=${this.editMatchIndex!==null?this.matchHistory[this.editMatchIndex]:null} .isOpen=${this.editModalOpen} @match-edited=${e=>this.editMatch(e.detail)} @close=${()=>this.editModalOpen=!1}></edit-modal>
      <confirmation-modal
        .isOpen=${this.confirmationModalOpen}
        message="Are you sure you want to clear the match data? This will also clear all related information."
        @confirm=${this.clearMatchResultsConfirmed}
        @close=${this.closeConfirmationModal}
      ></confirmation-modal>
      <style>
        sl-card {
          width: 100%;
        }
        sl-menu-item {
          background-color: var(--sl-color-neutral-50);
        }
      </style>
    `}};re([k()],ie.prototype,"activeTab",2);re([k()],ie.prototype,"players",2);re([k()],ie.prototype,"matchHistory",2);re([k()],ie.prototype,"standings",2);re([k()],ie.prototype,"isLoading",2);re([k()],ie.prototype,"editModalOpen",2);re([k()],ie.prototype,"editMatchIndex",2);re([k()],ie.prototype,"confirmationModalOpen",2);ie=re([ye("standings-tracker")],ie);var Hi=Object.getOwnPropertyDescriptor,Fi=(e,t,s,i)=>{for(var o=i>1?void 0:i?Hi(t,s):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(o=a(o)||o);return o};let At=class extends ve{render(){return b`
      <app-header ?enableBack="${!0}"></app-header>
      <br/>
      <h1>Game Tracker</h1>
      <standings-tracker></standings-tracker>
      <style>
        sl-button::part(prefix) sl-icon {
          font-size: 1.125rem;
        }
      </style>
    `}};At=Fi([ye("app-standings")],At);export{At as AppDashboard};
//# sourceMappingURL=app-game-tracker-DIwPPxL4.js.map
