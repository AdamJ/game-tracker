// docs for router https://github.com/thepassle/app-tools/blob/master/router/README.md

import { html } from 'lit';

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { Router } from '@thepassle/app-tools/router.js';
import { appName } from '@thepassle/app-tools/router/plugins/appName.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';
import { offline } from '@thepassle/app-tools/router/plugins/offline.js';
import { resetFocus } from '@thepassle/app-tools/router/plugins/resetFocus.js';
import { scrollToTop } from '@thepassle/app-tools/router/plugins/scrollToTop.js';
import { checkServiceWorkerUpdate } from '@thepassle/app-tools/router/plugins/checkServiceWorkerUpdate.js';

import './pages/app-home.js';

const baseURL: string = (import.meta as any).env.BASE_URL;

// console.log(baseURL);

export const router = new Router({
  plugins: [
    /** Redirects to an offline page */
    offline,
    /** Checks for service worker updates on route navigation */
    checkServiceWorkerUpdate,
    scrollToTop,
    resetFocus,
    appName('Moonsilver Waypoints -'),
  ],
  fallback: '/404',
  routes: [
    {
      path: resolveRouterPath(),
      title: 'Home',
      render: () => html`<app-home></app-home>`
    },
    {
      path: resolveRouterPath('about'),
      title: 'About',
      plugins: [
        lazy(() => import('./pages/app-about/app-about.js')),
        offline,
        ()=>{
          console.error('Failed to load About');
        }
      ],
      render: () => html`<app-about></app-about>`
    },
    {
      path: resolveRouterPath('counter'),
      title: 'EDH Event Tracker',
      plugins: [
        lazy(() => import('./pages/app-counter/app-counter.js')),
        offline,
        ()=>{
          console.error('Failed to load EDH Event Tracker');
        }
      ],
      render: () => html`<app-counter></app-counter>`
    },
    {
      path: resolveRouterPath('game-tracker'),
      title: 'Tournament Tracker',
      plugins: [
        lazy(() => import('./pages/app-game-tracker.js')),
        offline,
        ()=>{
          console.error('Failed to load Tournament Tracker');
        }
      ],
      render: () => html`<app-standings></app-standings>`
    },
    {
      path: resolveRouterPath('standard-tracker'),
      title: 'Standard Counter',
      plugins: [
        lazy(() => import('./pages/app-standard/app-standard.js')),
        offline,
        ()=>{
          console.error('Failed to load Standard Counter');
        }
      ],
      render: () => html`<app-standard></app-standard>`
    },
    {
      path: 'offline.html',
      title: 'Offline',
      render: () => html`<offline-page></offline-page>`
    },
    {
      path: '/404',
      title: 'Not found',
      render: () => html`<404-page><h1>This page was not found!</h1></404-page>`
    }
  ]
});


  // This function will resolve a path with whatever Base URL was passed to the vite build process.
  // Use of this function throughout the starter is not required, but highly recommended, especially if you plan to use GitHub Pages to deploy.
  // If no arg is passed to this function, it will return the base URL.

  export function resolveRouterPath(unresolvedPath?: string) {
    var resolvedPath = baseURL;
    if(unresolvedPath) {
      resolvedPath = resolvedPath + unresolvedPath;
    }

    return resolvedPath;
  }
