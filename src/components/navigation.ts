// Assuming this is a Lit component where your navigation is defined
import { LitElement, html, css } from 'lit';
import { state, queryAll, customElement } from 'lit/decorators.js';
import { router, resolveRouterPath } from '../router'; // Adjust the path to your router.ts

@customElement('app-navigation')
export class MyNavigation extends LitElement {
  static styles = css`
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
      background: #fff;
      border-radius: 50%;
      padding: .25rem;
    }
  `;

  @state() isDrawerOpen = false; //Add a state to track if the drawer is open.

  @state()
  private currentPathname: string = window.location.pathname;

  @queryAll('.navbar-item')
  private navigationItems!: NodeListOf<HTMLElement>;

  firstUpdated() {
    router.addEventListener('route-change', () => {
      this.currentPathname = window.location.pathname;
      this._updateActiveLink();
    });
    this._updateActiveLink(); // Set initial active link on load
  }

  private _updateActiveLink() {
    this.navigationItems.forEach(item => {
      const linkButton = item.querySelector('sl-icon-button');
      const href = linkButton?.getAttribute('href');
      const resolvedHref = href ? resolveRouterPath(href.startsWith('/') ? href.substring(1) : href) : ''; // Resolve relative paths

      if (resolvedHref === this.currentPathname) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }



  render() {
    return html`
      <div class="navbar">
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/bcore.svg" href="/game-tracker" class="navbar-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Tournament
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/cmd.svg" href="/counter" class="navbar-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Commander
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/wizards-of-the-coast-brands.svg" href="/" class="navbar-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Dashboard
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="assets/svg/dice-d20-solid.svg" href="/standard-tracker" class="navbar-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            1 v 1
          </div>
        </div>
        <div class="navbar-item">
          <div class="item-container">
            <div class="state-layer">
              <sl-icon-button src="/assets/svg/dice-solid.svg" href="/roll-dice" class="navbar-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="item-container-label">
            Roll
          </div>
        </div>
      </div>

      <style>
        .navbar {
          display: flex;
          justify-content: center;
          padding: 0rem 0.5rem;
          align-items: flex-start;
          gap: 0.5rem;
          background: #F4F6F7;
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
          flex 1 0 0;
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
          background: #e0f1fe !important;
          border: 2px solid #0163A3;
          }
          .navbar-item:hover .item-container,
          .navbar-item.active:hover .item-container {
          background: #e2e8eb !important;
        }
        .item-container-label {
          align-self: stretch;
          color: #1a1b21;
          text-align: center;
        }
        .state-layer {
          display: flex;
          width: 4rem;
          height: 2rem;
          padding: 0.25rem 1.25rem;
          justify-content: center;
          align-items: center;
        }
        .navbar-icon {
          flex-shrink: 0;
        }
      </style>
    `;
  }
}
