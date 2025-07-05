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
  `;

  constructor() {
    super();
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  render() {
    const result = router.render();
    return result;
  }
}
