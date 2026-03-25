import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const TournamentTracker = lazy(() => import('./pages/TournamentTracker'));
const CommanderTracker = lazy(() => import('./pages/CommanderTracker'));
const StandardTracker = lazy(() => import('./pages/StandardTracker'));
const DiceRoller = lazy(() => import('./pages/DiceRoller'));
const About = lazy(() => import('./pages/About'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'game-tracker',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TournamentTracker />
          </Suspense>
        ),
      },
      {
        path: 'counter',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CommanderTracker />
          </Suspense>
        ),
      },
      {
        path: 'standard-tracker',
        element: (
          <Suspense fallback={<PageLoader />}>
            <StandardTracker />
          </Suspense>
        ),
      },
      {
        path: 'roll-dice',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DiceRoller />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);
