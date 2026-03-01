/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,st=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),ut=new WeakMap;let Ut=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(st&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=ut.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ut.set(s,t))}return t}toString(){return this.cssText}};const Jt=e=>new Ut(typeof e=="string"?e:e+"",void 0,rt),T=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Ut(s,e,rt)},Yt=(e,t)=>{if(st)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),i=B.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},pt=st?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return Jt(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qt,defineProperty:Xt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:se,getPrototypeOf:re}=Object,W=globalThis,ft=W.trustedTypes,ie=ft?ft.emptyScript:"",oe=W.reactiveElementPolyfillSupport,M=(e,t)=>e,j={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},it=(e,t)=>!Qt(e,t),gt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=gt){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&Xt(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){const{get:i,set:o}=te(this.prototype,t)??{get(){return this[s]},set(n){this[s]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gt}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const s=this.properties,r=[...ee(s),...se(s)];for(const i of r)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)s.unshift(pt(i))}else t!==void 0&&s.push(pt(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:j).toAttribute(s,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,s){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=i;const l=n.fromAttribute(s,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,s,r,i=!1,o){if(t!==void 0){const n=this.constructor;if(i===!1&&(o=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??it)(o,s)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??s??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[M("elementProperties")]=new Map,E[M("finalized")]=new Map,oe?.({ReactiveElement:E}),(W.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,mt=e=>e,V=ot.trustedTypes,vt=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,zt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Tt="?"+y,ne=`<${Tt}>`,A=document,R=()=>A.createComment(""),U=e=>e===null||typeof e!="object"&&typeof e!="function",nt=Array.isArray,ae=e=>nt(e)||typeof e?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,yt=/>/g,_=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,wt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,le=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),It=le(1),x=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),$t=new WeakMap,$=A.createTreeWalker(A,129);function Dt(e,t){if(!nt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return vt!==void 0?vt.createHTML(t):t}const ce=(e,t)=>{const s=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=k;for(let l=0;l<s;l++){const a=e[l];let h,d,c=-1,m=0;for(;m<a.length&&(n.lastIndex=m,d=n.exec(a),d!==null);)m=n.lastIndex,n===k?d[1]==="!--"?n=bt:d[1]!==void 0?n=yt:d[2]!==void 0?(Ht.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=_):d[3]!==void 0&&(n=_):n===_?d[0]===">"?(n=i??k,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?_:d[3]==='"'?wt:_t):n===wt||n===_t?n=_:n===bt||n===yt?n=k:(n=_,i=void 0);const b=n===_&&e[l+1].startsWith("/>")?" ":"";o+=n===k?a+ne:c>=0?(r.push(h),a.slice(0,c)+zt+a.slice(c)+y+b):a+y+(c===-2?l:b)}return[Dt(e,o+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class z{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[h,d]=ce(t,s);if(this.el=z.createElement(h,r),$.currentNode=this.el.content,s===2||s===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=$.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(zt)){const m=d[n++],b=i.getAttribute(c).split(y),I=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:I[2],strings:b,ctor:I[1]==="."?de:I[1]==="?"?ue:I[1]==="@"?pe:Z}),i.removeAttribute(c)}else c.startsWith(y)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(Ht.test(i.tagName)){const c=i.textContent.split(y),m=c.length-1;if(m>0){i.textContent=V?V.emptyScript:"";for(let b=0;b<m;b++)i.append(c[b],R()),$.nextNode(),a.push({type:2,index:++o});i.append(c[m],R())}}}else if(i.nodeType===8)if(i.data===Tt)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(y,c+1))!==-1;)a.push({type:7,index:o}),c+=y.length-1}o++}}static createElement(t,s){const r=A.createElement("template");return r.innerHTML=t,r}}function C(e,t,s=e,r){if(t===x)return t;let i=r!==void 0?s._$Co?.[r]:s._$Cl;const o=U(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,s,r)),r!==void 0?(s._$Co??=[])[r]=i:s._$Cl=i),i!==void 0&&(t=C(e,i._$AS(e,t.values),i,r)),t}class he{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??A).importNode(s,!0);$.currentNode=i;let o=$.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new H(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new fe(o,this,t)),this._$AV.push(h),a=r[++l]}n!==a?.index&&(o=$.nextNode(),n++)}return $.currentNode=A,i}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=C(this,t,s),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ae(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=z.createElement(Dt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{const o=new he(i,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(t){let s=$t.get(t.strings);return s===void 0&&$t.set(t.strings,s=new z(t)),s}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const o of t)i===s.length?s.push(r=new H(this.O(R()),this.O(R()),this,this.options)):r=s[i],r._$AI(o),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const r=mt(t).nextSibling;mt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,s=this,r,i){const o=this.strings;let n=!1;if(o===void 0)t=C(this,t,s,0),n=!U(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const l=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=C(this,l[r+a],s,a),h===x&&(h=this._$AH[a]),n||=!U(h)||h!==this._$AH[a],h===u?t=u:t!==u&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class de extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class ue extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class pe extends Z{constructor(t,s,r,i,o){super(t,s,r,i,o),this.type=5}_$AI(t,s=this){if((t=C(this,t,s,0)??u)===x)return;const r=this._$AH,i=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==u&&(r===u||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class fe{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ge=ot.litHtmlPolyfillSupport;ge?.(z,H),(ot.litHtmlVersions??=[]).push("3.3.2");const me=(e,t,s)=>{const r=s?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=s?.renderBefore??null;r._$litPart$=i=new H(t.insertBefore(R(),o),o,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis;let L=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=me(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};L._$litElement$=!0,L.finalized=!0,at.litElementHydrateSupport?.({LitElement:L});const ve=at.litElementPolyfillSupport;ve?.({LitElement:L});(at.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:it},ye=(e=be,t,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(s.name,e),r==="accessor"){const{name:n}=s;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,e,l),l}}}if(r==="setter"){const{name:n}=s;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function g(e){return(t,s)=>typeof s=="object"?ye(e,t,s):((r,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(e,t){return(s,r,i)=>{const o=n=>n.renderRoot?.querySelector(e)??null;return we(s,r,{get(){return o(this)}})}}const rs=T`
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
    .hide-at-950 {
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
    gap: .75rem;
  }
  .toolbar sl-button::part(base) {
    border-color: transparent;
    background: var(--Controls-Idle, linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.07));
    background-blend-mode: color-dodge, normal;
    border-radius: 1rem;
  }
`;var $e=T`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Bt=Object.defineProperty,Ae=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,Ee=Object.getOwnPropertyDescriptors,At=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Y=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),lt=e=>{throw TypeError(e)},xt=(e,t,s)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,K=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&xt(e,s,t[s]);if(At)for(var s of At(t))Ce.call(t,s)&&xt(e,s,t[s]);return e},Nt=(e,t)=>Ae(e,Ee(t)),p=(e,t,s,r)=>{for(var i=r>1?void 0:r?xe(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Bt(t,s,i),i},jt=(e,t,s)=>t.has(e)||lt("Cannot "+s),Pe=(e,t,s)=>(jt(e,t,"read from private field"),t.get(e)),ke=(e,t,s)=>t.has(e)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Oe=(e,t,s,r)=>(jt(e,t,"write to private field"),t.set(e,s),s),Me=function(e,t){this[0]=e,this[1]=t},is=e=>{var t=e[Y("asyncIterator")],s=!1,r,i={};return t==null?(t=e[Y("iterator")](),r=o=>i[o]=n=>t[o](n)):(t=t.call(e),r=o=>i[o]=n=>{if(s){if(s=!1,o==="throw")throw n;return n}return s=!0,{done:!1,value:new Me(new Promise(l=>{var a=t[o](n);a instanceof Object||lt("Object expected"),l(a)}),1)}}),i[Y("iterator")]=()=>i,r("next"),"throw"in t?r("throw"):i.throw=o=>{throw o},"return"in t&&r("return"),i},Vt=new Map,Le=new WeakMap;function Re(e){return e??{keyframes:[],options:{duration:0}}}function Et(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function qt(e,t){Vt.set(e,Re(t))}function St(e,t,s){const r=Le.get(e);if(r?.[t])return Et(r[t],s.dir);const i=Vt.get(t);return i?Et(i,s.dir):{keyframes:[],options:{duration:0}}}function Ct(e,t){return new Promise(s=>{function r(i){i.target===e&&(e.removeEventListener(t,r),s())}e.addEventListener(t,r)})}function Pt(e,t,s){return new Promise(r=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Nt(K({},s),{duration:Ue()?0:s.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function os(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Ue(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kt(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}function Ot(e,t){return e.map(s=>Nt(K({},s),{height:s.height==="auto"?`${t}px`:s.height}))}const tt=new Set,S=new Map;let w,ct="ltr",ht="en";const Ft=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ft){const e=new MutationObserver(Zt);ct=document.documentElement.dir||"ltr",ht=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Wt(...e){e.map(t=>{const s=t.$code.toLowerCase();S.has(s)?S.set(s,Object.assign(Object.assign({},S.get(s)),t)):S.set(s,t),w||(w=t)}),Zt()}function Zt(){Ft&&(ct=document.documentElement.dir||"ltr",ht=document.documentElement.lang||navigator.language),[...tt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ze=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){tt.add(this.host)}hostDisconnected(){tt.delete(this.host)}dir(){return`${this.host.dir||ct}`.toLowerCase()}lang(){return`${this.host.lang||ht}`.toLowerCase()}getTranslationData(t){var s,r;const i=new Intl.Locale(t.replace(/_/g,"-")),o=i?.language.toLowerCase(),n=(r=(s=i?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&r!==void 0?r:"",l=S.get(`${o}-${n}`),a=S.get(o);return{locale:i,language:o,region:n,primary:l,secondary:a}}exists(t,s){var r;const{primary:i,secondary:o}=this.getTranslationData((r=s.lang)!==null&&r!==void 0?r:this.lang());return s=Object.assign({includeFallback:!1},s),!!(i&&i[t]||o&&o[t]||s.includeFallback&&w&&w[t])}term(t,...s){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let o;if(r&&r[t])o=r[t];else if(i&&i[t])o=i[t];else if(w&&w[t])o=w[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...s):o}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,s)}};var Gt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Wt(Gt);var Te=Gt,He=class extends ze{};Wt(Te);var et="";function Mt(e){et=e}function Ie(e=""){if(!et){const t=[...document.getElementsByTagName("script")],s=t.find(r=>r.hasAttribute("data-shoelace"));if(s)Mt(s.getAttribute("data-shoelace"));else{const r=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";r&&(i=r.getAttribute("src")),Mt(i.split("/").slice(0,-1).join("/"))}}return et.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var De={name:"default",resolver:e=>Ie(`assets/icons/${e}.svg`)},Be=De,Lt={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ne={name:"system",resolver:e=>e in Lt?`data:image/svg+xml,${encodeURIComponent(Lt[e])}`:""},je=Ne,q=[Be,je],F=[];function Ve(e){F.push(e)}function qe(e){F=F.filter(t=>t!==e)}function Rt(e){return q.find(t=>t.name===e)}function as(e,t){Fe(e),q.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),F.forEach(s=>{s.library===e&&s.setIcon()})}function Fe(e){q=q.filter(t=>t.name!==e)}var We=T`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function dt(e,t){const s=K({waitUntilFirstUpdate:!1},t);return(r,i)=>{const{update:o}=r,n=Array.isArray(e)?e:[e];r.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](d,c)}}),o.call(this,l)}}}var Kt=T`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,N,P=class extends L{constructor(){super(),ke(this,N,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,K({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,s)}catch{customElements.define(e,class extends t{},s)}return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(o=" v"+r.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,s){Pe(this,N)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Oe(this,N,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}};N=new WeakMap;P.version="2.20.1";P.dependencies={};p([g()],P.prototype,"dir",2);p([g()],P.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=(e,t)=>e?._$litType$!==void 0,ls=e=>e.strings===void 0,Ge={},cs=(e,t=Ge)=>e._$AH=t;var O=Symbol(),D=Symbol(),Q,X=new Map,v=class extends P{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let r;if(t?.spriteSheet)return this.svg=It`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?O:D}catch{return D}try{const i=document.createElement("div");i.innerHTML=await r.text();const o=i.firstElementChild;if(((s=o?.tagName)==null?void 0:s.toLowerCase())!=="svg")return O;Q||(Q=new DOMParser);const l=Q.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):O}catch{return O}}connectedCallback(){super.connectedCallback(),Ve(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),qe(this)}getIconSource(){const e=Rt(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),r=s?Rt(this.library):void 0;if(!t){this.svg=null;return}let i=X.get(t);if(i||(i=this.resolveIcon(t,r),X.set(t,i)),!this.initialRender)return;const o=await i;if(o===D&&X.delete(t),t===this.getIconSource().url){if(Ze(o)){if(this.svg=o,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(o){case D:case O:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};v.styles=[Kt,We];p([_e()],v.prototype,"svg",2);p([g({reflect:!0})],v.prototype,"name",2);p([g()],v.prototype,"src",2);p([g()],v.prototype,"label",2);p([g({reflect:!0})],v.prototype,"library",2);p([dt("label")],v.prototype,"handleLabelChange",1);p([dt(["name","src","library"])],v.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Je=e=>(...t)=>({_$litDirective$:e,values:t});class Ye{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=Je(class extends Ye{constructor(e){if(super(e),e.type!==Ke.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const s=e.element.classList;for(const r of this.st)r in t||(s.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return x}});var f=class extends P{constructor(){super(...arguments),this.localize=new He(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await kt(this.body);const{keyframes:t,options:s}=St(this,"details.show",{dir:this.localize.dir()});await Pt(this.body,Ot(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await kt(this.body);const{keyframes:t,options:s}=St(this,"details.hide",{dir:this.localize.dir()});await Pt(this.body,Ot(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ct(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return It`
      <details
        part="base"
        class=${Qe({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};f.styles=[Kt,$e];f.dependencies={"sl-icon":v};p([G(".details")],f.prototype,"details",2);p([G(".details__header")],f.prototype,"header",2);p([G(".details__body")],f.prototype,"body",2);p([G(".details__expand-icon-slot")],f.prototype,"expandIconSlot",2);p([g({type:Boolean,reflect:!0})],f.prototype,"open",2);p([g()],f.prototype,"summary",2);p([g({type:Boolean,reflect:!0})],f.prototype,"disabled",2);p([dt("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1);qt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});qt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});f.define("sl-details");const hs=T`
  sl-button.rounded-angles::part(base) {
    border-radius: 1rem 0;
  }
  sl-button.custom-button::part(base) {
    border: 1px solid var(--windows-stroke-glass-specular);
    background: var(--Windows-Glass);
    background-blend-mode: luminosity;
    backdrop-filter: blur(50px);
    color: var(--sl-color-neutral-900);
  }
  sl-button.custom-button::part(base):hover,
  sl-button.custom-button::part(base):active {
    color: var(--sl-color-primary-700);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
    border-color: var(--sl-color-primary-700);
  }
  sl-button.custom-button::part(base):focus {
    color: var(--sl-color-primary-700);
    border-color: var(--sl-color-primary-700);
  }

  sl-tab {
    padding-bottom: .5rem;
  }
  sl-tab::part(base) {
    background: var(--sl-color-primary-100);
  }
  sl-tab[active] sl-icon {
    fill: var(--sl-color-primary-50) !important;
  }
  sl-tab::part(base):hover,
  sl-tab::part(base):focus,
  sl-tab:hover sl-icon {
    color: var(--sl-color-primary-50) !important;
    fill: var(--sl-color-primary-50) !important;
    background: var(--sl-color-primary-600) !important;
  }
  sl-tab::part(base):focus-visible,
  sl-tab.ios-tab::part(base):focus-visible {
    --sl-focus-ring: var(--sl-color-primary-600) !important;
  }
  sl-tab::part(base),
  sl-tab.ios-tab::part(base) {
    margin-right: .125rem;
    padding: .75rem 1rem;
  }
  sl-tab[active]::part(base) {
    background: var(--sl-color-primary-600) !important;
    color: var(--sl-color-primary-50) !important;
  }

  sl-tree-item::part(base) {
    color: var(--sl-color-neutral-950);
  }
`;export{u as A,Pt as B,Ot as C,os as D,x as E,Ct as F,is as G,Ue as H,He as L,v as S,Nt as _,T as a,It as b,hs as c,as as d,G as e,we as f,K as g,Je as h,L as i,Ye as j,Ke as k,ls as l,Kt as m,g as n,p as o,cs as p,P as q,_e as r,rs as s,ss as t,j as u,Qe as v,dt as w,qt as x,kt as y,St as z};
//# sourceMappingURL=shoelace-styles-DuBzW-jG.js.map
