const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["code/app-about-B6BYg1J1.js","code/chunk.CVHNT5ZP-ClrhBmZw.js","code/app-counter-eR-20uow.js","code/table-styles-Cnx7C_mH.js","code/counter-styles-DU0bTR9z.js","code/app-game-tracker-Ba9MQq31.js","code/app-standard-Zn9Kn8Jz.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,qe=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),uo=new WeakMap;let Wo=class{constructor(t,o,r){if(this._$cssResult$=!0,r!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(qe&&t===void 0){const r=o!==void 0&&o.length===1;r&&(t=uo.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&uo.set(o,t))}return t}toString(){return this.cssText}};const kr=e=>new Wo(typeof e=="string"?e:e+"",void 0,Ke),S=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Wo(o,e,Ke)},Ar=(e,t)=>{if(qe)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const r=document.createElement("style"),i=he.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,e.appendChild(r)}},ho=qe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return kr(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Cr,defineProperty:Er,getOwnPropertyDescriptor:Sr,getOwnPropertyNames:Pr,getOwnPropertySymbols:Tr,getPrototypeOf:Or}=Object,ke=globalThis,po=ke.trustedTypes,zr=po?po.emptyScript:"",Lr=ke.reactiveElementPolyfillSupport,Zt=(e,t)=>e,Ft={toAttribute(e,t){switch(t){case Boolean:e=e?zr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Ye=(e,t)=>!Cr(e,t),fo={attribute:!0,type:String,converter:Ft,reflect:!1,hasChanged:Ye};Symbol.metadata??=Symbol("metadata"),ke.litPropertyMetadata??=new WeakMap;class Ot extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=fo){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,o);i!==void 0&&Er(this.prototype,t,i)}}static getPropertyDescriptor(t,o,r){const{get:i,set:s}=Sr(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return i?.call(this)},set(n){const a=i?.call(this);s.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fo}static _$Ei(){if(this.hasOwnProperty(Zt("elementProperties")))return;const t=Or(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zt("properties"))){const o=this.properties,r=[...Pr(o),...Tr(o)];for(const i of r)this.createProperty(i,o[i])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[r,i]of o)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const i=this._$Eu(o,r);i!==void 0&&this._$Eh.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)o.unshift(ho(i))}else t!==void 0&&o.push(ho(t));return o}static _$Eu(t,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ar(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,o,r){this._$AK(t,r)}_$EC(t,o){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Ft).toAttribute(o,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,o){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ft;this._$Em=i,this[i]=n.fromAttribute(o,s.type),this._$Em=null}}requestUpdate(t,o,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Ye)(this[t],o))return;this.P(t,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,r){this._$AL.has(t)||this._$AL.set(t,o),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(o)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(o)}willUpdate(t){}_$AE(t){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(o=>this._$EC(o,this[o])),this._$EU()}updated(t){}firstUpdated(t){}}Ot.elementStyles=[],Ot.shadowRootOptions={mode:"open"},Ot[Zt("elementProperties")]=new Map,Ot[Zt("finalized")]=new Map,Lr?.({ReactiveElement:Ot}),(ke.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,ge=Ge.trustedTypes,bo=ge?ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,jo="$lit$",ft=`lit$${Math.random().toFixed(9).slice(2)}$`,qo="?"+ft,Rr=`<${qo}>`,Et=document,Jt=()=>Et.createComment(""),Qt=e=>e===null||typeof e!="object"&&typeof e!="function",Xe=Array.isArray,Fr=e=>Xe(e)||typeof e?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,go=/-->/g,mo=/>/g,xt=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,yo=/"/g,Ko=/^(?:script|style|textarea|title)$/i,Br=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),w=Br(1),H=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),wo=new WeakMap,Ct=Et.createTreeWalker(Et,129);function Yo(e,t){if(!Xe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bo!==void 0?bo.createHTML(t):t}const Mr=(e,t)=>{const o=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",n=Wt;for(let a=0;a<o;a++){const l=e[a];let c,h,d=-1,b=0;for(;b<l.length&&(n.lastIndex=b,h=n.exec(l),h!==null);)b=n.lastIndex,n===Wt?h[1]==="!--"?n=go:h[1]!==void 0?n=mo:h[2]!==void 0?(Ko.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=xt):h[3]!==void 0&&(n=xt):n===xt?h[0]===">"?(n=i??Wt,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?xt:h[3]==='"'?yo:vo):n===yo||n===vo?n=xt:n===go||n===mo?n=Wt:(n=xt,i=void 0);const f=n===xt&&e[a+1].startsWith("/>")?" ":"";s+=n===Wt?l+Rr:d>=0?(r.push(c),l.slice(0,d)+jo+l.slice(d)+ft+f):l+ft+(d===-2?a:f)}return[Yo(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class te{constructor({strings:t,_$litType$:o},r){let i;this.parts=[];let s=0,n=0;const a=t.length-1,l=this.parts,[c,h]=Mr(t,o);if(this.el=te.createElement(c,r),Ct.currentNode=this.el.content,o===2||o===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ct.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(jo)){const b=h[n++],f=i.getAttribute(d).split(ft),g=/([.?@])?(.*)/.exec(b);l.push({type:1,index:s,name:g[2],strings:f,ctor:g[1]==="."?Nr:g[1]==="?"?Ur:g[1]==="@"?Ir:Ae}),i.removeAttribute(d)}else d.startsWith(ft)&&(l.push({type:6,index:s}),i.removeAttribute(d));if(Ko.test(i.tagName)){const d=i.textContent.split(ft),b=d.length-1;if(b>0){i.textContent=ge?ge.emptyScript:"";for(let f=0;f<b;f++)i.append(d[f],Jt()),Ct.nextNode(),l.push({type:2,index:++s});i.append(d[b],Jt())}}}else if(i.nodeType===8)if(i.data===qo)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(ft,d+1))!==-1;)l.push({type:7,index:s}),d+=ft.length-1}s++}}static createElement(t,o){const r=Et.createElement("template");return r.innerHTML=t,r}}function Bt(e,t,o=e,r){if(t===H)return t;let i=r!==void 0?o._$Co?.[r]:o._$Cl;const s=Qt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,o,r)),r!==void 0?(o._$Co??=[])[r]=i:o._$Cl=i),i!==void 0&&(t=Bt(e,i._$AS(e,t.values),i,r)),t}class Dr{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,i=(t?.creationScope??Et).importNode(o,!0);Ct.currentNode=i;let s=Ct.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new re(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Vr(s,this,t)),this._$AV.push(c),l=r[++a]}n!==l?.index&&(s=Ct.nextNode(),n++)}return Ct.currentNode=Et,i}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}}class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,r,i){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Bt(this,t,o),Qt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Fr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Et.createTextNode(t)),this._$AH=t}$(t){const{values:o,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=te.createElement(Yo(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(o);else{const s=new Dr(i,this),n=s.u(this.options);s.p(o),this.T(n),this._$AH=s}}_$AC(t){let o=wo.get(t.strings);return o===void 0&&wo.set(t.strings,o=new te(t)),o}k(t){Xe(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,i=0;for(const s of t)i===o.length?o.push(r=new re(this.O(Jt()),this.O(Jt()),this,this.options)):r=o[i],r._$AI(s),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,i,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=o,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(t,o=this,r,i){const s=this.strings;let n=!1;if(s===void 0)t=Bt(this,t,o,0),n=!Qt(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Bt(this,a[r+l],o,l),c===H&&(c=this._$AH[l]),n||=!Qt(c)||c!==this._$AH[l],c===E?t=E:t!==E&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nr extends Ae{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class Ur extends Ae{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class Ir extends Ae{constructor(t,o,r,i,s){super(t,o,r,i,s),this.type=5}_$AI(t,o=this){if((t=Bt(this,t,o,0)??E)===H)return;const r=this._$AH,i=t===E&&r!==E||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==E&&(r===E||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Vr{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}}const Hr=Ge.litHtmlPolyfillSupport;Hr?.(te,re),(Ge.litHtmlVersions??=[]).push("3.2.1");const Wr=(e,t,o)=>{const r=o?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=o?.renderBefore??null;r._$litPart$=i=new re(t.insertBefore(Jt(),s),s,void 0,o??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends Ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wr(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const jr=globalThis.litElementPolyfillSupport;jr?.({LitElement:at});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr={attribute:!0,type:String,converter:Ft,reflect:!1,hasChanged:Ye},Kr=(e=qr,t,o)=>{const{kind:r,metadata:i}=o;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(o.name,e),r==="accessor"){const{name:n}=o;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(r==="setter"){const{name:n}=o;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+r)};function p(e){return(t,o)=>typeof o=="object"?Kr(e,t,o):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wt(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e,t){return(o,r,i)=>{const s=n=>n.renderRoot?.querySelector(e)??null;return Yr(o,r,{get(){return s(this)}})}}const Gr="modulepreload",Xr=function(e){return"/"+e},_o={},zt=function(t,o,r){let i=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=n?.nonce||n?.getAttribute("nonce");i=Promise.allSettled(o.map(l=>{if(l=Xr(l),l in _o)return;_o[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Gr,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((b,f)=>{d.addEventListener("load",b),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return i.then(n=>{for(const a of n||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Ze=Symbol.for("app-tools::log::1.x");globalThis[Ze]={setDebug:Zr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Zr(e){globalThis[Ze].debug=!!e}function Jr(e,t){globalThis[Ze].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function Qr(e){return(t,o)=>{Jr(`${e}: ${t}`,o)}}const pt=Qr("router");class ti extends Event{constructor(t){super("route-changed"),this.context=t}}class ei extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(o=>({...o,urlPattern:new URLPattern({pathname:o.path,baseURL:window.location.href,search:"*",hash:"*"})})),pt("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return pt(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const o of this.routes){const r=o.urlPattern.exec(t);if(r){const{title:i}=o,s=Object.fromEntries(new URLSearchParams(t.search)),n=r?.pathname?.groups??{};return this.context={url:t,title:typeof i=="function"?i({params:n,query:s,url:t}):i,params:n,query:s},o}}return pt(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new ti(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const o=t.composedPath().find(s=>s.tagName==="A");if(!o||!o.href)return;const r=new URL(o.href);if(this.url.href===r.href||r.host!==window.location.host||o.hasAttribute("download")||o.href.includes("mailto:"))return;const i=o.getAttribute("target");i&&i!==""&&i!=="_self"||(t.preventDefault(),this.navigate(r))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,o={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let r=this._matchRoute(t)||this._matchRoute(this.fallback);pt(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let i=this._collectPlugins(r);for(const s of i)try{const n=await s?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),r=this._matchRoute(t)||this._matchRoute(this.fallback),i=this._collectPlugins(r),pt("Redirecting",{context:this.context,route:this.route})))}catch(n){throw pt(`Plugin "${s.name}" error on shouldNavigate hook`,n),n}if(this.route=r,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const s of i)try{await s?.beforeNavigation?.(this.context)}catch(n){throw pt(`Plugin "${s.name}" error on beforeNavigation hook`,n),n}o?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):o.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const s of i)try{await s?.afterNavigation?.(this.context)}catch(n){throw pt(`Plugin "${s.name}" error on afterNavigation hook`,n),n}}}function le(e){return{name:"lazy",beforeNavigation:()=>{e()}}}function oi(e="/offline"){return{name:"offline",shouldNavigate:()=>({condition:()=>navigator.onLine,redirect:e})}}const ri=oi(),xo="app-tools",$o="1.x",ko="router-focus",ii="position:absolute;top:0;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);margin:-1px;",si={name:"resetFocus",afterNavigation:({title:e})=>{let t=document.querySelector(`div[${xo}][version="${$o}"]#${ko}`);t||(t=document.createElement("div"),t.setAttribute(xo,""),t.setAttribute("version",$o),t.id=ko,t.setAttribute("tabindex","-1"),t.setAttribute("aria-live","polite"),t.setAttribute("style",ii),t.addEventListener("blur",()=>{t?.style.setProperty("display","none")}),document.body.insertBefore(t,document.body.firstChild)),t.textContent=e,t.style.removeProperty("display"),t.focus()}},ni={name:"scrollToTop",beforeNavigation:()=>{window.scrollTo(0,0)}},ai={name:"checkServiceWorkerUpdate",beforeNavigation:()=>{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}};globalThis.URLPattern||await zt(()=>import("./index-DkuV2QLQ.js"),[]);const Go="/";console.log(Go);const Ao=new ei({plugins:[ri,ai,ni,si],fallback:"/",routes:[{path:V(),title:"Home",render:()=>w`<app-home></app-home>`},{path:V("about"),title:"About",plugins:[le(()=>zt(()=>import("./app-about-B6BYg1J1.js"),__vite__mapDeps([0,1]))),()=>{console.error("Failed to load app-about")}],render:()=>w`<app-about></app-about>`},{path:V("counter"),title:"EDH Event Tracker",plugins:[le(()=>zt(()=>import("./app-counter-eR-20uow.js"),__vite__mapDeps([2,3,1,4]))),()=>{console.error("Failed to load app-counter")}],render:()=>w`<app-counter></app-counter>`},{path:V("game-tracker"),title:"Tournament Tracker",plugins:[le(()=>zt(()=>import("./app-game-tracker-Ba9MQq31.js"),__vite__mapDeps([5,3,1]))),()=>{console.error("Failed to load app-standings")}],render:()=>w`<app-standings></app-standings>`},{path:V("standard-tracker"),title:"Standard Counter",plugins:[le(()=>zt(()=>import("./app-standard-Zn9Kn8Jz.js"),__vite__mapDeps([6,3,1,4]))),()=>{console.error("Failed to load standard-tracker")}],render:()=>w`<app-standard></app-standard>`}]});function V(e){var t=Go;return e&&(t=t+e),t}var li=S`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,De="";function Co(e){De=e}function ci(e=""){if(!De){const t=[...document.getElementsByTagName("script")],o=t.find(r=>r.hasAttribute("data-shoelace"));if(o)Co(o.getAttribute("data-shoelace"));else{const r=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let i="";r&&(i=r.getAttribute("src")),Co(i.split("/").slice(0,-1).join("/"))}}return De.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var di={name:"default",resolver:e=>ci(`assets/icons/${e}.svg`)},ui=di,Eo={caret:`
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
  `},hi={name:"system",resolver:e=>e in Eo?`data:image/svg+xml,${encodeURIComponent(Eo[e])}`:""},pi=hi,me=[ui,pi],ve=[];function fi(e){ve.push(e)}function bi(e){ve=ve.filter(t=>t!==e)}function So(e){return me.find(t=>t.name===e)}function ln(e,t){gi(e),me.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),ve.forEach(o=>{o.library===e&&o.setIcon()})}function gi(e){me=me.filter(t=>t.name!==e)}var mi=S`
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
`,Xo=Object.defineProperty,vi=Object.defineProperties,yi=Object.getOwnPropertyDescriptor,wi=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,_i=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable,ze=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Je=e=>{throw TypeError(e)},To=(e,t,o)=>t in e?Xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_t=(e,t)=>{for(var o in t||(t={}))_i.call(t,o)&&To(e,o,t[o]);if(Po)for(var o of Po(t))xi.call(t,o)&&To(e,o,t[o]);return e},ie=(e,t)=>vi(e,wi(t)),u=(e,t,o,r)=>{for(var i=r>1?void 0:r?yi(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&Xo(t,o,i),i},Zo=(e,t,o)=>t.has(e)||Je("Cannot "+o),$i=(e,t,o)=>(Zo(e,t,"read from private field"),t.get(e)),ki=(e,t,o)=>t.has(e)?Je("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Ai=(e,t,o,r)=>(Zo(e,t,"write to private field"),t.set(e,o),o),Ci=function(e,t){this[0]=e,this[1]=t},Ei=e=>{var t=e[ze("asyncIterator")],o=!1,r,i={};return t==null?(t=e[ze("iterator")](),r=s=>i[s]=n=>t[s](n)):(t=t.call(e),r=s=>i[s]=n=>{if(o){if(o=!1,s==="throw")throw n;return n}return o=!0,{done:!1,value:new Ci(new Promise(a=>{var l=t[s](n);l instanceof Object||Je("Object expected"),a(l)}),1)}}),i[ze("iterator")]=()=>i,r("next"),"throw"in t?r("throw"):i.throw=s=>{throw s},"return"in t&&r("return"),i};function K(e,t){const o=_t({waitUntilFirstUpdate:!1},t);return(r,i)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,d)}}),s.call(this,a)}}}var Y=S`
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
`,pe,R=class extends at{constructor(){super(),ki(this,pe,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,_t({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch{customElements.define(e,class extends t{},o)}return}let i=" (unknown version)",s=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(s=" v"+r.version),!(i&&s&&i===s)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${s} has already been registered.`)}attributeChangedCallback(e,t,o){$i(this,pe)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Ai(this,pe,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}};pe=new WeakMap;R.version="2.20.0";R.dependencies={};u([p()],R.prototype,"dir",2);u([p()],R.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=(e,t)=>e?._$litType$!==void 0,Pi=e=>e.strings===void 0,Ti={},Oi=(e,t=Ti)=>e._$AH=t;var jt=Symbol(),ce=Symbol(),Le,Re=new Map,G=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let r;if(t?.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?jt:ce}catch{return ce}try{const i=document.createElement("div");i.innerHTML=await r.text();const s=i.firstElementChild;if(((o=s?.tagName)==null?void 0:o.toLowerCase())!=="svg")return jt;Le||(Le=new DOMParser);const a=Le.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):jt}catch{return jt}}connectedCallback(){super.connectedCallback(),fi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bi(this)}getIconSource(){const e=So(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),r=o?So(this.library):void 0;if(!t){this.svg=null;return}let i=Re.get(t);if(i||(i=this.resolveIcon(t,r),Re.set(t,i)),!this.initialRender)return;const s=await i;if(s===ce&&Re.delete(t),t===this.getIconSource().url){if(Si(s)){if(this.svg=s,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(s){case ce:case jt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};G.styles=[Y,mi];u([wt()],G.prototype,"svg",2);u([p({reflect:!0})],G.prototype,"name",2);u([p()],G.prototype,"src",2);u([p()],G.prototype,"label",2);u([p({reflect:!0})],G.prototype,"library",2);u([K("label")],G.prototype,"handleLabelChange",1);u([K(["name","src","library"])],G.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Jo=e=>(...t)=>({_$litDirective$:e,values:t});let Qo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=Jo(class extends Qo{constructor(e){if(super(e),e.type!==$t.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return H}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=Symbol.for(""),zi=e=>{if(e?.r===tr)return e?._$litStatic$},ye=(e,...t)=>({_$litStatic$:t.reduce((o,r,i)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1],e[0]),r:tr}),Oo=new Map,Li=e=>(t,...o)=>{const r=o.length;let i,s;const n=[],a=[];let l,c=0,h=!1;for(;c<r;){for(l=t[c];c<r&&(s=o[c],(i=zi(s))!==void 0);)l+=i+t[++c],h=!0;c!==r&&a.push(s),n.push(l),c++}if(c===r&&n.push(t[r]),h){const d=n.join("$$lit$$");(t=Oo.get(d))===void 0&&(n.raw=n,Oo.set(d,t=n)),o=a}return e(t,...o)},fe=Li(w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=e=>e??E;var B=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ye`a`:ye`button`;return fe`
      <${t}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${C(e?void 0:this.disabled)}
        type=${C(e?void 0:"button")}
        href=${C(e?this.href:void 0)}
        target=${C(e?this.target:void 0)}
        download=${C(e?this.download:void 0)}
        rel=${C(e&&this.target?"noreferrer noopener":void 0)}
        role=${C(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${C(this.name)}
          library=${C(this.library)}
          src=${C(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};B.styles=[Y,li];B.dependencies={"sl-icon":G};u([F(".icon-button")],B.prototype,"button",2);u([wt()],B.prototype,"hasFocus",2);u([p()],B.prototype,"name",2);u([p()],B.prototype,"library",2);u([p()],B.prototype,"src",2);u([p()],B.prototype,"href",2);u([p()],B.prototype,"target",2);u([p()],B.prototype,"download",2);u([p()],B.prototype,"label",2);u([p({type:Boolean,reflect:!0})],B.prototype,"disabled",2);var er=new Map,Ri=new WeakMap;function Fi(e){return e??{keyframes:[],options:{duration:0}}}function zo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function lt(e,t){er.set(e,Fi(t))}function st(e,t,o){const r=Ri.get(e);if(r?.[t])return zo(r[t],o.dir);const i=er.get(t);return i?zo(i,o.dir):{keyframes:[],options:{duration:0}}}function Mt(e,t){return new Promise(o=>{function r(i){i.target===e&&(e.removeEventListener(t,r),o())}e.addEventListener(t,r)})}function nt(e,t,o){return new Promise(r=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,ie(_t({},o),{duration:Bi()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function Lo(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Bi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function bt(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}function dn(e,t){return e.map(o=>ie(_t({},o),{height:o.height==="auto"?`${t}px`:o.height}))}var se=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function un(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(o+=r.textContent)}),o}const Ne=new Set,Lt=new Map;let At,Qe="ltr",to="en";const or=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(or){const e=new MutationObserver(ir);Qe=document.documentElement.dir||"ltr",to=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rr(...e){e.map(t=>{const o=t.$code.toLowerCase();Lt.has(o)?Lt.set(o,Object.assign(Object.assign({},Lt.get(o)),t)):Lt.set(o,t),At||(At=t)}),ir()}function ir(){or&&(Qe=document.documentElement.dir||"ltr",to=document.documentElement.lang||navigator.language),[...Ne.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Mi=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ne.add(this.host)}hostDisconnected(){Ne.delete(this.host)}dir(){return`${this.host.dir||Qe}`.toLowerCase()}lang(){return`${this.host.lang||to}`.toLowerCase()}getTranslationData(t){var o,r;const i=new Intl.Locale(t.replace(/_/g,"-")),s=i?.language.toLowerCase(),n=(r=(o=i?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",a=Lt.get(`${s}-${n}`),l=Lt.get(s);return{locale:i,language:s,region:n,primary:a,secondary:l}}exists(t,o){var r;const{primary:i,secondary:s}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(i&&i[t]||s&&s[t]||o.includeFallback&&At&&At[t])}term(t,...o){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let s;if(r&&r[t])s=r[t];else if(i&&i[t])s=i[t];else if(At&&At[t])s=At[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...o):s}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,o)}};var sr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};rr(sr);var Di=sr,Nt=class extends Mi{};rr(Di);var Ni=S`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,N=class kt extends R{constructor(){super(...arguments),this.hasSlotController=new se(this,"icon","suffix"),this.localize=new Nt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,o="100%",r="0";this.countdownAnimation=t.animate([{width:o},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await bt(this.base),this.base.hidden=!1;const{keyframes:t,options:o}=st(this,"alert.show",{dir:this.localize.dir()});await nt(this.base,t,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await bt(this.base);const{keyframes:t,options:o}=st(this,"alert.hide",{dir:this.localize.dir()});await nt(this.base,t,o),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),kt.toastStack.parentElement===null&&document.body.append(kt.toastStack),kt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{kt.toastStack.removeChild(this),t(),kt.toastStack.querySelector("sl-alert")===null&&kt.toastStack.remove()},{once:!0})})}render(){return w`
      <div
        part="base"
        class=${W({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?w`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?w`
              <div
                class=${W({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};N.styles=[Y,Ni];N.dependencies={"sl-icon-button":B};u([F('[part~="base"]')],N.prototype,"base",2);u([F(".alert__countdown-elapsed")],N.prototype,"countdownElement",2);u([p({type:Boolean,reflect:!0})],N.prototype,"open",2);u([p({type:Boolean,reflect:!0})],N.prototype,"closable",2);u([p({reflect:!0})],N.prototype,"variant",2);u([p({type:Number})],N.prototype,"duration",2);u([p({type:String,reflect:!0})],N.prototype,"countdown",2);u([wt()],N.prototype,"remainingTime",2);u([K("open",{waitUntilFirstUpdate:!0})],N.prototype,"handleOpenChange",1);u([K("duration")],N.prototype,"handleDurationChange",1);var Ui=N;lt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});lt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ui.define("sl-alert");var Ii=S`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,nr=class extends R{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};nr.styles=[Y,Ii];nr.define("sl-card");var Vi=S`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,ar=class extends R{constructor(){super(...arguments),this.localize=new Nt(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ar.styles=[Y,Vi];var qt=new WeakMap,Kt=new WeakMap,Yt=new WeakMap,Fe=new WeakSet,de=new WeakMap,lr=class{constructor(e,t){this.handleFormData=o=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof i=="string"&&i.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{o.formData.append(i,a.toString())}):o.formData.append(i,s.toString()))},this.handleFormSubmit=o=>{var r;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=qt.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),de.set(this.host,[])},this.handleInteraction=o=>{const r=de.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=_t({form:o=>{const r=o.form;if(r){const s=o.getRootNode().querySelector(`#${r}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),de.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),de.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,qt.has(this.form)?qt.get(this.form).add(this.host):qt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Yt.has(this.form)||(Yt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=qt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form)),Yt.has(this.form)&&(this.form.checkValidity=Yt.get(this.form),Yt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Fe.add(e):Fe.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&o.setAttribute(r,t.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!Fe.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},eo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),pn=Object.freeze(ie(_t({},eo),{valid:!1,valueMissing:!0})),fn=Object.freeze(ie(_t({},eo),{valid:!1,customError:!0})),Hi=S`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,_=class extends R{constructor(){super(...arguments),this.formControlController=new lr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new se(this,"[default]","prefix","suffix"),this.localize=new Nt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:eo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ye`a`:ye`button`;return fe`
      <${t}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${C(e?void 0:this.disabled)}
        type=${C(e?void 0:this.type)}
        title=${this.title}
        name=${C(e?void 0:this.name)}
        value=${C(e?void 0:this.value)}
        href=${C(e&&!this.disabled?this.href:void 0)}
        target=${C(e?this.target:void 0)}
        download=${C(e?this.download:void 0)}
        rel=${C(e?this.rel:void 0)}
        role=${C(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?fe` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?fe`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};_.styles=[Y,Hi];_.dependencies={"sl-icon":G,"sl-spinner":ar};u([F(".button")],_.prototype,"button",2);u([wt()],_.prototype,"hasFocus",2);u([wt()],_.prototype,"invalid",2);u([p()],_.prototype,"title",2);u([p({reflect:!0})],_.prototype,"variant",2);u([p({reflect:!0})],_.prototype,"size",2);u([p({type:Boolean,reflect:!0})],_.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],_.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],_.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],_.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],_.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],_.prototype,"circle",2);u([p()],_.prototype,"type",2);u([p()],_.prototype,"name",2);u([p()],_.prototype,"value",2);u([p()],_.prototype,"href",2);u([p()],_.prototype,"target",2);u([p()],_.prototype,"rel",2);u([p()],_.prototype,"download",2);u([p()],_.prototype,"form",2);u([p({attribute:"formaction"})],_.prototype,"formAction",2);u([p({attribute:"formenctype"})],_.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],_.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],_.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],_.prototype,"formTarget",2);u([K("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);_.define("sl-button");var Wi=S`
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
`,ji=S`
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
`;const gt=Math.min,M=Math.max,we=Math.round,ue=Math.floor,Q=e=>({x:e,y:e}),qi={left:"right",right:"left",bottom:"top",top:"bottom"},Ki={start:"end",end:"start"};function Ue(e,t,o){return M(e,gt(t,o))}function Ut(e,t){return typeof e=="function"?e(t):e}function mt(e){return e.split("-")[0]}function It(e){return e.split("-")[1]}function cr(e){return e==="x"?"y":"x"}function oo(e){return e==="y"?"height":"width"}function St(e){return["top","bottom"].includes(mt(e))?"y":"x"}function ro(e){return cr(St(e))}function Yi(e,t,o){o===void 0&&(o=!1);const r=It(e),i=ro(e),s=oo(i);let n=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(n=_e(n)),[n,_e(n)]}function Gi(e){const t=_e(e);return[Ie(e),t,Ie(t)]}function Ie(e){return e.replace(/start|end/g,t=>Ki[t])}function Xi(e,t,o){const r=["left","right"],i=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:r:t?r:i;case"left":case"right":return t?s:n;default:return[]}}function Zi(e,t,o,r){const i=It(e);let s=Xi(mt(e),o==="start",r);return i&&(s=s.map(n=>n+"-"+i),t&&(s=s.concat(s.map(Ie)))),s}function _e(e){return e.replace(/left|right|bottom|top/g,t=>qi[t])}function Ji(e){return{top:0,right:0,bottom:0,left:0,...e}}function dr(e){return typeof e!="number"?Ji(e):{top:e,right:e,bottom:e,left:e}}function xe(e){const{x:t,y:o,width:r,height:i}=e;return{width:r,height:i,top:o,left:t,right:t+r,bottom:o+i,x:t,y:o}}function Ro(e,t,o){let{reference:r,floating:i}=e;const s=St(t),n=ro(t),a=oo(n),l=mt(t),c=s==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,b=r[a]/2-i[a]/2;let f;switch(l){case"top":f={x:h,y:r.y-i.height};break;case"bottom":f={x:h,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-i.width,y:d};break;default:f={x:r.x,y:r.y}}switch(It(t)){case"start":f[n]-=b*(o&&c?-1:1);break;case"end":f[n]+=b*(o&&c?-1:1);break}return f}const Qi=async(e,t,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:n}=o,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Ro(c,r,l),b=r,f={},g=0;for(let m=0;m<a.length;m++){const{name:y,fn:v}=a[m],{x,y:$,data:P,reset:A}=await v({x:h,y:d,initialPlacement:r,placement:b,strategy:i,middlewareData:f,rects:c,platform:n,elements:{reference:e,floating:t}});h=x??h,d=$??d,f={...f,[y]:{...f[y],...P}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(b=A.placement),A.rects&&(c=A.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):A.rects),{x:h,y:d}=Ro(c,b,l)),m=-1)}return{x:h,y:d,placement:b,strategy:i,middlewareData:f}};async function io(e,t){var o;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:n,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:b=!1,padding:f=0}=Ut(t,e),g=dr(f),y=a[b?d==="floating"?"reference":"floating":d],v=xe(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),x=d==="floating"?{x:r,y:i,width:n.floating.width,height:n.floating.height}:n.reference,$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),P=await(s.isElement==null?void 0:s.isElement($))?await(s.getScale==null?void 0:s.getScale($))||{x:1,y:1}:{x:1,y:1},A=xe(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:$,strategy:l}):x);return{top:(v.top-A.top+g.top)/P.y,bottom:(A.bottom-v.bottom+g.bottom)/P.y,left:(v.left-A.left+g.left)/P.x,right:(A.right-v.right+g.right)/P.x}}const ts=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:r,placement:i,rects:s,platform:n,elements:a,middlewareData:l}=t,{element:c,padding:h=0}=Ut(e,t)||{};if(c==null)return{};const d=dr(h),b={x:o,y:r},f=ro(i),g=oo(f),m=await n.getDimensions(c),y=f==="y",v=y?"top":"left",x=y?"bottom":"right",$=y?"clientHeight":"clientWidth",P=s.reference[g]+s.reference[f]-b[f]-s.floating[g],A=b[f]-s.reference[f],U=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let O=U?U[$]:0;(!O||!await(n.isElement==null?void 0:n.isElement(U)))&&(O=a.floating[$]||s.floating[g]);const rt=P/2-A/2,X=O/2-m[g]/2-1,I=gt(d[v],X),ct=gt(d[x],X),Z=I,dt=O-m[g]-ct,L=O/2-m[g]/2+rt,Tt=Ue(Z,L,dt),it=!l.arrow&&It(i)!=null&&L!==Tt&&s.reference[g]/2-(L<Z?I:ct)-m[g]/2<0,J=it?L<Z?L-Z:L-dt:0;return{[f]:b[f]+J,data:{[f]:Tt,centerOffset:L-Tt-J,...it&&{alignmentOffset:J}},reset:it}}}),es=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,r;const{placement:i,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:b,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...y}=Ut(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const v=mt(i),x=St(a),$=mt(a)===a,P=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=b||($||!m?[_e(a)]:Gi(a)),U=g!=="none";!b&&U&&A.push(...Zi(a,m,g,P));const O=[a,...A],rt=await io(t,y),X=[];let I=((r=s.flip)==null?void 0:r.overflows)||[];if(h&&X.push(rt[v]),d){const L=Yi(i,n,P);X.push(rt[L[0]],rt[L[1]])}if(I=[...I,{placement:i,overflows:X}],!X.every(L=>L<=0)){var ct,Z;const L=(((ct=s.flip)==null?void 0:ct.index)||0)+1,Tt=O[L];if(Tt)return{data:{index:L,overflows:I},reset:{placement:Tt}};let it=(Z=I.filter(J=>J.overflows[0]<=0).sort((J,ut)=>J.overflows[1]-ut.overflows[1])[0])==null?void 0:Z.placement;if(!it)switch(f){case"bestFit":{var dt;const J=(dt=I.filter(ut=>{if(U){const ht=St(ut.placement);return ht===x||ht==="y"}return!0}).map(ut=>[ut.placement,ut.overflows.filter(ht=>ht>0).reduce((ht,$r)=>ht+$r,0)]).sort((ut,ht)=>ut[1]-ht[1])[0])==null?void 0:dt[0];J&&(it=J);break}case"initialPlacement":it=a;break}if(i!==it)return{reset:{placement:it}}}return{}}}};async function os(e,t){const{placement:o,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),n=mt(o),a=It(o),l=St(o)==="y",c=["left","top"].includes(n)?-1:1,h=s&&l?-1:1,d=Ut(t,e);let{mainAxis:b,crossAxis:f,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(f=a==="end"?g*-1:g),l?{x:f*h,y:b*c}:{x:b*c,y:f*h}}const rs=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,r;const{x:i,y:s,placement:n,middlewareData:a}=t,l=await os(t,e);return n===((o=a.offset)==null?void 0:o.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:n}}}}},is=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:r,placement:i}=t,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:y=>{let{x:v,y:x}=y;return{x:v,y:x}}},...l}=Ut(e,t),c={x:o,y:r},h=await io(t,l),d=St(mt(i)),b=cr(d);let f=c[b],g=c[d];if(s){const y=b==="y"?"top":"left",v=b==="y"?"bottom":"right",x=f+h[y],$=f-h[v];f=Ue(x,f,$)}if(n){const y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",x=g+h[y],$=g-h[v];g=Ue(x,g,$)}const m=a.fn({...t,[b]:f,[d]:g});return{...m,data:{x:m.x-o,y:m.y-r,enabled:{[b]:s,[d]:n}}}}}},ss=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,r;const{placement:i,rects:s,platform:n,elements:a}=t,{apply:l=()=>{},...c}=Ut(e,t),h=await io(t,c),d=mt(i),b=It(i),f=St(i)==="y",{width:g,height:m}=s.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=b===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=b==="end"?"top":"bottom");const x=m-h.top-h.bottom,$=g-h.left-h.right,P=gt(m-h[y],x),A=gt(g-h[v],$),U=!t.middlewareData.shift;let O=P,rt=A;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(rt=$),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(O=x),U&&!b){const I=M(h.left,0),ct=M(h.right,0),Z=M(h.top,0),dt=M(h.bottom,0);f?rt=g-2*(I!==0||ct!==0?I+ct:M(h.left,h.right)):O=m-2*(Z!==0||dt!==0?Z+dt:M(h.top,h.bottom))}await l({...t,availableWidth:rt,availableHeight:O});const X=await n.getDimensions(a.floating);return g!==X.width||m!==X.height?{reset:{rects:!0}}:{}}}};function Ee(){return typeof window<"u"}function Vt(e){return ur(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function et(e){var t;return(t=(ur(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ur(e){return Ee()?e instanceof Node||e instanceof D(e).Node:!1}function j(e){return Ee()?e instanceof Element||e instanceof D(e).Element:!1}function tt(e){return Ee()?e instanceof HTMLElement||e instanceof D(e).HTMLElement:!1}function Fo(e){return!Ee()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof D(e).ShadowRoot}function ne(e){const{overflow:t,overflowX:o,overflowY:r,display:i}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(i)}function ns(e){return["table","td","th"].includes(Vt(e))}function Se(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pe(e){const t=so(),o=j(e)?q(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>o[r]?o[r]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function as(e){let t=vt(e);for(;tt(t)&&!Dt(t);){if(Pe(t))return t;if(Se(t))return null;t=vt(t)}return null}function so(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Dt(e){return["html","body","#document"].includes(Vt(e))}function q(e){return D(e).getComputedStyle(e)}function Te(e){return j(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function vt(e){if(Vt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Fo(e)&&e.host||et(e);return Fo(t)?t.host:t}function hr(e){const t=vt(e);return Dt(t)?e.ownerDocument?e.ownerDocument.body:e.body:tt(t)&&ne(t)?t:hr(t)}function ee(e,t,o){var r;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=hr(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),n=D(i);if(s){const a=Ve(n);return t.concat(n,n.visualViewport||[],ne(i)?i:[],a&&o?ee(a):[])}return t.concat(i,ee(i,[],o))}function Ve(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pr(e){const t=q(e);let o=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=tt(e),s=i?e.offsetWidth:o,n=i?e.offsetHeight:r,a=we(o)!==s||we(r)!==n;return a&&(o=s,r=n),{width:o,height:r,$:a}}function no(e){return j(e)?e:e.contextElement}function Rt(e){const t=no(e);if(!tt(t))return Q(1);const o=t.getBoundingClientRect(),{width:r,height:i,$:s}=pr(t);let n=(s?we(o.width):o.width)/r,a=(s?we(o.height):o.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const ls=Q(0);function fr(e){const t=D(e);return!so()||!t.visualViewport?ls:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cs(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==D(e)?!1:t}function Pt(e,t,o,r){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),s=no(e);let n=Q(1);t&&(r?j(r)&&(n=Rt(r)):n=Rt(e));const a=cs(s,o,r)?fr(s):Q(0);let l=(i.left+a.x)/n.x,c=(i.top+a.y)/n.y,h=i.width/n.x,d=i.height/n.y;if(s){const b=D(s),f=r&&j(r)?D(r):r;let g=b,m=Ve(g);for(;m&&r&&f!==g;){const y=Rt(m),v=m.getBoundingClientRect(),x=q(m),$=v.left+(m.clientLeft+parseFloat(x.paddingLeft))*y.x,P=v.top+(m.clientTop+parseFloat(x.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,d*=y.y,l+=$,c+=P,g=D(m),m=Ve(g)}}return xe({width:h,height:d,x:l,y:c})}function ao(e,t){const o=Te(e).scrollLeft;return t?t.left+o:Pt(et(e)).left+o}function br(e,t,o){o===void 0&&(o=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(o?0:ao(e,r)),s=r.top+t.scrollTop;return{x:i,y:s}}function ds(e){let{elements:t,rect:o,offsetParent:r,strategy:i}=e;const s=i==="fixed",n=et(r),a=t?Se(t.floating):!1;if(r===n||a&&s)return o;let l={scrollLeft:0,scrollTop:0},c=Q(1);const h=Q(0),d=tt(r);if((d||!d&&!s)&&((Vt(r)!=="body"||ne(n))&&(l=Te(r)),tt(r))){const f=Pt(r);c=Rt(r),h.x=f.x+r.clientLeft,h.y=f.y+r.clientTop}const b=n&&!d&&!s?br(n,l,!0):Q(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x+b.x,y:o.y*c.y-l.scrollTop*c.y+h.y+b.y}}function us(e){return Array.from(e.getClientRects())}function hs(e){const t=et(e),o=Te(e),r=e.ownerDocument.body,i=M(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=M(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let n=-o.scrollLeft+ao(e);const a=-o.scrollTop;return q(r).direction==="rtl"&&(n+=M(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:n,y:a}}function ps(e,t){const o=D(e),r=et(e),i=o.visualViewport;let s=r.clientWidth,n=r.clientHeight,a=0,l=0;if(i){s=i.width,n=i.height;const c=so();(!c||c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:n,x:a,y:l}}function fs(e,t){const o=Pt(e,!0,t==="fixed"),r=o.top+e.clientTop,i=o.left+e.clientLeft,s=tt(e)?Rt(e):Q(1),n=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,c=r*s.y;return{width:n,height:a,x:l,y:c}}function Bo(e,t,o){let r;if(t==="viewport")r=ps(e,o);else if(t==="document")r=hs(et(e));else if(j(t))r=fs(t,o);else{const i=fr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return xe(r)}function gr(e,t){const o=vt(e);return o===t||!j(o)||Dt(o)?!1:q(o).position==="fixed"||gr(o,t)}function bs(e,t){const o=t.get(e);if(o)return o;let r=ee(e,[],!1).filter(a=>j(a)&&Vt(a)!=="body"),i=null;const s=q(e).position==="fixed";let n=s?vt(e):e;for(;j(n)&&!Dt(n);){const a=q(n),l=Pe(n);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ne(n)&&!l&&gr(e,n))?r=r.filter(h=>h!==n):i=a,n=vt(n)}return t.set(e,r),r}function gs(e){let{element:t,boundary:o,rootBoundary:r,strategy:i}=e;const n=[...o==="clippingAncestors"?Se(t)?[]:bs(t,this._c):[].concat(o),r],a=n[0],l=n.reduce((c,h)=>{const d=Bo(t,h,i);return c.top=M(d.top,c.top),c.right=gt(d.right,c.right),c.bottom=gt(d.bottom,c.bottom),c.left=M(d.left,c.left),c},Bo(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ms(e){const{width:t,height:o}=pr(e);return{width:t,height:o}}function vs(e,t,o){const r=tt(t),i=et(t),s=o==="fixed",n=Pt(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Q(0);if(r||!r&&!s)if((Vt(t)!=="body"||ne(i))&&(a=Te(t)),r){const b=Pt(t,!0,s,t);l.x=b.x+t.clientLeft,l.y=b.y+t.clientTop}else i&&(l.x=ao(i));const c=i&&!r&&!s?br(i,a):Q(0),h=n.left+a.scrollLeft-l.x-c.x,d=n.top+a.scrollTop-l.y-c.y;return{x:h,y:d,width:n.width,height:n.height}}function Be(e){return q(e).position==="static"}function Mo(e,t){if(!tt(e)||q(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return et(e)===o&&(o=o.ownerDocument.body),o}function mr(e,t){const o=D(e);if(Se(e))return o;if(!tt(e)){let i=vt(e);for(;i&&!Dt(i);){if(j(i)&&!Be(i))return i;i=vt(i)}return o}let r=Mo(e,t);for(;r&&ns(r)&&Be(r);)r=Mo(r,t);return r&&Dt(r)&&Be(r)&&!Pe(r)?o:r||as(e)||o}const ys=async function(e){const t=this.getOffsetParent||mr,o=this.getDimensions,r=await o(e.floating);return{reference:vs(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ws(e){return q(e).direction==="rtl"}const be={convertOffsetParentRelativeRectToViewportRelativeRect:ds,getDocumentElement:et,getClippingRect:gs,getOffsetParent:mr,getElementRects:ys,getClientRects:us,getDimensions:ms,getScale:Rt,isElement:j,isRTL:ws};function vr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _s(e,t){let o=null,r;const i=et(e);function s(){var a;clearTimeout(r),(a=o)==null||a.disconnect(),o=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=e.getBoundingClientRect(),{left:h,top:d,width:b,height:f}=c;if(a||t(),!b||!f)return;const g=ue(d),m=ue(i.clientWidth-(h+b)),y=ue(i.clientHeight-(d+f)),v=ue(h),$={rootMargin:-g+"px "+-m+"px "+-y+"px "+-v+"px",threshold:M(0,gt(1,l))||1};let P=!0;function A(U){const O=U[0].intersectionRatio;if(O!==l){if(!P)return n();O?n(!1,O):r=setTimeout(()=>{n(!1,1e-7)},1e3)}O===1&&!vr(c,e.getBoundingClientRect())&&n(),P=!1}try{o=new IntersectionObserver(A,{...$,root:i.ownerDocument})}catch{o=new IntersectionObserver(A,$)}o.observe(e)}return n(!0),s}function xs(e,t,o,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=no(e),h=i||s?[...c?ee(c):[],...ee(t)]:[];h.forEach(v=>{i&&v.addEventListener("scroll",o,{passive:!0}),s&&v.addEventListener("resize",o)});const d=c&&a?_s(c,o):null;let b=-1,f=null;n&&(f=new ResizeObserver(v=>{let[x]=v;x&&x.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var $;($=f)==null||$.observe(t)})),o()}),c&&!l&&f.observe(c),f.observe(t));let g,m=l?Pt(e):null;l&&y();function y(){const v=Pt(e);m&&!vr(m,v)&&o(),m=v,g=requestAnimationFrame(y)}return o(),()=>{var v;h.forEach(x=>{i&&x.removeEventListener("scroll",o),s&&x.removeEventListener("resize",o)}),d?.(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(g)}}const $s=rs,ks=is,As=es,Do=ss,Cs=ts,Es=(e,t,o)=>{const r=new Map,i={platform:be,...o},s={...i.platform,_c:r};return Qi(e,t,{...i,platform:s})};function Ss(e){return Ps(e)}function Me(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ps(e){for(let t=e;t;t=Me(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Me(e);t;t=Me(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||Pe(o)||t.tagName==="BODY"))return t}return null}function Ts(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var k=class extends R{constructor(){super(...arguments),this.localize=new Nt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,s=0,n=0,a=0,l=0,c=0,h=0;o?e.top<t.top?(r=e.left,i=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(r=t.left,i=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(r=e.right,i=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(r=t.right,i=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ts(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=xs(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[$s({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Do({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(As({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ks({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Do({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Cs({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>be.getOffsetParent(o,Ss):be.getOffsetParent;Es(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ie(_t({},be),{getOffsetParent:t})}).then(({x:o,y:r,middlewareData:i,placement:s})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let h="",d="",b="",f="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?g:"",f=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":g,f=n?g:"",b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:b,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${W({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};k.styles=[Y,ji];u([F(".popup")],k.prototype,"popup",2);u([F(".popup__arrow")],k.prototype,"arrowEl",2);u([p()],k.prototype,"anchor",2);u([p({type:Boolean,reflect:!0})],k.prototype,"active",2);u([p({reflect:!0})],k.prototype,"placement",2);u([p({reflect:!0})],k.prototype,"strategy",2);u([p({type:Number})],k.prototype,"distance",2);u([p({type:Number})],k.prototype,"skidding",2);u([p({type:Boolean})],k.prototype,"arrow",2);u([p({attribute:"arrow-placement"})],k.prototype,"arrowPlacement",2);u([p({attribute:"arrow-padding",type:Number})],k.prototype,"arrowPadding",2);u([p({type:Boolean})],k.prototype,"flip",2);u([p({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],k.prototype,"flipFallbackPlacements",2);u([p({attribute:"flip-fallback-strategy"})],k.prototype,"flipFallbackStrategy",2);u([p({type:Object})],k.prototype,"flipBoundary",2);u([p({attribute:"flip-padding",type:Number})],k.prototype,"flipPadding",2);u([p({type:Boolean})],k.prototype,"shift",2);u([p({type:Object})],k.prototype,"shiftBoundary",2);u([p({attribute:"shift-padding",type:Number})],k.prototype,"shiftPadding",2);u([p({attribute:"auto-size"})],k.prototype,"autoSize",2);u([p()],k.prototype,"sync",2);u([p({type:Object})],k.prototype,"autoSizeBoundary",2);u([p({attribute:"auto-size-padding",type:Number})],k.prototype,"autoSizePadding",2);u([p({attribute:"hover-bridge",type:Boolean})],k.prototype,"hoverBridge",2);var T=class extends R{constructor(){super(),this.localize=new Nt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Lo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Lo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await bt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=st(this,"tooltip.show",{dir:this.localize.dir()});await nt(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await bt(this.body);const{keyframes:o,options:r}=st(this,"tooltip.hide",{dir:this.localize.dir()});await nt(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}render(){return w`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${W({tooltip:!0,"tooltip--open":this.open})}
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
    `}};T.styles=[Y,Wi];T.dependencies={"sl-popup":k};u([F("slot:not([name])")],T.prototype,"defaultSlot",2);u([F(".tooltip__body")],T.prototype,"body",2);u([F("sl-popup")],T.prototype,"popup",2);u([p()],T.prototype,"content",2);u([p()],T.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],T.prototype,"disabled",2);u([p({type:Number})],T.prototype,"distance",2);u([p({type:Boolean,reflect:!0})],T.prototype,"open",2);u([p({type:Number})],T.prototype,"skidding",2);u([p()],T.prototype,"trigger",2);u([p({type:Boolean})],T.prototype,"hoist",2);u([K("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1);u([K(["content","distance","hoist","placement","skidding"])],T.prototype,"handleOptionsChange",1);u([K("disabled")],T.prototype,"handleDisabledChange",1);lt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});lt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});T.define("sl-tooltip");G.define("sl-icon");var Os=S`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,zs=(e="value")=>(t,o)=>{const r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,a){var l;const c=r.getPropertyOptions(e),h=typeof c.attribute=="string"?c.attribute:e;if(s===h){const d=c.converter||Ft,f=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:Ft.fromAttribute)(a,c.type);this[e]!==f&&(this[o]=f)}i.call(this,s,n,a)}},Ls=S`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=Jo(class extends Qo{constructor(e){if(super(e),e.type!==$t.PROPERTY&&e.type!==$t.ATTRIBUTE&&e.type!==$t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pi(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===H||t===E)return t;const o=e.element,r=e.name;if(e.type===$t.PROPERTY){if(t===o[r])return H}else if(e.type===$t.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return H}else if(e.type===$t.ATTRIBUTE&&o.getAttribute(r)===t+"")return H;return Oi(e),t}});var z=class extends R{constructor(){super(...arguments),this.formControlController=new lr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new se(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return w`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${W({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${C(this.value)}
            .checked=${Rs(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z.styles=[Y,Ls,Os];u([F('input[type="checkbox"]')],z.prototype,"input",2);u([wt()],z.prototype,"hasFocus",2);u([p()],z.prototype,"title",2);u([p()],z.prototype,"name",2);u([p()],z.prototype,"value",2);u([p({reflect:!0})],z.prototype,"size",2);u([p({type:Boolean,reflect:!0})],z.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],z.prototype,"checked",2);u([zs("checked")],z.prototype,"defaultChecked",2);u([p({reflect:!0})],z.prototype,"form",2);u([p({type:Boolean,reflect:!0})],z.prototype,"required",2);u([p({attribute:"help-text"})],z.prototype,"helpText",2);u([K("checked",{waitUntilFirstUpdate:!0})],z.prototype,"handleCheckedChange",1);u([K("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);z.define("sl-switch");const Fs=S`
  main {
    padding: .5rem;
  }
  .main {
    padding: .75rem;
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
    justify-content: flex-end;
    align-items: center;
    padding: .5rem 0;
  }
`,yr=S`
  sl-button, sl-button::part(base), sl-button::part(label), sl-card, sl-switch, sl-switch::part(base), sl-icon, sl-tooltip, sl-alert, sl-tab, sl-menu-label, sl-menu-item, sl-select, sl-radio-group, input, button {
    font-family: var(--font-family), sans-serif !important;
  }
  sl-tab-group {
    --indicator-color: var(--sl-color-primary-500);
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-500);
  }
  sl-tab {
    padding-bottom: .25rem;
  }
  sl-details::part(base),
  sl-card::part(base),
  sl-tab::part(base),
  sl-tab-panel::part(base) {
    border-radius: 1rem;
    border: 1px solid var(--windows-stroke-glass-specular);
    background: var(--Windows-Glass);
    background-blend-mode: luminosity;

    /* Blur */
    backdrop-filter: blur(50px);
  }
  sl-tab::part(base) {
    border-color: transparent;
    color: rgba(255,255,255,.8);
  }
  sl-tab::part(base):hover {
    border-color: var(--sl-color-primary-500);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
    background: linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.2);
  }

  sl-tab::part(base):hover,
  sl-tab::part(base):focus {
    color: var(--sl-color-primary-400) !important;
  }
  sl-tab::part(base):focus-visible,
  sl-tab.ios-tab::part(base):focus-visible {
    --sl-focus-ring: var(--sl-color-primary-600) !important;
  }
  sl-tab::part(base),
  sl-tab.ios-tab::part(base) {
    border-radius: 1rem;
    margin-left: .5rem;
    margin-right: .5rem;
    padding: .75rem 1rem;
  }
  sl-tab-panel {
    margin-top: .25rem;
  }
  sl-tab-panel::part(base) {
    padding: 1rem;
  }
  sl-tag::part(base) {
    border-radius: 0.5rem;
    background: linear-gradient(0deg, rgba(87, 87, 87, 0.04) 0%, rgba(87, 87, 87, 0.04) 100%), rgba(255, 255, 255, 0.07);
    background-blend-mode: color-dodge, lighten;
    color: rgba(255, 255, 255, 0.96) !important;
    text-align: center;
  }
  sl-tag::part(remove-button) {
    color: rgba(255, 255, 255, 0.96) !important;
  }
  sl-tree-item::part(base) {
    color: var(--sl-color-neutral-950);
  }
`,Bs=S`
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
    background-color: var(--sl-color-primary-200);
  }
  .ribbon span.neutral {
    background-color: var(--sl-color-neutral-200);
  }
  .ribbon span.danger {
    background-color: var(--sl-color-danger-200);
  }
  .ribbon span.warning {
    background-color: var(--sl-color-warning-600);
  }
  .ribbon span.colorless {
    background-color: var(--sl-color-neutral-200);
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
`,Ms=S`
  sl-alert::part(base) {
    color: var(--sl-color-neutral-950);
  }
`;var No=Object.freeze,wr=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,_r=(e,t,o,r)=>{for(var i=r>1?void 0:r?Ds(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&wr(t,o,i),i},Ns=(e,t)=>No(wr(e,"raw",{value:No(e.slice())})),Uo;let $e=class extends at{constructor(){super(...arguments),this.message="Welcome!",this.customFont='"Oswald", sans-serif'}async firstUpdated(){console.log("This is your home page"),this.applyInitialFont()}share(){navigator.share&&navigator.share({title:"Moonsilver Waypoints",text:"Tracking games of Magic: The Gathering and other TCG scores.",url:"https://www.adamjolicoeur.me"})}updateSelectFonts(){const e=this.shadowRoot?.querySelectorAll("sl-select");e&&e.forEach(t=>{t.style.fontFamily=getComputedStyle(document.documentElement).getPropertyValue("--sl-font-sans")})}toggleFont(e){const t=document.documentElement,o=e.target.checked;o?(t.style.setProperty("--font-family",'"Grenze Gotisch", sans-serif'),t.style.setProperty("--sl-font-sans",'"Grenze Gotisch", sans-serif'),t.style.setProperty("--sl-font-mono","Menlo, monospace")):(t.style.setProperty("--font-family",this.customFont),t.style.setProperty("--sl-font-sans",this.customFont),t.style.setProperty("--sl-font-mono","Menlo, monospace")),localStorage.setItem("useDefaultFont",o.toString()),this.updateSelectFonts()}applyInitialFont(){const e=localStorage.getItem("useDefaultFont"),t=document.documentElement;e==="true"?(t.style.setProperty("--font-family",'"Grenze Gotisch", sans-serif'),t.style.setProperty("--sl-font-sans",'"Grenze Gotisch", sans-serif'),t.style.setProperty("--sl-font-mono","Menlo, monospace"),(this.shadowRoot?.querySelector("sl-switch")).checked=!0):(t.style.setProperty("--font-family",this.customFont),t.style.setProperty("--sl-font-sans",this.customFont),t.style.setProperty("--sl-font-mono","Menlo, monospace")),this.updateSelectFonts()}render(){return w(Uo||(Uo=Ns([`
      <app-header ?enableShare="`,'" ?enableAbout=',`></app-header>

      <!--<div class="font-toggle">
        <sl-switch size="medium" @sl-change=`,`>
          Toggle fancy font
        </sl-switch>
      </div>-->

      <main style="padding-bottom: 5rem;">
        <sl-alert variant="primary" open closable>
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <strong>Looking for my portfolio site?</strong><br />
          Visit <a href="https://www.adamjolicoeur.com" target="blank" alt="Link to adamjolicoeur.com">www.adamjolicoeur.com</a> to view all of my designs, demos, and more!
        </sl-alert>
        <content class="main">
          <section>
            <sl-card style="position: relative;">
              <div slot="header">Tournament Tracker</div>
              <p>For use with tracking games of Magic: The Gathering.</p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="primary">
                  Tournament
                </span>
              </div>
              <div slot="footer">
                <sl-button href="`,`" variant="default" pill>Start</sl-button>
              </div>
            </sl-card>
          </section>
          <section>
            <sl-card class="card-header two-item-footer" style="position: relative;">
              <div slot="header">
                EDH Event Tracking
              </div>
              <p>
                A customized tracker for matches of 4 player games such as Commander/EDH.
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="edh">
                  4 player
                </span>
              </div>
              <div slot="footer">
                <sl-button href="`,`" variant="default" pill>Start</sl-button>
              </div>
            </sl-card>
          </section>
          <section>
            <sl-card class="card-header two-item-footer" style="position: relative;">
              <div slot="header">
                Standard Counter
              </div>
              <p>
                A simplified life counter for standard (head-to-head) matches. Each "side" is designed to face the user to provide the clearest view of their life total.
              </p>
              <div class="ribbon ribbon ribbon-top-right">
                <span class="colorless">
                  Standard 1v1
                </span>
              </div>
              <div slot="footer">
                <sl-button href="`,`" variant="default" pill>Start</sl-button>
              </div>
            </sl-card>
          </section>
        </content>
      </main>
      <style>
        sl-card.work-in-progress::part(base) {
          border-color: var(--sl-color-warning-600);
        }
        sl-card.ready::part(base) {
          border-color: var(--sl-color-brand-600);
        }
        sl-card::part(footer) {
          padding: .5rem;
        }
      </style>
      <script>
        const alert = document.querySelector('.alert-closable');
        alert.addEventListener('sl-after-hide', () => {
          setTimeout(() => (alert.open = true), 2000);
        });
      <\/script>
    `])),!0,!0,this.toggleFont,V("game-tracker"),V("counter"),V("standard-tracker"))}};$e.styles=[Fs,yr,Bs,Ms,S`
      .main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        grid-gap: 1rem;
      }
      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }
      sl-card {
        max-width: 300px;
      }
      sl-card::part(base) {
        min-height: 350px;
        justify-content: space-between;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
        border-radius: 1rem 1rem 1rem 0;
      }
      sl-card [slot='header'] {
        font-weight: var(--sl-font-weight-bold);
      }
      .font-toggle {
        position: fixed;
        bottom: 4rem;
        left: 1rem;
        z-index: 10000;
        padding: 0.5rem .5rem .75rem;
        background-color: var(--sl-color-neutral-50);
        color: var(--sl-color-neutral-900);
        border: 1px solid var(--sl-color-primary-700);
        border-radius: var(--sl-input-height-medium);
      }
  `];_r([p()],$e.prototype,"message",2);$e=_r([Ce("app-home")],$e);var Us=Object.getOwnPropertyDescriptor,Is=(e,t,o,r)=>{for(var i=r>1?void 0:r?Us(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i};let He=class extends at{firstUpdated(){Ao.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return Ao.render()}};He.styles=S`
    main, .main {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    @media (max-width: 800px) {
      app-standings,
      app-counter,
      app-about,
      app-home {
        padding-top: 0 !important;
      }
    }
    @media (max-width: 1200px) {
      app-standings,
      app-counter,
      app-about,
      app-home {
        display: block;
        padding-top: 55px;
      }
    }
    @media (min-width: 1200px) {
      app-standings,
      app-counter,
      app-about,
      app-home {
        max-width: 1200px;
        display: block;
        margin: 0 auto;
        padding-top: 55px;
      }
    }
  `;He=Is([Ce("my-app")],He);function Vs(e={}){const{immediate:t=!1,onNeedRefresh:o,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:n}=e;let a,l;const c=async(d=!0)=>{await l};async function h(){if("serviceWorker"in navigator){if(a=await zt(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{n?.(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r?.()}),a.register({immediate:t}).then(d=>{s?s("/sw.js",d):i?.(d)}).catch(d=>{n?.(d)})}}return l=h(),c}const Hs=Vs({onNeedRefresh(){window.confirm("New content available, refresh?")&&Hs(!0)},onOfflineReady(){console.log("App ready to work offline")},onRegistered(e){e&&console.log("Service worker registered",e)}});var Ws=S`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ae=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Gt(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Gt(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Gt(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Gt(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const o=e.indexOf(t),r=Gt(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",o===0),r.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<e.length-1),r.toggleAttribute("data-sl-button-group__button--last",o===e.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return w`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};ae.styles=[Y,Ws];u([F("slot")],ae.prototype,"defaultSlot",2);u([wt()],ae.prototype,"disableRole",2);u([p()],ae.prototype,"label",2);function Gt(e){var t;const o="sl-button, sl-radio-button";return(t=e.closest(o))!=null?t:e.querySelector(o)}ae.define("sl-button-group");var Io=new WeakMap;function xr(e){let t=Io.get(e);return t||(t=window.getComputedStyle(e,null),Io.set(e,t)),t}function js(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=xr(e);return t.visibility!=="hidden"&&t.display!=="none"}function qs(e){const t=xr(e),{overflowY:o,overflowX:r}=t;return o==="scroll"||r==="scroll"?!0:o!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&o==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function Ks(e){const t=e.tagName.toLowerCase(),o=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const s=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=s.querySelector(`${n}:checked`);return a?a===e:s.querySelector(n)===e}return js(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:qs(e):!1}function bn(e){var t,o;const r=We(e),i=(t=r[0])!=null?t:null,s=(o=r[r.length-1])!=null?o:null;return{start:i,end:s}}function Ys(e,t){var o;return((o=e.getRootNode({composed:!0}))==null?void 0:o.host)!==t}function We(e){const t=new WeakMap,o=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!o.includes(i)&&Ks(i)&&o.push(i),i instanceof HTMLSlotElement&&Ys(i,e)&&i.assignedElements({flatten:!0}).forEach(s=>{r(s)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}for(const s of i.children)r(s)}return r(e),o.sort((i,s)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}function*lo(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Ei(lo(e.shadowRoot.activeElement))))}function Gs(){return[...lo()].pop()}var Xt=[],Xs=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var o;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Gs();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=We(this.element);let s=i.findIndex(a=>a===r);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){s+n>=i.length?s=0:s+n<0?s=i.length-1:s+=n,this.previousFocus=this.currentFocus;const a=i[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const l=[...lo()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Xt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Xt=Xt.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Xt[Xt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=We(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],r=this.tabDirection==="forward"?t:o;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function Zs(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var je=new Set;function Js(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Qs(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Vo(e){if(je.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Js()+Qs();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ho(e){je.delete(e),je.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function gn(e,t,o="vertical",r="smooth"){const i=Zs(e,t),s=i.top+t.scrollTop,n=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(n<a?t.scrollTo({left:n,behavior:r}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:r})),(o==="vertical"||o==="both")&&(s<c?t.scrollTo({top:s,behavior:r}):s+e.clientHeight>h&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:r}))}var tn=S`
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
`,ot=class extends R{constructor(){super(...arguments),this.hasSlotController=new se(this,"footer"),this.localize=new Nt(this),this.modal=new Xs(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Vo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ho(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=st(this,"dialog.denyClose",{dir:this.localize.dir()});nt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Vo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([bt(this.dialog),bt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=st(this,"dialog.show",{dir:this.localize.dir()}),o=st(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([nt(this.panel,t.keyframes,t.options),nt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([bt(this.dialog),bt(this.overlay)]);const e=st(this,"dialog.hide",{dir:this.localize.dir()}),t=st(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([nt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),nt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ho(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${W({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${C(this.noHeader?this.label:void 0)}
          aria-labelledby=${C(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":w`
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
    `}};ot.styles=[Y,tn];ot.dependencies={"sl-icon-button":B};u([F(".dialog")],ot.prototype,"dialog",2);u([F(".dialog__panel")],ot.prototype,"panel",2);u([F(".dialog__overlay")],ot.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],ot.prototype,"open",2);u([p({reflect:!0})],ot.prototype,"label",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],ot.prototype,"noHeader",2);u([K("open",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpenChange",1);lt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});lt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});lt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});lt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});lt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ot.define("sl-dialog");var en=Object.defineProperty,on=Object.getOwnPropertyDescriptor,co=(e,t,o,r)=>{for(var i=r>1?void 0:r?on(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&en(t,o,i),i};let oe=class extends at{constructor(){super(...arguments),this.isOpen=!1,this.message=""}open(e){this.message=e,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}render(){return this.isOpen?w`
      <sl-dialog
        label="About"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="text" outline href="${V("about")}">
          Read More
        </sl-button>
        <sl-button slot="footer" variant="primary" @click=${this.close}>
          Thanks
        </sl-button>
      </sl-dialog>
    `:w``}};oe.styles=[yr];co([p({type:Boolean})],oe.prototype,"isOpen",2);co([p({type:String})],oe.prototype,"message",2);oe=co([Ce("about-modal")],oe);var rn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Ht=(e,t,o,r)=>{for(var i=r>1?void 0:r?sn(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&rn(t,o,i),i};let yt=class extends at{constructor(){super(...arguments),this.aboutModalOpen=!1,this.title="adamjolicoeur.me",this.enableBack=!1,this.enableShare=!1,this.enableAbout=!1}openAboutModal(){this.aboutModalOpen=!0}closeAboutModal(){this.aboutModalOpen=!1}share(){navigator.share&&navigator.share({title:"GameTracker",text:"Tracking games of Magic: The Gathering and other TCG scores.",url:"https://www.adamjolicoeur.me"})}render(){return w`
      <nav>
        <div style="display: flex; align-items: center; margin-left: 1rem; width: 100%;">
          <img src="./assets/icons/icon_base.png" width="48px" alt="App icon" />
          ${document.title}
        </div>
        <sl-button-group label="Navigation" style="margin-right: 1rem;">
        ${this.enableBack?w`
          <sl-button variant="default" size="small" pill aria-label="Back to start" label="Back to start" href="${V()}">
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-button>
          `:w``}
        ${this.enableShare?w`
          ${"share"in navigator?w`
                <sl-button variant="default" size="small" pill @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share
                </sl-button>
            `:null}
        `:w``}
        ${this.enableAbout?w`
            <sl-button variant="default" size="small" pill @click="${this.openAboutModal}">
              About
            </sl-button>
          `:w``}
        </sl-button-group>
        <about-modal
          .isOpen=${this.aboutModalOpen}
          message="Learn about this site, resources used to create it, and various disclaimers. If you like what you see, be sure to click the share button!"
          @confirm=${V("about")}
          @close=${this.closeAboutModal}
        ></about-modal>
      </nav>
    `}};yt.styles=S`
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--sl-color-neutral-100);

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 50px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 10000;
    }
  `;Ht([wt()],yt.prototype,"aboutModalOpen",2);Ht([p({type:String})],yt.prototype,"title",2);Ht([p({type:Boolean})],yt.prototype,"enableBack",2);Ht([p({type:Boolean})],yt.prototype,"enableShare",2);Ht([p({type:Boolean})],yt.prototype,"enableAbout",2);yt=Ht([Ce("app-header")],yt);export{bn as $,dn as A,B,gn as C,_t as D,E,lr as F,Qo as G,se as H,$t as I,Jo as J,k as K,Nt as L,Mt as M,Hi as N,fe as O,ae as P,fn as Q,pn as R,R as S,H as T,eo as U,Pi as V,un as W,Xs as X,Vo as Y,Ho as Z,u as _,yr as a,T as a0,_ as a1,Bi as a2,wt as b,V as c,Ms as d,F as e,ln as f,Yr as g,Y as h,S as i,Ls as j,G as k,zs as l,W as m,p as n,C as o,Rs as p,ar as q,at as r,Fs as s,Ce as t,lt as u,bt as v,K as w,w as x,st as y,nt as z};
//# sourceMappingURL=index-zlDiaMpD.js.map
