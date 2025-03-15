/*
 Copyright 2021 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registered: ', registration);
      if (Notification.permission !== "granted") {
        Notification.requestPermission()
          .then(permission => {
            if (permission === 'granted') {
              console.log("Notification Permission Granted")
              // Permission granted, you can show notifications
              if(registration.active){
                registration.active.showNotification("Permission granted!")
              }
            } else {
              console.log("Notification Permission not granted");
            }
          })
          .catch(error => {
            console.error('Error requesting notification permission:', error);
          });
        }
      })
      .catch(registrationError => {
        console.log('Service Worker registration failed: ', registrationError);
      });
  });
}

// Register the service worker
// if ('serviceWorker' in navigator) {
//   // Wait for the 'load' event to not block other work
//   window.addEventListener('load', async () => {
//     // Try to register the service worker.
//     try {
//       // Capture the registration for later use, if needed
//       let reg;

//       // import.meta.env.DEV is a special environment variable injected by Vite to let us know we're in development mode. Here, we can use the JS Module form of our service worker because we can control our browsers in dev.
//         // In production, we use the normal service worker registration
//         reg = await navigator.serviceWorker.register('/sw.js');


//       console.log('Service worker registered! 😎', reg);
//     } catch (err) {
//       console.log('😥 Service worker registration failed: ', err);
//     }
//   });
// }
