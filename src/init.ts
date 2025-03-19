// src/init.ts
export const PROD = import.meta.env.MODE === 'production';

// request notification permissions
if (Notification.permission !== "granted") {
  Notification.requestPermission()
    .then(permission => {
      if (permission === 'granted') {
        console.log("Notification Permission Granted")
        // Permission granted, you can show notifications
      } else {
        console.log("Notification Permission not granted");
      }
    })
    .catch(error => {
      console.error('Error requesting notification permission:', error);
    });
}

// Manual Service Worker Registration with Update Handling
if (PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: './' })
      .then(registration => {
        console.log('Service worker registered:', registration);

        // Track any updates to the service worker.
        registration.addEventListener("updatefound", () => {
          console.log("Service Worker update found!");
          const newWorker = registration.installing;
          if(newWorker){
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed') {
                  console.log("New service worker is installed, letting user know.");
                // New content is available.
                showUpdateUI(registration);
              }
            })
          }
        });

        // If there is already a service worker waiting, let the user know.
        if(registration.waiting){
          console.log("There is a waiting service worker.");
          showUpdateUI(registration);
        }

      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  });
}

// The follow was primarily written using Gemini in VSCode
// Manual PWA Install Prompt Handling
let deferredPrompt: any;

//Wait until the page has loaded before attempting to find the dialog.
window.addEventListener('load', () => {
  const dialog = document.querySelector('.install-dialog') as HTMLDialogElement;
  // Handle the click of the install button inside the modal
  if (dialog) {
    dialog.addEventListener('sl-request-close', () => {
      console.log('Modal close requested');
    });
    const installButton = dialog.querySelector('.install-button') as HTMLButtonElement;
    if (installButton) {
      installButton.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult: { outcome: string; platform: string }) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
            (dialog as any).hide();
          });
        }
      });
    }
  }
});

window.addEventListener('beforeinstallprompt', (event) => {
  console.log("PWA is considered installable by the browser.");
  // Prevent the default prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;

  // Check if the app is not already installed AND the modal hasn't been shown this session
  if (!window.matchMedia('(display-mode: standalone)').matches && !sessionStorage.getItem('installModalShown')) {
    // Get the modal and open it
    const dialog = document.querySelector('.install-dialog') as HTMLDialogElement;
    if (dialog) {
      (dialog as any).show();
      // Set the flag in sessionStorage
      sessionStorage.setItem('installModalShown', 'true');
    }
  }
});

window.addEventListener('appinstalled', () => {
  console.log('PWA installed!');
});

// --- Update UI ---
function showUpdateUI(registration: ServiceWorkerRegistration) {
  console.log("Attempting to show the update ui to the user.");
  const updateDialog = document.querySelector('.update-dialog') as HTMLDialogElement;
  if (updateDialog) {
    (updateDialog as any).show(); // show the update dialog
    const updateButton = updateDialog.querySelector('.update-button') as HTMLButtonElement;
    if (updateButton) {
      updateButton.addEventListener('click', () => {
        if(registration.waiting){
          console.log("Telling waiting service worker to skip waiting.");
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        (updateDialog as any).hide(); // hide the update dialog
      });
    }
  }
}
