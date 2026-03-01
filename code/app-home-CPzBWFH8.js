const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["code/app-about-BpgEOYcV.js","code/shoelace-styles-DuBzW-jG.js","code/app-counter-BLbybrk2.js","code/table-styles-DrheAqdc.js","code/alert-styles-cAzKvmdU.js","code/fab-CVo2YgrU.js","code/counter-styles-D82i61Ku.js","code/app-game-tracker-FWkdIcb0.js","code/standings-tracker-BMGZcuqv.js","code/app-standard-CS5GbWAZ.js","code/app-roll-dice-BYRJ5ND1.js"])))=>i.map(i=>d[i]);
import{f as W,t as _,i as k,b as l,a as $,r as E,d as B,c as N,n as b,s as M}from"./shoelace-styles-DuBzW-jG.js";import{a as V}from"./alert-styles-cAzKvmdU.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let F;function q(r){return(t,o)=>W(t,o,{get(){return(this.renderRoot??(F??=document.createDocumentFragment())).querySelectorAll(r)}})}const H="modulepreload",G=function(r){return"/"+r},A={},m=function(t,o,a){let e=Promise.resolve();if(o&&o.length>0){let s=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),L=n?.nonce||n?.getAttribute("nonce");e=s(o.map(d=>{if(d=G(d),d in A)return;A[d]=!0;const g=d.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${y}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":H,g||(p.as="script"),p.crossOrigin="",p.href=d,L&&p.setAttribute("nonce",L),document.head.appendChild(p),g)return new Promise((I,z)=>{p.addEventListener("load",I),p.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return e.then(s=>{for(const n of s||[])n.status==="rejected"&&i(n.reason);return t().catch(i)})},O=Symbol.for("app-tools::log::1.x");globalThis[O]={setDebug:Y,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Y(r){globalThis[O].debug=!!r}function K(r,t){globalThis[O].debug&&(console.groupCollapsed(`[app-tools] ${r}`),t&&console.log(t),console.groupEnd())}function J(r){return(t,o)=>{K(`${r}: ${t}`,o)}}const u=J("router");class Q extends Event{constructor(t){super("route-changed"),this.context=t}}class X extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(o=>({...o,urlPattern:new URLPattern({pathname:o.path,baseURL:window.location.href,search:"*",hash:"*"})})),u("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return u(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const o of this.routes){const a=o.urlPattern.exec(t);if(a){const{title:e}=o,i=Object.fromEntries(new URLSearchParams(t.search)),s=a?.pathname?.groups??{};return this.context={url:t,title:typeof e=="function"?e({params:s,query:i,url:t}):e,params:s,query:i},o}}return u(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Q(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const o=t.composedPath().find(i=>i.tagName==="A");if(!o||!o.href)return;const a=new URL(o.href);if(this.url.href===a.href||a.host!==window.location.host||o.hasAttribute("download")||o.href.includes("mailto:"))return;const e=o.getAttribute("target");e&&e!==""&&e!=="_self"||(t.preventDefault(),this.navigate(a))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,o={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let a=this._matchRoute(t)||this._matchRoute(this.fallback);u(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let e=this._collectPlugins(a),i;do{i=!1;for(const s of e)try{const n=await s?.shouldNavigate?.(this.context);if(n&&!await n.condition()){t=new URL(n.redirect,this.baseUrl),a=this._matchRoute(t)||this._matchRoute(this.fallback),e=this._collectPlugins(a),u("Redirecting",{context:this.context,route:this.route}),i=!0;break}}catch(n){throw u(`Plugin "${s.name}" error on shouldNavigate hook`,n),n}}while(i);if(this.route=a,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const s of e)try{await s?.beforeNavigation?.(this.context)}catch(n){throw u(`Plugin "${s.name}" error on beforeNavigation hook`,n),n}o?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):o.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const s of e)try{await s?.afterNavigation?.(this.context)}catch(n){throw u(`Plugin "${s.name}" error on afterNavigation hook`,n),n}}}function Z(r){return{name:"appName",beforeNavigation:t=>{t.title=`${r} ${t.title}`}}}function w(r){return{name:"lazy",beforeNavigation:()=>{r()}}}const T="app-tools",U="1.x",D="router-focus",tt="position:absolute;top:0;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);margin:-1px;",et={name:"resetFocus",afterNavigation:({title:r})=>{let t=document.querySelector(`div[${T}][version="${U}"]#${D}`);t||(t=document.createElement("div"),t.setAttribute(T,""),t.setAttribute("version",U),t.id=D,t.setAttribute("tabindex","-1"),t.setAttribute("aria-live","polite"),t.setAttribute("style",tt),t.addEventListener("blur",()=>{t?.style.setProperty("display","none")}),document.body.insertBefore(t,document.body.firstChild)),t.textContent=r,t.style.removeProperty("display"),t.focus()}},rt={name:"scrollToTop",beforeNavigation:()=>{window.scrollTo(0,0)}},ot={name:"checkServiceWorkerUpdate",beforeNavigation:()=>{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(r=>{r&&r.update()})}};var at=Object.getOwnPropertyDescriptor,st=(r,t,o,a)=>{for(var e=a>1?void 0:a?at(t,o):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(e=s(e)||e);return e};let C=class extends k{render(){return l`
        <h1>You are offline</h1>
        <p>Reconnect to a network and refresh the page</p>
      `}};C=st([_("offline-page")],C);var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,R=(r,t,o,a)=>{for(var e=a>1?void 0:a?nt(t,o):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(e=(a?s(t,o,e):s(e))||e);return a&&e&&it(t,o,e),e};let f=class extends k{constructor(){super(...arguments),this.isDrawerOpen=!1,this.currentPathname=window.location.pathname}firstUpdated(){ct.addEventListener("route-change",()=>{this.currentPathname=window.location.pathname,this._updateActiveLink()}),this._updateActiveLink()}_updateActiveLink(){this.navigationItems.forEach(r=>{const o=r.querySelector("sl-icon-button")?.getAttribute("href");(o?c(o.startsWith("/")?o.substring(1):o):"")===this.currentPathname?r.classList.add("active"):r.classList.remove("active")})}render(){return l`
      <div class="navbar">
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/bcore.svg" href="/game-tracker" class="navbar-icon" style="font-size: 1.75rem;" alt="Link to game tracker"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Tournament
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/cmd.svg" href="/counter" class="navbar-icon" style="font-size: 1.75rem;" alt="Link to counter"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Commander
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/wizards-of-the-coast-brands.svg" href="/" class="navbar-icon" style="font-size: 1.75rem;" alt="Link to dashboard"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Dashboard
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="assets/svg/shield-halved-solid.svg" href="/standard-tracker" class="navbar-icon" style="font-size: 1.75rem;" alt="Link to match play"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Match Play
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/dice-d20-solid.svg" href="/app-roll-dice" class="navbar-icon" style="font-size: 1.75rem;" alt="Link to dice role"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Roll
          </div>
        </div>
      </div>
    `}};f.styles=$`
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
      background: var(--sl-color-neutral-0);
      border-radius: 50%;
      padding: .25rem;
    }

    .navbar {
      display: flex;
      justify-content: center;
      padding: 0rem 0.5rem;
      align-items: flex-start;
      gap: 0.5rem;
      background: var(--sl-color-neutral-100);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .navbar-item {
      display: flex;
      padding: 1rem 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      flex: 1 0 0;
    }
    .item-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      background: transparent;
      border: 2px solid transparent;
    }
    .navbar-item.active .item-container {
      background: var(--sl-color-primary-100) !important;
      border: 2px solid var(--sl-color-primary-600);
    }
    .navbar-item:hover .item-container,
    .navbar-item.active:hover .item-container {
      background: var(--sl-color-neutral-200) !important;
    }
    .item-container-label {
      align-self: stretch;
      color: var(--sl-color-neutral-950);
      text-align: center;
      @media (max-width: 950px) {
        display: none !important;
      }
    }
    .state-layer {
      display: flex;
      width: 4rem;
      @media (max-width: 950px) {
        width: 2rem !important;
      }
      height: 2rem;
      padding: 0.25rem 1.25rem;
      justify-content: center;
      align-items: center;
    }
    .navbar-icon {
      flex-shrink: 0;
    }
  `;R([E()],f.prototype,"isDrawerOpen",2);R([E()],f.prototype,"currentPathname",2);R([q(".navbar-item")],f.prototype,"navigationItems",2);f=R([_("app-navigation")],f);globalThis.URLPattern||await m(()=>import("./index-DPyTNidZ.js"),[]);const lt="/",ct=new X({plugins:[ot,rt,et,Z("Moonsilver Waypoints -")],routes:[{path:c(),title:"Home",render:()=>(console.log("Router: Rendering app-home"),l`<app-home></app-home>`)},{path:c("about"),title:"About",plugins:[w(()=>m(()=>import("./app-about-BpgEOYcV.js"),__vite__mapDeps([0,1])))],render:()=>l`<app-about></app-about>`},{path:c("counter"),title:"EDH Event Tracker",plugins:[w(()=>m(()=>import("./app-counter-BLbybrk2.js"),__vite__mapDeps([2,1,3,4,5,6])))],render:()=>l`<app-counter></app-counter>`},{path:c("game-tracker"),title:"Tournament Tracker",plugins:[w(()=>m(()=>import("./app-game-tracker-FWkdIcb0.js"),__vite__mapDeps([7,1,8,3,4])))],render:()=>l`<app-standings></app-standings>`},{path:c("standard-tracker"),title:"Standard Counter",plugins:[w(()=>m(()=>import("./app-standard-CS5GbWAZ.js"),__vite__mapDeps([9,1,3,4,6])))],render:()=>l`<app-standard></app-standard>`},{path:"offline.html",title:"Offline",render:()=>(console.log("Router: Rendering offline-page"),l`<offline-page></offline-page>`)},{path:c("app-roll-dice"),title:"Roll Dice",plugins:[w(()=>m(()=>import("./app-roll-dice-BYRJ5ND1.js"),__vite__mapDeps([10,1,4])))],render:()=>l`<app-roll-dice></app-roll-dice>`}]});function c(r){var t=lt;return t.startsWith("/")||(t="/"+t),r&&(t=t+r),t}B("fa",{resolver:r=>{const t=r.replace(/^fa[rbs]-/,"");let o="regular";return r.substring(0,4)==="fas-"&&(o="solid"),r.substring(0,4)==="fab-"&&(o="brands"),`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/${o}/${t}.svg`},mutator:r=>r.setAttribute("fill","currentColor")});var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,S=(r,t,o,a)=>{for(var e=a>1?void 0:a?pt(t,o):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(e=(a?s(t,o,e):s(e))||e);return a&&e&&dt(t,o,e),e};let x=class extends k{constructor(){super(...arguments),this.isOpen=!1,this.message=""}open(r){this.message=r,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}render(){return this.isOpen?l`
      <sl-dialog
        label="About"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="text" outline href="${c("about")}">
          Read More
        </sl-button>
        <sl-button slot="footer" variant="primary" @click=${this.close}>
          Thanks
        </sl-button>
      </sl-dialog>
    `:l``}};x.styles=[N];S([b({type:Boolean})],x.prototype,"isOpen",2);S([b({type:String})],x.prototype,"message",2);x=S([_("about-modal")],x);var ut=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,v=(r,t,o,a)=>{for(var e=a>1?void 0:a?ht(t,o):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(e=(a?s(t,o,e):s(e))||e);return a&&e&&ut(t,o,e),e};let h=class extends k{constructor(){super(...arguments),this.aboutModalOpen=!1,this.title="adamjolicoeur.me",this.enableBack=!1,this.enableShare=!1,this.enableAbout=!1}openAboutModal(){this.aboutModalOpen=!0}closeAboutModal(){this.aboutModalOpen=!1}share(){navigator.share&&navigator.share({title:"Moonsilver Waypoints",text:"Tracking games of Magic: The Gathering and other TCG scores.",url:"https://www.adamjolicoeur.me"})}render(){return l`
      <nav>
        <div style="display: flex; align-items: center; margin-left: 1rem; width: 100%;">
          <img src="./assets/icons/icon_base.png" width="48px" alt="App icon" />
          ${document.title}
        </div>
        <sl-button-group label="Navigation" style="margin-right: 1rem;">
        ${this.enableBack?l`
          <sl-button variant="default" size="small" pill aria-label="Back to start" label="Back to start" href="${c()}">
            <sl-icon slot="prefix" name="house"></sl-icon>
            Home
          </sl-button>
          `:l``}
        ${this.enableShare?l`
          ${"share"in navigator?l`
                <sl-button variant="default" size="small" pill @click="${this.share}">
                  <sl-icon slot="prefix" name="share"></sl-icon>
                    Share
                </sl-button>
            `:null}
        `:l``}
        ${this.enableAbout?l`
            <sl-button variant="default" size="small" pill href="${c("about")}">
              About
            </sl-button>
          `:l``}
        </sl-button-group>
        <about-modal
          .isOpen=${this.aboutModalOpen}
          message="Learn about this site, resources used to create it, and various disclaimers. If you like what you see, be sure to click the share button!"
          @confirm=${c("about")}
          @close=${this.closeAboutModal}
        ></about-modal>
      </nav>
    `}};h.styles=[M,$`
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
  `];v([E()],h.prototype,"aboutModalOpen",2);v([b({type:String})],h.prototype,"title",2);v([b({type:Boolean})],h.prototype,"enableBack",2);v([b({type:Boolean})],h.prototype,"enableShare",2);v([b({type:Boolean})],h.prototype,"enableAbout",2);h=v([_("app-header")],h);const bt=$`
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
`,gt=$`
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
`;var mt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,j=(r,t,o,a)=>{for(var e=a>1?void 0:a?ft(t,o):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(e=(a?s(t,o,e):s(e))||e);return a&&e&&mt(t,o,e),e};let P=class extends k{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){}share(){navigator.share&&navigator.share({title:"Moonsilver Waypoints",text:"Tracking games of Magic: The Gathering and other TCG scores.",url:"https://www.adamjolicoeur.me"})}render(){return l`
      <!-- <app-header ?enableShare="${!0}" ?enableAbout=${!0}></app-header> -->
      <main style="margin-bottom: 2.5rem;">
        <h1>Moonsilver Waypoints</h1>
        <content class="main">
          <h2>Select a gameplay method to get started</h2>
          <p>
            Click on the "features" button of each item to learn more.
          </p>
          <section style="
              display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    " class="flex">
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/bcore.svg"
                alt="Image of a stack of cards"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Tournament</strong></div>
              <sl-details summary="Features" class="gameplay-features">
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="expand-icon"></sl-icon>
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <p>
                Running a tournament? Then this part is for you. Track Wins, Losses, Draws and match history.
                </p>
                <ul>
                  <li>Custom player name entry</li>
                  <li>Track Wins, Losses, and Draws</li>
                  <li>Ranking by Points and Win Percentage</li>
                  <li>Individual Match Results history</li>
                  <li>Export gameplay information to CSV</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${c("game-tracker")}">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/cmd.svg"
                alt="Commander logo"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Commander</strong></div>
              <sl-details summary="Features" class="gameplay-features">
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="expand-icon"></sl-icon>
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <p>
                For use with 4 player games, complete with a results table, standings, match log, and personalization.
                </p>
                <ul>
                  <li>Custom player name entry</li>
                  <li>Track Wins, Losses, and Draws</li>
                  <li>Match log for each round</li>
                  <li>Export gameplay information to CSV</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${c("counter")}">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="assets/svg/shield-halved-solid.svg"
                alt="Generic image"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Match Play</strong></div>
              <sl-details summary="Features" class="gameplay-features">
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="expand-icon"></sl-icon>
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <p>
                For those playing 1v1 games. Simple life counter that adapts to your device orientation for use on monitors, tablets, and phones.
                </p>
                <ul>
                  <li>Set starting life total</li>
                  <li>Simple +1 or -1 counter</li>
                  <li>Match log for each round</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${c("standard-tracker")}">Start</sl-button>
            </sl-card>
            <sl-card class="dashboard-card">
              <img
                slot="image"
                src="/assets/svg/dice-d20-solid.svg"
                alt="A die"
                style="width: 50%; height: 10rem;"
              />
              <div slot="header"><strong>Dice Roller</strong></div>
              <sl-details summary="Features" class="gameplay-features">
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="expand-icon"></sl-icon>
              <sl-icon src="/assets/svg/dice-d20-solid.svg" slot="collapse-icon" style="rotate: 180deg;"></sl-icon>
                <p>
                A simple D20 dice roller with history.
                </p>
                <ul>
                  <li>Roll a D20</li>
                  <li>View roll history</li>
                </ul>
              </sl-details>
              <br />
              <sl-button variant="primary" pill href="${c("roll-dice")}">Start</sl-button>
            </sl-card>
          </section>
        </content>
      </main>
      <app-navigation></app-navigation>
    `}};P.styles=[M,N,bt,V,gt,$`
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 1fr;
        gap: 2rem;
      }
      .grid sl-card,
      .flex sl-card {
        position: relative;
      }
      .grid sl-card::part(base),
      .flex sl-card::part(base) {
        height: 100%;
      }
      .grid sl-card::part(body),
      .flex sl-card::part(body) {
        flex: 1 1 auto;
      }
      .grid sl-card > sl-button,
      .flex sl-card > sl-button {
        padding-top: 2rem;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
      }
        .dashboard-card { width: 100%; max-width: 250px;}
        .dashboard-card p {
        height: 100%;}
      sl-card::part(image) {
        background-color: var(--sl-color-neutral-100);
        display: flex;
        justify-content: center;
      }
      sl-card.work-in-progress::part(base) {
        border-color: var(--sl-color-warning-600);
      }
      sl-card::part(base) {
        background-color: transparent;
        height: 100%;
      }
      sl-card::part(body) {
        background-color: var(--sl-panel-background-color);
        flex: 1 1 auto;
      }
      sl-card::part(footer) {
          padding: .75rem 1rem;
      }
      .gameplay-features {
        margin-top: .75rem;
        margin-bottom: 2rem;
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
  `];j([b()],P.prototype,"message",2);P=j([_("app-home")],P);export{c as a,ct as r};
//# sourceMappingURL=app-home-CPzBWFH8.js.map
