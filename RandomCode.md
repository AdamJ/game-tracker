# Random Code

private toggleDrawer() {
  this.isDrawerOpen = !this.isDrawerOpen;
}

private closeDrawer(){
  this.isDrawerOpen = false;
}

<sl-button variant="primary" size="large" circle class="menu__item active" @click=${this.toggleDrawer}>
<sl-icon name="list"></sl-icon>
</sl-button>

<div class="fab" style="position: fixed; bottom: 1rem; right: 1rem; z-index: 10000;">
  <sl-button variant="primary" size="large" circle @click=${this.toggleDrawer}>
    <sl-icon name="list"></sl-icon>
  </sl-button>
</div>

<div class="navigation-item">
  <div class="icon-container">
    <sl-icon-button @click=${this.toggleDrawer} name="list" class="navigation-icon" style="font-size: 1.75rem;"></sl-icon-button>
  </div>
  <div class="navigation-text">
    Menu
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
          background: #dedede;
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
