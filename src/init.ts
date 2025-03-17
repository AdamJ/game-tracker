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

// Manual Service Worker Registration
if (PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: './' })
      .then(registration => {
        console.log('Service worker registered:', registration);
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
  if(dialog) {
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
