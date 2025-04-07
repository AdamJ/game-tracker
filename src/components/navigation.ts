// Assuming this is a Lit component where your navigation is defined
import { LitElement, html, css } from 'lit';
import { state, queryAll, customElement } from 'lit/decorators.js';
import { router, resolveRouterPath } from '../router'; // Adjust the path to your router.ts
import { ToggleGameplayInfo } from './dialogs/toggle-gameplay-info';

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

  @queryAll('.navigation-item')
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

  private toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  private closeDrawer(){
    this.isDrawerOpen = false;
  }

  render() {
    return html`
      <div class="fab" style="position: fixed; bottom: 1rem; right: 1rem; z-index: 10000;">
        <sl-button variant="primary" size="large" circle @click=${this.toggleDrawer}>
          <sl-icon library="fa" name="fas-bars"></sl-icon>
        </sl-button>
      </div>
      <div class="navigation" style="position: fixed; bottom: 0; left: 0; right: 0;">
        <div class="navigation-item">
          <div class="icon-container">
            <div class="state-layer">
              <sl-icon-button href="/game-tracker" library="fa" name="fas-trophy" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="navigation-text">
            Tournament
          </div>
        </div>
        <div class="navigation-item">
          <div class="icon-container">
            <sl-icon-button @click=${this.toggleDrawer} library="fa" name="fas-bars" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
          </div>
          <div class="navigation-text">
            Menu
          </div>
        </div>
        <div class="navigation-item">
          <div class="icon-container">
            <div class="state-layer">
              <sl-icon-button href="/standard-tracker" library="fa" name="fas-dice-d20" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
            </div>
          </div>
          <div class="navigation-text">
            1v1
          </div>
        </div>
      </div>
      <sl-drawer
       ?open=${this.isDrawerOpen} @sl-after-hide=${this.closeDrawer}
        label="Moonsilver Waypoints" placement="start" class="site-menu-drawer"
      >
        <sl-button href="/" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          Dashboard
        </sl-button>
        <sl-button href="/game-tracker" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          Tournament
        </sl-button>
        <sl-button href="/counter" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          Commander
        </sl-button>
        <sl-button href="/standard-tracker" variant="neutral" size="large" pill style="width: 100%; margin-bottom: .5rem;">
          1v1
        </sl-button>
        <sl-button href="/about" variant="neutral" size="large" pill style="width: 100%;">
          About
        </sl-button>
        <sl-button @click=${this.closeDrawer} slot="footer" variant="primary" pill class="close-menu">Close</sl-button>
      </sl-drawer>
      <script>
        const drawer = document.querySelector('.site-menu-drawer');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector('sl-button.close-menu[variant="primary"]');
        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      </script>
      <style>
        .navigation {
          display: flex;
          padding: 0rem 0.5rem;
          padding-bottom: 0.5rem;
          align-items: flex-start;
          gap: 0.5rem;
          align-self: stretch;
          background: #211F26;
        }
        @media (min-width: 768px) {
          .navigation {
            justify-content: center;
          }
        }
        .navigation-item {
          display: flex;
          padding: 0.75rem 0rem 1rem 0rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          flex: 1 0 0;
          border-radius: 1rem;
          border-color: transparent;
        }
        @media (min-width: 768px) {
          .navigation-item {
            flex: 0;
          }
        }
        .navigation-item:hover .icon-container,
        .navigation-item:focus-visible .icon-container,
        .navigation-item:focus .icon-container {
          box-shadow: 0px -0.5px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0px rgba(0, 0, 0, 0.10) inset;
          background: linear-gradient(0deg, rgba(94, 94, 94, 0.18) 0%, rgba(94, 94, 94, 0.18) 100%), rgba(255, 255, 255, 0.2);
        }
        .navigation-item:hover .navigation-text,
        .navigation-item:hover .navigation-icon,
        .navigation-item:focus .navigation-text,
        .navigation-item:focus .navigation-icon,
        .navigation-item:active .navigation-text,
        .navigation-item:active .navigation-icon {
          color: var(--sl-color-primary-600) !important;
        }
        .navigation-text {
          color: #CAC4D0;
          text-align: center;
          align-self: stretch;
          font-size: .75rem;
        }
        .icon-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 1rem;
          min-height: 45px;
        }
        .state-layer {
          display: flex;
          width: 2rem;
          height: 2rem;
          padding: 0.25rem 1.25rem;
          justify-content: center;
          align-items: center;
        }
        .navigation-icon {
          flex-shrink: 0;
        }
        .navigation sl-icon::part(svg) {
          fill: var(sl-color-neutral-400) !important;
        }
      </style>
    `;
  }
}
