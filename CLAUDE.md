# CLAUDE.md - Game Tracker (Moonsilver Waypoints)

> AI Assistant Guide for the Game Tracker Progressive Web App

## Project Overview

**Game Tracker** (branded as "Moonsilver Waypoints") is a Progressive Web App (PWA) designed for tracking Magic: The Gathering and other TCG game scores. It provides multiple tracking modes for different gameplay scenarios:

- **Tournament Tracker**: Full tournament management with standings, points, and match history
- **Commander/EDH Tracker**: 4-player game tracking with custom player names
- **Match Play (Standard)**: 1v1 life counter with adaptive orientation
- **Dice Roller**: Simple D20 roller with history

### Key Features
- **Offline-first**: All data stored locally using localStorage and Service Workers
- **Privacy-focused**: No external data transmission unless user exports
- **Cross-platform**: Works on desktop, mobile, and tablets
- **Installable**: Can be installed as a native-like app on iOS and Android

---

## Tech Stack

### Core Technologies
- **Build Tool**: [Vite](https://vitejs.dev/) v6.2.2
- **Framework**: [Lit](https://lit.dev/) v3.3.0 (Web Components)
- **Language**: TypeScript v5.8.3 (strict mode enabled)
- **Router**: [@thepassle/app-tools](https://github.com/thepassle/app-tools) router
- **UI Components**: [Shoelace](https://shoelace.style/) v2.20.1 (design system)
- **PWA**: Vite PWA Plugin v1.0.1 with Workbox v7.3.0

### Additional Libraries
- **localforage**: v1.10.0 - Enhanced localStorage (IndexedDB wrapper)
- **mana-font**: v1.18.0 - Magic: The Gathering mana symbols
- **keyrune**: v3.17.0 - MTG set symbols
- **unplugin-icons**: v22.1.0 - Auto-imported icon components

### Development Tools
- **Semantic Release**: Automated versioning and changelog
- **GitHub Actions**: CI/CD for deployment to GitHub Pages
- **Prettier**: Code formatting (configured in package.json)

---

## Architecture

### Application Structure

```
game-tracker/
├── src/
│   ├── main.ts                 # Application entry point
│   ├── init.ts                 # Service Worker & PWA initialization
│   ├── my-app.ts              # Root app component with router
│   ├── router.ts              # Route definitions
│   ├── pages/                 # Page-level components
│   │   ├── app-home.ts
│   │   ├── app-game-tracker.ts
│   │   ├── app-counter/
│   │   ├── app-standard/
│   │   └── app-about/
│   ├── components/            # Reusable components
│   │   ├── game-tracker/      # Tournament tracker components
│   │   ├── match-tracker/     # EDH/Commander components
│   │   ├── standard-tracker/  # 1v1 counter components
│   │   ├── icons/             # Icon definitions
│   │   ├── dialogs/           # Modal components
│   │   ├── header.ts
│   │   ├── navigation.ts
│   │   └── fab.ts
│   └── styles/                # Shared style modules
│       ├── global.css
│       ├── shared-styles.ts
│       ├── shoelace-styles.ts
│       └── [feature]-styles.ts
├── public/                    # Static assets
│   ├── assets/
│   ├── manifest.json
│   └── sw.js                  # Service Worker
├── index.html                 # HTML entry point
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── generate-sw-manifest.js   # Post-build SW manifest generator
```

### Component Architecture Pattern

All components follow the **Lit Web Components** pattern:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  // Styles (scoped to component)
  static styles = [sharedStyles, css`/* component styles */`];

  // Reactive properties
  @property() publicProp: string = '';
  @state() privateProp: string = '';

  // Lifecycle methods
  connectedCallback() {
    super.connectedCallback();
    // Initialize
  }

  // Render method
  render() {
    return html`<div>${this.publicProp}</div>`;
  }
}
```

---

## Key Conventions

### 1. File Naming
- **Components**: `kebab-case.ts` (e.g., `standings-tracker.ts`)
- **Custom Elements**: Match filename (e.g., `<standings-tracker>`)
- **Styles**: `[feature]-styles.ts` for shared styles
- **Pages**: Prefix with `app-` (e.g., `app-home.ts`)

### 2. Component Registration
- Use `@customElement('element-name')` decorator
- Element names must contain a hyphen (Web Components standard)
- Import components where needed, not globally (lazy loading)

### 3. Styling Approach
- **CSS-in-JS**: Use Lit's `css` tagged template literal
- **Shared Styles**: Import from `src/styles/` as modules
- **Shoelace Variables**: Use CSS custom properties (e.g., `var(--sl-color-primary-500)`)
- **Responsive**: Mobile-first with media queries
- **Scoping**: Shadow DOM automatically scopes component styles

### 4. State Management
- **No central store**: Each component manages its own state
- **Persistence**: Use `localStorage` for simple data
- **Reactive Updates**: Use `@state()` decorator for reactive properties
- **Data Flow**: Parent → Child via `@property()`, Child → Parent via events

### 5. Data Persistence Pattern

```typescript
// Load from localStorage
connectedCallback() {
  super.connectedCallback();
  const data = localStorage.getItem('key');
  this.state = data ? JSON.parse(data) : defaultValue;
}

// Save to localStorage
saveData() {
  localStorage.setItem('key', JSON.stringify(this.state));
  this.requestUpdate(); // Trigger re-render if needed
}
```

### 6. TypeScript Configuration
- **Strict mode enabled**: All strict checks active
- **Decorators**: `experimentalDecorators: true`
- **Module resolution**: `bundler` mode
- **Target**: `esnext` (modern browsers only)

---

## Routing

### Router Configuration (`src/router.ts`)

Uses `@thepassle/app-tools/router` with these features:
- **Lazy Loading**: Pages loaded on-demand via `lazy()` plugin
- **Plugins**: Service Worker update checks, scroll restoration, focus reset
- **Base URL**: Configured for GitHub Pages deployment

### Adding New Routes

```typescript
{
  path: resolveRouterPath('my-page'),
  title: 'My Page',
  plugins: [
    lazy(() => import('./pages/app-my-page.js')),
  ],
  render: () => html`<app-my-page></app-my-page>`
}
```

**Important**: Always use `resolveRouterPath()` helper for proper base URL handling.

---

## PWA Implementation

### Service Worker Strategy
- **InjectManifest**: Custom service worker at `public/sw.js`
- **Precaching**: Post-build manifest generation via `generate-sw-manifest.js`
- **Update Flow**: Manual update prompts via `init.ts`
- **Offline Support**: Offline fallback page at `public/offline-fallback.html`

### PWA Features
1. **Install Prompt**: Custom install dialog (Safari iOS detection)
2. **Update Notifications**: Dialog when new version available
3. **Push Notifications**: Permission requested in `init.ts`
4. **Manifest**: Full app configuration in `public/manifest.json`

### Service Worker Update Flow
```
1. New SW detected → updatefound event
2. Show update dialog to user
3. User clicks "Update" → postMessage('SKIP_WAITING')
4. Page reloads with new version
```

---

## Development Workflow

### Setup
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:7160)
npm run dev-server   # Same + auto-open browser
npm run start-remote # Start with network access (--host)
```

### Building
```bash
npm run build        # TypeScript compile + Vite build
                     # Runs postbuild script automatically
```

**Post-build**: `generate-sw-manifest.js` creates `dist/sw-manifest.js` with file hashes for Workbox precaching.

### Deployment
- **GitHub Pages**: Automatic via `.github/workflows/deploy.yml` on push to `main`
- **Process**: Build → Deploy to `gh-pages` branch
- **Manual Deploy**: `npm run deploy-gh`

### Code Formatting
Prettier configuration in `package.json`:
- **Tabs**: Yes (width: 2)
- **Semicolons**: Yes
- **Quotes**: Single
- **Trailing Commas**: ES5
- **Line Endings**: CRLF

**Run formatting**: Use editor integration or `npx prettier --write .`

---

## Component Development Patterns

### Creating a New Page Component

1. **Create file**: `src/pages/app-my-feature.ts`
2. **Import dependencies**:
```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared-styles';
import '../components/header';
import '../components/navigation';
```

3. **Define component**:
```typescript
@customElement('app-my-feature')
export class AppMyFeature extends LitElement {
  static styles = [sharedStyles, css`/* styles */`];

  render() {
    return html`
      <main>
        <h1>My Feature</h1>
        <!-- content -->
      </main>
      <app-navigation></app-navigation>
    `;
  }
}
```

4. **Add route** in `src/router.ts`
5. **Add navigation link** in `src/components/navigation.ts`

### Creating a Reusable Component

1. **Create file**: `src/components/my-widget.ts`
2. **Define interface** for data structures (if needed)
3. **Use `@property()`** for inputs, `@state()` for internal state
4. **Dispatch events** for parent communication:

```typescript
this.dispatchEvent(new CustomEvent('my-event', {
  detail: { data: value },
  bubbles: true,
  composed: true
}));
```

### Working with Shoelace Components

```typescript
// Import specific components
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

// Use in template
html`
  <sl-button variant="primary" @click=${this.handleClick}>
    Click Me
  </sl-button>

  <sl-card>
    <div slot="header">Header</div>
    Content
    <sl-button slot="footer">Action</sl-button>
  </sl-card>
`
```

**Note**: Shoelace uses Shadow DOM. Style with `::part()` pseudo-element.

---

## Data Export Feature

Multiple components support CSV export:
- Tournament tracker exports standings and match history
- Commander tracker exports game logs
- Standard tracker exports match history

**Pattern**: Generate CSV string → Create Blob → Download via anchor element

```typescript
exportToCSV() {
  const csv = this.generateCSV();
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'export.csv';
  a.click();
  URL.revokeObjectURL(url);
}
```

---

## Browser Compatibility

### Targets
- **Modern browsers only**: Chrome, Firefox, Safari, Edge (evergreen)
- **ES2017+**: Native async/await, modules, etc.
- **No IE11**: Not supported

### Polyfills
- **URLPattern**: Included via `urlpattern-polyfill` for older browsers
- **Service Workers**: Feature detection in `init.ts`

### Special Handling
- **Safari iOS**: Custom install prompt detection and messaging
- **Standalone mode**: Detects if app is running as installed PWA
- **Browser detection**: Utility in `main.ts` for logging

---

## Testing & Quality

### Current State
- **No automated tests**: Manual testing only
- **TypeScript**: Strict mode catches type errors
- **Browser testing**: Test across Chrome, Safari, Firefox
- **PWA testing**: Use Lighthouse and PWA Builder

### Testing Checklist for Changes
1. TypeScript compilation succeeds (`npm run build`)
2. Service Worker updates correctly
3. localStorage persistence works
4. Responsive design (mobile, tablet, desktop)
5. Offline functionality maintained
6. Install prompt works on iOS Safari
7. Data export functions correctly

---

## Important Files Reference

### Configuration Files
- **vite.config.ts**: Build configuration, PWA settings, dev server port (7160)
- **tsconfig.json**: TypeScript compiler options (strict mode)
- **package.json**: Scripts, dependencies, Prettier config, semantic-release
- **public/manifest.json**: PWA manifest (name, icons, theme)

### Entry Points
- **index.html**: Main HTML, Shoelace setup, install dialogs
- **src/main.ts**: Imports entry modules, browser detection
- **src/init.ts**: Service Worker registration, PWA install handling
- **src/my-app.ts**: Root component, router integration

### Key Components
- **src/router.ts**: All route definitions
- **src/components/navigation.ts**: Main navigation menu
- **src/components/header.ts**: Page header component
- **src/pages/app-home.ts**: Landing page with game mode cards

### Build & Deploy
- **generate-sw-manifest.js**: Post-build script for SW manifest
- **.github/workflows/deploy.yml**: GitHub Actions deployment
- **public/sw.js**: Service Worker implementation

---

## AI Assistant Guidelines

### When Making Changes

1. **Always use TypeScript**: Never use plain JavaScript
2. **Follow Lit patterns**: Use decorators, tagged templates
3. **Import Shoelace components**: Don't assume they're global
4. **Test localStorage**: Ensure data persistence works
5. **Update router**: If adding pages, update `router.ts`
6. **Maintain PWA**: Don't break Service Worker functionality
7. **Check mobile**: Responsive design is critical
8. **Preserve data**: Never break existing localStorage schemas without migration

### Code Style

```typescript
// ✅ GOOD: Lit decorators, typed state
@customElement('my-component')
export class MyComponent extends LitElement {
  @state() private items: Item[] = [];

  render() {
    return html`<div>${this.items.map(i => html`<span>${i.name}</span>`)}</div>`;
  }
}

// ❌ BAD: Plain class, untyped, imperative DOM
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '<div></div>';
  }
}
```

### Adding Dependencies

- **Check bundle size**: This is a PWA, keep it lean
- **Prefer tree-shakeable**: ESM modules only
- **Shoelace first**: Use Shoelace components before adding new UI libraries
- **Vite plugins**: Check compatibility with Vite 6.x

### Debugging Tips

1. **Service Worker issues**: Check DevTools → Application → Service Workers
2. **localStorage**: DevTools → Application → Local Storage
3. **Routing**: Check `resolveRouterPath()` usage
4. **Styles not applying**: Verify Shadow DOM scoping
5. **Component not updating**: Use `this.requestUpdate()` after manual state changes

### Common Patterns in Codebase

#### Modal Dialogs
```typescript
// In component
@state() private modalOpen = false;

// In template
html`
  <confirmation-modal
    .open=${this.modalOpen}
    @confirm=${this.handleConfirm}
    @cancel=${() => this.modalOpen = false}
  >
  </confirmation-modal>
`
```

#### Loading States
```typescript
@state() private isLoading = true;

render() {
  if (this.isLoading) {
    return html`<sl-spinner></sl-spinner>`;
  }
  return html`<!-- content -->`;
}
```

#### Event Handling
```typescript
// Use arrow functions to preserve 'this'
html`<sl-button @click=${() => this.handleClick()}>Click</sl-button>`

// Or bind in constructor (less common in Lit)
```

### Performance Considerations

1. **Lazy loading**: Routes are already lazy-loaded
2. **Asset optimization**: Images in `public/assets/`
3. **Service Worker caching**: Configured for all static assets
4. **Shadow DOM**: Automatic style scoping prevents global CSS pollution
5. **Lit rendering**: Efficient updates via dirty checking

### Security Notes

- **No external data transmission**: All data stays client-side
- **localStorage only**: No cookies, no external APIs
- **CSP**: Configure if adding external resources
- **XSS**: Lit automatically escapes values in templates

### Breaking Changes to Avoid

1. **localStorage keys**: Changing keys breaks user data
2. **Component names**: Renaming breaks existing templates
3. **Route paths**: Breaks bookmarks and external links
4. **Service Worker scope**: Can break offline functionality
5. **Manifest changes**: Can affect installed PWA behavior

---

## Git Workflow

### Branching Strategy
- **Main branch**: `main` (production)
- **Feature branches**: Use Claude branches with session ID format
- **Deploy branch**: `gh-pages` (auto-generated)

### Commit Conventions
Uses **semantic-release** for automated versioning:
- `feat:` - New feature (minor version bump)
- `fix:` - Bug fix (patch version bump)
- `docs:` - Documentation only
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Example**: `feat: add dice roller history export`

### GitHub Actions
- **deploy.yml**: Runs on push to `main`
  - Builds project
  - Deploys to GitHub Pages
  - Uses `peaceiris/actions-gh-pages@v3.9.3`

---

## Future Considerations

### Potential Improvements
- Add automated tests (Lit testing library)
- Implement data sync across devices
- Add more game formats
- Enhanced statistics and analytics
- Dark/light theme toggle
- Accessibility improvements (ARIA labels)

### Migration Notes
If updating major dependencies:
- **Vite 6.x**: Already on latest
- **Lit 3.x**: Already on latest
- **Shoelace 2.x**: Check for breaking changes in Web Components
- **Workbox 7.x**: Ensure SW strategy compatibility

---

## Resources

### Documentation
- [Lit Docs](https://lit.dev/docs/) - Web Components framework
- [Shoelace Docs](https://shoelace.style/) - UI component library
- [Vite Docs](https://vitejs.dev/) - Build tool
- [Workbox Docs](https://developer.chrome.com/docs/workbox/) - PWA tooling
- [App Tools Router](https://github.com/thepassle/app-tools/blob/master/router/README.md)

### Project-Specific
- **PWA Starter Guide**: `PWA_STARTER.md` in root
- **README**: `README.md` for user-facing info
- **Random Code Notes**: `RandomCode.md` for code snippets

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev-server       # Start dev server + auto-open
npm run start-remote     # Dev server with network access

# Building
npm run build            # Build for production
npm run postbuild        # Generate SW manifest (auto after build)

# Deployment
npm run deploy-gh        # Deploy to GitHub Pages (manual)
npm run deploy           # Deploy to Azure Static Web Apps

# Maintenance
npm run clean-local      # Clear npm cache and node_modules/.cache
```

---

## Version History

- **Current Version**: 0.0.0 (pre-release)
- **Release Management**: Automated via semantic-release
- **Changelog**: Auto-generated in `CHANGELOG.md` (when releases start)

---

## Contact & Contribution

- **Author**: Adam J. Jolicoeur
- **Homepage**: https://www.adamjolicoeur.me
- **Repository**: Check package.json for repository URL
- **License**: ISC (see LICENSE.txt)

---

**Last Updated**: 2025-11-18

*This document should be updated whenever significant architectural changes are made to the codebase.*
