// src/registerSW.ts
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (window.confirm('New content available, refresh?')) {
      updateSW(true); // Force reload
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
  onRegistered(r) {
    if (r) {
      console.log("Service worker registered", r);
    }
  },
});
