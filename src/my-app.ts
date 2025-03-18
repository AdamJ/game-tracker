// src/my-app.ts
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './pages/app-home';
import { router } from './router';

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css`
    main, .main {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    @media (max-width: 800px) {
      app-standings,
      app-counter,
      app-about,
      app-home {
        padding-top: 0 !important;
      }
    }
    @media (max-width: 1200px) {
      app-standings,
      app-counter,
      app-about,
      app-home {
        display: block;
        padding-top: 55px;
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
        padding-top: 55px;
      }
    }
  `;

  constructor() {
    super();
    // console.log('MyApp: constructor called');
    router.addEventListener('route-changed', () => {
      // console.log('MyApp: route-changed event received', e);
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  render() {
    // console.log("MyApp: render called");
    const result = router.render();
    //log what the render function is returning
    // console.log('MyApp: router.render() result:', result);
    // New log statement
    // console.log('MyApp: router.render() result type:', typeof result);
    return result;
  }
}
