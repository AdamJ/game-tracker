importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js");self.addEventListener("widgetinstall",t=>{t.waitUntil(a(t))});self.addEventListener("widgetresume",t=>{t.waitUntil(a(t))});self.addEventListener("widgetclick",t=>{t.action=="updateName"&&t.waitUntil(s(t))});self.addEventListener("widgetuninstall",t=>{});const a=async t=>{const i=t.widget.definition,e={template:JSON.stringify(await(await fetch(i.msAcTemplate)).json()),data:JSON.stringify(await(await fetch(i.data)).json())};await self.widgets.updateByInstanceId(t.instanceId,e)},s=async t=>{const i=t.data.json().name,e=t.widget.definition,n={template:JSON.stringify(await(await fetch(e.msAcTemplate)).json()),data:JSON.stringify({name:i})};await self.widgets.updateByInstanceId(t.instanceId,n)};workbox.precaching.precacheAndRoute([{"revision":"d8ae87fb6bf1a8a3a3ae8ff848051019","url":"404.html"},{"revision":"1ba8834526320cbf8e3ec711bf80ac4e","url":"assets/icons/192x192.png"},{"revision":"444f43ea0c16ce09a538576d8244316a","url":"assets/icons/24x24.png"},{"revision":"025fe33ae4b29fcf786214e44b411040","url":"assets/icons/48x48.png"},{"revision":"d879bd82e07892719d4b3f6b5671d722","url":"assets/icons/512x512.png"},{"revision":"1ba8834526320cbf8e3ec711bf80ac4e","url":"assets/icons/icon_192.png"},{"revision":"8f7a626cfb54541c6ed2bf3335281f2f","url":"assets/icons/icon_24.png"},{"revision":"561ac368168c3c1608ab74a4934d7d9e","url":"assets/icons/icon_48.png"},{"revision":"d879bd82e07892719d4b3f6b5671d722","url":"assets/icons/icon_512.png"},{"revision":"b5e5e94ea21bafe3f721a54118e74910","url":"assets/icons/icon_96.png"},{"revision":"d137e0e3bf2aaa62f6af407a0fc67bad","url":"assets/mana.css"},{"revision":"85dbcb6470e7f2bb2aa450c06c830280","url":"assets/PWABuilder Report Card.png"},{"revision":"ee332fabed8b56f4aae86902c18146a2","url":"assets/readme/build-output.png"},{"revision":"be7f5a61d03a119f2e297d15df7dfab2","url":"assets/readme/codespace-button.png"},{"revision":"969196419238157c3d673545c2daed32","url":"assets/readme/copy-starter.png"},{"revision":"65897273261e49c6c9148df875e13e4d","url":"assets/readme/git-clone.png"},{"revision":"cd10ec0be4be4b10195986d075904542","url":"assets/readme/intro.png"},{"revision":"1b40f28a11a334cc90e6802070b9eae1","url":"assets/readme/local-button.png"},{"revision":"184b8b88c43aa759948968f69251200e","url":"assets/readme/new-repo-from-starter.png"},{"revision":"a5a5ef96823c312160626df383d0925d","url":"assets/readme/pwa-running.png"},{"revision":"480b506d1a2a832131525fd4d0fd7478","url":"assets/readme/pwa-starter-overview.png"},{"revision":"865934771530a3b8f9e10aae8d0423d9","url":"assets/readme/static-web-app-slash.png"},{"revision":"2d67dfcbdc3c8c6f8b5fefcd0016021f","url":"assets/readme/use-this-template.png"},{"revision":"fc3d41a79144a5bb00a423b78ec73c1f","url":"assets/readme/vscode-in-browser.png"},{"revision":"fc226a4009018d6ca75526f8e27be91f","url":"assets/screenshots/screen_wide.png"},{"revision":"36ba5718a0682be5cad9bd094a760870","url":"assets/screenshots/screen.png"},{"revision":"073d4c94818535ae6522dacb941d94a0","url":"assets/screenshots/screen2.png"},{"revision":"03b1223edc00c2a95f9390b19ecb54e3","url":"assets/screenshots/screen3.png"},{"revision":"bd2d64ab3b867df1017d43ec20b73cca","url":"assets/screenshots/widget-screen.png"},{"revision":null,"url":"code/app-about-dXxaDVjC.js"},{"revision":null,"url":"code/app-counter-DbbtnDVC.js"},{"revision":null,"url":"code/app-game-tracker-DIwPPxL4.js"},{"revision":null,"url":"code/chunk.BWPPYEQO-DUd7Ne4X.js"},{"revision":null,"url":"code/index-DkuV2QLQ.js"},{"revision":null,"url":"code/index-DYPoN_4Q.css"},{"revision":null,"url":"code/index-pvutR0jk.js"},{"revision":"f6fe0a8b0979d86905d78fe7fc743f6c","url":"index.html"},{"revision":"1fbedf547c8f1751fab6b053fbc96f36","url":"manifest.json"},{"revision":"b1a4910d7cbaa47fcc8f72ecb2028ff1","url":"staticwebapp.config.json"},{"revision":"a7591c595c4a231a1f67943e58f3d6eb","url":"widget/ac.json"},{"revision":"a70ebb50d5f5ab6a37f24795e292547d","url":"widget/data.json"}]||[]);workbox.routing.registerRoute(({request:t})=>t.mode==="navigate",async({event:t})=>await(await caches.open(workbox.precaching.getCacheKeyForURL("/index.html"))).match("/index.html")||fetch(t.request));self.addEventListener("push",function(t){if(console.log("[Service Worker] Push Received."),Notification.permission==="granted"){const i=t.data.json();t.waitUntil(self.registration.showNotification(i.title,{body:i.body,icon:"/assets/icons/icon_192.png",tag:"my-tag"}))}else console.log("notification permission not granted")});self.addEventListener("notificationclick",t=>{t.notification.close();var i=self.location.origin+t.notification.data.path;clients.openWindow(i)});
//# sourceMappingURL=sw.js.map
