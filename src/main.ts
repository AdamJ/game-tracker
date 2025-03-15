// src/main.ts
import './my-app'; // Import your root Lit component (replace 'my-app' with your component's tag name)
// import './registerSW'; // Import your service worker registration.
import './components/header';
import './styles/global.css';

// If you have any global styles or setup logic, add it here.
import { registerSW } from 'virtual:pwa-register';

const intervalMS = 60 * 60 * 1000

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
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  },
});
