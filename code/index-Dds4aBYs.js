const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["code/app-counter-Branx3NX.js","code/table-styles-krSZy5O-.js","code/counter-styles-DBXzyNRt.js","code/app-game-tracker-BXx8bLUx.js","code/app-standard-D7uD8Ofg.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();Notification.permission!=="granted"&&Notification.requestPermission().then(t=>{console.log(t==="granted"?"Notification Permission Granted":"Notification Permission not granted")}).catch(t=>{console.error("Error requesting notification permission:",t)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"./"}).then(t=>{console.log("Service worker registered:",t),t.addEventListener("updatefound",()=>{console.log("Service Worker update found!");const e=t.installing;e&&e.addEventListener("statechange",()=>{e.state==="installed"&&(console.log("New service worker is installed, letting user know."),jo(t))})}),t.waiting&&(console.log("There is a waiting service worker."),jo(t))}).catch(t=>{console.error("Service worker registration failed:",t)})});let Xe;window.addEventListener("load",()=>{const t=document.querySelector(".install-dialog");if(t){t.addEventListener("sl-request-close",()=>{console.log("Modal close requested")});const e=t.querySelector(".install-button");e&&e.addEventListener("click",()=>{Xe&&(Xe.prompt(),Xe.userChoice.then(i=>{i.outcome==="accepted"?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),Xe=null,t.hide()}))})}});window.addEventListener("beforeinstallprompt",t=>{if(console.log("PWA is considered installable by the browser."),t.preventDefault(),Xe=t,!window.matchMedia("(display-mode: standalone)").matches&&!sessionStorage.getItem("installModalShown")){const e=document.querySelector(".install-dialog");e&&(e.show(),sessionStorage.setItem("installModalShown","true"))}});window.addEventListener("appinstalled",()=>{console.log("PWA installed!")});function jo(t){console.log("Attempting to show the update ui to the user.");const e=document.querySelector(".update-dialog");if(e){e.show();const i=e.querySelector(".update-button");i&&i.addEventListener("click",()=>{t.waiting&&(console.log("Telling waiting service worker to skip waiting."),t.waiting.postMessage({type:"SKIP_WAITING"})),e.hide()})}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=globalThis,Co=Ai.ShadowRoot&&(Ai.ShadyCSS===void 0||Ai.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$o=Symbol(),Ko=new WeakMap;let Ds=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==$o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Co&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=Ko.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ko.set(i,e))}return e}toString(){return this.cssText}};const Cr=t=>new Ds(typeof t=="string"?t:t+"",void 0,$o),S=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,s,a)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new Ds(i,t,$o)},$r=(t,e)=>{if(Co)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const o=document.createElement("style"),s=Ai.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}},Yo=Co?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return Cr(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sr,defineProperty:zr,getOwnPropertyDescriptor:Ar,getOwnPropertyNames:Er,getOwnPropertySymbols:Tr,getPrototypeOf:Or}=Object,Hi=globalThis,Xo=Hi.trustedTypes,Lr=Xo?Xo.emptyScript:"",Ir=Hi.reactiveElementPolyfillSupport,Qe=(t,e)=>t,Ee={toAttribute(t,e){switch(e){case Boolean:t=t?Lr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},So=(t,e)=>!Sr(t,e),Go={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:So};Symbol.metadata??=Symbol("metadata"),Hi.litPropertyMetadata??=new WeakMap;class Se extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Go){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,i);s!==void 0&&zr(this.prototype,e,s)}}static getPropertyDescriptor(e,i,o){const{get:s,set:a}=Ar(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return s?.call(this)},set(n){const d=s?.call(this);a.call(this,n),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Go}static _$Ei(){if(this.hasOwnProperty(Qe("elementProperties")))return;const e=Or(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qe("properties"))){const i=this.properties,o=[...Er(i),...Tr(i)];for(const s of o)this.createProperty(s,i[s])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[o,s]of i)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const s=this._$Eu(i,o);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)i.unshift(Yo(s))}else e!==void 0&&i.push(Yo(e));return i}static _$Eu(e,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$EC(e,i){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:Ee).toAttribute(i,o.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,i){const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=o.getPropertyOptions(s),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Ee;this._$Em=s,this[s]=n.fromAttribute(i,a.type),this._$Em=null}}requestUpdate(e,i,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??So)(this[e],i))return;this.P(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,o){this._$AL.has(e)||this._$AL.set(e,i),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,a]of o)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(i=>this._$EC(i,this[i])),this._$EU()}updated(e){}firstUpdated(e){}}Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[Qe("elementProperties")]=new Map,Se[Qe("finalized")]=new Map,Ir?.({ReactiveElement:Se}),(Hi.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=globalThis,Li=zo.trustedTypes,Qo=Li?Li.createPolicy("lit-html",{createHTML:t=>t}):void 0,Rs="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+se,Pr=`<${Ms}>`,ge=document,si=()=>ge.createComment(""),ri=t=>t===null||typeof t!="object"&&typeof t!="function",Ao=Array.isArray,Dr=t=>Ao(t)||typeof t?.[Symbol.iterator]=="function",Zi=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zo=/-->/g,Jo=/>/g,ue=RegExp(`>|${Zi}(?:([^\\s"'>=/]+)(${Zi}*=${Zi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ts=/'/g,es=/"/g,Fs=/^(?:script|style|textarea|title)$/i,Rr=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),g=Rr(1),Ct=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),is=new WeakMap,me=ge.createTreeWalker(ge,129);function Bs(t,e){if(!Ao(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qo!==void 0?Qo.createHTML(e):e}const Mr=(t,e)=>{const i=t.length-1,o=[];let s,a=e===2?"<svg>":e===3?"<math>":"",n=He;for(let d=0;d<i;d++){const c=t[d];let u,f,h=-1,p=0;for(;p<c.length&&(n.lastIndex=p,f=n.exec(c),f!==null);)p=n.lastIndex,n===He?f[1]==="!--"?n=Zo:f[1]!==void 0?n=Jo:f[2]!==void 0?(Fs.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=ue):f[3]!==void 0&&(n=ue):n===ue?f[0]===">"?(n=s??He,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?ue:f[3]==='"'?es:ts):n===es||n===ts?n=ue:n===Zo||n===Jo?n=He:(n=ue,s=void 0);const m=n===ue&&t[d+1].startsWith("/>")?" ":"";a+=n===He?c+Pr:h>=0?(o.push(u),c.slice(0,h)+Rs+c.slice(h)+se+m):c+se+(h===-2?d:m)}return[Bs(t,a+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class ai{constructor({strings:e,_$litType$:i},o){let s;this.parts=[];let a=0,n=0;const d=e.length-1,c=this.parts,[u,f]=Mr(e,i);if(this.el=ai.createElement(u,o),me.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=me.nextNode())!==null&&c.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Rs)){const p=f[n++],m=s.getAttribute(h).split(se),b=/([.?@])?(.*)/.exec(p);c.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?Br:b[1]==="?"?Vr:b[1]==="@"?Nr:Ui}),s.removeAttribute(h)}else h.startsWith(se)&&(c.push({type:6,index:a}),s.removeAttribute(h));if(Fs.test(s.tagName)){const h=s.textContent.split(se),p=h.length-1;if(p>0){s.textContent=Li?Li.emptyScript:"";for(let m=0;m<p;m++)s.append(h[m],si()),me.nextNode(),c.push({type:2,index:++a});s.append(h[p],si())}}}else if(s.nodeType===8)if(s.data===Ms)c.push({type:2,index:a});else{let h=-1;for(;(h=s.data.indexOf(se,h+1))!==-1;)c.push({type:7,index:a}),h+=se.length-1}a++}}static createElement(e,i){const o=ge.createElement("template");return o.innerHTML=e,o}}function Te(t,e,i=t,o){if(e===Ct)return e;let s=o!==void 0?i._$Co?.[o]:i._$Cl;const a=ri(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(t),s._$AT(t,i,o)),o!==void 0?(i._$Co??=[])[o]=s:i._$Cl=s),s!==void 0&&(e=Te(t,s._$AS(t,e.values),s,o)),e}class Fr{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:o}=this._$AD,s=(e?.creationScope??ge).importNode(i,!0);me.currentNode=s;let a=me.nextNode(),n=0,d=0,c=o[0];for(;c!==void 0;){if(n===c.index){let u;c.type===2?u=new ci(a,a.nextSibling,this,e):c.type===1?u=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(u=new Hr(a,this,e)),this._$AV.push(u),c=o[++d]}n!==c?.index&&(a=me.nextNode(),n++)}return me.currentNode=ge,s}p(e){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}class ci{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,o,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Te(this,e,i),ri(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==Ct&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Dr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&ri(this._$AH)?this._$AA.nextSibling.data=e:this.T(ge.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ai.createElement(Bs(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(i);else{const a=new Fr(s,this),n=a.u(this.options);a.p(i),this.T(n),this._$AH=a}}_$AC(e){let i=is.get(e.strings);return i===void 0&&is.set(e.strings,i=new ai(e)),i}k(e){Ao(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const a of e)s===i.length?i.push(o=new ci(this.O(si()),this.O(si()),this,this.options)):o=i[s],o._$AI(a),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ui{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,s,a){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,i=this,o,s){const a=this.strings;let n=!1;if(a===void 0)e=Te(this,e,i,0),n=!ri(e)||e!==this._$AH&&e!==Ct,n&&(this._$AH=e);else{const d=e;let c,u;for(e=a[0],c=0;c<a.length-1;c++)u=Te(this,d[o+c],i,c),u===Ct&&(u=this._$AH[c]),n||=!ri(u)||u!==this._$AH[c],u===K?e=K:e!==K&&(e+=(u??"")+a[c+1]),this._$AH[c]=u}n&&!s&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Br=class extends Ui{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}};class Vr extends Ui{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class Nr extends Ui{constructor(e,i,o,s,a){super(e,i,o,s,a),this.type=5}_$AI(e,i=this){if((e=Te(this,e,i,0)??K)===Ct)return;const o=this._$AH,s=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==K&&(o===K||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Hr{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Te(this,e)}}const Ur=zo.litHtmlPolyfillSupport;Ur?.(ai,ci),(zo.litHtmlVersions??=[]).push("3.2.1");const Wr=(t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(s===void 0){const a=i?.renderBefore??null;o._$litPart$=s=new ci(e.insertBefore(si(),a),a,void 0,i??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pt=class extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wr(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ct}};Pt._$litElement$=!0,Pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Pt});const qr=globalThis.litElementPolyfillSupport;qr?.({LitElement:Pt});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jr={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:So},Kr=(t=jr,e,i)=>{const{kind:o,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(i.name,t),o==="accessor"){const{name:n}=i;return{set(d){const c=e.get.call(this);e.set.call(this,d),this.requestUpdate(n,c,t)},init(d){return d!==void 0&&this.P(n,void 0,t),d}}}if(o==="setter"){const{name:n}=i;return function(d){const c=this[n];e.call(this,d),this.requestUpdate(n,c,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,i)=>typeof i=="object"?Kr(t,e,i):((o,s,a)=>{const n=s.hasOwnProperty(a);return s.constructor.createProperty(a,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function di(t){return(e,i)=>{const o=typeof e=="function"?e:e[i];Object.assign(o,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(t,e){return(i,o,s)=>{const a=n=>n.renderRoot?.querySelector(t)??null;return Eo(i,o,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yr;function Xr(t){return(e,i)=>Eo(e,i,{get(){return(this.renderRoot??(Yr??=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gr(t){return(e,i)=>Eo(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}const Qr="modulepreload",Zr=function(t){return"/"+t},os={},Ge=function(e,i,o){let s=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(i.map(c=>{if(c=Zr(c),c in os)return;os[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Qr,u||(h.as="script"),h.crossOrigin="",h.href=c,d&&h.setAttribute("nonce",d),document.head.appendChild(h),u)return new Promise((p,m)=>{h.addEventListener("load",p),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(n){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=n,window.dispatchEvent(d),!d.defaultPrevented)throw n}return s.then(n=>{for(const d of n||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})},To=Symbol.for("app-tools::log::1.x");globalThis[To]={setDebug:Jr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Jr(t){globalThis[To].debug=!!t}function ta(t,e){globalThis[To].debug&&(console.groupCollapsed(`[app-tools] ${t}`),e&&console.log(e),console.groupEnd())}function ea(t){return(e,i)=>{ta(`${t}: ${e}`,i)}}const oe=ea("router");class ia extends Event{constructor(e){super("route-changed"),this.context=e}}class oa extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(e){super(),this.config=e,this.routes=e.routes.map(i=>({...i,urlPattern:new URLPattern({pathname:i.path,baseURL:window.location.href,search:"*",hash:"*"})})),oe("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return oe(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(e){for(const i of this.routes){const o=i.urlPattern.exec(e);if(o){const{title:s}=i,a=Object.fromEntries(new URLSearchParams(e.search)),n=o?.pathname?.groups??{};return this.context={url:e,title:typeof s=="function"?s({params:n,query:a,url:e}):s,params:n,query:a},i}}return oe(`No route matched for ${e.pathname}${e.search}${e.hash}`,e),null}_notifyUrlChanged(){this.dispatchEvent(new ia(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;const i=e.composedPath().find(a=>a.tagName==="A");if(!i||!i.href)return;const o=new URL(i.href);if(this.url.href===o.href||o.host!==window.location.host||i.hasAttribute("download")||i.href.includes("mailto:"))return;const s=i.getAttribute("target");s&&s!==""&&s!=="_self"||(e.preventDefault(),this.navigate(o))};_collectPlugins(e){return[...this.config?.plugins??[],...e?.plugins??[]]}async navigate(e,i={}){typeof e=="string"&&(e=new URL(e,this.baseUrl));let o=this._matchRoute(e)||this._matchRoute(this.fallback);oe(`Navigating to ${e.pathname}${e.search}${e.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(o);for(const a of s)try{const n=await a?.shouldNavigate?.(this.context);n&&(await n.condition()||(e=new URL(n.redirect,this.baseUrl),o=this._matchRoute(e)||this._matchRoute(this.fallback),s=this._collectPlugins(o),oe("Redirecting",{context:this.context,route:this.route})))}catch(n){throw oe(`Plugin "${a.name}" error on shouldNavigate hook`,n),n}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${e}`);for(const a of s)try{await a?.beforeNavigation?.(this.context)}catch(n){throw oe(`Plugin "${a.name}" error on beforeNavigation hook`,n),n}i?.replace?window.history.replaceState(null,"",`${e.pathname}${e.search}${e.hash}`):i.backNav||window.history.pushState(null,"",`${e.pathname}${e.search}${e.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const a of s)try{await a?.afterNavigation?.(this.context)}catch(n){throw oe(`Plugin "${a.name}" error on afterNavigation hook`,n),n}}}function sa(t){return{name:"appName",beforeNavigation:e=>{e.title=`${t} ${e.title}`}}}function wi(t){return{name:"lazy",beforeNavigation:()=>{t()}}}const ss="app-tools",rs="1.x",as="router-focus",ra="position:absolute;top:0;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);margin:-1px;",aa={name:"resetFocus",afterNavigation:({title:t})=>{let e=document.querySelector(`div[${ss}][version="${rs}"]#${as}`);e||(e=document.createElement("div"),e.setAttribute(ss,""),e.setAttribute("version",rs),e.id=as,e.setAttribute("tabindex","-1"),e.setAttribute("aria-live","polite"),e.setAttribute("style",ra),e.addEventListener("blur",()=>{e?.style.setProperty("display","none")}),document.body.insertBefore(e,document.body.firstChild)),e.textContent=t,e.style.removeProperty("display"),e.focus()}},na={name:"scrollToTop",beforeNavigation:()=>{window.scrollTo(0,0)}},la={name:"checkServiceWorkerUpdate",beforeNavigation:()=>{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(t=>{t&&t.update()})}};var ca=Object.getOwnPropertyDescriptor,da=(t,e,i,o)=>{for(var s=o>1?void 0:o?ca(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=n(s)||s);return s};let ns=class extends Pt{render(){return g`
        <h1>You are offline</h1>
        <p>Reconnect to a network and refresh the page</p>
      `}};ns=da([Ie("offline-page")],ns);globalThis.URLPattern||await Ge(()=>import("./index-DkuV2QLQ.js"),[]);const ha="/",co=new oa({plugins:[la,na,aa,sa("Moonsilver Waypoints -")],routes:[{path:kt(),title:"Home",render:()=>(console.log("Router: Rendering app-home"),g`<app-home></app-home>`)},{path:kt("about"),title:"About",plugins:[wi(()=>Ge(()=>import("./app-about-gIl-rUHV.js"),[]))],render:()=>g`<app-about></app-about>`},{path:kt("counter"),title:"EDH Event Tracker",plugins:[wi(()=>Ge(()=>import("./app-counter-Branx3NX.js"),__vite__mapDeps([0,1,2])))],render:()=>g`<app-counter></app-counter>`},{path:kt("game-tracker"),title:"Tournament Tracker",plugins:[wi(()=>Ge(()=>import("./app-game-tracker-BXx8bLUx.js"),__vite__mapDeps([3,1])))],render:()=>g`<app-standings></app-standings>`},{path:kt("standard-tracker"),title:"Standard Counter",plugins:[wi(()=>Ge(()=>import("./app-standard-D7uD8Ofg.js"),__vite__mapDeps([4,1,2])))],render:()=>g`<app-standard></app-standard>`},{path:"offline.html",title:"Offline",render:()=>(console.log("Router: Rendering offline-page"),g`<offline-page></offline-page>`)}]});function kt(t){var e=ha;return e.startsWith("/")||(e="/"+e),t&&(e=e+t),e}var Oo=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())},ua=S`
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
`,ho="";function ls(t){ho=t}function pa(t=""){if(!ho){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)ls(i.getAttribute("data-shoelace"));else{const o=e.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let s="";o&&(s=o.getAttribute("src")),ls(s.split("/").slice(0,-1).join("/"))}}return ho.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var fa={name:"default",resolver:t=>pa(`assets/icons/${t}.svg`)},ma=fa,cs={caret:`
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
  `},ba={name:"system",resolver:t=>t in cs?`data:image/svg+xml,${encodeURIComponent(cs[t])}`:""},ga=ba,Ii=[ma,ga],Pi=[];function va(t){Pi.push(t)}function ya(t){Pi=Pi.filter(e=>e!==t)}function ds(t){return Ii.find(e=>e.name===t)}function Vs(t,e){wa(t),Ii.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Pi.forEach(i=>{i.library===t&&i.setIcon()})}function wa(t){Ii=Ii.filter(e=>e.name!==t)}var _a=S`
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
`,Ns=Object.defineProperty,xa=Object.defineProperties,ka=Object.getOwnPropertyDescriptor,Ca=Object.getOwnPropertyDescriptors,hs=Object.getOwnPropertySymbols,$a=Object.prototype.hasOwnProperty,Sa=Object.prototype.propertyIsEnumerable,Ji=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Lo=t=>{throw TypeError(t)},us=(t,e,i)=>e in t?Ns(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Jt=(t,e)=>{for(var i in e||(e={}))$a.call(e,i)&&us(t,i,e[i]);if(hs)for(var i of hs(e))Sa.call(e,i)&&us(t,i,e[i]);return t},hi=(t,e)=>xa(t,Ca(e)),r=(t,e,i,o)=>{for(var s=o>1?void 0:o?ka(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&Ns(e,i,s),s},Hs=(t,e,i)=>e.has(t)||Lo("Cannot "+i),za=(t,e,i)=>(Hs(t,e,"read from private field"),e.get(t)),Aa=(t,e,i)=>e.has(t)?Lo("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ea=(t,e,i,o)=>(Hs(t,e,"write to private field"),e.set(t,i),i),Ta=function(t,e){this[0]=t,this[1]=e},Oa=t=>{var e=t[Ji("asyncIterator")],i=!1,o,s={};return e==null?(e=t[Ji("iterator")](),o=a=>s[a]=n=>e[a](n)):(e=e.call(t),o=a=>s[a]=n=>{if(i){if(i=!1,a==="throw")throw n;return n}return i=!0,{done:!1,value:new Ta(new Promise(d=>{var c=e[a](n);c instanceof Object||Lo("Object expected"),d(c)}),1)}}),s[Ji("iterator")]=()=>s,o("next"),"throw"in e?o("throw"):s.throw=a=>{throw a},"return"in e&&o("return"),s};function x(t,e){const i=Jt({waitUntilFirstUpdate:!1},e);return(o,s)=>{const{update:a}=o,n=Array.isArray(t)?t:[t];o.update=function(d){n.forEach(c=>{const u=c;if(d.has(u)){const f=d.get(u),h=this[u];f!==h&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,h)}}),a.call(this,d)}}}var I=S`
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
`,Ei,A=class extends Pt{constructor(){super(),Aa(this,Ei,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Jt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let s=" (unknown version)",a=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in o&&o.version&&(a=" v"+o.version),!(s&&a&&s===a)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${a} has already been registered.`)}attributeChangedCallback(t,e,i){za(this,Ei)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),Ea(this,Ei,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};Ei=new WeakMap;A.version="2.20.1";A.dependencies={};r([l()],A.prototype,"dir",2);r([l()],A.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=(t,e)=>t?._$litType$!==void 0,Us=t=>t.strings===void 0,Ia={},Pa=(t,e=Ia)=>t._$AH=e;var Ue=Symbol(),_i=Symbol(),to,eo=new Map,j=class extends A{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e?.spriteSheet)return this.svg=g`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?Ue:_i}catch{return _i}try{const s=document.createElement("div");s.innerHTML=await o.text();const a=s.firstElementChild;if(((i=a?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Ue;to||(to=new DOMParser);const d=to.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):Ue}catch{return Ue}}connectedCallback(){super.connectedCallback(),va(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ya(this)}getIconSource(){const t=ds(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?ds(this.library):void 0;if(!e){this.svg=null;return}let s=eo.get(e);if(s||(s=this.resolveIcon(e,o),eo.set(e,s)),!this.initialRender)return;const a=await s;if(a===_i&&eo.delete(e),e===this.getIconSource().url){if(La(a)){if(this.svg=a,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(a){case _i:case Ue:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(t=o?.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[I,_a];r([T()],j.prototype,"svg",2);r([l({reflect:!0})],j.prototype,"name",2);r([l()],j.prototype,"src",2);r([l()],j.prototype,"label",2);r([l({reflect:!0})],j.prototype,"library",2);r([x("label")],j.prototype,"handleLabelChange",1);r([x(["name","src","library"])],j.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ui=t=>(...e)=>({_$litDirective$:t,values:e});let pi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=ui(class extends pi{constructor(t){if(super(t),t.type!==qt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const i=t.element.classList;for(const o of this.st)o in e||(i.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||this.nt?.has(o)||(s?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return Ct}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=Symbol.for(""),Da=t=>{if(t?.r===Ws)return t?._$litStatic$},Di=(t,...e)=>({_$litStatic$:e.reduce((i,o,s)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[s+1],t[0]),r:Ws}),ps=new Map,Ra=t=>(e,...i)=>{const o=i.length;let s,a;const n=[],d=[];let c,u=0,f=!1;for(;u<o;){for(c=e[u];u<o&&(a=i[u],(s=Da(a))!==void 0);)c+=s+e[++u],f=!0;u!==o&&d.push(a),n.push(c),u++}if(u===o&&n.push(e[o]),f){const h=n.join("$$lit$$");(e=ps.get(h))===void 0&&(n.raw=n,ps.set(h,e=n)),i=d}return t(e,...i)},Ze=Ra(g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=t=>t??K;var rt=class extends A{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Di`a`:Di`button`;return Ze`
      <${e}
        part="base"
        class=${L({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:"button")}
        href=${z(t?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t&&this.target?"noreferrer noopener":void 0)}
        role=${z(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${z(this.name)}
          library=${z(this.library)}
          src=${z(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};rt.styles=[I,ua];rt.dependencies={"sl-icon":j};r([k(".icon-button")],rt.prototype,"button",2);r([T()],rt.prototype,"hasFocus",2);r([l()],rt.prototype,"name",2);r([l()],rt.prototype,"library",2);r([l()],rt.prototype,"src",2);r([l()],rt.prototype,"href",2);r([l()],rt.prototype,"target",2);r([l()],rt.prototype,"download",2);r([l()],rt.prototype,"label",2);r([l({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);var qs=new Map,Ma=new WeakMap;function Fa(t){return t??{keyframes:[],options:{duration:0}}}function fs(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function U(t,e){qs.set(t,Fa(e))}function Y(t,e,i){const o=Ma.get(t);if(o?.[e])return fs(o[e],i.dir);const s=qs.get(e);return s?fs(s,i.dir):{keyframes:[],options:{duration:0}}}function gt(t,e){return new Promise(i=>{function o(s){s.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function Q(t,e,i){return new Promise(o=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,hi(Jt({},i),{duration:uo()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function ms(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function uo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ot(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function Ri(t,e){return t.map(i=>hi(Jt({},i),{height:i.height==="auto"?`${e}px`:i.height}))}var vt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Ba(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(i+=o.textContent)}),i}const po=new Set,ze=new Map;let fe,Io="ltr",Po="en";const js=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(js){const t=new MutationObserver(Ys);Io=document.documentElement.dir||"ltr",Po=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ks(...t){t.map(e=>{const i=e.$code.toLowerCase();ze.has(i)?ze.set(i,Object.assign(Object.assign({},ze.get(i)),e)):ze.set(i,e),fe||(fe=e)}),Ys()}function Ys(){js&&(Io=document.documentElement.dir||"ltr",Po=document.documentElement.lang||navigator.language),[...po.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Va=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){po.add(this.host)}hostDisconnected(){po.delete(this.host)}dir(){return`${this.host.dir||Io}`.toLowerCase()}lang(){return`${this.host.lang||Po}`.toLowerCase()}getTranslationData(e){var i,o;const s=new Intl.Locale(e.replace(/_/g,"-")),a=s?.language.toLowerCase(),n=(o=(i=s?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",d=ze.get(`${a}-${n}`),c=ze.get(a);return{locale:s,language:a,region:n,primary:d,secondary:c}}exists(e,i){var o;const{primary:s,secondary:a}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(s&&s[e]||a&&a[e]||i.includeFallback&&fe&&fe[e])}term(e,...i){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let a;if(o&&o[e])a=o[e];else if(s&&s[e])a=s[e];else if(fe&&fe[e])a=fe[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...i):a}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Xs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Ks(Xs);var Na=Xs,N=class extends Va{};Ks(Na);var Ha=S`
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
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
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
`,St=class pe extends A{constructor(){super(...arguments),this.hasSlotController=new vt(this,"icon","suffix"),this.localize=new N(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",o="0";this.countdownAnimation=e.animate([{width:i},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ot(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=Y(this,"alert.show",{dir:this.localize.dir()});await Q(this.base,e,i),this.emit("sl-after-show")}else{Oo(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ot(this.base);const{keyframes:e,options:i}=Y(this,"alert.hide",{dir:this.localize.dir()});await Q(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,gt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,gt(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),pe.toastStack.parentElement===null&&document.body.append(pe.toastStack),pe.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{pe.toastStack.removeChild(this),e(),pe.toastStack.querySelector("sl-alert")===null&&pe.toastStack.remove()},{once:!0})})}render(){return g`
      <div
        part="base"
        class=${L({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?g`
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

        ${this.countdown?g`
              <div
                class=${L({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};St.styles=[I,Ha];St.dependencies={"sl-icon-button":rt};r([k('[part~="base"]')],St.prototype,"base",2);r([k(".alert__countdown-elapsed")],St.prototype,"countdownElement",2);r([l({type:Boolean,reflect:!0})],St.prototype,"open",2);r([l({type:Boolean,reflect:!0})],St.prototype,"closable",2);r([l({reflect:!0})],St.prototype,"variant",2);r([l({type:Number})],St.prototype,"duration",2);r([l({type:String,reflect:!0})],St.prototype,"countdown",2);r([T()],St.prototype,"remainingTime",2);r([x("open",{waitUntilFirstUpdate:!0})],St.prototype,"handleOpenChange",1);r([x("duration")],St.prototype,"handleDurationChange",1);var Ua=St;U("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});U("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ua.define("sl-alert");var Wa=S`
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
`,Gs=class extends A{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer","header","image")}render(){return g`
      <div
        part="base"
        class=${L({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Gs.styles=[I,Wa];Gs.define("sl-card");var qa=S`
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
`,fi=class extends A{constructor(){super(...arguments),this.localize=new N(this)}render(){return g`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};fi.styles=[I,qa];var We=new WeakMap,qe=new WeakMap,je=new WeakMap,io=new WeakSet,xi=new WeakMap,te=class{constructor(t,e){this.handleFormData=i=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),a=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(d=>{i.formData.append(s,d.toString())}):i.formData.append(s,a.toString()))},this.handleFormSubmit=i=>{var o;const s=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=We.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!a(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xi.set(this.host,[])},this.handleInteraction=i=>{const o=xi.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Jt({form:i=>{const o=i.form;if(o){const a=i.getRootNode().querySelector(`#${o}`);if(a)return a}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),xi.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),xi.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,We.has(this.form)?We.get(this.form).add(this.host):We.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qe.has(this.form)||(qe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),je.has(this.form)||(je.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=We.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qe.has(this.form)&&(this.form.reportValidity=qe.get(this.form),qe.delete(this.form)),je.has(this.form)&&(this.form.checkValidity=je.get(this.form),je.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?io.add(t):io.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!io.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Wi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ja=Object.freeze(hi(Jt({},Wi),{valid:!1,valueMissing:!0})),Ka=Object.freeze(hi(Jt({},Wi),{valid:!1,customError:!0})),Qs=S`
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
`,W=class extends A{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new vt(this,"[default]","prefix","suffix"),this.localize=new N(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Wi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Di`a`:Di`button`;return Ze`
      <${e}
        part="base"
        class=${L({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:this.type)}
        title=${this.title}
        name=${z(t?void 0:this.name)}
        value=${z(t?void 0:this.value)}
        href=${z(t&&!this.disabled?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t?this.rel:void 0)}
        role=${z(t?void 0:"button")}
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
        ${this.caret?Ze` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ze`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};W.styles=[I,Qs];W.dependencies={"sl-icon":j,"sl-spinner":fi};r([k(".button")],W.prototype,"button",2);r([T()],W.prototype,"hasFocus",2);r([T()],W.prototype,"invalid",2);r([l()],W.prototype,"title",2);r([l({reflect:!0})],W.prototype,"variant",2);r([l({reflect:!0})],W.prototype,"size",2);r([l({type:Boolean,reflect:!0})],W.prototype,"caret",2);r([l({type:Boolean,reflect:!0})],W.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],W.prototype,"loading",2);r([l({type:Boolean,reflect:!0})],W.prototype,"outline",2);r([l({type:Boolean,reflect:!0})],W.prototype,"pill",2);r([l({type:Boolean,reflect:!0})],W.prototype,"circle",2);r([l()],W.prototype,"type",2);r([l()],W.prototype,"name",2);r([l()],W.prototype,"value",2);r([l()],W.prototype,"href",2);r([l()],W.prototype,"target",2);r([l()],W.prototype,"rel",2);r([l()],W.prototype,"download",2);r([l()],W.prototype,"form",2);r([l({attribute:"formaction"})],W.prototype,"formAction",2);r([l({attribute:"formenctype"})],W.prototype,"formEnctype",2);r([l({attribute:"formmethod"})],W.prototype,"formMethod",2);r([l({attribute:"formnovalidate",type:Boolean})],W.prototype,"formNoValidate",2);r([l({attribute:"formtarget"})],W.prototype,"formTarget",2);r([x("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);W.define("sl-button");var Ya=S`
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
`,Xa=S`
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
`;const ae=Math.min,xt=Math.max,Mi=Math.round,ki=Math.floor,jt=t=>({x:t,y:t}),Ga={left:"right",right:"left",bottom:"top",top:"bottom"},Qa={start:"end",end:"start"};function fo(t,e,i){return xt(t,ae(e,i))}function Pe(t,e){return typeof t=="function"?t(e):t}function ne(t){return t.split("-")[0]}function De(t){return t.split("-")[1]}function Zs(t){return t==="x"?"y":"x"}function Do(t){return t==="y"?"height":"width"}function ve(t){return["top","bottom"].includes(ne(t))?"y":"x"}function Ro(t){return Zs(ve(t))}function Za(t,e,i){i===void 0&&(i=!1);const o=De(t),s=Ro(t),a=Do(s);let n=s==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(n=Fi(n)),[n,Fi(n)]}function Ja(t){const e=Fi(t);return[mo(t),e,mo(e)]}function mo(t){return t.replace(/start|end/g,e=>Qa[e])}function tn(t,e,i){const o=["left","right"],s=["right","left"],a=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?s:o:e?o:s;case"left":case"right":return e?a:n;default:return[]}}function en(t,e,i,o){const s=De(t);let a=tn(ne(t),i==="start",o);return s&&(a=a.map(n=>n+"-"+s),e&&(a=a.concat(a.map(mo)))),a}function Fi(t){return t.replace(/left|right|bottom|top/g,e=>Ga[e])}function on(t){return{top:0,right:0,bottom:0,left:0,...t}}function Js(t){return typeof t!="number"?on(t):{top:t,right:t,bottom:t,left:t}}function Bi(t){const{x:e,y:i,width:o,height:s}=t;return{width:o,height:s,top:i,left:e,right:e+o,bottom:i+s,x:e,y:i}}function bs(t,e,i){let{reference:o,floating:s}=t;const a=ve(e),n=Ro(e),d=Do(n),c=ne(e),u=a==="y",f=o.x+o.width/2-s.width/2,h=o.y+o.height/2-s.height/2,p=o[d]/2-s[d]/2;let m;switch(c){case"top":m={x:f,y:o.y-s.height};break;case"bottom":m={x:f,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:h};break;case"left":m={x:o.x-s.width,y:h};break;default:m={x:o.x,y:o.y}}switch(De(e)){case"start":m[n]-=p*(i&&u?-1:1);break;case"end":m[n]+=p*(i&&u?-1:1);break}return m}const sn=async(t,e,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:a=[],platform:n}=i,d=a.filter(Boolean),c=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:h}=bs(u,o,c),p=o,m={},b=0;for(let v=0;v<d.length;v++){const{name:$,fn:E}=d[v],{x:_,y:C,data:y,reset:w}=await E({x:f,y:h,initialPlacement:o,placement:p,strategy:s,middlewareData:m,rects:u,platform:n,elements:{reference:t,floating:e}});f=_??f,h=C??h,m={...m,[$]:{...m[$],...y}},w&&b<=50&&(b++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(u=w.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:s}):w.rects),{x:f,y:h}=bs(u,p,c)),v=-1)}return{x:f,y:h,placement:p,strategy:s,middlewareData:m}};async function Mo(t,e){var i;e===void 0&&(e={});const{x:o,y:s,platform:a,rects:n,elements:d,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Pe(e,t),b=Js(m),$=d[p?h==="floating"?"reference":"floating":h],E=Bi(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement($)))==null||i?$:$.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(d.floating)),boundary:u,rootBoundary:f,strategy:c})),_=h==="floating"?{x:o,y:s,width:n.floating.width,height:n.floating.height}:n.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d.floating)),y=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},w=Bi(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:_,offsetParent:C,strategy:c}):_);return{top:(E.top-w.top+b.top)/y.y,bottom:(w.bottom-E.bottom+b.bottom)/y.y,left:(E.left-w.left+b.left)/y.x,right:(w.right-E.right+b.right)/y.x}}const rn=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:s,rects:a,platform:n,elements:d,middlewareData:c}=e,{element:u,padding:f=0}=Pe(t,e)||{};if(u==null)return{};const h=Js(f),p={x:i,y:o},m=Ro(s),b=Do(m),v=await n.getDimensions(u),$=m==="y",E=$?"top":"left",_=$?"bottom":"right",C=$?"clientHeight":"clientWidth",y=a.reference[b]+a.reference[m]-p[m]-a.floating[b],w=p[m]-a.reference[m],P=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let R=P?P[C]:0;(!R||!await(n.isElement==null?void 0:n.isElement(P)))&&(R=d.floating[C]||a.floating[b]);const F=y/2-w/2,D=R/2-v[b]/2-1,O=ae(h[E],D),st=ae(h[_],D),tt=O,ft=R-v[b]-st,et=R/2-v[b]/2+F,It=fo(tt,et,ft),Ut=!c.arrow&&De(s)!=null&&et!==It&&a.reference[b]/2-(et<tt?O:st)-v[b]/2<0,Wt=Ut?et<tt?et-tt:et-ft:0;return{[m]:p[m]+Wt,data:{[m]:It,centerOffset:et-It-Wt,...Ut&&{alignmentOffset:Wt}},reset:Ut}}}),an=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:s,middlewareData:a,rects:n,initialPlacement:d,platform:c,elements:u}=e,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...$}=Pe(t,e);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const E=ne(s),_=ve(d),C=ne(d)===d,y=await(c.isRTL==null?void 0:c.isRTL(u.floating)),w=p||(C||!v?[Fi(d)]:Ja(d)),P=b!=="none";!p&&P&&w.push(...en(d,v,b,y));const R=[d,...w],F=await Mo(e,$),D=[];let O=((o=a.flip)==null?void 0:o.overflows)||[];if(f&&D.push(F[E]),h){const et=Za(s,n,y);D.push(F[et[0]],F[et[1]])}if(O=[...O,{placement:s,overflows:D}],!D.every(et=>et<=0)){var st,tt;const et=(((st=a.flip)==null?void 0:st.index)||0)+1,It=R[et];if(It)return{data:{index:et,overflows:O},reset:{placement:It}};let Ut=(tt=O.filter(Wt=>Wt.overflows[0]<=0).sort((Wt,ee)=>Wt.overflows[1]-ee.overflows[1])[0])==null?void 0:tt.placement;if(!Ut)switch(m){case"bestFit":{var ft;const Wt=(ft=O.filter(ee=>{if(P){const ie=ve(ee.placement);return ie===_||ie==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ie=>ie>0).reduce((ie,kr)=>ie+kr,0)]).sort((ee,ie)=>ee[1]-ie[1])[0])==null?void 0:ft[0];Wt&&(Ut=Wt);break}case"initialPlacement":Ut=d;break}if(s!==Ut)return{reset:{placement:Ut}}}return{}}}};async function nn(t,e){const{placement:i,platform:o,elements:s}=t,a=await(o.isRTL==null?void 0:o.isRTL(s.floating)),n=ne(i),d=De(i),c=ve(i)==="y",u=["left","top"].includes(n)?-1:1,f=a&&c?-1:1,h=Pe(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return d&&typeof b=="number"&&(m=d==="end"?b*-1:b),c?{x:m*f,y:p*u}:{x:p*u,y:m*f}}const ln=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:s,y:a,placement:n,middlewareData:d}=e,c=await nn(e,t);return n===((i=d.offset)==null?void 0:i.placement)&&(o=d.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:{...c,placement:n}}}}},cn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:s}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:d={fn:$=>{let{x:E,y:_}=$;return{x:E,y:_}}},...c}=Pe(t,e),u={x:i,y:o},f=await Mo(e,c),h=ve(ne(s)),p=Zs(h);let m=u[p],b=u[h];if(a){const $=p==="y"?"top":"left",E=p==="y"?"bottom":"right",_=m+f[$],C=m-f[E];m=fo(_,m,C)}if(n){const $=h==="y"?"top":"left",E=h==="y"?"bottom":"right",_=b+f[$],C=b-f[E];b=fo(_,b,C)}const v=d.fn({...e,[p]:m,[h]:b});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[p]:a,[h]:n}}}}}},dn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:s,rects:a,platform:n,elements:d}=e,{apply:c=()=>{},...u}=Pe(t,e),f=await Mo(e,u),h=ne(s),p=De(s),m=ve(s)==="y",{width:b,height:v}=a.floating;let $,E;h==="top"||h==="bottom"?($=h,E=p===(await(n.isRTL==null?void 0:n.isRTL(d.floating))?"start":"end")?"left":"right"):(E=h,$=p==="end"?"top":"bottom");const _=v-f.top-f.bottom,C=b-f.left-f.right,y=ae(v-f[$],_),w=ae(b-f[E],C),P=!e.middlewareData.shift;let R=y,F=w;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(F=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(R=_),P&&!p){const O=xt(f.left,0),st=xt(f.right,0),tt=xt(f.top,0),ft=xt(f.bottom,0);m?F=b-2*(O!==0||st!==0?O+st:xt(f.left,f.right)):R=v-2*(tt!==0||ft!==0?tt+ft:xt(f.top,f.bottom))}await c({...e,availableWidth:F,availableHeight:R});const D=await n.getDimensions(d.floating);return b!==D.width||v!==D.height?{reset:{rects:!0}}:{}}}};function qi(){return typeof window<"u"}function Re(t){return tr(t)?(t.nodeName||"").toLowerCase():"#document"}function $t(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Yt(t){var e;return(e=(tr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function tr(t){return qi()?t instanceof Node||t instanceof $t(t).Node:!1}function Dt(t){return qi()?t instanceof Element||t instanceof $t(t).Element:!1}function Kt(t){return qi()?t instanceof HTMLElement||t instanceof $t(t).HTMLElement:!1}function gs(t){return!qi()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $t(t).ShadowRoot}function mi(t){const{overflow:e,overflowX:i,overflowY:o,display:s}=Rt(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(s)}function hn(t){return["table","td","th"].includes(Re(t))}function ji(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ki(t){const e=Fo(),i=Dt(t)?Rt(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function un(t){let e=le(t);for(;Kt(e)&&!Oe(e);){if(Ki(e))return e;if(ji(e))return null;e=le(e)}return null}function Fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Oe(t){return["html","body","#document"].includes(Re(t))}function Rt(t){return $t(t).getComputedStyle(t)}function Yi(t){return Dt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function le(t){if(Re(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gs(t)&&t.host||Yt(t);return gs(e)?e.host:e}function er(t){const e=le(t);return Oe(e)?t.ownerDocument?t.ownerDocument.body:t.body:Kt(e)&&mi(e)?e:er(e)}function ni(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const s=er(t),a=s===((o=t.ownerDocument)==null?void 0:o.body),n=$t(s);if(a){const d=bo(n);return e.concat(n,n.visualViewport||[],mi(s)?s:[],d&&i?ni(d):[])}return e.concat(s,ni(s,[],i))}function bo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ir(t){const e=Rt(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Kt(t),a=s?t.offsetWidth:i,n=s?t.offsetHeight:o,d=Mi(i)!==a||Mi(o)!==n;return d&&(i=a,o=n),{width:i,height:o,$:d}}function Bo(t){return Dt(t)?t:t.contextElement}function Ae(t){const e=Bo(t);if(!Kt(e))return jt(1);const i=e.getBoundingClientRect(),{width:o,height:s,$:a}=ir(e);let n=(a?Mi(i.width):i.width)/o,d=(a?Mi(i.height):i.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!d||!Number.isFinite(d))&&(d=1),{x:n,y:d}}const pn=jt(0);function or(t){const e=$t(t);return!Fo()||!e.visualViewport?pn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function fn(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==$t(t)?!1:e}function ye(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const s=t.getBoundingClientRect(),a=Bo(t);let n=jt(1);e&&(o?Dt(o)&&(n=Ae(o)):n=Ae(t));const d=fn(a,i,o)?or(a):jt(0);let c=(s.left+d.x)/n.x,u=(s.top+d.y)/n.y,f=s.width/n.x,h=s.height/n.y;if(a){const p=$t(a),m=o&&Dt(o)?$t(o):o;let b=p,v=bo(b);for(;v&&o&&m!==b;){const $=Ae(v),E=v.getBoundingClientRect(),_=Rt(v),C=E.left+(v.clientLeft+parseFloat(_.paddingLeft))*$.x,y=E.top+(v.clientTop+parseFloat(_.paddingTop))*$.y;c*=$.x,u*=$.y,f*=$.x,h*=$.y,c+=C,u+=y,b=$t(v),v=bo(b)}}return Bi({width:f,height:h,x:c,y:u})}function Vo(t,e){const i=Yi(t).scrollLeft;return e?e.left+i:ye(Yt(t)).left+i}function sr(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),s=o.left+e.scrollLeft-(i?0:Vo(t,o)),a=o.top+e.scrollTop;return{x:s,y:a}}function mn(t){let{elements:e,rect:i,offsetParent:o,strategy:s}=t;const a=s==="fixed",n=Yt(o),d=e?ji(e.floating):!1;if(o===n||d&&a)return i;let c={scrollLeft:0,scrollTop:0},u=jt(1);const f=jt(0),h=Kt(o);if((h||!h&&!a)&&((Re(o)!=="body"||mi(n))&&(c=Yi(o)),Kt(o))){const m=ye(o);u=Ae(o),f.x=m.x+o.clientLeft,f.y=m.y+o.clientTop}const p=n&&!h&&!a?sr(n,c,!0):jt(0);return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-c.scrollLeft*u.x+f.x+p.x,y:i.y*u.y-c.scrollTop*u.y+f.y+p.y}}function bn(t){return Array.from(t.getClientRects())}function gn(t){const e=Yt(t),i=Yi(t),o=t.ownerDocument.body,s=xt(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),a=xt(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-i.scrollLeft+Vo(t);const d=-i.scrollTop;return Rt(o).direction==="rtl"&&(n+=xt(e.clientWidth,o.clientWidth)-s),{width:s,height:a,x:n,y:d}}function vn(t,e){const i=$t(t),o=Yt(t),s=i.visualViewport;let a=o.clientWidth,n=o.clientHeight,d=0,c=0;if(s){a=s.width,n=s.height;const u=Fo();(!u||u&&e==="fixed")&&(d=s.offsetLeft,c=s.offsetTop)}return{width:a,height:n,x:d,y:c}}function yn(t,e){const i=ye(t,!0,e==="fixed"),o=i.top+t.clientTop,s=i.left+t.clientLeft,a=Kt(t)?Ae(t):jt(1),n=t.clientWidth*a.x,d=t.clientHeight*a.y,c=s*a.x,u=o*a.y;return{width:n,height:d,x:c,y:u}}function vs(t,e,i){let o;if(e==="viewport")o=vn(t,i);else if(e==="document")o=gn(Yt(t));else if(Dt(e))o=yn(e,i);else{const s=or(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Bi(o)}function rr(t,e){const i=le(t);return i===e||!Dt(i)||Oe(i)?!1:Rt(i).position==="fixed"||rr(i,e)}function wn(t,e){const i=e.get(t);if(i)return i;let o=ni(t,[],!1).filter(d=>Dt(d)&&Re(d)!=="body"),s=null;const a=Rt(t).position==="fixed";let n=a?le(t):t;for(;Dt(n)&&!Oe(n);){const d=Rt(n),c=Ki(n);!c&&d.position==="fixed"&&(s=null),(a?!c&&!s:!c&&d.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||mi(n)&&!c&&rr(t,n))?o=o.filter(f=>f!==n):s=d,n=le(n)}return e.set(t,o),o}function _n(t){let{element:e,boundary:i,rootBoundary:o,strategy:s}=t;const n=[...i==="clippingAncestors"?ji(e)?[]:wn(e,this._c):[].concat(i),o],d=n[0],c=n.reduce((u,f)=>{const h=vs(e,f,s);return u.top=xt(h.top,u.top),u.right=ae(h.right,u.right),u.bottom=ae(h.bottom,u.bottom),u.left=xt(h.left,u.left),u},vs(e,d,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xn(t){const{width:e,height:i}=ir(t);return{width:e,height:i}}function kn(t,e,i){const o=Kt(e),s=Yt(e),a=i==="fixed",n=ye(t,!0,a,e);let d={scrollLeft:0,scrollTop:0};const c=jt(0);if(o||!o&&!a)if((Re(e)!=="body"||mi(s))&&(d=Yi(e)),o){const p=ye(e,!0,a,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else s&&(c.x=Vo(s));const u=s&&!o&&!a?sr(s,d):jt(0),f=n.left+d.scrollLeft-c.x-u.x,h=n.top+d.scrollTop-c.y-u.y;return{x:f,y:h,width:n.width,height:n.height}}function oo(t){return Rt(t).position==="static"}function ys(t,e){if(!Kt(t)||Rt(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return Yt(t)===i&&(i=i.ownerDocument.body),i}function ar(t,e){const i=$t(t);if(ji(t))return i;if(!Kt(t)){let s=le(t);for(;s&&!Oe(s);){if(Dt(s)&&!oo(s))return s;s=le(s)}return i}let o=ys(t,e);for(;o&&hn(o)&&oo(o);)o=ys(o,e);return o&&Oe(o)&&oo(o)&&!Ki(o)?i:o||un(t)||i}const Cn=async function(t){const e=this.getOffsetParent||ar,i=this.getDimensions,o=await i(t.floating);return{reference:kn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function $n(t){return Rt(t).direction==="rtl"}const Ti={convertOffsetParentRelativeRectToViewportRelativeRect:mn,getDocumentElement:Yt,getClippingRect:_n,getOffsetParent:ar,getElementRects:Cn,getClientRects:bn,getDimensions:xn,getScale:Ae,isElement:Dt,isRTL:$n};function nr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Sn(t,e){let i=null,o;const s=Yt(t);function a(){var d;clearTimeout(o),(d=i)==null||d.disconnect(),i=null}function n(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),a();const u=t.getBoundingClientRect(),{left:f,top:h,width:p,height:m}=u;if(d||e(),!p||!m)return;const b=ki(h),v=ki(s.clientWidth-(f+p)),$=ki(s.clientHeight-(h+m)),E=ki(f),C={rootMargin:-b+"px "+-v+"px "+-$+"px "+-E+"px",threshold:xt(0,ae(1,c))||1};let y=!0;function w(P){const R=P[0].intersectionRatio;if(R!==c){if(!y)return n();R?n(!1,R):o=setTimeout(()=>{n(!1,1e-7)},1e3)}R===1&&!nr(u,t.getBoundingClientRect())&&n(),y=!1}try{i=new IntersectionObserver(w,{...C,root:s.ownerDocument})}catch{i=new IntersectionObserver(w,C)}i.observe(t)}return n(!0),a}function zn(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Bo(t),f=s||a?[...u?ni(u):[],...ni(e)]:[];f.forEach(E=>{s&&E.addEventListener("scroll",i,{passive:!0}),a&&E.addEventListener("resize",i)});const h=u&&d?Sn(u,i):null;let p=-1,m=null;n&&(m=new ResizeObserver(E=>{let[_]=E;_&&_.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(e)})),i()}),u&&!c&&m.observe(u),m.observe(e));let b,v=c?ye(t):null;c&&$();function $(){const E=ye(t);v&&!nr(v,E)&&i(),v=E,b=requestAnimationFrame($)}return i(),()=>{var E;f.forEach(_=>{s&&_.removeEventListener("scroll",i),a&&_.removeEventListener("resize",i)}),h?.(),(E=m)==null||E.disconnect(),m=null,c&&cancelAnimationFrame(b)}}const An=ln,En=cn,Tn=an,ws=dn,On=rn,Ln=(t,e,i)=>{const o=new Map,s={platform:Ti,...i},a={...s.platform,_c:o};return sn(t,e,{...s,platform:a})};function In(t){return Pn(t)}function so(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Pn(t){for(let e=t;e;e=so(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=so(t);e;e=so(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Ki(i)||e.tagName==="BODY"))return e}return null}function Dn(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var q=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,s=0,a=0,n=0,d=0,c=0,u=0,f=0;i?t.top<e.top?(o=t.left,s=t.bottom,a=t.right,n=t.bottom,d=e.left,c=e.top,u=e.right,f=e.top):(o=e.left,s=e.bottom,a=e.right,n=e.bottom,d=t.left,c=t.top,u=t.right,f=t.top):t.left<e.left?(o=t.right,s=t.top,a=e.left,n=e.top,d=t.right,c=t.bottom,u=e.left,f=e.bottom):(o=e.right,s=e.top,a=t.left,n=t.top,d=e.right,c=e.bottom,u=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Dn(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=zn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[An({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(ws({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Tn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(En({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(ws({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(On({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>Ti.getOffsetParent(i,In):Ti.getOffsetParent;Ln(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:hi(Jt({},Ti),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:s,placement:a})=>{const n=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const c=s.arrow.x,u=s.arrow.y;let f="",h="",p="",m="";if(this.arrowPlacement==="start"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?b:"",m=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":b,m=n?b:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof c=="number"?`${c}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:h,bottom:p,left:m,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return g`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${L({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${L({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?g`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};q.styles=[I,Xa];r([k(".popup")],q.prototype,"popup",2);r([k(".popup__arrow")],q.prototype,"arrowEl",2);r([l()],q.prototype,"anchor",2);r([l({type:Boolean,reflect:!0})],q.prototype,"active",2);r([l({reflect:!0})],q.prototype,"placement",2);r([l({reflect:!0})],q.prototype,"strategy",2);r([l({type:Number})],q.prototype,"distance",2);r([l({type:Number})],q.prototype,"skidding",2);r([l({type:Boolean})],q.prototype,"arrow",2);r([l({attribute:"arrow-placement"})],q.prototype,"arrowPlacement",2);r([l({attribute:"arrow-padding",type:Number})],q.prototype,"arrowPadding",2);r([l({type:Boolean})],q.prototype,"flip",2);r([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],q.prototype,"flipFallbackPlacements",2);r([l({attribute:"flip-fallback-strategy"})],q.prototype,"flipFallbackStrategy",2);r([l({type:Object})],q.prototype,"flipBoundary",2);r([l({attribute:"flip-padding",type:Number})],q.prototype,"flipPadding",2);r([l({type:Boolean})],q.prototype,"shift",2);r([l({type:Object})],q.prototype,"shiftBoundary",2);r([l({attribute:"shift-padding",type:Number})],q.prototype,"shiftPadding",2);r([l({attribute:"auto-size"})],q.prototype,"autoSize",2);r([l()],q.prototype,"sync",2);r([l({type:Object})],q.prototype,"autoSizeBoundary",2);r([l({attribute:"auto-size-padding",type:Number})],q.prototype,"autoSizePadding",2);r([l({attribute:"hover-bridge",type:Boolean})],q.prototype,"hoverBridge",2);var nt=class extends A{constructor(){super(),this.localize=new N(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ms(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ms(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ot(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=Y(this,"tooltip.show",{dir:this.localize.dir()});await Q(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ot(this.body);const{keyframes:i,options:o}=Y(this,"tooltip.hide",{dir:this.localize.dir()});await Q(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,gt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,gt(this,"sl-after-hide")}render(){return g`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${L({tooltip:!0,"tooltip--open":this.open})}
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
    `}};nt.styles=[I,Ya];nt.dependencies={"sl-popup":q};r([k("slot:not([name])")],nt.prototype,"defaultSlot",2);r([k(".tooltip__body")],nt.prototype,"body",2);r([k("sl-popup")],nt.prototype,"popup",2);r([l()],nt.prototype,"content",2);r([l()],nt.prototype,"placement",2);r([l({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);r([l({type:Number})],nt.prototype,"distance",2);r([l({type:Boolean,reflect:!0})],nt.prototype,"open",2);r([l({type:Number})],nt.prototype,"skidding",2);r([l()],nt.prototype,"trigger",2);r([l({type:Boolean})],nt.prototype,"hoist",2);r([x("open",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpenChange",1);r([x(["content","distance","hoist","placement","skidding"])],nt.prototype,"handleOptionsChange",1);r([x("disabled")],nt.prototype,"handleDisabledChange",1);U("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});U("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});nt.define("sl-tooltip");j.define("sl-icon");var Rn=S`
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
`,Me=(t="value")=>(e,i)=>{const o=e.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(a,n,d){var c;const u=o.getPropertyOptions(t),f=typeof u.attribute=="string"?u.attribute:t;if(a===f){const h=u.converter||Ee,m=(typeof h=="function"?h:(c=h?.fromAttribute)!=null?c:Ee.fromAttribute)(d,u.type);this[t]!==m&&(this[i]=m)}s.call(this,a,n,d)}},_e=S`
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
 */const we=ui(class extends pi{constructor(t){if(super(t),t.type!==qt.PROPERTY&&t.type!==qt.ATTRIBUTE&&t.type!==qt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Us(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ct||e===K)return e;const i=t.element,o=t.name;if(t.type===qt.PROPERTY){if(e===i[o])return Ct}else if(t.type===qt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return Ct}else if(t.type===qt.ATTRIBUTE&&i.getAttribute(o)===e+"")return Ct;return Pa(t),e}});var mt=class extends A{constructor(){super(...arguments),this.formControlController=new te(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return g`
      <div
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${L({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this.value)}
            .checked=${we(this.checked)}
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
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};mt.styles=[I,_e,Rn];r([k('input[type="checkbox"]')],mt.prototype,"input",2);r([T()],mt.prototype,"hasFocus",2);r([l()],mt.prototype,"title",2);r([l()],mt.prototype,"name",2);r([l()],mt.prototype,"value",2);r([l({reflect:!0})],mt.prototype,"size",2);r([l({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],mt.prototype,"checked",2);r([Me("checked")],mt.prototype,"defaultChecked",2);r([l({reflect:!0})],mt.prototype,"form",2);r([l({type:Boolean,reflect:!0})],mt.prototype,"required",2);r([l({attribute:"help-text"})],mt.prototype,"helpText",2);r([x("checked",{waitUntilFirstUpdate:!0})],mt.prototype,"handleCheckedChange",1);r([x("disabled",{waitUntilFirstUpdate:!0})],mt.prototype,"handleDisabledChange",1);mt.define("sl-switch");var Mn=S`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Fn=S`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,at=class extends A{constructor(){super(...arguments),this.formControlController=new te(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return g`
      <div
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${L({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this.value)}
            .indeterminate=${we(this.indeterminate)}
            .checked=${we(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?g`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?g`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};at.styles=[I,_e,Fn];at.dependencies={"sl-icon":j};r([k('input[type="checkbox"]')],at.prototype,"input",2);r([T()],at.prototype,"hasFocus",2);r([l()],at.prototype,"title",2);r([l()],at.prototype,"name",2);r([l()],at.prototype,"value",2);r([l({reflect:!0})],at.prototype,"size",2);r([l({type:Boolean,reflect:!0})],at.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],at.prototype,"checked",2);r([l({type:Boolean,reflect:!0})],at.prototype,"indeterminate",2);r([Me("checked")],at.prototype,"defaultChecked",2);r([l({reflect:!0})],at.prototype,"form",2);r([l({type:Boolean,reflect:!0})],at.prototype,"required",2);r([l({attribute:"help-text"})],at.prototype,"helpText",2);r([x("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);r([x(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],at.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _s(t,e,i){return t?e(t):i?.(t)}var Z=class go extends A{constructor(){super(...arguments),this.localize=new N(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ot(this.childrenContainer);const{keyframes:e,options:i}=Y(this,"tree-item.collapse",{dir:this.localize.dir()});await Q(this.childrenContainer,Ri(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&go.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ot(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:i}=Y(this,"tree-item.expand",{dir:this.localize.dir()});await Q(this.childrenContainer,Ri(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>go.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const e=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return g`
      <div
        part="base"
        class="${L({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${L({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${_s(this.loading,()=>g` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${_s(this.selectable,()=>g`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${we(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Z.styles=[I,Mn];Z.dependencies={"sl-checkbox":at,"sl-icon":j,"sl-spinner":fi};r([T()],Z.prototype,"indeterminate",2);r([T()],Z.prototype,"isLeaf",2);r([T()],Z.prototype,"loading",2);r([T()],Z.prototype,"selectable",2);r([l({type:Boolean,reflect:!0})],Z.prototype,"expanded",2);r([l({type:Boolean,reflect:!0})],Z.prototype,"selected",2);r([l({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],Z.prototype,"lazy",2);r([k("slot:not([name])")],Z.prototype,"defaultSlot",2);r([k("slot[name=children]")],Z.prototype,"childrenSlot",2);r([k(".tree-item__item")],Z.prototype,"itemElement",2);r([k(".tree-item__children")],Z.prototype,"childrenContainer",2);r([k(".tree-item__expand-button slot")],Z.prototype,"expandButtonSlot",2);r([x("loading",{waitUntilFirstUpdate:!0})],Z.prototype,"handleLoadingChange",1);r([x("disabled")],Z.prototype,"handleDisabledChange",1);r([x("selected")],Z.prototype,"handleSelectedChange",1);r([x("expanded",{waitUntilFirstUpdate:!0})],Z.prototype,"handleExpandedChange",1);r([x("expanded",{waitUntilFirstUpdate:!0})],Z.prototype,"handleExpandAnimation",1);r([x("lazy",{waitUntilFirstUpdate:!0})],Z.prototype,"handleLazyChange",1);var Je=Z;U("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});U("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Je.define("sl-tree-item");var Bn=S`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function it(t,e,i){const o=s=>Object.is(s,-0)?0:s;return t<e?o(e):t>i?o(i):o(t)}function xs(t,e=!1){function i(a){const n=a.getChildrenItems({includeDisabled:!1});if(n.length){const d=n.every(u=>u.selected),c=n.every(u=>!u.selected&&!u.indeterminate);a.selected=d,a.indeterminate=!d&&!c}}function o(a){const n=a.parentElement;Je.isTreeItem(n)&&(i(n),o(n))}function s(a){for(const n of a.getChildrenItems())n.selected=e?a.selected||n.selected:!n.disabled&&a.selected,s(n);e&&i(a)}s(t),o(t)}var xe=class extends A{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new N(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(i===null?t.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(Je.isTreeItem),o=[...e.removedNodes].filter(Je.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Je.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const o=i.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${t}-icon`,o}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),xs(t);else if(this.selection==="single"||t.isLeaf){const o=this.getAllTreeItems();for(const s of o)s.selected=s===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(o=>!e.includes(o)))&&Promise.all(i.map(o=>o.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(s=>{var a;return["input","textarea"].includes((a=s?.tagName)==null?void 0:a.toLowerCase())}))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const s=e.findIndex(c=>c.matches(":focus")),a=e[s],n=c=>{const u=e[it(c,0,e.length-1)];this.focusItem(u)},d=c=>{a.expanded=c};t.key==="ArrowDown"?n(s+1):t.key==="ArrowUp"?n(s-1):i&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?n(s+1):d(!0):i&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?n(s-1):d(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),o=t.composedPath().some(s=>{var a;return(a=s?.classList)==null?void 0:a.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>xs(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var o;if(i.disabled)return!1;const s=(o=i.parentElement)==null?void 0:o.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||e.has(s))&&e.add(i),!e.has(i)})}render(){return g`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};xe.styles=[I,Bn];r([k("slot:not([name])")],xe.prototype,"defaultSlot",2);r([k("slot[name=expand-icon]")],xe.prototype,"expandedIconSlot",2);r([k("slot[name=collapse-icon]")],xe.prototype,"collapsedIconSlot",2);r([l()],xe.prototype,"selection",2);r([x("selection")],xe.prototype,"handleSelectionChange",1);xe.define("sl-tree");var Vn=S`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,No=class extends A{render(){return g` <slot></slot> `}};No.styles=[I,Vn];No.define("sl-visually-hidden");var Nn=S`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Hn=0,bi=class extends A{constructor(){super(...arguments),this.attrId=++Hn,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return g`
      <slot
        part="base"
        class=${L({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};bi.styles=[I,Nn];r([l({reflect:!0})],bi.prototype,"name",2);r([l({type:Boolean,reflect:!0})],bi.prototype,"active",2);r([x("active")],bi.prototype,"handleActiveChange",1);bi.define("sl-tab-panel");var Un=S`
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
`,de=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return g`
      <span
        part="base"
        class=${L({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?g`
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
    `}};de.styles=[I,Un];de.dependencies={"sl-icon-button":rt};r([l({reflect:!0})],de.prototype,"variant",2);r([l({reflect:!0})],de.prototype,"size",2);r([l({type:Boolean,reflect:!0})],de.prototype,"pill",2);r([l({type:Boolean})],de.prototype,"removable",2);de.define("sl-tag");var Wn=S`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,H=class extends A{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const s=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,s,a,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e;return g`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${z(this.name)}
              .value=${we(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${z(this.placeholder)}
              rows=${z(this.rows)}
              minlength=${z(this.minlength)}
              maxlength=${z(this.maxlength)}
              autocapitalize=${z(this.autocapitalize)}
              autocorrect=${z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${z(this.spellcheck)}
              enterkeyhint=${z(this.enterkeyhint)}
              inputmode=${z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=[I,_e,Wn];r([k(".textarea__control")],H.prototype,"input",2);r([k(".textarea__size-adjuster")],H.prototype,"sizeAdjuster",2);r([T()],H.prototype,"hasFocus",2);r([l()],H.prototype,"title",2);r([l()],H.prototype,"name",2);r([l()],H.prototype,"value",2);r([l({reflect:!0})],H.prototype,"size",2);r([l({type:Boolean,reflect:!0})],H.prototype,"filled",2);r([l()],H.prototype,"label",2);r([l({attribute:"help-text"})],H.prototype,"helpText",2);r([l()],H.prototype,"placeholder",2);r([l({type:Number})],H.prototype,"rows",2);r([l()],H.prototype,"resize",2);r([l({type:Boolean,reflect:!0})],H.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],H.prototype,"readonly",2);r([l({reflect:!0})],H.prototype,"form",2);r([l({type:Boolean,reflect:!0})],H.prototype,"required",2);r([l({type:Number})],H.prototype,"minlength",2);r([l({type:Number})],H.prototype,"maxlength",2);r([l()],H.prototype,"autocapitalize",2);r([l()],H.prototype,"autocorrect",2);r([l()],H.prototype,"autocomplete",2);r([l({type:Boolean})],H.prototype,"autofocus",2);r([l()],H.prototype,"enterkeyhint",2);r([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],H.prototype,"spellcheck",2);r([l()],H.prototype,"inputmode",2);r([Me()],H.prototype,"defaultValue",2);r([x("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);r([x("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);r([x("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);H.define("sl-textarea");var qn=S`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,jn=0,Mt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.attrId=++jn,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,g`
      <div
        part="base"
        class=${L({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?g`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Mt.styles=[I,qn];Mt.dependencies={"sl-icon-button":rt};r([k(".tab")],Mt.prototype,"tab",2);r([l({reflect:!0})],Mt.prototype,"panel",2);r([l({type:Boolean,reflect:!0})],Mt.prototype,"active",2);r([l({type:Boolean,reflect:!0})],Mt.prototype,"closable",2);r([l({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);r([l({type:Number,reflect:!0})],Mt.prototype,"tabIndex",2);r([x("active")],Mt.prototype,"handleActiveChange",1);r([x("disabled")],Mt.prototype,"handleDisabledChange",1);Mt.define("sl-tab");var Kn=S`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Yn=S`
  :host {
    display: contents;
  }
`,gi=class extends A{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};gi.styles=[I,Yn];r([l({type:Boolean,reflect:!0})],gi.prototype,"disabled",2);r([x("disabled",{waitUntilFirstUpdate:!0})],gi.prototype,"handleDisabledChange",1);function Xn(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var vo=new Set;function Gn(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Qn(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function ti(t){if(vo.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Gn()+Qn();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function ei(t){vo.delete(t),vo.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function yo(t,e,i="vertical",o="smooth"){const s=Xn(t,e),a=s.top+e.scrollTop,n=s.left+e.scrollLeft,d=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,u=e.scrollTop,f=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<d?e.scrollTo({left:n,behavior:o}):n+t.clientWidth>c&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(a<u?e.scrollTo({top:a,behavior:o}):a+t.clientHeight>f&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:o}))}var ht=class extends A{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new N(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const i=e.filter(({target:o})=>{if(o===this)return!0;if(o.closest("sl-tab-group")!==this)return!1;const s=o.tagName.toLowerCase();return s==="sl-tab"||s==="sl-tab-panel"});if(i.length!==0){if(i.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(o=>o.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(o=>o.attributeName==="active")){const s=i.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="sl-tab").map(a=>a.target).find(a=>a.active);s&&this.setActiveTab(s)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,o)=>{var s;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),o.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");i?.closest("sl-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if(i?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const s=this.tabs.find(d=>d.matches(":focus")),a=this.localize.dir()==="rtl";let n=null;if(s?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const d=this.tabs.findIndex(c=>c===s);n=this.findNextFocusableTab(d,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const d=this.tabs.findIndex(c=>c===s);n=this.findNextFocusableTab(d,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===n?0:-1}),["top","bottom"].includes(this.placement)&&yo(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Jt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var s;return o.active=o.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&yo(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,o=this.localize.dir()==="rtl",s=this.getAllTabs(),n=s.slice(0,s.indexOf(t)).reduce((d,c)=>({left:d.left+c.clientWidth,top:d.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const o=e==="forward"?1:-1;let s=t+o;for(;t<this.tabs.length;){if(i=this.tabs[s]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;s+=o}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return g`
      <div
        part="base"
        class=${L({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?g`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${L({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?g`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${L({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ht.styles=[I,Kn];ht.dependencies={"sl-icon-button":rt,"sl-resize-observer":gi};r([k(".tab-group")],ht.prototype,"tabGroup",2);r([k(".tab-group__body")],ht.prototype,"body",2);r([k(".tab-group__nav")],ht.prototype,"nav",2);r([k(".tab-group__indicator")],ht.prototype,"indicator",2);r([T()],ht.prototype,"hasScrollControls",2);r([T()],ht.prototype,"shouldHideScrollStartButton",2);r([T()],ht.prototype,"shouldHideScrollEndButton",2);r([l()],ht.prototype,"placement",2);r([l()],ht.prototype,"activation",2);r([l({attribute:"no-scroll-controls",type:Boolean})],ht.prototype,"noScrollControls",2);r([l({attribute:"fixed-scroll-controls",type:Boolean})],ht.prototype,"fixedScrollControls",2);r([di({passive:!0})],ht.prototype,"updateScrollButtons",1);r([x("noScrollControls",{waitUntilFirstUpdate:!0})],ht.prototype,"updateScrollControls",1);r([x("placement",{waitUntilFirstUpdate:!0})],ht.prototype,"syncIndicator",1);ht.define("sl-tab-group");var Zn=S`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ho=class extends A{constructor(){super(...arguments),this.effect="none"}render(){return g`
      <div
        part="base"
        class=${L({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ho.styles=[I,Zn];r([l()],Ho.prototype,"effect",2);Ho.define("sl-skeleton");var Jn=S`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function ii(t,e){function i(s){const a=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,d=a.left+n.scrollX,c=a.top+n.scrollY,u=s.pageX-d,f=s.pageY-c;e?.onMove&&e.onMove(u,f)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&i(e.initialEvent)}var ks=()=>null,zt=class extends A{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new N(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=ks,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:o,snapThreshold:s,isRtl:a,vertical:n})=>{let d=i,c=Number.POSITIVE_INFINITY;return e.forEach(u=>{let f;if(u.startsWith("repeat(")){const p=t.substring(7,t.length-1),m=p.endsWith("%"),b=Number.parseFloat(p),v=m?o*(b/100):b;f=Math.round((a&&!n?o-i:i)/v)*v}else u.endsWith("%")?f=o*(Number.parseFloat(u)/100):f=Number.parseFloat(u);a&&!n&&(f=o-f);const h=Math.abs(i-f);h<=s&&h<c&&(d=f,c=h)}),d}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=ks}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),ii(this,{onMove:(i,o)=>{var s;let a=this.vertical?o:i;this.primary==="end"&&(a=this.size-a),a=(s=this.snapFunction({pos:a,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?s:a,this.position=it(this.pixelsToPercentage(a),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const o=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=o})}this.position=it(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`:i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`,this.style[e]="",g`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${z(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};zt.styles=[I,Jn];r([k(".divider")],zt.prototype,"divider",2);r([l({type:Number,reflect:!0})],zt.prototype,"position",2);r([l({attribute:"position-in-pixels",type:Number})],zt.prototype,"positionInPixels",2);r([l({type:Boolean,reflect:!0})],zt.prototype,"vertical",2);r([l({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);r([l()],zt.prototype,"primary",2);r([l({reflect:!0})],zt.prototype,"snap",1);r([l({type:Number,attribute:"snap-threshold"})],zt.prototype,"snapThreshold",2);r([x("position")],zt.prototype,"handlePositionChange",1);r([x("positionInPixels")],zt.prototype,"handlePositionInPixelsChange",1);r([x("vertical")],zt.prototype,"handleVerticalChange",1);zt.define("sl-split-panel");gi.define("sl-resize-observer");var tl=S`
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
 */let wo=class extends pi{constructor(e){if(super(e),this.it=K,e.type!==qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===K||e==null)return this._t=void 0,this.it=e;if(e===Ct)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};wo.directiveName="unsafeHTML",wo.resultType=1;const Oi=ui(wo);var B=class extends A{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new N(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>g`
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
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,o=e.closest("sl-icon-button")!==null;if(!(i||o)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const s=this.getAllOptions(),a=s.indexOf(this.currentOption);let n=Math.max(0,a);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=a+1,n>s.length-1&&(n=0)):t.key==="ArrowUp"?(n=a-1,n<0&&(n=s.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=s.length-1),this.setCurrentOption(s[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const s=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const a of s)if(a.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),o=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(s=>o.push(s.value)),this.setSelectedOptions(t.filter(s=>i.includes(s.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(o=>o.selected=!1),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const o=this.getAllOptions();this.selectedOptions=o.filter(a=>a.selected);const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(a=>a.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.value=(t=a?.value)!=null?t:"",this.displayLabel=(i=(e=a?.getTextLabel)==null?void 0:e.call(a))!=null?i:""}this.valueHasChanged=s,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return g`<div @sl-remove=${o=>this.handleTagRemove(o,t)}>
          ${typeof i=="string"?Oi(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return g`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return g``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ot(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Y(this,"select.show",{dir:this.localize.dir()});await Q(this.popup.popup,t,e),this.currentOption&&yo(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ot(this);const{keyframes:t,options:e}=Y(this,"select.hide",{dir:this.localize.dir()});await Q(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,gt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,gt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return g`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${L({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?g`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${s?g`
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};B.styles=[I,_e,tl];B.dependencies={"sl-icon":j,"sl-popup":q,"sl-tag":de};r([k(".select")],B.prototype,"popup",2);r([k(".select__combobox")],B.prototype,"combobox",2);r([k(".select__display-input")],B.prototype,"displayInput",2);r([k(".select__value-input")],B.prototype,"valueInput",2);r([k(".select__listbox")],B.prototype,"listbox",2);r([T()],B.prototype,"hasFocus",2);r([T()],B.prototype,"displayLabel",2);r([T()],B.prototype,"currentOption",2);r([T()],B.prototype,"selectedOptions",2);r([T()],B.prototype,"valueHasChanged",2);r([l()],B.prototype,"name",2);r([T()],B.prototype,"value",1);r([l({attribute:"value"})],B.prototype,"defaultValue",2);r([l({reflect:!0})],B.prototype,"size",2);r([l()],B.prototype,"placeholder",2);r([l({type:Boolean,reflect:!0})],B.prototype,"multiple",2);r([l({attribute:"max-options-visible",type:Number})],B.prototype,"maxOptionsVisible",2);r([l({type:Boolean,reflect:!0})],B.prototype,"disabled",2);r([l({type:Boolean})],B.prototype,"clearable",2);r([l({type:Boolean,reflect:!0})],B.prototype,"open",2);r([l({type:Boolean})],B.prototype,"hoist",2);r([l({type:Boolean,reflect:!0})],B.prototype,"filled",2);r([l({type:Boolean,reflect:!0})],B.prototype,"pill",2);r([l()],B.prototype,"label",2);r([l({reflect:!0})],B.prototype,"placement",2);r([l({attribute:"help-text"})],B.prototype,"helpText",2);r([l({reflect:!0})],B.prototype,"form",2);r([l({type:Boolean,reflect:!0})],B.prototype,"required",2);r([l()],B.prototype,"getTag",2);r([x("disabled",{waitUntilFirstUpdate:!0})],B.prototype,"handleDisabledChange",1);r([x(["defaultValue","value"],{waitUntilFirstUpdate:!0})],B.prototype,"handleValueChange",1);r([x("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);U("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});U("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});B.define("sl-select");fi.define("sl-spinner");var el=S`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,X=class extends A{constructor(){super(...arguments),this.formControlController=new te(this),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new N(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=this.localize.dir()==="rtl",a=e*t;if(s){const n=`${e-a}px + ${t} * ${o}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${o} / 2))`}else{const n=`${a}px - ${t} * ${o}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e;return g`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${z(this.name)}
              ?disabled=${this.disabled}
              min=${z(this.min)}
              max=${z(this.max)}
              step=${z(this.step)}
              .value=${we(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?g`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=[I,_e,el];r([k(".range__control")],X.prototype,"input",2);r([k(".range__tooltip")],X.prototype,"output",2);r([T()],X.prototype,"hasFocus",2);r([T()],X.prototype,"hasTooltip",2);r([l()],X.prototype,"title",2);r([l()],X.prototype,"name",2);r([l({type:Number})],X.prototype,"value",2);r([l()],X.prototype,"label",2);r([l({attribute:"help-text"})],X.prototype,"helpText",2);r([l({type:Boolean,reflect:!0})],X.prototype,"disabled",2);r([l({type:Number})],X.prototype,"min",2);r([l({type:Number})],X.prototype,"max",2);r([l({type:Number})],X.prototype,"step",2);r([l()],X.prototype,"tooltip",2);r([l({attribute:!1})],X.prototype,"tooltipFormatter",2);r([l({reflect:!0})],X.prototype,"form",2);r([Me()],X.prototype,"defaultValue",2);r([di({passive:!0})],X.prototype,"handleThumbDragStart",1);r([x("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);r([x("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);r([x("hasTooltip",{waitUntilFirstUpdate:!0})],X.prototype,"syncRange",1);X.define("sl-range");var il=S`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr="important",ol=" !"+lr,yt=ui(class extends pi{constructor(t){if(super(t),t.type!==qt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return o==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const a=typeof s=="string"&&s.endsWith(ol);o.includes("-")||a?i.setProperty(o,a?s.slice(0,-11):s,a?lr:""):i[o]=s}}return Ct}});var bt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:o,width:s}=this.rating.getBoundingClientRect(),a=e?this.roundToPrecision((o-t)/s*this.max,this.precision):this.roundToPrecision((t-i)/s*this.max,this.precision);return it(a,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const s=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const s=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,g`
      <div
        part="base"
        class=${L({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(o=>i>o&&i<o+1?g`
                <span
                  class=${L({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${yt({clipPath:t?`inset(0 ${(i-o)*100}% 0 0)`:`inset(0 0 0 ${(i-o)*100}%)`})}
                  >
                    ${Oi(this.getSymbol(o+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${yt({clipPath:t?`inset(0 0 0 ${100-(i-o)*100}%)`:`inset(0 ${100-(i-o)*100}% 0 0)`})}
                  >
                    ${Oi(this.getSymbol(o+1))}
                  </div>
                </span>
              `:g`
              <span
                class=${L({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===o+1,"rating__symbol--active":i>=o+1})}
                role="presentation"
              >
                ${Oi(this.getSymbol(o+1))}
              </span>
            `)}
        </span>
      </div>
    `}};bt.styles=[I,il];bt.dependencies={"sl-icon":j};r([k(".rating")],bt.prototype,"rating",2);r([T()],bt.prototype,"hoverValue",2);r([T()],bt.prototype,"isHovering",2);r([l()],bt.prototype,"label",2);r([l({type:Number})],bt.prototype,"value",2);r([l({type:Number})],bt.prototype,"max",2);r([l({type:Number})],bt.prototype,"precision",2);r([l({type:Boolean,reflect:!0})],bt.prototype,"readonly",2);r([l({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);r([l()],bt.prototype,"getSymbol",2);r([di({passive:!0})],bt.prototype,"handleTouchMove",1);r([x("hoverValue")],bt.prototype,"handleHoverValueChange",1);r([x("isHovering")],bt.prototype,"handleIsHoveringChange",1);bt.define("sl-rating");var sl=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ke=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:o,value:s}=sl.find(a=>Math.abs(i)<a.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/s),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;o==="minute"?a=Ci("second"):o==="hour"?a=Ci("minute"):o==="day"?a=Ci("hour"):a=Ci("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),a)}return g` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};r([T()],ke.prototype,"isoTime",2);r([T()],ke.prototype,"relativeTime",2);r([l()],ke.prototype,"date",2);r([l()],ke.prototype,"format",2);r([l()],ke.prototype,"numeric",2);r([l({type:Boolean})],ke.prototype,"sync",2);function Ci(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}ke.define("sl-relative-time");var rl=S`
  ${Qs}

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
`,Ft=class extends A{constructor(){super(...arguments),this.hasSlotController=new vt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Ze`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${L({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${z(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Ft.styles=[I,rl];r([k(".button")],Ft.prototype,"input",2);r([k(".hidden-input")],Ft.prototype,"hiddenInput",2);r([T()],Ft.prototype,"hasFocus",2);r([l({type:Boolean,reflect:!0})],Ft.prototype,"checked",2);r([l()],Ft.prototype,"value",2);r([l({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);r([l({reflect:!0})],Ft.prototype,"size",2);r([l({type:Boolean,reflect:!0})],Ft.prototype,"pill",2);r([x("disabled",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleDisabledChange",1);Ft.define("sl-radio-button");var al=S`
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
`,nl=S`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ce=class extends A{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Ke(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Ke(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Ke(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Ke(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),o=Ke(e);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",i===0),o.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),o.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return g`
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
    `}};Ce.styles=[I,nl];r([k("slot")],Ce.prototype,"defaultSlot",2);r([T()],Ce.prototype,"disableRole",2);r([l()],Ce.prototype,"label",2);function Ke(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var ut=class extends A{constructor(){super(...arguments),this.formControlController=new te(this),this.hasSlotController=new vt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Ka:t?ja:Wi}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;!e||e.disabled||(this.value=e.value,i.forEach(s=>s.checked=s===e),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(d=>!d.disabled),o=(e=i.find(d=>d.checked))!=null?e:i[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let n=i.indexOf(o)+s;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||d.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=i.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(o=>o.checked))if(this.hasButtonGroup){const o=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");o&&o.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(a=>a.checked),o=e.find(a=>!a.disabled),s=i||o;s&&s.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,s=g`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return g`
      <fieldset
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
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

          ${this.hasButtonGroup?g`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ut.styles=[I,_e,al];ut.dependencies={"sl-button-group":Ce};r([k("slot:not([name])")],ut.prototype,"defaultSlot",2);r([k(".radio-group__validation-input")],ut.prototype,"validationInput",2);r([T()],ut.prototype,"hasButtonGroup",2);r([T()],ut.prototype,"errorMessage",2);r([T()],ut.prototype,"defaultValue",2);r([l()],ut.prototype,"label",2);r([l({attribute:"help-text"})],ut.prototype,"helpText",2);r([l()],ut.prototype,"name",2);r([l({reflect:!0})],ut.prototype,"value",2);r([l({reflect:!0})],ut.prototype,"size",2);r([l({reflect:!0})],ut.prototype,"form",2);r([l({type:Boolean,reflect:!0})],ut.prototype,"required",2);r([x("size",{waitUntilFirstUpdate:!0})],ut.prototype,"handleSizeChange",1);r([x("value")],ut.prototype,"handleValueChange",1);ut.define("sl-radio-group");var ll=S`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Fe=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,o=i-this.value/100*i;this.indicatorOffset=`${o}px`}}render(){return g`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Fe.styles=[I,ll];r([k(".progress-ring__indicator")],Fe.prototype,"indicator",2);r([T()],Fe.prototype,"indicatorOffset",2);r([l({type:Number,reflect:!0})],Fe.prototype,"value",2);r([l()],Fe.prototype,"label",2);Fe.define("sl-progress-ring");var cl=S`
  :host {
    display: inline-block;
  }
`;let cr=null;class dr{}dr.render=function(t,e){cr(t,e)};self.QrCreator=dr;(function(t){function e(d,c,u,f){var h={},p=t(u,c);p.u(d),p.J(),f=f||0;var m=p.h(),b=p.h()+2*f;return h.text=d,h.level=c,h.version=u,h.O=b,h.a=function(v,$){return v-=f,$-=f,0>v||v>=m||0>$||$>=m?!1:p.a(v,$)},h}function i(d,c,u,f,h,p,m,b,v,$){function E(_,C,y,w,P,R,F){_?(d.lineTo(C+R,y+F),d.arcTo(C,y,w,P,p)):d.lineTo(C,y)}m?d.moveTo(c+p,u):d.moveTo(c,u),E(b,f,u,f,h,-p,0),E(v,f,h,c,h,0,-p),E($,c,h,c,u,p,0),E(m,c,u,f,u,0,p)}function o(d,c,u,f,h,p,m,b,v,$){function E(_,C,y,w){d.moveTo(_+y,C),d.lineTo(_,C),d.lineTo(_,C+w),d.arcTo(_,C,_+y,C,p)}m&&E(c,u,p,p),b&&E(f,u,-p,p),v&&E(f,h,-p,-p),$&&E(c,h,p,-p)}function s(d,c){var u=c.fill;if(typeof u=="string")d.fillStyle=u;else{var f=u.type,h=u.colorStops;if(u=u.position.map(m=>Math.round(m*c.size)),f==="linear-gradient")var p=d.createLinearGradient.apply(d,u);else if(f==="radial-gradient")p=d.createRadialGradient.apply(d,u);else throw Error("Unsupported fill");h.forEach(([m,b])=>{p.addColorStop(m,b)}),d.fillStyle=p}}function a(d,c){t:{var u=c.text,f=c.v,h=c.N,p=c.K,m=c.P;for(h=Math.max(1,h||1),p=Math.min(40,p||40);h<=p;h+=1)try{var b=e(u,f,h,m);break t}catch{}b=void 0}if(!b)return null;for(u=d.getContext("2d"),c.background&&(u.fillStyle=c.background,u.fillRect(c.left,c.top,c.size,c.size)),f=b.O,p=c.size/f,u.beginPath(),m=0;m<f;m+=1)for(h=0;h<f;h+=1){var v=u,$=c.left+h*p,E=c.top+m*p,_=m,C=h,y=b.a,w=$+p,P=E+p,R=_-1,F=_+1,D=C-1,O=C+1,st=Math.floor(Math.min(.5,Math.max(0,c.R))*p),tt=y(_,C),ft=y(R,D),et=y(R,C);R=y(R,O);var It=y(_,O);O=y(F,O),C=y(F,C),F=y(F,D),_=y(_,D),$=Math.round($),E=Math.round(E),w=Math.round(w),P=Math.round(P),tt?i(v,$,E,w,P,st,!et&&!_,!et&&!It,!C&&!It,!C&&!_):o(v,$,E,w,P,st,et&&_&&ft,et&&It&&R,C&&It&&O,C&&_&&F)}return s(u,c),u.fill(),d}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};cr=function(d,c){var u={};Object.assign(u,n,d),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,c instanceof HTMLCanvasElement?((c.width!==u.size||c.height!==u.size)&&(c.width=u.size,c.height=u.size),c.getContext("2d").clearRect(0,0,c.width,c.height),a(c,u)):(d=document.createElement("canvas"),d.width=u.size,d.height=u.size,u=a(d,u),c.appendChild(u))}})(function(){function t(c){var u=i.s(c);return{S:function(){return 4},b:function(){return u.length},write:function(f){for(var h=0;h<u.length;h+=1)f.put(u[h],8)}}}function e(){var c=[],u=0,f={B:function(){return c},c:function(h){return(c[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,p){for(var m=0;m<p;m+=1)f.m((h>>>p-m-1&1)==1)},f:function(){return u},m:function(h){var p=Math.floor(u/8);c.length<=p&&c.push(0),h&&(c[p]|=128>>>u%8),u+=1}};return f}function i(c,u){function f(_,C){for(var y=-1;7>=y;y+=1)if(!(-1>=_+y||b<=_+y))for(var w=-1;7>=w;w+=1)-1>=C+w||b<=C+w||(m[_+y][C+w]=0<=y&&6>=y&&(w==0||w==6)||0<=w&&6>=w&&(y==0||y==6)||2<=y&&4>=y&&2<=w&&4>=w)}function h(_,C){for(var y=b=4*c+17,w=Array(y),P=0;P<y;P+=1){w[P]=Array(y);for(var R=0;R<y;R+=1)w[P][R]=null}for(m=w,f(0,0),f(b-7,0),f(0,b-7),y=a.G(c),w=0;w<y.length;w+=1)for(P=0;P<y.length;P+=1){R=y[w];var F=y[P];if(m[R][F]==null)for(var D=-2;2>=D;D+=1)for(var O=-2;2>=O;O+=1)m[R+D][F+O]=D==-2||D==2||O==-2||O==2||D==0&&O==0}for(y=8;y<b-8;y+=1)m[y][6]==null&&(m[y][6]=y%2==0);for(y=8;y<b-8;y+=1)m[6][y]==null&&(m[6][y]=y%2==0);for(y=a.w(p<<3|C),w=0;15>w;w+=1)P=!_&&(y>>w&1)==1,m[6>w?w:8>w?w+1:b-15+w][8]=P,m[8][8>w?b-w-1:9>w?15-w:14-w]=P;if(m[b-8][8]=!_,7<=c){for(y=a.A(c),w=0;18>w;w+=1)P=!_&&(y>>w&1)==1,m[Math.floor(w/3)][w%3+b-8-3]=P;for(w=0;18>w;w+=1)P=!_&&(y>>w&1)==1,m[w%3+b-8-3][Math.floor(w/3)]=P}if(v==null){for(_=d.I(c,p),y=e(),w=0;w<$.length;w+=1)P=$[w],y.put(4,4),y.put(P.b(),a.f(4,c)),P.write(y);for(w=P=0;w<_.length;w+=1)P+=_[w].j;if(y.f()>8*P)throw Error("code length overflow. ("+y.f()+">"+8*P+")");for(y.f()+4<=8*P&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*P)&&(y.put(236,8),!(y.f()>=8*P));)y.put(17,8);var st=0;for(P=w=0,R=Array(_.length),F=Array(_.length),D=0;D<_.length;D+=1){var tt=_[D].j,ft=_[D].o-tt;for(w=Math.max(w,tt),P=Math.max(P,ft),R[D]=Array(tt),O=0;O<R[D].length;O+=1)R[D][O]=255&y.B()[O+st];for(st+=tt,O=a.C(ft),tt=o(R[D],O.b()-1).l(O),F[D]=Array(O.b()-1),O=0;O<F[D].length;O+=1)ft=O+tt.b()-F[D].length,F[D][O]=0<=ft?tt.c(ft):0}for(O=y=0;O<_.length;O+=1)y+=_[O].o;for(y=Array(y),O=st=0;O<w;O+=1)for(D=0;D<_.length;D+=1)O<R[D].length&&(y[st]=R[D][O],st+=1);for(O=0;O<P;O+=1)for(D=0;D<_.length;D+=1)O<F[D].length&&(y[st]=F[D][O],st+=1);v=y}for(_=v,y=-1,w=b-1,P=7,R=0,C=a.F(C),F=b-1;0<F;F-=2)for(F==6&&--F;;){for(D=0;2>D;D+=1)m[w][F-D]==null&&(O=!1,R<_.length&&(O=(_[R]>>>P&1)==1),C(w,F-D)&&(O=!O),m[w][F-D]=O,--P,P==-1&&(R+=1,P=7));if(w+=y,0>w||b<=w){w-=y,y=-y;break}}}var p=s[u],m=null,b=0,v=null,$=[],E={u:function(_){_=t(_),$.push(_),v=null},a:function(_,C){if(0>_||b<=_||0>C||b<=C)throw Error(_+","+C);return m[_][C]},h:function(){return b},J:function(){for(var _=0,C=0,y=0;8>y;y+=1){h(!0,y);var w=a.D(E);(y==0||_>w)&&(_=w,C=y)}h(!1,C)}};return E}function o(c,u){if(typeof c.length>"u")throw Error(c.length+"/"+u);var f=function(){for(var p=0;p<c.length&&c[p]==0;)p+=1;for(var m=Array(c.length-p+u),b=0;b<c.length-p;b+=1)m[b]=c[b+p];return m}(),h={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var m=Array(h.b()+p.b()-1),b=0;b<h.b();b+=1)for(var v=0;v<p.b();v+=1)m[b+v]^=n.i(n.g(h.c(b))+n.g(p.c(v)));return o(m,0)},l:function(p){if(0>h.b()-p.b())return h;for(var m=n.g(h.c(0))-n.g(p.c(0)),b=Array(h.b()),v=0;v<h.b();v+=1)b[v]=h.c(v);for(v=0;v<p.b();v+=1)b[v]^=n.i(n.g(p.c(v))+m);return o(b,0).l(p)}};return h}i.s=function(c){for(var u=[],f=0;f<c.length;f++){var h=c.charCodeAt(f);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(f++,h=65536+((h&1023)<<10|c.charCodeAt(f)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var s={L:1,M:0,Q:3,H:2},a=function(){function c(h){for(var p=0;h!=0;)p+=1,h>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(h){for(var p=h<<10;0<=c(p)-c(1335);)p^=1335<<c(p)-c(1335);return(h<<10|p)^21522},A:function(h){for(var p=h<<12;0<=c(p)-c(7973);)p^=7973<<c(p)-c(7973);return h<<12|p},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var p=o([1],0),m=0;m<h;m+=1)p=p.multiply(o([1,n.i(m)],0));return p},f:function(h,p){if(h!=4||1>p||40<p)throw Error("mode: "+h+"; type: "+p);return 10>p?8:16},D:function(h){for(var p=h.h(),m=0,b=0;b<p;b+=1)for(var v=0;v<p;v+=1){for(var $=0,E=h.a(b,v),_=-1;1>=_;_+=1)if(!(0>b+_||p<=b+_))for(var C=-1;1>=C;C+=1)0>v+C||p<=v+C||(_!=0||C!=0)&&E==h.a(b+_,v+C)&&($+=1);5<$&&(m+=3+$-5)}for(b=0;b<p-1;b+=1)for(v=0;v<p-1;v+=1)$=0,h.a(b,v)&&($+=1),h.a(b+1,v)&&($+=1),h.a(b,v+1)&&($+=1),h.a(b+1,v+1)&&($+=1),($==0||$==4)&&(m+=3);for(b=0;b<p;b+=1)for(v=0;v<p-6;v+=1)h.a(b,v)&&!h.a(b,v+1)&&h.a(b,v+2)&&h.a(b,v+3)&&h.a(b,v+4)&&!h.a(b,v+5)&&h.a(b,v+6)&&(m+=40);for(v=0;v<p;v+=1)for(b=0;b<p-6;b+=1)h.a(b,v)&&!h.a(b+1,v)&&h.a(b+2,v)&&h.a(b+3,v)&&h.a(b+4,v)&&!h.a(b+5,v)&&h.a(b+6,v)&&(m+=40);for(v=$=0;v<p;v+=1)for(b=0;b<p;b+=1)h.a(b,v)&&($+=1);return m+=Math.abs(100*$/p/p-50)/5*10}};return f}(),n=function(){for(var c=Array(256),u=Array(256),f=0;8>f;f+=1)c[f]=1<<f;for(f=8;256>f;f+=1)c[f]=c[f-4]^c[f-5]^c[f-6]^c[f-8];for(f=0;255>f;f+=1)u[c[f]]=f;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return c[h]}}}(),d=function(){function c(h,p){switch(p){case s.L:return u[4*(h-1)];case s.M:return u[4*(h-1)+1];case s.Q:return u[4*(h-1)+2];case s.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(h,p){var m=c(h,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+p);h=m.length/3,p=[];for(var b=0;b<h;b+=1)for(var v=m[3*b],$=m[3*b+1],E=m[3*b+2],_=0;_<v;_+=1){var C=E,y={};y.o=$,y.j=C,p.push(y)}return p}};return f}();return i}());const dl=QrCreator;var Bt=class extends A{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&dl.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return g`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${yt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Bt.styles=[I,cl];r([k("canvas")],Bt.prototype,"canvas",2);r([l()],Bt.prototype,"value",2);r([l()],Bt.prototype,"label",2);r([l({type:Number})],Bt.prototype,"size",2);r([l()],Bt.prototype,"fill",2);r([l()],Bt.prototype,"background",2);r([l({type:Number})],Bt.prototype,"radius",2);r([l({attribute:"error-correction"})],Bt.prototype,"errorCorrection",2);r([x(["background","errorCorrection","fill","radius","size","value"])],Bt.prototype,"generate",1);Bt.define("sl-qr-code");var hl=S`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Xt=class extends A{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return g`
      <span
        part="base"
        class=${L({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?g` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Xt.styles=[I,hl];Xt.dependencies={"sl-icon":j};r([T()],Xt.prototype,"checked",2);r([T()],Xt.prototype,"hasFocus",2);r([l()],Xt.prototype,"value",2);r([l({reflect:!0})],Xt.prototype,"size",2);r([l({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);r([x("checked")],Xt.prototype,"handleCheckedChange",1);r([x("disabled",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleDisabledChange",1);Xt.define("sl-radio");var ul=S`
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
`,Lt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return g`
      <div
        part="base"
        class=${L({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Lt.styles=[I,ul];Lt.dependencies={"sl-icon":j};r([k(".option__label")],Lt.prototype,"defaultSlot",2);r([T()],Lt.prototype,"current",2);r([T()],Lt.prototype,"selected",2);r([T()],Lt.prototype,"hasHover",2);r([l({reflect:!0})],Lt.prototype,"value",2);r([l({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);r([x("disabled")],Lt.prototype,"handleDisabledChange",1);r([x("selected")],Lt.prototype,"handleSelectedChange",1);r([x("value")],Lt.prototype,"handleValueChange",1);Lt.define("sl-option");q.define("sl-popup");var pl=S`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,vi=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return g`
      <div
        part="base"
        class=${L({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${z(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${yt({width:`${this.value}%`})}>
          ${this.indeterminate?"":g` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};vi.styles=[I,pl];r([l({type:Number,reflect:!0})],vi.prototype,"value",2);r([l({type:Boolean,reflect:!0})],vi.prototype,"indeterminate",2);r([l()],vi.prototype,"label",2);vi.define("sl-progress-bar");var fl=S`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,hr=class extends A{render(){return g` <slot part="base" class="menu-label"></slot> `}};hr.styles=[I,fl];hr.define("sl-menu-label");var ml=S`
  :host {
    display: contents;
  }
`,Gt=class extends A{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return g` <slot></slot> `}};Gt.styles=[I,ml];r([l({reflect:!0})],Gt.prototype,"attr",2);r([l({attribute:"attr-old-value",type:Boolean,reflect:!0})],Gt.prototype,"attrOldValue",2);r([l({attribute:"char-data",type:Boolean,reflect:!0})],Gt.prototype,"charData",2);r([l({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Gt.prototype,"charDataOldValue",2);r([l({attribute:"child-list",type:Boolean,reflect:!0})],Gt.prototype,"childList",2);r([l({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);r([x("disabled")],Gt.prototype,"handleDisabledChange",1);r([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleChange",1);Gt.define("sl-mutation-observer");var bl=S`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
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

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,M=class extends A{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new N(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const s=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,s,a,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return g`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${z(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${z(this.placeholder)}
              minlength=${z(this.minlength)}
              maxlength=${z(this.maxlength)}
              min=${z(this.min)}
              max=${z(this.max)}
              step=${z(this.step)}
              .value=${we(this.value)}
              autocapitalize=${z(this.autocapitalize)}
              autocomplete=${z(this.autocomplete)}
              autocorrect=${z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${z(this.pattern)}
              enterkeyhint=${z(this.enterkeyhint)}
              inputmode=${z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?g`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?g`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?g`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:g`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};M.styles=[I,_e,bl];M.dependencies={"sl-icon":j};r([k(".input__control")],M.prototype,"input",2);r([T()],M.prototype,"hasFocus",2);r([l()],M.prototype,"title",2);r([l({reflect:!0})],M.prototype,"type",2);r([l()],M.prototype,"name",2);r([l()],M.prototype,"value",2);r([Me()],M.prototype,"defaultValue",2);r([l({reflect:!0})],M.prototype,"size",2);r([l({type:Boolean,reflect:!0})],M.prototype,"filled",2);r([l({type:Boolean,reflect:!0})],M.prototype,"pill",2);r([l()],M.prototype,"label",2);r([l({attribute:"help-text"})],M.prototype,"helpText",2);r([l({type:Boolean})],M.prototype,"clearable",2);r([l({type:Boolean,reflect:!0})],M.prototype,"disabled",2);r([l()],M.prototype,"placeholder",2);r([l({type:Boolean,reflect:!0})],M.prototype,"readonly",2);r([l({attribute:"password-toggle",type:Boolean})],M.prototype,"passwordToggle",2);r([l({attribute:"password-visible",type:Boolean})],M.prototype,"passwordVisible",2);r([l({attribute:"no-spin-buttons",type:Boolean})],M.prototype,"noSpinButtons",2);r([l({reflect:!0})],M.prototype,"form",2);r([l({type:Boolean,reflect:!0})],M.prototype,"required",2);r([l()],M.prototype,"pattern",2);r([l({type:Number})],M.prototype,"minlength",2);r([l({type:Number})],M.prototype,"maxlength",2);r([l()],M.prototype,"min",2);r([l()],M.prototype,"max",2);r([l()],M.prototype,"step",2);r([l()],M.prototype,"autocapitalize",2);r([l()],M.prototype,"autocorrect",2);r([l()],M.prototype,"autocomplete",2);r([l({type:Boolean})],M.prototype,"autofocus",2);r([l()],M.prototype,"enterkeyhint",2);r([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],M.prototype,"spellcheck",2);r([l()],M.prototype,"inputmode",2);r([x("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);r([x("step",{waitUntilFirstUpdate:!0})],M.prototype,"handleStepChange",1);r([x("value",{waitUntilFirstUpdate:!0})],M.prototype,"handleValueChange",1);M.define("sl-input");var gl=S`
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
`,Uo=class extends A{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),o=i.find(d=>{var c;return e.includes(((c=d?.getAttribute)==null?void 0:c.call(d,"role"))||"")});if(!o||i.find(d=>{var c;return((c=d?.getAttribute)==null?void 0:c.call(d,"role"))==="menu"})!==this)return;const n=o;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let o=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?o++:t.key==="ArrowUp"?o--:t.key==="Home"?o=0:t.key==="End"&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return g`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Uo.styles=[I,gl];r([k("slot")],Uo.prototype,"defaultSlot",2);Uo.define("sl-menu");var vl=S`
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
 */const oi=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const o of i)o._$AO?.(e,!1),oi(o,e);return!0},Vi=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},ur=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),_l(e)}};function yl(t){this._$AN!==void 0?(Vi(this),this._$AM=t,ur(this)):this._$AM=t}function wl(t,e=!1,i=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let a=i;a<o.length;a++)oi(o[a],!1),Vi(o[a]);else o!=null&&(oi(o,!1),Vi(o));else oi(this,t)}const _l=t=>{t.type==qt.CHILD&&(t._$AP??=wl,t._$AQ??=yl)};class xl extends pi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,o){super._$AT(e,i,o),ur(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(oi(this,e),Vi(this))}setValue(e){if(Us(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl=()=>new Cl;class Cl{}const ro=new WeakMap,$l=ui(class extends xl{render(t){return K}update(t,[e]){const i=e!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),K}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let i=ro.get(e);i===void 0&&(i=new WeakMap,ro.set(e,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?ro.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Sl=class{constructor(t,e){this.popupRef=kl(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i?.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:a,top:n,width:d,height:c}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?a+d:a}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?a+d:a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const o of e.assignedElements())if(i=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let o=1;o!==i.length;++o)i[o].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((s,a)=>{var n;const d=(n=e.get(a))!=null?n:new CSSUnitValue(0,"px"),u=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return s-u.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?g`
      <sl-popup
        ${$l(this.popupRef)}
        placement=${t?"left-start":"right-start"}
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
    `:g` <slot name="submenu" hidden></slot> `}},At=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new vt(this,"submenu"),this.submenuController=new Sl(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ba(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return g`
      <div
        id="anchor"
        part="base"
        class=${L({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?g` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};At.styles=[I,vl];At.dependencies={"sl-icon":j,"sl-popup":q,"sl-spinner":fi};r([k("slot:not([name])")],At.prototype,"defaultSlot",2);r([k(".menu-item")],At.prototype,"menuItem",2);r([l()],At.prototype,"type",2);r([l({type:Boolean,reflect:!0})],At.prototype,"checked",2);r([l()],At.prototype,"value",2);r([l({type:Boolean,reflect:!0})],At.prototype,"loading",2);r([l({type:Boolean,reflect:!0})],At.prototype,"disabled",2);r([x("checked")],At.prototype,"handleCheckedChange",1);r([x("disabled")],At.prototype,"handleDisabledChange",1);r([x("type")],At.prototype,"handleTypeChange",1);At.define("sl-menu-item");var zl=S`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,$e=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),ii(this.base,{onMove:o=>{this.position=parseFloat(it(o/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const o=t.shiftKey?10:1;let s=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(s-=o),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(s+=o),t.key==="Home"&&(s=0),t.key==="End"&&(s=100),s=it(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return g`
      <div
        part="base"
        id="image-comparer"
        class=${L({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${yt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${yt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};$e.styles=[I,zl];$e.scopedElement={"sl-icon":j};r([k(".image-comparer")],$e.prototype,"base",2);r([k(".image-comparer__handle")],$e.prototype,"handle",2);r([l({type:Number,reflect:!0})],$e.prototype,"position",2);r([x("position",{waitUntilFirstUpdate:!0})],$e.prototype,"handlePositionChange",1);$e.define("sl-image-comparer");var Al=S`
  :host {
    display: block;
  }
`,ao=new Map;function El(t,e="cors"){const i=ao.get(t);if(i!==void 0)return Promise.resolve(i);const o=fetch(t,{mode:e}).then(async s=>{const a={ok:s.ok,status:s.status,html:await s.text()};return ao.set(t,a),a});return ao.set(t,o),o}var Be=class extends A{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await El(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return g`<slot></slot>`}};Be.styles=[I,Al];r([l()],Be.prototype,"src",2);r([l()],Be.prototype,"mode",2);r([l({attribute:"allow-scripts",type:Boolean})],Be.prototype,"allowScripts",2);r([x("src")],Be.prototype,"handleSrcChange",1);Be.define("sl-include");rt.define("sl-icon-button");var Xi=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),s=i[o]+this.unit,a=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:s,unitDisplay:this.display})}};r([l({type:Number})],Xi.prototype,"value",2);r([l()],Xi.prototype,"unit",2);r([l()],Xi.prototype,"display",2);Xi.define("sl-format-bytes");var Et=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return g`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};r([l()],Et.prototype,"date",2);r([l()],Et.prototype,"weekday",2);r([l()],Et.prototype,"era",2);r([l()],Et.prototype,"year",2);r([l()],Et.prototype,"month",2);r([l()],Et.prototype,"day",2);r([l()],Et.prototype,"hour",2);r([l()],Et.prototype,"minute",2);r([l()],Et.prototype,"second",2);r([l({attribute:"time-zone-name"})],Et.prototype,"timeZoneName",2);r([l({attribute:"time-zone"})],Et.prototype,"timeZone",2);r([l({attribute:"hour-format"})],Et.prototype,"hourFormat",2);Et.define("sl-format-date");var Vt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};r([l({type:Number})],Vt.prototype,"value",2);r([l()],Vt.prototype,"type",2);r([l({attribute:"no-grouping",type:Boolean})],Vt.prototype,"noGrouping",2);r([l()],Vt.prototype,"currency",2);r([l({attribute:"currency-display"})],Vt.prototype,"currencyDisplay",2);r([l({attribute:"minimum-integer-digits",type:Number})],Vt.prototype,"minimumIntegerDigits",2);r([l({attribute:"minimum-fraction-digits",type:Number})],Vt.prototype,"minimumFractionDigits",2);r([l({attribute:"maximum-fraction-digits",type:Number})],Vt.prototype,"maximumFractionDigits",2);r([l({attribute:"minimum-significant-digits",type:Number})],Vt.prototype,"minimumSignificantDigits",2);r([l({attribute:"maximum-significant-digits",type:Number})],Vt.prototype,"maximumSignificantDigits",2);Vt.define("sl-format-number");var Tl=S`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Gi=class extends A{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Gi.styles=[I,Tl];r([l({type:Boolean,reflect:!0})],Gi.prototype,"vertical",2);r([x("vertical")],Gi.prototype,"handleVerticalChange",1);Gi.define("sl-divider");var Ol=S`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Wo(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Oa(Wo(t.shadowRoot.activeElement))))}function pr(){return[...Wo()].pop()}var Cs=new WeakMap;function fr(t){let e=Cs.get(t);return e||(e=window.getComputedStyle(t,null),Cs.set(t,e)),e}function Ll(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=fr(t);return e.visibility!=="hidden"&&e.display!=="none"}function Il(t){const e=fr(t),{overflowY:i,overflowX:o}=e;return i==="scroll"||o==="scroll"?!0:i!=="auto"||o!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&o==="auto"}function Pl(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const a=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,d=a.querySelector(`${n}:checked`);return d?d===t:a.querySelector(n)===t}return Ll(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Il(t):!1}function Dl(t){var e,i;const o=_o(t),s=(e=o[0])!=null?e:null,a=(i=o[o.length-1])!=null?i:null;return{start:s,end:a}}function Rl(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function _o(t){const e=new WeakMap,i=[];function o(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||e.has(s))return;e.set(s,!0),!i.includes(s)&&Pl(s)&&i.push(s),s instanceof HTMLSlotElement&&Rl(s,t)&&s.assignedElements({flatten:!0}).forEach(a=>{o(a)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&o(s.shadowRoot)}for(const a of s.children)o(a)}return o(t),i.sort((s,a)=>{const n=Number(s.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-n})}var Ye=[],mr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=pr();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=_o(this.element);let a=s.findIndex(d=>d===o);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){a+n>=s.length?a=0:a+n<0?a=s.length-1:a+=n,this.previousFocus=this.currentFocus;const d=s[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||d&&this.possiblyHasTabbableChildren(d))return;e.preventDefault(),this.currentFocus=d,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...Wo()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Ye.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ye=Ye.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ye[Ye.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=_o(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],o=this.tabDirection==="forward"?e:i;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function $s(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Tt=class extends A{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer"),this.localize=new N(this),this.modal=new mr(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ti(this)))}disconnectedCallback(){super.disconnectedCallback(),ei(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=Y(this,"drawer.denyClose",{dir:this.localize.dir()});Q(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ti(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ot(this.drawer),ot(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Y(this,`drawer.show${$s(this.placement)}`,{dir:this.localize.dir()}),i=Y(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Q(this.panel,e.keyframes,e.options),Q(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Oo(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ei(this)),await Promise.all([ot(this.drawer),ot(this.overlay)]);const t=Y(this,`drawer.hide${$s(this.placement)}`,{dir:this.localize.dir()}),e=Y(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Q(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Q(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ti(this)),this.open&&this.contained&&(this.modal.deactivate(),ei(this))}async show(){if(!this.open)return this.open=!0,gt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,gt(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${L({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":g`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Tt.styles=[I,Ol];Tt.dependencies={"sl-icon-button":rt};r([k(".drawer")],Tt.prototype,"drawer",2);r([k(".drawer__panel")],Tt.prototype,"panel",2);r([k(".drawer__overlay")],Tt.prototype,"overlay",2);r([l({type:Boolean,reflect:!0})],Tt.prototype,"open",2);r([l({reflect:!0})],Tt.prototype,"label",2);r([l({reflect:!0})],Tt.prototype,"placement",2);r([l({type:Boolean,reflect:!0})],Tt.prototype,"contained",2);r([l({attribute:"no-header",type:Boolean,reflect:!0})],Tt.prototype,"noHeader",2);r([x("open",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleOpenChange",1);r([x("contained",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleNoModalChange",1);U("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});U("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});U("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});U("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});U("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});U("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});U("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});U("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});U("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});U("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});U("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Tt.define("sl-drawer");var Ml=S`
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
`,pt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(o,s)=>{if(!o)return null;const a=o.closest(s);if(a)return a;const n=o.getRootNode();return n instanceof ShadowRoot?i(n.host,s):null};setTimeout(()=>{var o;const s=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?pr():document.activeElement;(!this.containingElement||i(s,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),o=i[0],s=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(o),o.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(o=>Dl(o).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,gt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,gt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ot(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Y(this,"dropdown.show",{dir:this.localize.dir()});await Q(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ot(this);const{keyframes:t,options:e}=Y(this,"dropdown.hide",{dir:this.localize.dir()});await Q(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g`
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
        sync=${z(this.sync?this.sync:void 0)}
        class=${L({dropdown:!0,"dropdown--open":this.open})}
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
    `}};pt.styles=[I,Ml];pt.dependencies={"sl-popup":q};r([k(".dropdown")],pt.prototype,"popup",2);r([k(".dropdown__trigger")],pt.prototype,"trigger",2);r([k(".dropdown__panel")],pt.prototype,"panel",2);r([l({type:Boolean,reflect:!0})],pt.prototype,"open",2);r([l({reflect:!0})],pt.prototype,"placement",2);r([l({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);r([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],pt.prototype,"stayOpenOnSelect",2);r([l({attribute:!1})],pt.prototype,"containingElement",2);r([l({type:Number})],pt.prototype,"distance",2);r([l({type:Number})],pt.prototype,"skidding",2);r([l({type:Boolean})],pt.prototype,"hoist",2);r([l({reflect:!0})],pt.prototype,"sync",2);r([x("open",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpenChange",1);U("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});U("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});pt.define("sl-dropdown");var Fl=S`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
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
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,lt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let s=this.from,a="";i?[s,a]=this.from.trim().split("."):o&&([s,a]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(s):null;n?o?t=n.getAttribute(a)||"":i?t=n[a]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),s=t==="success"?this.successIcon:this.errorIcon,a=Y(this,"copy.in",{dir:"ltr"}),n=Y(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:o,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,s.hidden=!1,await s.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await s.animate(n.keyframes,n.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return g`
      <sl-tooltip
        class=${L({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};lt.styles=[I,Fl];lt.dependencies={"sl-icon":j,"sl-tooltip":nt};r([k('slot[name="copy-icon"]')],lt.prototype,"copyIcon",2);r([k('slot[name="success-icon"]')],lt.prototype,"successIcon",2);r([k('slot[name="error-icon"]')],lt.prototype,"errorIcon",2);r([k("sl-tooltip")],lt.prototype,"tooltip",2);r([T()],lt.prototype,"isCopying",2);r([T()],lt.prototype,"status",2);r([l()],lt.prototype,"value",2);r([l()],lt.prototype,"from",2);r([l({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);r([l({attribute:"copy-label"})],lt.prototype,"copyLabel",2);r([l({attribute:"success-label"})],lt.prototype,"successLabel",2);r([l({attribute:"error-label"})],lt.prototype,"errorLabel",2);r([l({attribute:"feedback-duration",type:Number})],lt.prototype,"feedbackDuration",2);r([l({attribute:"tooltip-placement"})],lt.prototype,"tooltipPlacement",2);r([l({type:Boolean})],lt.prototype,"hoist",2);U("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});U("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});lt.define("sl-copy-button");var Bl=S`
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
`,Nt=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ot(this.body);const{keyframes:e,options:i}=Y(this,"details.show",{dir:this.localize.dir()});await Q(this.body,Ri(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ot(this.body);const{keyframes:e,options:i}=Y(this,"details.hide",{dir:this.localize.dir()});await Q(this.body,Ri(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,gt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,gt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return g`
      <details
        part="base"
        class=${L({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Nt.styles=[I,Bl];Nt.dependencies={"sl-icon":j};r([k(".details")],Nt.prototype,"details",2);r([k(".details__header")],Nt.prototype,"header",2);r([k(".details__body")],Nt.prototype,"body",2);r([k(".details__expand-icon-slot")],Nt.prototype,"expandIconSlot",2);r([l({type:Boolean,reflect:!0})],Nt.prototype,"open",2);r([l()],Nt.prototype,"summary",2);r([l({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);r([x("open",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleOpenChange",1);U("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});U("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Nt.define("sl-details");var Vl=S`
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
`,Qt=class extends A{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer"),this.localize=new N(this),this.modal=new mr(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ti(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ei(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=Y(this,"dialog.denyClose",{dir:this.localize.dir()});Q(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ti(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ot(this.dialog),ot(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Y(this,"dialog.show",{dir:this.localize.dir()}),i=Y(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Q(this.panel,e.keyframes,e.options),Q(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Oo(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ot(this.dialog),ot(this.overlay)]);const t=Y(this,"dialog.hide",{dir:this.localize.dir()}),e=Y(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Q(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Q(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ei(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,gt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,gt(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${L({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":g`
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
    `}};Qt.styles=[I,Vl];Qt.dependencies={"sl-icon-button":rt};r([k(".dialog")],Qt.prototype,"dialog",2);r([k(".dialog__panel")],Qt.prototype,"panel",2);r([k(".dialog__overlay")],Qt.prototype,"overlay",2);r([l({type:Boolean,reflect:!0})],Qt.prototype,"open",2);r([l({reflect:!0})],Qt.prototype,"label",2);r([l({attribute:"no-header",type:Boolean,reflect:!0})],Qt.prototype,"noHeader",2);r([x("open",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleOpenChange",1);U("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});U("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});U("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});U("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});U("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Qt.define("sl-dialog");at.define("sl-checkbox");var Nl=S`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function dt(t,e){Hl(t)&&(t="100%");const i=Ul(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function $i(t){return Math.min(1,Math.max(0,t))}function Hl(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ul(t){return typeof t=="string"&&t.indexOf("%")!==-1}function br(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Si(t){return Number(t)<=1?`${Number(t)*100}%`:t}function be(t){return t.length===1?"0"+t:String(t)}function Wl(t,e,i){return{r:dt(t,255)*255,g:dt(e,255)*255,b:dt(i,255)*255}}function Ss(t,e,i){t=dt(t,255),e=dt(e,255),i=dt(i,255);const o=Math.max(t,e,i),s=Math.min(t,e,i);let a=0,n=0;const d=(o+s)/2;if(o===s)n=0,a=0;else{const c=o-s;switch(n=d>.5?c/(2-o-s):c/(o+s),o){case t:a=(e-i)/c+(e<i?6:0);break;case e:a=(i-t)/c+2;break;case i:a=(t-e)/c+4;break}a/=6}return{h:a,s:n,l:d}}function no(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function ql(t,e,i){let o,s,a;if(t=dt(t,360),e=dt(e,100),i=dt(i,100),e===0)s=i,a=i,o=i;else{const n=i<.5?i*(1+e):i+e-i*e,d=2*i-n;o=no(d,n,t+1/3),s=no(d,n,t),a=no(d,n,t-1/3)}return{r:o*255,g:s*255,b:a*255}}function zs(t,e,i){t=dt(t,255),e=dt(e,255),i=dt(i,255);const o=Math.max(t,e,i),s=Math.min(t,e,i);let a=0;const n=o,d=o-s,c=o===0?0:d/o;if(o===s)a=0;else{switch(o){case t:a=(e-i)/d+(e<i?6:0);break;case e:a=(i-t)/d+2;break;case i:a=(t-e)/d+4;break}a/=6}return{h:a,s:c,v:n}}function jl(t,e,i){t=dt(t,360)*6,e=dt(e,100),i=dt(i,100);const o=Math.floor(t),s=t-o,a=i*(1-e),n=i*(1-s*e),d=i*(1-(1-s)*e),c=o%6,u=[i,n,a,a,d,i][c],f=[d,i,i,n,a,a][c],h=[a,a,d,i,i,n][c];return{r:u*255,g:f*255,b:h*255}}function As(t,e,i,o){const s=[be(Math.round(t).toString(16)),be(Math.round(e).toString(16)),be(Math.round(i).toString(16))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Kl(t,e,i,o,s){const a=[be(Math.round(t).toString(16)),be(Math.round(e).toString(16)),be(Math.round(i).toString(16)),be(Xl(o))];return s&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Yl(t,e,i,o){const s=t/100,a=e/100,n=i/100,d=o/100,c=255*(1-s)*(1-d),u=255*(1-a)*(1-d),f=255*(1-n)*(1-d);return{r:c,g:u,b:f}}function Es(t,e,i){let o=1-t/255,s=1-e/255,a=1-i/255,n=Math.min(o,s,a);return n===1?(o=0,s=0,a=0):(o=(o-n)/(1-n)*100,s=(s-n)/(1-n)*100,a=(a-n)/(1-n)*100),n*=100,{c:Math.round(o),m:Math.round(s),y:Math.round(a),k:Math.round(n)}}function Xl(t){return Math.round(parseFloat(t)*255).toString(16)}function Ts(t){return _t(t)/255}function _t(t){return parseInt(t,16)}function Gl(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const xo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ql(t){let e={r:0,g:0,b:0},i=1,o=null,s=null,a=null,n=!1,d=!1;return typeof t=="string"&&(t=tc(t)),typeof t=="object"&&(wt(t.r)&&wt(t.g)&&wt(t.b)?(e=Wl(t.r,t.g,t.b),n=!0,d=String(t.r).substr(-1)==="%"?"prgb":"rgb"):wt(t.h)&&wt(t.s)&&wt(t.v)?(o=Si(t.s),s=Si(t.v),e=jl(t.h,o,s),n=!0,d="hsv"):wt(t.h)&&wt(t.s)&&wt(t.l)?(o=Si(t.s),a=Si(t.l),e=ql(t.h,o,a),n=!0,d="hsl"):wt(t.c)&&wt(t.m)&&wt(t.y)&&wt(t.k)&&(e=Yl(t.c,t.m,t.y,t.k),n=!0,d="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=br(i),{ok:n,format:t.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const Zl="[-\\+]?\\d+%?",Jl="[-\\+]?\\d*\\.\\d+%?",re="(?:"+Jl+")|(?:"+Zl+")",lo="[\\s|\\(]+("+re+")[,|\\s]+("+re+")[,|\\s]+("+re+")\\s*\\)?",zi="[\\s|\\(]+("+re+")[,|\\s]+("+re+")[,|\\s]+("+re+")[,|\\s]+("+re+")\\s*\\)?",Ot={CSS_UNIT:new RegExp(re),rgb:new RegExp("rgb"+lo),rgba:new RegExp("rgba"+zi),hsl:new RegExp("hsl"+lo),hsla:new RegExp("hsla"+zi),hsv:new RegExp("hsv"+lo),hsva:new RegExp("hsva"+zi),cmyk:new RegExp("cmyk"+zi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function tc(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(xo[t])t=xo[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=Ot.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=Ot.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Ot.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=Ot.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Ot.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=Ot.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Ot.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=Ot.hex8.exec(t),i?{r:_t(i[1]),g:_t(i[2]),b:_t(i[3]),a:Ts(i[4]),format:e?"name":"hex8"}:(i=Ot.hex6.exec(t),i?{r:_t(i[1]),g:_t(i[2]),b:_t(i[3]),format:e?"name":"hex"}:(i=Ot.hex4.exec(t),i?{r:_t(i[1]+i[1]),g:_t(i[2]+i[2]),b:_t(i[3]+i[3]),a:Ts(i[4]+i[4]),format:e?"name":"hex8"}:(i=Ot.hex3.exec(t),i?{r:_t(i[1]+i[1]),g:_t(i[2]+i[2]),b:_t(i[3]+i[3]),format:e?"name":"hex"}:!1))))))))))}function wt(t){return typeof t=="number"?!Number.isNaN(t):Ot.CSS_UNIT.test(t)}class G{constructor(e="",i={}){if(e instanceof G)return e;typeof e=="number"&&(e=Gl(e)),this.originalInput=e;const o=Ql(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,o,s;const a=e.r/255,n=e.g/255,d=e.b/255;return a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),d<=.03928?s=d/12.92:s=Math.pow((d+.055)/1.055,2.4),.2126*i+.7152*o+.0722*s}getAlpha(){return this.a}setAlpha(e){return this.a=br(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=zs(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=zs(this.r,this.g,this.b),i=Math.round(e.h*360),o=Math.round(e.s*100),s=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${o}%, ${s}%)`:`hsva(${i}, ${o}%, ${s}%, ${this.roundA})`}toHsl(){const e=Ss(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Ss(this.r,this.g,this.b),i=Math.round(e.h*360),o=Math.round(e.s*100),s=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${o}%, ${s}%)`:`hsla(${i}, ${o}%, ${s}%, ${this.roundA})`}toHex(e=!1){return As(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Kl(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${o})`:`rgba(${e}, ${i}, ${o}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(dt(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(dt(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Es(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:i,y:o,k:s}=Es(this.r,this.g,this.b);return`cmyk(${e}, ${i}, ${o}, ${s})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+As(this.r,this.g,this.b,!1);for(const[i,o]of Object.entries(xo))if(e===o)return i;return!1}toString(e){const i=!!e;e=e??this.format;let o=!1;const s=this.a<1&&this.a>=0;return!i&&s&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),e==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new G(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=$i(i.l),new G(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new G(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=$i(i.l),new G(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=$i(i.s),new G(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=$i(i.s),new G(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),o=(i.h+e)%360;return i.h=o<0?360+o:o,new G(i)}mix(e,i=50){const o=this.toRgb(),s=new G(e).toRgb(),a=i/100,n={r:(s.r-o.r)*a+o.r,g:(s.g-o.g)*a+o.g,b:(s.b-o.b)*a+o.b,a:(s.a-o.a)*a+o.a};return new G(n)}analogous(e=6,i=30){const o=this.toHsl(),s=360/i,a=[this];for(o.h=(o.h-(s*e>>1)+720)%360;--e;)o.h=(o.h+s)%360,a.push(new G(o));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new G(e)}monochromatic(e=6){const i=this.toHsv(),{h:o}=i,{s}=i;let{v:a}=i;const n=[],d=1/e;for(;e--;)n.push(new G({h:o,s,v:a})),a=(a+d)%1;return n}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new G({h:(i+72)%360,s:e.s,l:e.l}),new G({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),o=new G(e).toRgb(),s=i.a+o.a*(1-i.a);return new G({r:(i.r*i.a+o.r*o.a*(1-i.a))/s,g:(i.g*i.a+o.g*o.a*(1-i.a))/s,b:(i.b*i.a+o.b*o.a*(1-i.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:o}=i,s=[this],a=360/e;for(let n=1;n<e;n++)s.push(new G({h:(o+n*a)%360,s:i.s,l:i.l}));return s}equals(e){const i=new G(e);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var Os="EyeDropper"in window,V=class extends A{constructor(){super(),this.formControlController=new te(this),this.isSafeValue=!1,this.localize=new N(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect();let s=this.value,a=this.value;i.focus(),t.preventDefault(),ii(e,{onMove:n=>{this.alpha=it(n/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect();let s=this.value,a=this.value;i.focus(),t.preventDefault(),ii(e,{onMove:n=>{this.hue=it(n/o*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:o,height:s}=e.getBoundingClientRect();let a=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ii(e,{onMove:(d,c)=>{this.saturation=it(d/o*100,0,100),this.brightness=it(100-c/s*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=it(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=it(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=it(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=it(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=it(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=it(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=it(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=it(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new G(t);if(!e.isValid)return null;const i=e.toHsl(),o={h:i.h,s:i.s*100,l:i.l*100,a:i.a},s=e.toRgb(),a=e.toHexString(),n=e.toHex8String(),d=e.toHsv(),c={h:d.h,s:d.s*100,v:d.v*100,a:d.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Os)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,o=100){const s=new G(`hsva(${t}, ${e}%, ${i}%, ${o/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(s=>s.trim()!==""),o=g`
      <div
        part="base"
        class=${L({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?g`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${yt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${L({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${yt({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${z(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${yt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${z(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?g`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${yt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${yt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${z(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${yt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":g`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Os?g`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?g`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(s=>{const a=this.parseColor(s);return a?g`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${z(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>this.selectSwatch(s)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(a.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${yt({backgroundColor:a.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${s}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:g`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${L({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${yt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};V.styles=[I,Nl];V.dependencies={"sl-button-group":Ce,"sl-button":W,"sl-dropdown":pt,"sl-icon":j,"sl-input":M,"sl-visually-hidden":No};r([k('[part~="base"]')],V.prototype,"base",2);r([k('[part~="input"]')],V.prototype,"input",2);r([k(".color-dropdown")],V.prototype,"dropdown",2);r([k('[part~="preview"]')],V.prototype,"previewButton",2);r([k('[part~="trigger"]')],V.prototype,"trigger",2);r([T()],V.prototype,"hasFocus",2);r([T()],V.prototype,"isDraggingGridHandle",2);r([T()],V.prototype,"isEmpty",2);r([T()],V.prototype,"inputValue",2);r([T()],V.prototype,"hue",2);r([T()],V.prototype,"saturation",2);r([T()],V.prototype,"brightness",2);r([T()],V.prototype,"alpha",2);r([l()],V.prototype,"value",2);r([Me()],V.prototype,"defaultValue",2);r([l()],V.prototype,"label",2);r([l()],V.prototype,"format",2);r([l({type:Boolean,reflect:!0})],V.prototype,"inline",2);r([l({reflect:!0})],V.prototype,"size",2);r([l({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);r([l()],V.prototype,"name",2);r([l({type:Boolean,reflect:!0})],V.prototype,"disabled",2);r([l({type:Boolean})],V.prototype,"hoist",2);r([l({type:Boolean})],V.prototype,"opacity",2);r([l({type:Boolean})],V.prototype,"uppercase",2);r([l()],V.prototype,"swatches",2);r([l({reflect:!0})],V.prototype,"form",2);r([l({type:Boolean,reflect:!0})],V.prototype,"required",2);r([di({passive:!1})],V.prototype,"handleTouchMove",1);r([x("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);r([x("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1);r([x("value")],V.prototype,"handleValueChange",1);V.define("sl-color-picker");var ec=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},ic=S`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*oc(t,e){if(t!==void 0){let i=0;for(const o of t)yield e(o,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sc(t,e,i=1){const o=e===void 0?0:t;e??=t;for(let s=o;i>0?s<e:e<s;s+=i)yield s}var J=class extends A{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new ec(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new N(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const o=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==o||i!==s)&&(t.scrollTo({left:o,top:s,behavior:uo()?"auto":"smooth"}),await gt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:o}=this,s=o?t/i:(t-e)/i+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",o=e.closest('[part~="pagination-item"]')!==null,s=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",a=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),a&&this.previous(),s&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var n;const d=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');d&&d.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const d of e){const c=d.target;c.toggleAttribute("inert",!d.isIntersecting),c.classList.toggle("--in-view",d.isIntersecting),c.setAttribute("aria-hidden",d.isIntersecting?"false":"true")}const i=e.find(d=>d.isIntersecting);if(!i)return;const o=this.getSlides({excludeClones:!1}),s=this.getSlides().length,a=o.indexOf(i.target),n=this.loop?a-this.slidesPerPage:a;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+s)%s,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const d=Number(i.target.getAttribute("data-clone"));this.goToSlide(d,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),o=t.slice(0,e);i.reverse().forEach((s,a)=>{const n=s.cloneNode(!0);n.setAttribute("data-clone",String(t.length-a-1)),this.prepend(n)}),o.forEach((s,a)=>{const n=s.cloneNode(!0);n.setAttribute("data-clone",String(a)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,o)=>{(o+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:o}=this,s=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!s.length)return;const n=o?(t+s.length)%s.length:it(t,0,s.length-i);this.activeSlide=n;const d=this.localize.dir()==="rtl",c=it(t+(o?i:0)+(d?i-1:0),0,a.length-1),u=a[c];this.scrollToSlide(u,uo()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,o=i.getBoundingClientRect(),s=t.getBoundingClientRect(),a=s.left-o.left,n=s.top-o.top;a||n?(this.pendingSlideChange=!0,i.scrollTo({left:a+i.scrollLeft,top:n+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),o=this.getCurrentPage(),s=this.canScrollPrev(),a=this.canScrollNext(),n=this.localize.dir()==="ltr";return g`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${L({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?g`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${L({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${L({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?g`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${oc(sc(i),d=>{const c=d===o;return g`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${L({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      id="tab-${d+1}"
                      aria-controls="slide-${d+1}"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${c?this.localize.term("slideNum",d+1):this.localize.term("goToSlide",d+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(d*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};J.styles=[I,ic];J.dependencies={"sl-icon":j};r([l({type:Boolean,reflect:!0})],J.prototype,"loop",2);r([l({type:Boolean,reflect:!0})],J.prototype,"navigation",2);r([l({type:Boolean,reflect:!0})],J.prototype,"pagination",2);r([l({type:Boolean,reflect:!0})],J.prototype,"autoplay",2);r([l({type:Number,attribute:"autoplay-interval"})],J.prototype,"autoplayInterval",2);r([l({type:Number,attribute:"slides-per-page"})],J.prototype,"slidesPerPage",2);r([l({type:Number,attribute:"slides-per-move"})],J.prototype,"slidesPerMove",2);r([l()],J.prototype,"orientation",2);r([l({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],J.prototype,"mouseDragging",2);r([k(".carousel__slides")],J.prototype,"scrollContainer",2);r([k(".carousel__pagination")],J.prototype,"paginationContainer",2);r([T()],J.prototype,"activeSlide",2);r([T()],J.prototype,"scrolling",2);r([T()],J.prototype,"dragging",2);r([di({passive:!0})],J.prototype,"handleScroll",1);r([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],J.prototype,"initializeSlides",1);r([x("activeSlide")],J.prototype,"handleSlideChange",1);r([x("slidesPerMove")],J.prototype,"updateSlidesSnap",1);r([x("autoplay")],J.prototype,"handleAutoplayChange",1);J.define("sl-carousel");var rc=(t,e)=>{let i=0;return function(...o){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...o)},e)}},Ls=(t,e,i)=>{const o=t[e];t[e]=function(...s){o.call(this,...s),i.call(this,o,...s)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,i=new WeakMap,o=a=>{for(const n of a.changedTouches)e.add(n.identifier)},s=a=>{for(const n of a.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),Ls(EventTarget.prototype,"addEventListener",function(a,n){if(n!=="scrollend")return;const d=rc(()=>{e.size?d():this.dispatchEvent(new Event("scrollend"))},100);a.call(this,"scroll",d,{passive:!0}),i.set(this,d)}),Ls(EventTarget.prototype,"removeEventListener",function(a,n){if(n!=="scrollend")return;const d=i.get(this);d&&a.call(this,"scroll",d,{passive:!0})})}})();var ac=S`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,gr=class extends A{connectedCallback(){super.connectedCallback()}render(){return g` <slot></slot> `}};gr.styles=[I,ac];gr.define("sl-carousel-item");var nc=S`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,he=class extends A{constructor(){super(...arguments),this.hasSlotController=new vt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return g`
      <div
        part="base"
        class=${L({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?g`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${z(this.target?this.target:void 0)}"
                rel=${z(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?g`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?g`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};he.styles=[I,nc];r([k("slot:not([name])")],he.prototype,"defaultSlot",2);r([T()],he.prototype,"renderType",2);r([l()],he.prototype,"href",2);r([l()],he.prototype,"target",2);r([l()],he.prototype,"rel",2);r([x("href",{waitUntilFirstUpdate:!0})],he.prototype,"hrefChanged",1);he.define("sl-breadcrumb-item");Ce.define("sl-button-group");var lc=S`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Zt=class extends A{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=g`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=g``;return this.initials?e=g`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=g`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,g`
      <div
        part="base"
        class=${L({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Zt.styles=[I,lc];Zt.dependencies={"sl-icon":j};r([T()],Zt.prototype,"hasError",2);r([l()],Zt.prototype,"image",2);r([l()],Zt.prototype,"label",2);r([l()],Zt.prototype,"initials",2);r([l()],Zt.prototype,"loading",2);r([l({reflect:!0})],Zt.prototype,"shape",2);r([x("image")],Zt.prototype,"handleImageChange",1);Zt.define("sl-avatar");var cc=S`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ve=class extends A{constructor(){super(...arguments),this.localize=new N(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const o=e.querySelector('[slot="separator"]');o===null?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),g`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ve.styles=[I,cc];Ve.dependencies={"sl-icon":j};r([k("slot")],Ve.prototype,"defaultSlot",2);r([k('slot[name="separator"]')],Ve.prototype,"separatorSlot",2);r([l()],Ve.prototype,"label",2);Ve.define("sl-breadcrumb");var dc=S`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Ht=class extends A{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return g`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?g`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Ht.styles=[I,dc];Ht.dependencies={"sl-icon":j};r([k(".animated-image__animated")],Ht.prototype,"animatedImage",2);r([T()],Ht.prototype,"frozenFrame",2);r([T()],Ht.prototype,"isLoaded",2);r([l()],Ht.prototype,"src",2);r([l()],Ht.prototype,"alt",2);r([l({type:Boolean,reflect:!0})],Ht.prototype,"play",2);r([x("play",{waitUntilFirstUpdate:!0})],Ht.prototype,"handlePlayChange",1);r([x("src")],Ht.prototype,"handleSrcChange",1);Ht.define("sl-animated-image");var hc=S`
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
`,yi=class extends A{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return g`
      <span
        part="base"
        class=${L({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};yi.styles=[I,hc];r([l({reflect:!0})],yi.prototype,"variant",2);r([l({type:Boolean,reflect:!0})],yi.prototype,"pill",2);r([l({type:Boolean,reflect:!0})],yi.prototype,"pulse",2);yi.define("sl-badge");const uc=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],pc=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],fc=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],mc=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],bc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],vc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],yc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],wc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_c=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xc=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],kc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Cc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$c=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Sc=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zc=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ac=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ec=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Tc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Oc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Lc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ic=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Pc=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Dc=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Rc=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Mc=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Fc=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Bc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Vc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Nc=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Hc=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Uc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Wc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qc=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zc=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jc=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],td=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ed=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],id=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],od=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],sd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],rd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],ad=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],nd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ld=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],cd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],dd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],hd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],ud=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],pd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],fd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],md=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],bd=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],gd=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],vd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],yd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],wd=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_d=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xd=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],kd=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Cd=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],$d=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Sd=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zd=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ad=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ed=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Td=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Od=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ld=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Id=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Pd=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dd=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rd=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Md=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Fd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Bd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Vd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Nd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Hd=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Ud=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Wd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],jd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Kd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Yd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Qd=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Zd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],th=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],eh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},ih=Object.freeze(Object.defineProperty({__proto__:null,backInDown:$c,backInLeft:Sc,backInRight:zc,backInUp:Ac,backOutDown:Ec,backOutLeft:Tc,backOutRight:Oc,backOutUp:Lc,bounce:uc,bounceIn:Ic,bounceInDown:Pc,bounceInLeft:Dc,bounceInRight:Rc,bounceInUp:Mc,bounceOut:Fc,bounceOutDown:Bc,bounceOutLeft:Vc,bounceOutRight:Nc,bounceOutUp:Hc,easings:vr,fadeIn:Uc,fadeInBottomLeft:Wc,fadeInBottomRight:qc,fadeInDown:jc,fadeInDownBig:Kc,fadeInLeft:Yc,fadeInLeftBig:Xc,fadeInRight:Gc,fadeInRightBig:Qc,fadeInTopLeft:Zc,fadeInTopRight:Jc,fadeInUp:td,fadeInUpBig:ed,fadeOut:id,fadeOutBottomLeft:od,fadeOutBottomRight:sd,fadeOutDown:rd,fadeOutDownBig:ad,fadeOutLeft:nd,fadeOutLeftBig:ld,fadeOutRight:cd,fadeOutRightBig:dd,fadeOutTopLeft:hd,fadeOutTopRight:ud,fadeOutUp:pd,fadeOutUpBig:fd,flash:pc,flip:md,flipInX:bd,flipInY:gd,flipOutX:vd,flipOutY:yd,headShake:fc,heartBeat:mc,hinge:Hd,jackInTheBox:Ud,jello:bc,lightSpeedInLeft:wd,lightSpeedInRight:_d,lightSpeedOutLeft:xd,lightSpeedOutRight:kd,pulse:gc,rollIn:Wd,rollOut:qd,rotateIn:Cd,rotateInDownLeft:$d,rotateInDownRight:Sd,rotateInUpLeft:zd,rotateInUpRight:Ad,rotateOut:Ed,rotateOutDownLeft:Td,rotateOutDownRight:Od,rotateOutUpLeft:Ld,rotateOutUpRight:Id,rubberBand:vc,shake:yc,shakeX:wc,shakeY:_c,slideInDown:Pd,slideInLeft:Dd,slideInRight:Rd,slideInUp:Md,slideOutDown:Fd,slideOutLeft:Bd,slideOutRight:Vd,slideOutUp:Nd,swing:xc,tada:kc,wobble:Cc,zoomIn:jd,zoomInDown:Kd,zoomInLeft:Yd,zoomInRight:Xd,zoomInUp:Gd,zoomOut:Qd,zoomOutDown:Zd,zoomOutLeft:Jd,zoomOutRight:th,zoomOutUp:eh},Symbol.toStringTag,{value:"Module"}));var oh=S`
  :host {
    display: contents;
  }
`,ct=class extends A{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=vr[this.easing])!=null?t:this.easing,o=(e=this.keyframes)!=null?e:ih[this.name],a=(await this.defaultSlot).assignedElements()[0];return!a||!o?!1:(this.destroyAnimation(),this.animation=a.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};ct.styles=[I,oh];r([Gr("slot")],ct.prototype,"defaultSlot",2);r([l()],ct.prototype,"name",2);r([l({type:Boolean,reflect:!0})],ct.prototype,"play",2);r([l({type:Number})],ct.prototype,"delay",2);r([l()],ct.prototype,"direction",2);r([l({type:Number})],ct.prototype,"duration",2);r([l()],ct.prototype,"easing",2);r([l({attribute:"end-delay",type:Number})],ct.prototype,"endDelay",2);r([l()],ct.prototype,"fill",2);r([l({type:Number})],ct.prototype,"iterations",2);r([l({attribute:"iteration-start",type:Number})],ct.prototype,"iterationStart",2);r([l({attribute:!1})],ct.prototype,"keyframes",2);r([l({attribute:"playback-rate",type:Number})],ct.prototype,"playbackRate",2);r([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ct.prototype,"handleAnimationChange",1);r([x("play")],ct.prototype,"handlePlayChange",1);r([x("playbackRate")],ct.prototype,"handlePlaybackRateChange",1);ct.define("sl-animation");Vs("fa",{resolver:t=>{const e=t.replace(/^fa[rbs]-/,"");let i="regular";return t.substring(0,4)==="fas-"&&(i="solid"),t.substring(0,4)==="fab-"&&(i="brands"),`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/${i}/${e}.svg`},mutator:t=>t.setAttribute("fill","currentColor")});Vs("keyrune",{resolver:t=>`https://cdn.jsdelivr.net/npm/keyrune@latest/svg/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")});const yr=S`
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
    padding-bottom: .5rem; }
  // sl-tab-group {
  //   --indicator-color: var(--sl-color-primary-500);
  //   --track-width: 0;
  //   --track-color: var(--sl-color-neutral-500);
  // }
  // sl-tab-group::part(tabs) {
  //   background: var(--Views-Recessed-Material-View);
  //   padding-top: .25rem;
  //   padding-bottom: .25rem;
  //   border-radius: 1rem;
  // }
  // sl-tab-group::part(nav) {
  //   width: fit-content !important;
  // }
  // sl-card::part(base) {
  //   border: 1px solid var(--windows-stroke-glass-specular);
  // }
  // sl-details::part(base),
  // sl-card::part(base),
  // sl-tab-panel::part(base) {
  //   border-radius: 1rem;
  //   background: var(--Windows-Glass);
  //   background-blend-mode: luminosity;

  //   /* Blur
  //   backdrop-filter: blur(50px);
  //   */
  //   backdrop-filter: blur(10px);
  // }
  // sl-details::part(base),
  // sl-tab-panel::part(base) {
  //   border: 0;
  // }
  sl-tab::part(base) {
    border-color: transparent;
    background: var(--Controls-Idle, linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.07));
    background-blend-mode: color-dodge, normal;
  }
  sl-tab::part(base):hover {
    border-color: var(--sl-color-primary-500);
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
    background: linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.2);
  }

  sl-tab::part(base):hover,
  sl-tab::part(base):focus {
    color: var(--sl-color-primary-600) !important;
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
  // sl-tab-panel {
  //   margin-top: .25rem;
  // }
  // sl-tab-panel::part(base) {
  //   padding: 1rem;
  // }
  sl-tag::part(base) {
    border-radius: 0.625rem;
    background: var(--Windows-Glass);
    background-blend-mode: color-dodge, lighten;
    color: rgba(255, 255, 255, 0.96) !important;
    text-align: center;
  }
  sl-tag.tab.tab--active:not(.tab--disabled)::part(base) {
    color: var(--sl-color-primary-600) !important;
  }
  sl-tag::part(remove-button) {
    color: rgba(255, 255, 255, 0.96) !important;
  }
  sl-tree-item::part(base) {
    color: var(--sl-color-neutral-950);
  }
  sl-input::part(base) {
    border-radius: 0.75rem;
    background: var(--Recessed, linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), rgba(208, 208, 208, 0.50));
    background-blend-mode: luminosity, color-burn;
    box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
  }
`;var sh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,qo=(t,e,i,o)=>{for(var s=o>1?void 0:o?rh(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&sh(e,i,s),s};let li=class extends Pt{constructor(){super(...arguments),this.isOpen=!1,this.message=""}open(t){this.message=t,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}render(){return this.isOpen?g`
      <sl-dialog
        label="About"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="text" outline href="${kt("about")}">
          Read More
        </sl-button>
        <sl-button slot="footer" variant="primary" @click=${this.close}>
          Thanks
        </sl-button>
      </sl-dialog>
    `:g``}};li.styles=[yr];qo([l({type:Boolean})],li.prototype,"isOpen",2);qo([l({type:String})],li.prototype,"message",2);li=qo([Ie("about-modal")],li);const wr=S`
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
  td {
    border-bottom: 1px solid var(--Separators-Separator, rgba(255, 255, 255, 0.07));
    background: var(--Views-Regular, linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%), rgba(214, 214, 214, 0.45));
    background-blend-mode: luminosity, color-burn;
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
`;var ah=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,Ne=(t,e,i,o)=>{for(var s=o>1?void 0:o?nh(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&ah(e,i,s),s};let ce=class extends Pt{constructor(){super(...arguments),this.aboutModalOpen=!1,this.title="adamjolicoeur.me",this.enableBack=!1,this.enableShare=!1,this.enableAbout=!1}openAboutModal(){this.aboutModalOpen=!0}closeAboutModal(){this.aboutModalOpen=!1}share(){navigator.share&&navigator.share({title:"Moonsilver Waypoints",text:"Tracking games of Magic: The Gathering and other TCG scores.",url:"https://www.adamjolicoeur.me"})}render(){return g`
      <nav>
        <div style="display: flex; align-items: center; margin-left: 1rem; width: 100%;">
          <img src="./assets/icons/icon_base.png" width="48px" alt="App icon" />
          ${document.title}
        </div>
        <sl-button-group label="Navigation" style="margin-right: 1rem;">
        ${this.enableBack?g`
          <sl-button variant="default" size="small" pill aria-label="Back to start" label="Back to start" href="${kt()}">
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-button>
          `:g``}
        ${this.enableShare?g`
          ${"share"in navigator?g`
                <sl-button variant="default" size="small" pill @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share
                </sl-button>
            `:null}
        `:g``}
        ${this.enableAbout?g`
            <sl-button variant="default" size="small" pill href="${kt("about")}">
              About
            </sl-button>
          `:g``}
        </sl-button-group>
        <about-modal
          .isOpen=${this.aboutModalOpen}
          message="Learn about this site, resources used to create it, and various disclaimers. If you like what you see, be sure to click the share button!"
          @confirm=${kt("about")}
          @close=${this.closeAboutModal}
        ></about-modal>
      </nav>
    `}};ce.styles=[wr,S`
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--Views-Recessed-Material-View);

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 50px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
      z-index: 10000;
    }
  `];Ne([T()],ce.prototype,"aboutModalOpen",2);Ne([l({type:String})],ce.prototype,"title",2);Ne([l({type:Boolean})],ce.prototype,"enableBack",2);Ne([l({type:Boolean})],ce.prototype,"enableShare",2);Ne([l({type:Boolean})],ce.prototype,"enableAbout",2);ce=Ne([Ie("app-header")],ce);var Is=Object.freeze,_r=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,Qi=(t,e,i,o)=>{for(var s=o>1?void 0:o?lh(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&_r(e,i,s),s},ch=(t,e)=>Is(_r(t,"raw",{value:Is(t.slice())})),Ps;let Le=class extends Pt{constructor(){super(...arguments),this.isDrawerOpen=!1,this.currentPathname=window.location.pathname}firstUpdated(){co.addEventListener("route-change",()=>{this.currentPathname=window.location.pathname,this._updateActiveLink()}),this._updateActiveLink()}_updateActiveLink(){this.navigationItems.forEach(t=>{const i=t.querySelector("sl-icon-button")?.getAttribute("href");(i?kt(i.startsWith("/")?i.substring(1):i):"")===this.currentPathname?t.classList.add("active"):t.classList.remove("active")})}toggleDrawer(){this.isDrawerOpen=!this.isDrawerOpen}closeDrawer(){this.isDrawerOpen=!1}render(){return g(Ps||(Ps=ch([`
      <div class="fab" style="position: fixed; bottom: 1rem; right: 1rem; z-index: 10000;">
        <sl-button variant="primary" size="large" circle @click=`,`>
          <sl-icon library="fa" name="fas-bars"></sl-icon>
        </sl-button>
      </div>
      <div class="navigation" style="position: fixed; bottom: 0; left: 0; right: 0;">
        <div class="navigation-item">
          <div class="icon-container">
            <div class="state-layer">
              <sl-icon-button href="/game-tracker" library="fa" name="fas-trophy" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="navigation-text">
            Tournament
          </div>
        </div>
        <div class="navigation-item">
          <div class="icon-container">
            <sl-icon-button @click=`,` library="fa" name="fas-bars" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
          </div>
          <div class="navigation-text">
            Menu
          </div>
        </div>
        <div class="navigation-item">
          <div class="icon-container">
            <div class="state-layer">
              <sl-icon-button href="/standard-tracker" library="fa" name="fas-dice-d20" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="navigation-text">
            1v1
          </div>
        </div>
      </div>
      <sl-drawer
       ?open=`," @sl-after-hide=",`
        label="Moonsilver Waypoints" placement="start" class="site-menu-drawer"
      >
        <sl-button href="/" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          Dashboard
        </sl-button>
        <sl-button href="/game-tracker" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          Tournament
        </sl-button>
        <sl-button href="/counter" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          Commander
        </sl-button>
        <sl-button href="/standard-tracker" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          1v1
        </sl-button>
        <sl-button href="/about" variant="neutral" size="large" pill style="width: 100%;">
          About
        </sl-button>
        <sl-button @click=`,` slot="footer" variant="primary" pill class="close-menu">Close</sl-button>
      </sl-drawer>
      <script>
        const drawer = document.querySelector('.site-menu-drawer');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector('sl-button.close-menu[variant="primary"]');
        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      <\/script>
      <style>
        .navigation {
          display: flex;
          padding: 0rem 0.5rem;
          padding-bottom: 0.5rem;
          align-items: flex-start;
          gap: 0.5rem;
          align-self: stretch;
          background: #211F26;
        }
        @media (min-width: 768px) {
          .navigation {
            justify-content: center;
          }
        }
        .navigation-item {
          display: flex;
          padding: 0.75rem 0rem 1rem 0rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          flex: 1 0 0;
          border-radius: 1rem;
          border-color: transparent;
        }
        @media (min-width: 768px) {
          .navigation-item {
            flex: 0;
          }
        }
        .navigation-item:hover .icon-container,
        .navigation-item:focus-visible .icon-container,
        .navigation-item:focus .icon-container {
          box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
          background: linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.2);
        }
        .navigation-item:hover .navigation-text,
        .navigation-item:hover .navigation-icon,
        .navigation-item:focus .navigation-text,
        .navigation-item:focus .navigation-icon,
        .navigation-item:active .navigation-text,
        .navigation-item:active .navigation-icon {
          color: var(--sl-color-primary-600) !important;
        }
        .navigation-text {
          color: #CAC4D0;
          text-align: center;
          align-self: stretch;
          font-size: .75rem;
        }
        .icon-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 1rem;
          min-height: 45px;
        }
        .state-layer {
          display: flex;
          width: 2rem;
          height: 2rem;
          padding: 0.25rem 1.25rem;
          justify-content: center;
          align-items: center;
        }
        .navigation-icon {
          flex-shrink: 0;
        }
        .navigation sl-icon::part(svg) {
          fill: var(sl-color-neutral-400) !important;
        }
      </style>
    `])),this.toggleDrawer,this.toggleDrawer,this.isDrawerOpen,this.closeDrawer,this.closeDrawer)}};Le.styles=S`
    @media only screen and (max-width: 768px) {
      .navigation {
        display: none;
      }
      .fab {
        display: block !important;
      }
    }
    .fab {
      display: none;
    }
    /* Your navigation styles */
    .navigation-item.active sl-icon-button {
      --icon-color: blue; /* Example active style */
    }
    .navigation-item.active .navigation-text,
    .navigation-item.active .navigation-icon {
      color: var(--sl-color-primary-600);
    }
    sl-button sl-icon[slot="prefix"] {
      background: #fff;
      border-radius: 50%;
      padding: .25rem;
    }
  `;Qi([T()],Le.prototype,"isDrawerOpen",2);Qi([T()],Le.prototype,"currentPathname",2);Qi([Xr(".navigation-item")],Le.prototype,"navigationItems",2);Le=Qi([Ie("app-navigation")],Le);const dh=S`
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
    font: 700 14px/1 var(--sl-font-sans);
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
`,hh=S`
  sl-alert::part(base) {
    color: var(--sl-color-neutral-950);
  }
`,uh=S`
  p.card-icon {
    display: flex !important;
    justify-content: center;
  }
  p.card-icon sl-icon-button {
    background: rgba(255, 255, 255, .8);
    border-radius: 50%;
    padding: .5rem;
    font-size: 4rem;
  }
`;var ph=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,xr=(t,e,i,o)=>{for(var s=o>1?void 0:o?fh(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&ph(e,i,s),s};let Ni=class extends Pt{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"Moonsilver Waypoints",text:"Tracking games of Magic: The Gathering and other TCG scores.",url:"https://www.adamjolicoeur.me"})}render(){return g`
      <!-- <app-header ?enableShare="${!0}" ?enableAbout=${!0}></app-header> -->
      <main style="margin-bottom: 2.5rem;">
        <h1>Moonsilver Waypoints</h1>
        <content class="main">
          <h2>Select a gameplay method to get started</h2>
          <p>
            Click on the "features" button of each item to learn more.
          </p>
          <section style="display: flex; margin-top: 2rem; align-items: start; align-content: flex-start; gap: 1rem 1.5rem; align-self: stretch; justify-content: center; flex-wrap: wrap;">
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/bcore.svg"
                alt="Image of a stack of cards"
                style="width: 50%; height: 10rem;"
              />
              <strong>Tournament</strong>
              <br />
              <br />
              Running a tournament? Then this part is for you. Track Wins, Losses, Draws and match history.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Custom player name entry</li>
                  <li>Track Wins, Losses, and Draws</li>
                  <li>Ranking by Points and Win Percentage</li>
                  <li>Individual Match Results history</li>
                  <li>Export gameplay information to CSV</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${kt("game-tracker")}" style="width: 100%;">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/cmd.svg"
                alt="Commander logo"
                style="width: 50%; height: 10rem;"
              />
              <strong>Commander</strong>
              <br />
              <br />
              For use with 4 player games, complete with a results table, standings, match log, and personalization.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Custom player name entry</li>
                  <li>Track Wins, Losses, and Draws</li>
                  <li>Match log for each round</li>
                  <li>Export gameplay information to CSV</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${kt("counter")}" style="width: 100%;">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/xlcu.svg"
                alt="Generic image"
                style="width: 50%; height: 10rem;"
              />
              <strong>1v1</strong>
              <br />
              <br />
              For those playing 1v1 games. Simple life counter that adapts to your device orientation for use on monitors, tablets, and phones.
              <sl-details summary="Features" class="gameplay-features">
                <sl-icon library="fa" name="fas-dice-d20" slot="expand-icon"></sl-icon>
                <sl-icon library="fa" name="fas-dice-d20" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <ul>
                  <li>Set starting life total</li>
                  <li>Simple +1 or -1 counter</li>
                  <li>Match log for each round</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${kt("standard-tracker")}" style="width: 100%;">Start</sl-button>
            </sl-card>
          </section>
        </content>
      </main>
      <app-navigation></app-navigation>
    `}};Ni.styles=[wr,yr,dh,hh,uh,S`
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
      sl-card.dashboard-card {
        max-width: 300px;
      }
      sl-card::part(image) {
        background-color: var(--sl-color-neutral-800);
        display: flex;
        justify-content: center;
      }
      sl-card.work-in-progress::part(base) {
        border-color: var(--sl-color-warning-600);
      }
      sl-card::part(base) {
        background-color: transparent;
      }
      sl-card::part(body) {
        background-color: var(--sl-panel-background-color);
      }
      sl-card::part(footer) {
          padding: .75rem 1rem;
      }
      .gameplay-features {
        margin-top: .75rem;
      }
      .gameplay-features ul {
        margin-block-start: 0 !important;
        padding-inline-start: 1rem !important;
      }
      sl-details.gameplay-features::part(base) {
        background-color: transparent;
      }
      sl-details.gameplay-features::part(header) {
        padding: .5rem;
      }
  `];xr([l()],Ni.prototype,"message",2);Ni=xr([Ie("app-home")],Ni);var mh=Object.getOwnPropertyDescriptor,bh=(t,e,i,o)=>{for(var s=o>1?void 0:o?mh(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=n(s)||s);return s};let ko=class extends Pt{constructor(){super(),co.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return co.render()}};ko.styles=S`
    main, .main {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    @media (max-width: 800px) {
      app-standings,
      app-counter,
      app-about,
      app-home,
      app-standard {
        padding-top: 0 !important;
      }
    }
    @media (max-width: 1200px) {
      app-standings,
      app-counter,
      app-about,
      app-home,
      app-standard {
        display: block;
        padding-top: 2rem;
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
      }
    }
    @media only screen and (min-width: 770px) {
      app-standings,
      app-standard,
      app-standard main {
        padding-top: 0 !important;
        height: calc(100vh - 8rem);
      }
    }
  `;ko=bh([Ie("my-app")],ko);S`

`;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.navigator.standalone&&document.body.classList.add("safari-ios.safari-ios-message");function gh(){const t=navigator.userAgent;return/firefox/i.test(t)?"Firefox":/edg/i.test(t)?"Edge":/chrome/i.test(t)&&!/edg/i.test(t)?"Chrome":/safari/i.test(t)&&!/chrome/i.test(t)?"Safari":/opr|opera/i.test(t)?"Opera":"Unknown"}console.log(`User is using: ${gh()}`);export{K as E,yr as a,T as b,kt as c,hh as d,k as e,Vs as f,S as i,l as n,Pt as r,wr as s,Ie as t,g as x};
//# sourceMappingURL=index-Dds4aBYs.js.map
