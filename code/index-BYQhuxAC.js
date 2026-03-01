import{a as p,i as u,t as f}from"./shoelace-styles-DuBzW-jG.js";import{r as l}from"./app-home-CPzBWFH8.js";import"./alert-styles-cAzKvmdU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();Notification.permission!=="granted"&&Notification.requestPermission().then(e=>{console.log(e==="granted"?"Notification Permission Granted":"Notification Permission not granted")}).catch(e=>{console.error("Error requesting notification permission:",e)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"./"}).then(e=>{console.log("Service worker registered:",e),e.addEventListener("updatefound",()=>{console.log("Service Worker update found!");const t=e.installing;t&&t.addEventListener("statechange",()=>{t.state==="installed"&&(console.log("New service worker is installed, letting user know."),c(e))})}),e.waiting&&(console.log("There is a waiting service worker."),c(e))}).catch(e=>{console.error("Service worker registration failed:",e)})});let a;window.addEventListener("load",()=>{const e=document.querySelector(".install-dialog");if(e){e.addEventListener("sl-request-close",()=>{console.log("Modal close requested")});const t=e.querySelector(".install-button");t&&t.addEventListener("click",()=>{a&&(a.prompt(),a.userChoice.then(r=>{r.outcome==="accepted"?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),a=null,e.hide()}))})}});window.addEventListener("beforeinstallprompt",e=>{if(console.log("PWA is considered installable by the browser."),e.preventDefault(),a=e,!window.matchMedia("(display-mode: standalone)").matches&&!sessionStorage.getItem("installModalShown")){const t=document.querySelector(".install-dialog");t&&(t.show(),sessionStorage.setItem("installModalShown","true"))}});window.addEventListener("appinstalled",()=>{console.log("PWA installed!")});function c(e){console.log("Attempting to show the update ui to the user.");const t=document.querySelector(".update-dialog");if(t){t.show();const r=t.querySelector(".update-button");r&&r.addEventListener("click",()=>{e.waiting&&(console.log("Telling waiting service worker to skip waiting."),e.waiting.postMessage({type:"SKIP_WAITING"})),t.hide()})}}var g=Object.getOwnPropertyDescriptor,m=(e,t,r,s)=>{for(var o=s>1?void 0:s?g(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=n(o)||o);return o};let d=class extends u{constructor(){super(),l.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return l.render()}};d.styles=p`
    main, .main {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    app-navigation {
      display: flex;
      justify-content: center;
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
        // max-width: 1200px;
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
  `;d=m([f("my-app")],d);p`

`;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.navigator.standalone&&document.body.classList.add("safari-ios.safari-ios-message");function h(){const e=navigator.userAgent;return/firefox/i.test(e)?"Firefox":/edg/i.test(e)?"Edge":/chrome/i.test(e)&&!/edg/i.test(e)?"Chrome":/safari/i.test(e)&&!/chrome/i.test(e)?"Safari":/opr|opera/i.test(e)?"Opera":"Unknown"}console.log(`User is using: ${h()}`);
//# sourceMappingURL=index-BYQhuxAC.js.map
