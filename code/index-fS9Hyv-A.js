const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["code/app-counter-DryWPbxc.js","code/mana-icon-C8IiCUZI.js","code/app-game-tracker-B1Pa67qz.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=globalThis,De=Qt.ShadowRoot&&(Qt.ShadyCSS===void 0||Qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),eo=new WeakMap;let To=class{constructor(t,o,r){if(this._$cssResult$=!0,r!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(De&&t===void 0){const r=o!==void 0&&o.length===1;r&&(t=eo.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&eo.set(o,t))}return t}toString(){return this.cssText}};const ar=e=>new To(typeof e=="string"?e:e+"",void 0,Fe),R=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new To(o,e,Fe)},lr=(e,t)=>{if(De)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const r=document.createElement("style"),i=Qt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,e.appendChild(r)}},oo=De?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return ar(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:cr,defineProperty:dr,getOwnPropertyDescriptor:hr,getOwnPropertyNames:ur,getOwnPropertySymbols:pr,getPrototypeOf:fr}=Object,me=globalThis,ro=me.trustedTypes,mr=ro?ro.emptyScript:"",gr=me.reactiveElementPolyfillSupport,Nt=(e,t)=>e,Et={toAttribute(e,t){switch(t){case Boolean:e=e?mr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Ne=(e,t)=>!cr(e,t),io={attribute:!0,type:String,converter:Et,reflect:!1,hasChanged:Ne};Symbol.metadata??=Symbol("metadata"),me.litPropertyMetadata??=new WeakMap;class kt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=io){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,o);i!==void 0&&dr(this.prototype,t,i)}}static getPropertyDescriptor(t,o,r){const{get:i,set:s}=hr(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return i?.call(this)},set(n){const a=i?.call(this);s.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??io}static _$Ei(){if(this.hasOwnProperty(Nt("elementProperties")))return;const t=fr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nt("properties"))){const o=this.properties,r=[...ur(o),...pr(o)];for(const i of r)this.createProperty(i,o[i])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[r,i]of o)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const i=this._$Eu(o,r);i!==void 0&&this._$Eh.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)o.unshift(oo(i))}else t!==void 0&&o.push(oo(t));return o}static _$Eu(t,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,o,r){this._$AK(t,r)}_$EC(t,o){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Et).toAttribute(o,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,o){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Et;this._$Em=i,this[i]=n.fromAttribute(o,s.type),this._$Em=null}}requestUpdate(t,o,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Ne)(this[t],o))return;this.P(t,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,r){this._$AL.has(t)||this._$AL.set(t,o),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(o)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(o)}willUpdate(t){}_$AE(t){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(o=>this._$EC(o,this[o])),this._$EU()}updated(t){}firstUpdated(t){}}kt.elementStyles=[],kt.shadowRootOptions={mode:"open"},kt[Nt("elementProperties")]=new Map,kt[Nt("finalized")]=new Map,gr?.({ReactiveElement:kt}),(me.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=globalThis,re=Ie.trustedTypes,so=re?re.createPolicy("lit-html",{createHTML:e=>e}):void 0,zo="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,Oo="?"+lt,br=`<${Oo}>`,wt=document,Vt=()=>wt.createComment(""),Ht=e=>e===null||typeof e!="object"&&typeof e!="function",Ve=Array.isArray,vr=e=>Ve(e)||typeof e?.[Symbol.iterator]=="function",ke=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,no=/-->/g,ao=/>/g,mt=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lo=/'/g,co=/"/g,Ro=/^(?:script|style|textarea|title)$/i,yr=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),A=yr(1),I=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),ho=new WeakMap,yt=wt.createTreeWalker(wt,129);function Lo(e,t){if(!Ve(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return so!==void 0?so.createHTML(t):t}const wr=(e,t)=>{const o=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",n=Bt;for(let a=0;a<o;a++){const l=e[a];let c,u,d=-1,m=0;for(;m<l.length&&(n.lastIndex=m,u=n.exec(l),u!==null);)m=n.lastIndex,n===Bt?u[1]==="!--"?n=no:u[1]!==void 0?n=ao:u[2]!==void 0?(Ro.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=mt):u[3]!==void 0&&(n=mt):n===mt?u[0]===">"?(n=i??Bt,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?mt:u[3]==='"'?co:lo):n===co||n===lo?n=mt:n===no||n===ao?n=Bt:(n=mt,i=void 0);const f=n===mt&&e[a+1].startsWith("/>")?" ":"";s+=n===Bt?l+br:d>=0?(r.push(c),l.slice(0,d)+zo+l.slice(d)+lt+f):l+lt+(d===-2?a:f)}return[Lo(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class jt{constructor({strings:t,_$litType$:o},r){let i;this.parts=[];let s=0,n=0;const a=t.length-1,l=this.parts,[c,u]=wr(t,o);if(this.el=jt.createElement(c,r),yt.currentNode=this.el.content,o===2||o===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=yt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(zo)){const m=u[n++],f=i.getAttribute(d).split(lt),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:g[2],strings:f,ctor:g[1]==="."?xr:g[1]==="?"?$r:g[1]==="@"?kr:ge}),i.removeAttribute(d)}else d.startsWith(lt)&&(l.push({type:6,index:s}),i.removeAttribute(d));if(Ro.test(i.tagName)){const d=i.textContent.split(lt),m=d.length-1;if(m>0){i.textContent=re?re.emptyScript:"";for(let f=0;f<m;f++)i.append(d[f],Vt()),yt.nextNode(),l.push({type:2,index:++s});i.append(d[m],Vt())}}}else if(i.nodeType===8)if(i.data===Oo)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(lt,d+1))!==-1;)l.push({type:7,index:s}),d+=lt.length-1}s++}}static createElement(t,o){const r=wt.createElement("template");return r.innerHTML=t,r}}function St(e,t,o=e,r){if(t===I)return t;let i=r!==void 0?o._$Co?.[r]:o._$Cl;const s=Ht(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,o,r)),r!==void 0?(o._$Co??=[])[r]=i:o._$Cl=i),i!==void 0&&(t=St(e,i._$AS(e,t.values),i,r)),t}class _r{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,i=(t?.creationScope??wt).importNode(o,!0);yt.currentNode=i;let s=yt.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new qt(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Ar(s,this,t)),this._$AV.push(c),l=r[++a]}n!==l?.index&&(s=yt.nextNode(),n++)}return yt.currentNode=wt,i}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}}class qt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,r,i){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=St(this,t,o),Ht(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(wt.createTextNode(t)),this._$AH=t}$(t){const{values:o,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=jt.createElement(Lo(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(o);else{const s=new _r(i,this),n=s.u(this.options);s.p(o),this.T(n),this._$AH=s}}_$AC(t){let o=ho.get(t.strings);return o===void 0&&ho.set(t.strings,o=new jt(t)),o}k(t){Ve(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,i=0;for(const s of t)i===o.length?o.push(r=new qt(this.O(Vt()),this.O(Vt()),this,this.options)):r=o[i],r._$AI(s),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,i,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=o,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(t,o=this,r,i){const s=this.strings;let n=!1;if(s===void 0)t=St(this,t,o,0),n=!Ht(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=St(this,a[r+l],o,l),c===I&&(c=this._$AH[l]),n||=!Ht(c)||c!==this._$AH[l],c===E?t=E:t!==E&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xr extends ge{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class $r extends ge{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class kr extends ge{constructor(t,o,r,i,s){super(t,o,r,i,s),this.type=5}_$AI(t,o=this){if((t=St(this,t,o,0)??E)===I)return;const r=this._$AH,i=t===E&&r!==E||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==E&&(r===E||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ar{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){St(this,t)}}const Cr=Ie.litHtmlPolyfillSupport;Cr?.(jt,qt),(Ie.litHtmlVersions??=[]).push("3.2.1");const Er=(e,t,o)=>{const r=o?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=o?.renderBefore??null;r._$litPart$=i=new qt(t.insertBefore(Vt(),s),s,void 0,o??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dt=class extends kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Er(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};dt._$litElement$=!0,dt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:dt});const Sr=globalThis.litElementPolyfillSupport;Sr?.({LitElement:dt});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr={attribute:!0,type:String,converter:Et,reflect:!1,hasChanged:Ne},Tr=(e=Pr,t,o)=>{const{kind:r,metadata:i}=o;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(o.name,e),r==="accessor"){const{name:n}=o;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(r==="setter"){const{name:n}=o;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+r)};function p(e){return(t,o)=>typeof o=="object"?Tr(e,t,o):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e,t){return(o,r,i)=>{const s=n=>n.renderRoot?.querySelector(e)??null;return zr(o,r,{get(){return s(this)}})}}const Or="modulepreload",Rr=function(e){return"/"+e},uo={},It=function(t,o,r){let i=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=n?.nonce||n?.getAttribute("nonce");i=Promise.allSettled(o.map(l=>{if(l=Rr(l),l in uo)return;uo[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Or,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return i.then(n=>{for(const a of n||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},je=Symbol.for("app-tools::log::1.x");globalThis[je]={setDebug:Lr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Lr(e){globalThis[je].debug=!!e}function Br(e,t){globalThis[je].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function Mr(e){return(t,o)=>{Br(`${e}: ${t}`,o)}}const at=Mr("router");class Ur extends Event{constructor(t){super("route-changed"),this.context=t}}class Dr extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(o=>({...o,urlPattern:new URLPattern({pathname:o.path,baseURL:window.location.href,search:"*",hash:"*"})})),at("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return at(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const o of this.routes){const r=o.urlPattern.exec(t);if(r){const{title:i}=o,s=Object.fromEntries(new URLSearchParams(t.search)),n=r?.pathname?.groups??{};return this.context={url:t,title:typeof i=="function"?i({params:n,query:s,url:t}):i,params:n,query:s},o}}return at(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Ur(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const o=t.composedPath().find(s=>s.tagName==="A");if(!o||!o.href)return;const r=new URL(o.href);if(this.url.href===r.href||r.host!==window.location.host||o.hasAttribute("download")||o.href.includes("mailto:"))return;const i=o.getAttribute("target");i&&i!==""&&i!=="_self"||(t.preventDefault(),this.navigate(r))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,o={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let r=this._matchRoute(t)||this._matchRoute(this.fallback);at(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let i=this._collectPlugins(r);for(const s of i)try{const n=await s?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),r=this._matchRoute(t)||this._matchRoute(this.fallback),i=this._collectPlugins(r),at("Redirecting",{context:this.context,route:this.route})))}catch(n){throw at(`Plugin "${s.name}" error on shouldNavigate hook`,n),n}if(this.route=r,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const s of i)try{await s?.beforeNavigation?.(this.context)}catch(n){throw at(`Plugin "${s.name}" error on beforeNavigation hook`,n),n}o?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):o.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const s of i)try{await s?.afterNavigation?.(this.context)}catch(n){throw at(`Plugin "${s.name}" error on afterNavigation hook`,n),n}}}function Ae(e){return{name:"lazy",beforeNavigation:()=>{e()}}}function Fr(e="/offline"){return{name:"offline",shouldNavigate:()=>({condition:()=>navigator.onLine,redirect:e})}}const Nr=Fr(),po="app-tools",fo="1.x",mo="router-focus",Ir="position:absolute;top:0;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);margin:-1px;",Vr={name:"resetFocus",afterNavigation:({title:e})=>{let t=document.querySelector(`div[${po}][version="${fo}"]#${mo}`);t||(t=document.createElement("div"),t.setAttribute(po,""),t.setAttribute("version",fo),t.id=mo,t.setAttribute("tabindex","-1"),t.setAttribute("aria-live","polite"),t.setAttribute("style",Ir),t.addEventListener("blur",()=>{t?.style.setProperty("display","none")}),document.body.insertBefore(t,document.body.firstChild)),t.textContent=e,t.style.removeProperty("display"),t.focus()}},Hr={name:"scrollToTop",beforeNavigation:()=>{window.scrollTo(0,0)}},jr={name:"checkServiceWorkerUpdate",beforeNavigation:()=>{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}};globalThis.URLPattern||await It(()=>import("./index-DkuV2QLQ.js"),[]);const Bo="/";console.log(Bo);const go=new Dr({plugins:[Nr,jr,Hr,Vr],fallback:"/",routes:[{path:ct(),title:"Home",render:()=>A`<app-home></app-home>`},{path:ct("about"),title:"About",plugins:[Ae(()=>It(()=>import("./app-about-mbdtWU-z.js"),[])),()=>{console.error("Failed to load app-about")}],render:()=>A`<app-about></app-about>`},{path:ct("counter"),title:"Counter",plugins:[Ae(()=>It(()=>import("./app-counter-DryWPbxc.js"),__vite__mapDeps([0,1]))),()=>{console.error("Failed to load app-counter")}],render:()=>A`<app-counter></app-counter>`},{path:ct("game-tracker"),title:"Game Tracker",plugins:[Ae(()=>It(()=>import("./app-game-tracker-B1Pa67qz.js"),__vite__mapDeps([2,1]))),()=>{console.error("Failed to load app-standings")}],render:()=>A`<app-standings></app-standings>`}]});function ct(e){var t=Bo;return e&&(t=t+e),t}var Wr=R`
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
`,Oe="";function bo(e){Oe=e}function qr(e=""){if(!Oe){const t=[...document.getElementsByTagName("script")],o=t.find(r=>r.hasAttribute("data-shoelace"));if(o)bo(o.getAttribute("data-shoelace"));else{const r=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let i="";r&&(i=r.getAttribute("src")),bo(i.split("/").slice(0,-1).join("/"))}}return Oe.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Yr={name:"default",resolver:e=>qr(`assets/icons/${e}.svg`)},Kr=Yr,vo={caret:`
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
  `},Xr={name:"system",resolver:e=>e in vo?`data:image/svg+xml,${encodeURIComponent(vo[e])}`:""},Gr=Xr,ie=[Kr,Gr],se=[];function Zr(e){se.push(e)}function Jr(e){se=se.filter(t=>t!==e)}function yo(e){return ie.find(t=>t.name===e)}function Ss(e,t){Qr(e),ie.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),se.forEach(o=>{o.library===e&&o.setIcon()})}function Qr(e){ie=ie.filter(t=>t.name!==e)}var ti=R`
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
`,Mo=Object.defineProperty,ei=Object.defineProperties,oi=Object.getOwnPropertyDescriptor,ri=Object.getOwnPropertyDescriptors,wo=Object.getOwnPropertySymbols,ii=Object.prototype.hasOwnProperty,si=Object.prototype.propertyIsEnumerable,Ce=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),We=e=>{throw TypeError(e)},_o=(e,t,o)=>t in e?Mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ft=(e,t)=>{for(var o in t||(t={}))ii.call(t,o)&&_o(e,o,t[o]);if(wo)for(var o of wo(t))si.call(t,o)&&_o(e,o,t[o]);return e},Yt=(e,t)=>ei(e,ri(t)),h=(e,t,o,r)=>{for(var i=r>1?void 0:r?oi(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&Mo(t,o,i),i},Uo=(e,t,o)=>t.has(e)||We("Cannot "+o),ni=(e,t,o)=>(Uo(e,t,"read from private field"),t.get(e)),ai=(e,t,o)=>t.has(e)?We("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),li=(e,t,o,r)=>(Uo(e,t,"write to private field"),t.set(e,o),o),ci=function(e,t){this[0]=e,this[1]=t},Ps=e=>{var t=e[Ce("asyncIterator")],o=!1,r,i={};return t==null?(t=e[Ce("iterator")](),r=s=>i[s]=n=>t[s](n)):(t=t.call(e),r=s=>i[s]=n=>{if(o){if(o=!1,s==="throw")throw n;return n}return o=!0,{done:!1,value:new ci(new Promise(a=>{var l=t[s](n);l instanceof Object||We("Object expected"),a(l)}),1)}}),i[Ce("iterator")]=()=>i,r("next"),"throw"in t?r("throw"):i.throw=s=>{throw s},"return"in t&&r("return"),i};function J(e,t){const o=ft({waitUntilFirstUpdate:!1},t);return(r,i)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const u=a.get(c),d=this[c];u!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,d)}}),s.call(this,a)}}}var ot=R`
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
`,te,M=class extends dt{constructor(){super(),ai(this,te,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,ft({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch{customElements.define(e,class extends t{},o)}return}let i=" (unknown version)",s=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(s=" v"+r.version),!(i&&s&&i===s)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${s} has already been registered.`)}attributeChangedCallback(e,t,o){ni(this,te)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),li(this,te,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}};te=new WeakMap;M.version="2.20.0";M.dependencies={};h([p()],M.prototype,"dir",2);h([p()],M.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=(e,t)=>e?._$litType$!==void 0,hi=e=>e.strings===void 0,ui={},pi=(e,t=ui)=>e._$AH=t;var Mt=Symbol(),Gt=Symbol(),Ee,Se=new Map,j=class extends M{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let r;if(t?.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Mt:Gt}catch{return Gt}try{const i=document.createElement("div");i.innerHTML=await r.text();const s=i.firstElementChild;if(((o=s?.tagName)==null?void 0:o.toLowerCase())!=="svg")return Mt;Ee||(Ee=new DOMParser);const a=Ee.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Mt}catch{return Mt}}connectedCallback(){super.connectedCallback(),Zr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Jr(this)}getIconSource(){const e=yo(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),r=o?yo(this.library):void 0;if(!t){this.svg=null;return}let i=Se.get(t);if(i||(i=this.resolveIcon(t,r),Se.set(t,i)),!this.initialRender)return;const s=await i;if(s===Gt&&Se.delete(t),t===this.getIconSource().url){if(di(s)){if(this.svg=s,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(s){case Gt:case Mt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[ot,ti];h([zt()],j.prototype,"svg",2);h([p({reflect:!0})],j.prototype,"name",2);h([p()],j.prototype,"src",2);h([p()],j.prototype,"label",2);h([p({reflect:!0})],j.prototype,"library",2);h([J("label")],j.prototype,"handleLabelChange",1);h([J(["name","src","library"])],j.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Do=e=>(...t)=>({_$litDirective$:e,values:t});let Fo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=Do(class extends Fo{constructor(e){if(super(e),e.type!==gt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return I}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No=Symbol.for(""),fi=e=>{if(e?.r===No)return e?._$litStatic$},ne=(e,...t)=>({_$litStatic$:t.reduce((o,r,i)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1],e[0]),r:No}),xo=new Map,mi=e=>(t,...o)=>{const r=o.length;let i,s;const n=[],a=[];let l,c=0,u=!1;for(;c<r;){for(l=t[c];c<r&&(s=o[c],(i=fi(s))!==void 0);)l+=i+t[++c],u=!0;c!==r&&a.push(s),n.push(l),c++}if(c===r&&n.push(t[r]),u){const d=n.join("$$lit$$");(t=xo.get(d))===void 0&&(n.raw=n,xo.set(d,t=n)),o=a}return e(t,...o)},ee=mi(A);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=e=>e??E;var U=class extends M{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ne`a`:ne`button`;return ee`
      <${t}
        part="base"
        class=${X({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};U.styles=[ot,Wr];U.dependencies={"sl-icon":j};h([Z(".icon-button")],U.prototype,"button",2);h([zt()],U.prototype,"hasFocus",2);h([p()],U.prototype,"name",2);h([p()],U.prototype,"library",2);h([p()],U.prototype,"src",2);h([p()],U.prototype,"href",2);h([p()],U.prototype,"target",2);h([p()],U.prototype,"download",2);h([p()],U.prototype,"label",2);h([p({type:Boolean,reflect:!0})],U.prototype,"disabled",2);var Io=new Map,gi=new WeakMap;function bi(e){return e??{keyframes:[],options:{duration:0}}}function $o(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function be(e,t){Io.set(e,bi(t))}function ae(e,t,o){const r=gi.get(e);if(r?.[t])return $o(r[t],o.dir);const i=Io.get(t);return i?$o(i,o.dir):{keyframes:[],options:{duration:0}}}function le(e,t){return new Promise(o=>{function r(i){i.target===e&&(e.removeEventListener(t,r),o())}e.addEventListener(t,r)})}function ce(e,t,o){return new Promise(r=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Yt(ft({},o),{duration:vi()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function ko(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function vi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function de(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}function zs(e,t){return e.map(o=>Yt(ft({},o),{height:o.height==="auto"?`${t}px`:o.height}))}var ve=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Os(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(o+=r.textContent)}),o}const Re=new Set,At=new Map;let vt,qe="ltr",Ye="en";const Vo=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Vo){const e=new MutationObserver(jo);qe=document.documentElement.dir||"ltr",Ye=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ho(...e){e.map(t=>{const o=t.$code.toLowerCase();At.has(o)?At.set(o,Object.assign(Object.assign({},At.get(o)),t)):At.set(o,t),vt||(vt=t)}),jo()}function jo(){Vo&&(qe=document.documentElement.dir||"ltr",Ye=document.documentElement.lang||navigator.language),[...Re.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let yi=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Re.add(this.host)}hostDisconnected(){Re.delete(this.host)}dir(){return`${this.host.dir||qe}`.toLowerCase()}lang(){return`${this.host.lang||Ye}`.toLowerCase()}getTranslationData(t){var o,r;const i=new Intl.Locale(t.replace(/_/g,"-")),s=i?.language.toLowerCase(),n=(r=(o=i?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",a=At.get(`${s}-${n}`),l=At.get(s);return{locale:i,language:s,region:n,primary:a,secondary:l}}exists(t,o){var r;const{primary:i,secondary:s}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(i&&i[t]||s&&s[t]||o.includeFallback&&vt&&vt[t])}term(t,...o){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let s;if(r&&r[t])s=r[t];else if(i&&i[t])s=i[t];else if(vt&&vt[t])s=vt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...o):s}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,o)}};var Wo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ho(Wo);var wi=Wo,Kt=class extends yi{};Ho(wi);var _i=R`
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
`,D=class bt extends M{constructor(){super(...arguments),this.hasSlotController=new ve(this,"icon","suffix"),this.localize=new Kt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,o="100%",r="0";this.countdownAnimation=t.animate([{width:o},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await de(this.base),this.base.hidden=!1;const{keyframes:t,options:o}=ae(this,"alert.show",{dir:this.localize.dir()});await ce(this.base,t,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await de(this.base);const{keyframes:t,options:o}=ae(this,"alert.hide",{dir:this.localize.dir()});await ce(this.base,t,o),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),bt.toastStack.parentElement===null&&document.body.append(bt.toastStack),bt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{bt.toastStack.removeChild(this),t(),bt.toastStack.querySelector("sl-alert")===null&&bt.toastStack.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${X({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?A`
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

        ${this.countdown?A`
              <div
                class=${X({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};D.styles=[ot,_i];D.dependencies={"sl-icon-button":U};h([Z('[part~="base"]')],D.prototype,"base",2);h([Z(".alert__countdown-elapsed")],D.prototype,"countdownElement",2);h([p({type:Boolean,reflect:!0})],D.prototype,"open",2);h([p({type:Boolean,reflect:!0})],D.prototype,"closable",2);h([p({reflect:!0})],D.prototype,"variant",2);h([p({type:Number})],D.prototype,"duration",2);h([p({type:String,reflect:!0})],D.prototype,"countdown",2);h([zt()],D.prototype,"remainingTime",2);h([J("open",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",1);h([J("duration")],D.prototype,"handleDurationChange",1);var xi=D;be("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});be("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});xi.define("sl-alert");var $i=R`
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
`,qo=class extends M{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer","header","image")}render(){return A`
      <div
        part="base"
        class=${X({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};qo.styles=[ot,$i];qo.define("sl-card");var ki=R`
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
`,Yo=class extends M{constructor(){super(...arguments),this.localize=new Kt(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Yo.styles=[ot,ki];var Ut=new WeakMap,Dt=new WeakMap,Ft=new WeakMap,Pe=new WeakSet,Zt=new WeakMap,Ko=class{constructor(e,t){this.handleFormData=o=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof i=="string"&&i.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{o.formData.append(i,a.toString())}):o.formData.append(i,s.toString()))},this.handleFormSubmit=o=>{var r;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Ut.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Zt.set(this.host,[])},this.handleInteraction=o=>{const r=Zt.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ft({form:o=>{const r=o.form;if(r){const s=o.getRootNode().querySelector(`#${r}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Zt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Zt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ut.has(this.form)?Ut.get(this.form).add(this.host):Ut.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Dt.has(this.form)||(Dt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ft.has(this.form)||(Ft.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ut.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Dt.has(this.form)&&(this.form.reportValidity=Dt.get(this.form),Dt.delete(this.form)),Ft.has(this.form)&&(this.form.checkValidity=Ft.get(this.form),Ft.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Pe.add(e):Pe.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&o.setAttribute(r,t.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!Pe.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ke=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ls=Object.freeze(Yt(ft({},Ke),{valid:!1,valueMissing:!0})),Bs=Object.freeze(Yt(ft({},Ke),{valid:!1,customError:!0})),Ai=R`
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
`,w=class extends M{constructor(){super(...arguments),this.formControlController=new Ko(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ve(this,"[default]","prefix","suffix"),this.localize=new Kt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ke}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ne`a`:ne`button`;return ee`
      <${t}
        part="base"
        class=${X({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?ee` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ee`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};w.styles=[ot,Ai];w.dependencies={"sl-icon":j,"sl-spinner":Yo};h([Z(".button")],w.prototype,"button",2);h([zt()],w.prototype,"hasFocus",2);h([zt()],w.prototype,"invalid",2);h([p()],w.prototype,"title",2);h([p({reflect:!0})],w.prototype,"variant",2);h([p({reflect:!0})],w.prototype,"size",2);h([p({type:Boolean,reflect:!0})],w.prototype,"caret",2);h([p({type:Boolean,reflect:!0})],w.prototype,"disabled",2);h([p({type:Boolean,reflect:!0})],w.prototype,"loading",2);h([p({type:Boolean,reflect:!0})],w.prototype,"outline",2);h([p({type:Boolean,reflect:!0})],w.prototype,"pill",2);h([p({type:Boolean,reflect:!0})],w.prototype,"circle",2);h([p()],w.prototype,"type",2);h([p()],w.prototype,"name",2);h([p()],w.prototype,"value",2);h([p()],w.prototype,"href",2);h([p()],w.prototype,"target",2);h([p()],w.prototype,"rel",2);h([p()],w.prototype,"download",2);h([p()],w.prototype,"form",2);h([p({attribute:"formaction"})],w.prototype,"formAction",2);h([p({attribute:"formenctype"})],w.prototype,"formEnctype",2);h([p({attribute:"formmethod"})],w.prototype,"formMethod",2);h([p({attribute:"formnovalidate",type:Boolean})],w.prototype,"formNoValidate",2);h([p({attribute:"formtarget"})],w.prototype,"formTarget",2);h([J("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);w.define("sl-button");var Ci=R`
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
`,Ei=R`
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
`;const ht=Math.min,L=Math.max,he=Math.round,Jt=Math.floor,K=e=>({x:e,y:e}),Si={left:"right",right:"left",bottom:"top",top:"bottom"},Pi={start:"end",end:"start"};function Le(e,t,o){return L(e,ht(t,o))}function Ot(e,t){return typeof e=="function"?e(t):e}function ut(e){return e.split("-")[0]}function Rt(e){return e.split("-")[1]}function Xo(e){return e==="x"?"y":"x"}function Xe(e){return e==="y"?"height":"width"}function _t(e){return["top","bottom"].includes(ut(e))?"y":"x"}function Ge(e){return Xo(_t(e))}function Ti(e,t,o){o===void 0&&(o=!1);const r=Rt(e),i=Ge(e),s=Xe(i);let n=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(n=ue(n)),[n,ue(n)]}function zi(e){const t=ue(e);return[Be(e),t,Be(t)]}function Be(e){return e.replace(/start|end/g,t=>Pi[t])}function Oi(e,t,o){const r=["left","right"],i=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:r:t?r:i;case"left":case"right":return t?s:n;default:return[]}}function Ri(e,t,o,r){const i=Rt(e);let s=Oi(ut(e),o==="start",r);return i&&(s=s.map(n=>n+"-"+i),t&&(s=s.concat(s.map(Be)))),s}function ue(e){return e.replace(/left|right|bottom|top/g,t=>Si[t])}function Li(e){return{top:0,right:0,bottom:0,left:0,...e}}function Go(e){return typeof e!="number"?Li(e):{top:e,right:e,bottom:e,left:e}}function pe(e){const{x:t,y:o,width:r,height:i}=e;return{width:r,height:i,top:o,left:t,right:t+r,bottom:o+i,x:t,y:o}}function Ao(e,t,o){let{reference:r,floating:i}=e;const s=_t(t),n=Ge(t),a=Xe(n),l=ut(t),c=s==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,m=r[a]/2-i[a]/2;let f;switch(l){case"top":f={x:u,y:r.y-i.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-i.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Rt(t)){case"start":f[n]-=m*(o&&c?-1:1);break;case"end":f[n]+=m*(o&&c?-1:1);break}return f}const Bi=async(e,t,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:n}=o,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ao(c,r,l),m=r,f={},g=0;for(let b=0;b<a.length;b++){const{name:y,fn:v}=a[b],{x:_,y:x,data:S,reset:k}=await v({x:u,y:d,initialPlacement:r,placement:m,strategy:i,middlewareData:f,rects:c,platform:n,elements:{reference:e,floating:t}});u=_??u,d=x??d,f={...f,[y]:{...f[y],...S}},k&&g<=50&&(g++,typeof k=="object"&&(k.placement&&(m=k.placement),k.rects&&(c=k.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):k.rects),{x:u,y:d}=Ao(c,m,l)),b=-1)}return{x:u,y:d,placement:m,strategy:i,middlewareData:f}};async function Ze(e,t){var o;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:n,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=Ot(t,e),g=Go(f),y=a[m?d==="floating"?"reference":"floating":d],v=pe(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),_=d==="floating"?{x:r,y:i,width:n.floating.width,height:n.floating.height}:n.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},k=pe(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:x,strategy:l}):_);return{top:(v.top-k.top+g.top)/S.y,bottom:(k.bottom-v.bottom+g.bottom)/S.y,left:(v.left-k.left+g.left)/S.x,right:(k.right-v.right+g.right)/S.x}}const Mi=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:r,placement:i,rects:s,platform:n,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Ot(e,t)||{};if(c==null)return{};const d=Go(u),m={x:o,y:r},f=Ge(i),g=Xe(f),b=await n.getDimensions(c),y=f==="y",v=y?"top":"left",_=y?"bottom":"right",x=y?"clientHeight":"clientWidth",S=s.reference[g]+s.reference[f]-m[f]-s.floating[g],k=m[f]-s.reference[f],F=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let T=F?F[x]:0;(!T||!await(n.isElement==null?void 0:n.isElement(F)))&&(T=a.floating[x]||s.floating[g]);const tt=S/2-k/2,W=T/2-b[g]/2-1,N=ht(d[v],W),rt=ht(d[_],W),q=N,it=T-b[g]-rt,O=T/2-b[g]/2+tt,$t=Le(q,O,it),et=!l.arrow&&Rt(i)!=null&&O!==$t&&s.reference[g]/2-(O<q?N:rt)-b[g]/2<0,Y=et?O<q?O-q:O-it:0;return{[f]:m[f]+Y,data:{[f]:$t,centerOffset:O-$t-Y,...et&&{alignmentOffset:Y}},reset:et}}}),Ui=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,r;const{placement:i,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...y}=Ot(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const v=ut(i),_=_t(a),x=ut(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=m||(x||!b?[ue(a)]:zi(a)),F=g!=="none";!m&&F&&k.push(...Ri(a,b,g,S));const T=[a,...k],tt=await Ze(t,y),W=[];let N=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&W.push(tt[v]),d){const O=Ti(i,n,S);W.push(tt[O[0]],tt[O[1]])}if(N=[...N,{placement:i,overflows:W}],!W.every(O=>O<=0)){var rt,q;const O=(((rt=s.flip)==null?void 0:rt.index)||0)+1,$t=T[O];if($t)return{data:{index:O,overflows:N},reset:{placement:$t}};let et=(q=N.filter(Y=>Y.overflows[0]<=0).sort((Y,st)=>Y.overflows[1]-st.overflows[1])[0])==null?void 0:q.placement;if(!et)switch(f){case"bestFit":{var it;const Y=(it=N.filter(st=>{if(F){const nt=_t(st.placement);return nt===_||nt==="y"}return!0}).map(st=>[st.placement,st.overflows.filter(nt=>nt>0).reduce((nt,nr)=>nt+nr,0)]).sort((st,nt)=>st[1]-nt[1])[0])==null?void 0:it[0];Y&&(et=Y);break}case"initialPlacement":et=a;break}if(i!==et)return{reset:{placement:et}}}return{}}}};async function Di(e,t){const{placement:o,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),n=ut(o),a=Rt(o),l=_t(o)==="y",c=["left","top"].includes(n)?-1:1,u=s&&l?-1:1,d=Ot(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(f=a==="end"?g*-1:g),l?{x:f*u,y:m*c}:{x:m*c,y:f*u}}const Fi=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,r;const{x:i,y:s,placement:n,middlewareData:a}=t,l=await Di(t,e);return n===((o=a.offset)==null?void 0:o.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:n}}}}},Ni=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:r,placement:i}=t,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:y=>{let{x:v,y:_}=y;return{x:v,y:_}}},...l}=Ot(e,t),c={x:o,y:r},u=await Ze(t,l),d=_t(ut(i)),m=Xo(d);let f=c[m],g=c[d];if(s){const y=m==="y"?"top":"left",v=m==="y"?"bottom":"right",_=f+u[y],x=f-u[v];f=Le(_,f,x)}if(n){const y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",_=g+u[y],x=g-u[v];g=Le(_,g,x)}const b=a.fn({...t,[m]:f,[d]:g});return{...b,data:{x:b.x-o,y:b.y-r,enabled:{[m]:s,[d]:n}}}}}},Ii=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,r;const{placement:i,rects:s,platform:n,elements:a}=t,{apply:l=()=>{},...c}=Ot(e,t),u=await Ze(t,c),d=ut(i),m=Rt(i),f=_t(i)==="y",{width:g,height:b}=s.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=m===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=m==="end"?"top":"bottom");const _=b-u.top-u.bottom,x=g-u.left-u.right,S=ht(b-u[y],_),k=ht(g-u[v],x),F=!t.middlewareData.shift;let T=S,tt=k;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(tt=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(T=_),F&&!m){const N=L(u.left,0),rt=L(u.right,0),q=L(u.top,0),it=L(u.bottom,0);f?tt=g-2*(N!==0||rt!==0?N+rt:L(u.left,u.right)):T=b-2*(q!==0||it!==0?q+it:L(u.top,u.bottom))}await l({...t,availableWidth:tt,availableHeight:T});const W=await n.getDimensions(a.floating);return g!==W.width||b!==W.height?{reset:{rects:!0}}:{}}}};function ye(){return typeof window<"u"}function Lt(e){return Zo(e)?(e.nodeName||"").toLowerCase():"#document"}function B(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Q(e){var t;return(t=(Zo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Zo(e){return ye()?e instanceof Node||e instanceof B(e).Node:!1}function V(e){return ye()?e instanceof Element||e instanceof B(e).Element:!1}function G(e){return ye()?e instanceof HTMLElement||e instanceof B(e).HTMLElement:!1}function Co(e){return!ye()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof B(e).ShadowRoot}function Xt(e){const{overflow:t,overflowX:o,overflowY:r,display:i}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(i)}function Vi(e){return["table","td","th"].includes(Lt(e))}function we(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function _e(e){const t=Je(),o=V(e)?H(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>o[r]?o[r]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function Hi(e){let t=pt(e);for(;G(t)&&!Pt(t);){if(_e(t))return t;if(we(t))return null;t=pt(t)}return null}function Je(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pt(e){return["html","body","#document"].includes(Lt(e))}function H(e){return B(e).getComputedStyle(e)}function xe(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function pt(e){if(Lt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Co(e)&&e.host||Q(e);return Co(t)?t.host:t}function Jo(e){const t=pt(e);return Pt(t)?e.ownerDocument?e.ownerDocument.body:e.body:G(t)&&Xt(t)?t:Jo(t)}function Wt(e,t,o){var r;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=Jo(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),n=B(i);if(s){const a=Me(n);return t.concat(n,n.visualViewport||[],Xt(i)?i:[],a&&o?Wt(a):[])}return t.concat(i,Wt(i,[],o))}function Me(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Qo(e){const t=H(e);let o=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=G(e),s=i?e.offsetWidth:o,n=i?e.offsetHeight:r,a=he(o)!==s||he(r)!==n;return a&&(o=s,r=n),{width:o,height:r,$:a}}function Qe(e){return V(e)?e:e.contextElement}function Ct(e){const t=Qe(e);if(!G(t))return K(1);const o=t.getBoundingClientRect(),{width:r,height:i,$:s}=Qo(t);let n=(s?he(o.width):o.width)/r,a=(s?he(o.height):o.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const ji=K(0);function tr(e){const t=B(e);return!Je()||!t.visualViewport?ji:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wi(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==B(e)?!1:t}function xt(e,t,o,r){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),s=Qe(e);let n=K(1);t&&(r?V(r)&&(n=Ct(r)):n=Ct(e));const a=Wi(s,o,r)?tr(s):K(0);let l=(i.left+a.x)/n.x,c=(i.top+a.y)/n.y,u=i.width/n.x,d=i.height/n.y;if(s){const m=B(s),f=r&&V(r)?B(r):r;let g=m,b=Me(g);for(;b&&r&&f!==g;){const y=Ct(b),v=b.getBoundingClientRect(),_=H(b),x=v.left+(b.clientLeft+parseFloat(_.paddingLeft))*y.x,S=v.top+(b.clientTop+parseFloat(_.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=x,c+=S,g=B(b),b=Me(g)}}return pe({width:u,height:d,x:l,y:c})}function to(e,t){const o=xe(e).scrollLeft;return t?t.left+o:xt(Q(e)).left+o}function er(e,t,o){o===void 0&&(o=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(o?0:to(e,r)),s=r.top+t.scrollTop;return{x:i,y:s}}function qi(e){let{elements:t,rect:o,offsetParent:r,strategy:i}=e;const s=i==="fixed",n=Q(r),a=t?we(t.floating):!1;if(r===n||a&&s)return o;let l={scrollLeft:0,scrollTop:0},c=K(1);const u=K(0),d=G(r);if((d||!d&&!s)&&((Lt(r)!=="body"||Xt(n))&&(l=xe(r)),G(r))){const f=xt(r);c=Ct(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}const m=n&&!d&&!s?er(n,l,!0):K(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+u.x+m.x,y:o.y*c.y-l.scrollTop*c.y+u.y+m.y}}function Yi(e){return Array.from(e.getClientRects())}function Ki(e){const t=Q(e),o=xe(e),r=e.ownerDocument.body,i=L(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=L(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let n=-o.scrollLeft+to(e);const a=-o.scrollTop;return H(r).direction==="rtl"&&(n+=L(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:n,y:a}}function Xi(e,t){const o=B(e),r=Q(e),i=o.visualViewport;let s=r.clientWidth,n=r.clientHeight,a=0,l=0;if(i){s=i.width,n=i.height;const c=Je();(!c||c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:n,x:a,y:l}}function Gi(e,t){const o=xt(e,!0,t==="fixed"),r=o.top+e.clientTop,i=o.left+e.clientLeft,s=G(e)?Ct(e):K(1),n=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,c=r*s.y;return{width:n,height:a,x:l,y:c}}function Eo(e,t,o){let r;if(t==="viewport")r=Xi(e,o);else if(t==="document")r=Ki(Q(e));else if(V(t))r=Gi(t,o);else{const i=tr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return pe(r)}function or(e,t){const o=pt(e);return o===t||!V(o)||Pt(o)?!1:H(o).position==="fixed"||or(o,t)}function Zi(e,t){const o=t.get(e);if(o)return o;let r=Wt(e,[],!1).filter(a=>V(a)&&Lt(a)!=="body"),i=null;const s=H(e).position==="fixed";let n=s?pt(e):e;for(;V(n)&&!Pt(n);){const a=H(n),l=_e(n);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Xt(n)&&!l&&or(e,n))?r=r.filter(u=>u!==n):i=a,n=pt(n)}return t.set(e,r),r}function Ji(e){let{element:t,boundary:o,rootBoundary:r,strategy:i}=e;const n=[...o==="clippingAncestors"?we(t)?[]:Zi(t,this._c):[].concat(o),r],a=n[0],l=n.reduce((c,u)=>{const d=Eo(t,u,i);return c.top=L(d.top,c.top),c.right=ht(d.right,c.right),c.bottom=ht(d.bottom,c.bottom),c.left=L(d.left,c.left),c},Eo(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Qi(e){const{width:t,height:o}=Qo(e);return{width:t,height:o}}function ts(e,t,o){const r=G(t),i=Q(t),s=o==="fixed",n=xt(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=K(0);if(r||!r&&!s)if((Lt(t)!=="body"||Xt(i))&&(a=xe(t)),r){const m=xt(t,!0,s,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else i&&(l.x=to(i));const c=i&&!r&&!s?er(i,a):K(0),u=n.left+a.scrollLeft-l.x-c.x,d=n.top+a.scrollTop-l.y-c.y;return{x:u,y:d,width:n.width,height:n.height}}function Te(e){return H(e).position==="static"}function So(e,t){if(!G(e)||H(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return Q(e)===o&&(o=o.ownerDocument.body),o}function rr(e,t){const o=B(e);if(we(e))return o;if(!G(e)){let i=pt(e);for(;i&&!Pt(i);){if(V(i)&&!Te(i))return i;i=pt(i)}return o}let r=So(e,t);for(;r&&Vi(r)&&Te(r);)r=So(r,t);return r&&Pt(r)&&Te(r)&&!_e(r)?o:r||Hi(e)||o}const es=async function(e){const t=this.getOffsetParent||rr,o=this.getDimensions,r=await o(e.floating);return{reference:ts(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function os(e){return H(e).direction==="rtl"}const oe={convertOffsetParentRelativeRectToViewportRelativeRect:qi,getDocumentElement:Q,getClippingRect:Ji,getOffsetParent:rr,getElementRects:es,getClientRects:Yi,getDimensions:Qi,getScale:Ct,isElement:V,isRTL:os};function ir(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function rs(e,t){let o=null,r;const i=Q(e);function s(){var a;clearTimeout(r),(a=o)==null||a.disconnect(),o=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=e.getBoundingClientRect(),{left:u,top:d,width:m,height:f}=c;if(a||t(),!m||!f)return;const g=Jt(d),b=Jt(i.clientWidth-(u+m)),y=Jt(i.clientHeight-(d+f)),v=Jt(u),x={rootMargin:-g+"px "+-b+"px "+-y+"px "+-v+"px",threshold:L(0,ht(1,l))||1};let S=!0;function k(F){const T=F[0].intersectionRatio;if(T!==l){if(!S)return n();T?n(!1,T):r=setTimeout(()=>{n(!1,1e-7)},1e3)}T===1&&!ir(c,e.getBoundingClientRect())&&n(),S=!1}try{o=new IntersectionObserver(k,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(k,x)}o.observe(e)}return n(!0),s}function is(e,t,o,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Qe(e),u=i||s?[...c?Wt(c):[],...Wt(t)]:[];u.forEach(v=>{i&&v.addEventListener("scroll",o,{passive:!0}),s&&v.addEventListener("resize",o)});const d=c&&a?rs(c,o):null;let m=-1,f=null;n&&(f=new ResizeObserver(v=>{let[_]=v;_&&_.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),o()}),c&&!l&&f.observe(c),f.observe(t));let g,b=l?xt(e):null;l&&y();function y(){const v=xt(e);b&&!ir(b,v)&&o(),b=v,g=requestAnimationFrame(y)}return o(),()=>{var v;u.forEach(_=>{i&&_.removeEventListener("scroll",o),s&&_.removeEventListener("resize",o)}),d?.(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(g)}}const ss=Fi,ns=Ni,as=Ui,Po=Ii,ls=Mi,cs=(e,t,o)=>{const r=new Map,i={platform:oe,...o},s={...i.platform,_c:r};return Bi(e,t,{...i,platform:s})};function ds(e){return hs(e)}function ze(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function hs(e){for(let t=e;t;t=ze(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ze(e);t;t=ze(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||_e(o)||t.tagName==="BODY"))return t}return null}function us(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var $=class extends M{constructor(){super(...arguments),this.localize=new Kt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,s=0,n=0,a=0,l=0,c=0,u=0;o?e.top<t.top?(r=e.left,i=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):(r=t.left,i=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom):(r=t.right,i=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||us(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=is(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ss({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Po({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(as({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ns({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Po({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ls({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>oe.getOffsetParent(o,ds):oe.getOffsetParent;cs(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Yt(ft({},oe),{getOffsetParent:t})}).then(({x:o,y:r,middlewareData:i,placement:s})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let u="",d="",m="",f="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?g:"",f=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":g,f=n?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:m,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${X({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${X({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};$.styles=[ot,Ei];h([Z(".popup")],$.prototype,"popup",2);h([Z(".popup__arrow")],$.prototype,"arrowEl",2);h([p()],$.prototype,"anchor",2);h([p({type:Boolean,reflect:!0})],$.prototype,"active",2);h([p({reflect:!0})],$.prototype,"placement",2);h([p({reflect:!0})],$.prototype,"strategy",2);h([p({type:Number})],$.prototype,"distance",2);h([p({type:Number})],$.prototype,"skidding",2);h([p({type:Boolean})],$.prototype,"arrow",2);h([p({attribute:"arrow-placement"})],$.prototype,"arrowPlacement",2);h([p({attribute:"arrow-padding",type:Number})],$.prototype,"arrowPadding",2);h([p({type:Boolean})],$.prototype,"flip",2);h([p({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],$.prototype,"flipFallbackPlacements",2);h([p({attribute:"flip-fallback-strategy"})],$.prototype,"flipFallbackStrategy",2);h([p({type:Object})],$.prototype,"flipBoundary",2);h([p({attribute:"flip-padding",type:Number})],$.prototype,"flipPadding",2);h([p({type:Boolean})],$.prototype,"shift",2);h([p({type:Object})],$.prototype,"shiftBoundary",2);h([p({attribute:"shift-padding",type:Number})],$.prototype,"shiftPadding",2);h([p({attribute:"auto-size"})],$.prototype,"autoSize",2);h([p()],$.prototype,"sync",2);h([p({type:Object})],$.prototype,"autoSizeBoundary",2);h([p({attribute:"auto-size-padding",type:Number})],$.prototype,"autoSizePadding",2);h([p({attribute:"hover-bridge",type:Boolean})],$.prototype,"hoverBridge",2);var P=class extends M{constructor(){super(),this.localize=new Kt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=ko(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=ko(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await de(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=ae(this,"tooltip.show",{dir:this.localize.dir()});await ce(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await de(this.body);const{keyframes:o,options:r}=ae(this,"tooltip.hide",{dir:this.localize.dir()});await ce(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${X({tooltip:!0,"tooltip--open":this.open})}
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
    `}};P.styles=[ot,Ci];P.dependencies={"sl-popup":$};h([Z("slot:not([name])")],P.prototype,"defaultSlot",2);h([Z(".tooltip__body")],P.prototype,"body",2);h([Z("sl-popup")],P.prototype,"popup",2);h([p()],P.prototype,"content",2);h([p()],P.prototype,"placement",2);h([p({type:Boolean,reflect:!0})],P.prototype,"disabled",2);h([p({type:Number})],P.prototype,"distance",2);h([p({type:Boolean,reflect:!0})],P.prototype,"open",2);h([p({type:Number})],P.prototype,"skidding",2);h([p()],P.prototype,"trigger",2);h([p({type:Boolean})],P.prototype,"hoist",2);h([J("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);h([J(["content","distance","hoist","placement","skidding"])],P.prototype,"handleOptionsChange",1);h([J("disabled")],P.prototype,"handleDisabledChange",1);be("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});be("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});P.define("sl-tooltip");j.define("sl-icon");var ps=R`
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
`,fs=(e="value")=>(t,o)=>{const r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,a){var l;const c=r.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(s===u){const d=c.converter||Et,f=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:Et.fromAttribute)(a,c.type);this[e]!==f&&(this[o]=f)}i.call(this,s,n,a)}},ms=R`
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
 */const gs=Do(class extends Fo{constructor(e){if(super(e),e.type!==gt.PROPERTY&&e.type!==gt.ATTRIBUTE&&e.type!==gt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!hi(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===I||t===E)return t;const o=e.element,r=e.name;if(e.type===gt.PROPERTY){if(t===o[r])return I}else if(e.type===gt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return I}else if(e.type===gt.ATTRIBUTE&&o.getAttribute(r)===t+"")return I;return pi(e),t}});var z=class extends M{constructor(){super(...arguments),this.formControlController=new Ko(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new ve(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${X({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${X({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${C(this.value)}
            .checked=${gs(this.checked)}
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
    `}};z.styles=[ot,ms,ps];h([Z('input[type="checkbox"]')],z.prototype,"input",2);h([zt()],z.prototype,"hasFocus",2);h([p()],z.prototype,"title",2);h([p()],z.prototype,"name",2);h([p()],z.prototype,"value",2);h([p({reflect:!0})],z.prototype,"size",2);h([p({type:Boolean,reflect:!0})],z.prototype,"disabled",2);h([p({type:Boolean,reflect:!0})],z.prototype,"checked",2);h([fs("checked")],z.prototype,"defaultChecked",2);h([p({reflect:!0})],z.prototype,"form",2);h([p({type:Boolean,reflect:!0})],z.prototype,"required",2);h([p({attribute:"help-text"})],z.prototype,"helpText",2);h([J("checked",{waitUntilFirstUpdate:!0})],z.prototype,"handleCheckedChange",1);h([J("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);z.define("sl-switch");const bs=R`

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

`;var vs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,sr=(e,t,o,r)=>{for(var i=r>1?void 0:r?ys(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&vs(t,o,i),i};let fe=class extends dt{constructor(){super(...arguments),this.message="Welcome!",this.customFont='"Grenze Gotisch", sans-serif'}async firstUpdated(){console.log("This is your home page"),this.applyInitialFont()}share(){navigator.share&&navigator.share({title:"adamjolicoeur.me",text:"Check out the random web apps I build!",url:"https://github.com/adamj"})}updateSelectFonts(){const e=this.shadowRoot?.querySelectorAll("sl-select");e&&e.forEach(t=>{t.style.fontFamily=getComputedStyle(document.documentElement).getPropertyValue("--sl-font-sans")})}toggleFont(e){const t=document.documentElement,o=e.target.checked;o?(t.style.setProperty("--font-family",'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'),t.style.setProperty("--sl-font-sans",'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'),t.style.setProperty("--sl-font-mono",'"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace')):(t.style.setProperty("--font-family",this.customFont),t.style.setProperty("--sl-font-sans",this.customFont),t.style.setProperty("--sl-font-mono",'"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace')),localStorage.setItem("useDefaultFont",o.toString()),this.updateSelectFonts()}applyInitialFont(){const e=localStorage.getItem("useDefaultFont"),t=document.documentElement;e==="true"?(t.style.setProperty("--font-family",'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'),t.style.setProperty("--sl-font-sans",'Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'),t.style.setProperty("--sl-font-mono",'"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace'),(this.shadowRoot?.querySelector("sl-switch")).checked=!0):(t.style.setProperty("--font-family",this.customFont),t.style.setProperty("--sl-font-sans",this.customFont),t.style.setProperty("--sl-font-mono",'"Doto", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace')),this.updateSelectFonts()}render(){return A`
      <app-header ?enableHeader="${!0}"></app-header>

      <div class="font-toggle">
        <sl-switch size="medium" @sl-change=${this.toggleFont}>
          Toggle system font
        </sl-switch>
      </div>

      <main class="main">
        <section>
          <sl-card class="two-item-footer ready">
            <div slot="header">Game Tracker</div>
            <p>For use with tracking games of Magic: The Gathering.</p>
            <div slot="footer">
              <sl-button href="${ct("game-tracker")}" variant="primary">Let's Play</sl-button>
            </div>
          </sl-card>
        </section>
        <section>
          <sl-card class="card-header two-item-footer work-in-progress">
            <div slot="header">
              Match Tracking
            </div>
            <p>
              A customized tracker for matches of 4 player games (such as Commander/EDH). While it does have a way to track standings, results, and general "gain/loss" each time the respective buttons are pressed, it is best used for individual matches.
            </p>
            <div slot="footer">
              <sl-button href="${ct("counter")}" variant="warning" outline>Let's Play</sl-button>
            </div>
          </sl-card>
        </section>
        <section>
          <sl-card>
            <p>Learn about these apps, resources used with them, and any other information available. If you like what you see, click the "share" button at the top of the page!
            </p>
            <div slot="footer">
              <sl-button href="${ct("about")}" variant="neutral" outline>About</sl-button>
            </div>
          </sl-card>
        </section>
      </main>
      <style>
        sl-alert::part(base) {
          background-color: var(--sl-color-warning-50);
        }
        sl-card.work-in-progress::part(base) {
          border-color: var(--sl-color-warning-600);
        }
        sl-card.ready::part(base) {
          border-color: var(--sl-color-brand-600);
        }
      </style>
    `}};fe.styles=[bs,R`
      main, .main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        grid-gap: 1rem;
        margin-top: 3rem;
      }
      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }
      sl-card {
        max-width: 350px;
      }
      sl-card [slot='header'] {
        font-weight: var(--sl-font-weight-bold);
      }
      .card-header [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .font-toggle {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 1000;
      }
  `];sr([p()],fe.prototype,"message",2);fe=sr([He("app-home")],fe);var ws=Object.getOwnPropertyDescriptor,_s=(e,t,o,r)=>{for(var i=r>1?void 0:r?ws(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i};let Ue=class extends dt{firstUpdated(){go.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return go.render()}};Ue.styles=R`
    main, .main {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    app-home {
      width: 800px;
    }
    @media (min-width: 1200px) {
      app-standings,
      app-counter {
        width: 1200px;
      }
    }
  `;Ue=_s([He("my-app")],Ue);function xs(e={}){const{immediate:t=!1,onNeedRefresh:o,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:n}=e;let a,l;const c=async(d=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(a=await It(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{n?.(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r?.()}),a.register({immediate:t}).then(d=>{s?s("/sw.js",d):i?.(d)}).catch(d=>{n?.(d)})}}return l=u(),c}const $s=xs({onNeedRefresh(){window.confirm("New content available, refresh?")&&$s(!0)},onOfflineReady(){console.log("App ready to work offline")},onRegistered(e){e&&console.log("Service worker registered",e)}});var ks=Object.defineProperty,As=Object.getOwnPropertyDescriptor,$e=(e,t,o,r)=>{for(var i=r>1?void 0:r?As(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&ks(t,o,i),i};let Tt=class extends dt{constructor(){super(...arguments),this.title="adamjolicoeur.me",this.enableBack=!1,this.enableHeader=!1}share(){navigator.share&&navigator.share({title:"adamjolicoeur.me",text:"Check out the random web apps I build!",url:"https://github.com/adamj"})}render(){return A`
      <nav>
        <div id="back-button-block">
        ${this.enableBack?A`
          <sl-button variant="default" size="medium" outline pill aria-label="Back to start" label="Back to start" href="${ct()}">
            Back
            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
          </sl-button>
          `:A``}
        ${this.enableHeader?A`
          ${"share"in navigator?A`
              <div style=" width: 25%; position: absolute; right: 1rem; top: 1rem;">
                <sl-button slot="footer" variant="primary" size="small" outline @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share this site!
                </sl-button>
              </div>
            `:null}
        `:A``}
        </div>
      </nav>
    `}};Tt.styles=R`
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(var(--sl-color-neutral-200), var(--sl-color-neutral-50));
      padding: .75rem;
      padding-top: .75rem;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 10000;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: .5rem;
    }
  `;$e([p({type:String})],Tt.prototype,"title",2);$e([p({type:Boolean})],Tt.prototype,"enableBack",2);$e([p({type:Boolean})],Tt.prototype,"enableHeader",2);Tt=$e([He("app-header")],Tt);export{ft as A,Fo as B,gt as C,Do as D,E,Ko as F,$ as G,ve as H,le as I,Ai as J,ee as K,Kt as L,Bs as M,Ls as N,Ke as O,hi as P,Os as Q,Ps as R,M as S,I as T,P as U,w as V,vi as W,h as _,Ss as a,zt as b,ct as c,ot as d,zr as e,ms as f,j as g,Z as h,R as i,fs as j,X as k,gs as l,Yo as m,p as n,C as o,be as p,de as q,dt as r,bs as s,He as t,ae as u,ce as v,J as w,A as x,zs as y,U as z};
//# sourceMappingURL=index-fS9Hyv-A.js.map
