import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Shield, Dices, ChevronDown, Share2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GameMode {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
  accentColor: string;
  borderColor: string;
  features: string[];
  badge?: string;
}

const gameModes: GameMode[] = [
  {
    title: 'Tournament',
    description: 'Run a full tournament with standings, match history, and point-based rankings.',
    icon: <Trophy className="w-8 h-8" />,
    path: '/game-tracker',
    color: 'from-amber-950/60 to-amber-900/20',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-800/40 hover:border-amber-600/60',
    badge: 'Competitive',
    features: [
      'Automatic standings calculation',
      '3 pts for win · 1 pt for draw',
      'Win% tiebreaker',
      'CSV export',
      'Edit & delete matches',
    ],
  },
  {
    title: 'Commander',
    description: 'Track life totals and game results for up to 4 players in an EDH pod.',
    icon: <img src="/assets/svg/bcore.svg" alt="" className="w-8 h-8 invert opacity-90" />,
    path: '/counter',
    color: 'from-violet-950/60 to-violet-900/20',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-800/40 hover:border-violet-600/60',
    badge: 'EDH / Commander',
    features: [
      '4-player life tracking',
      'Custom player names',
      'Action log (gain / lose)',
      'Multi-game standings',
      'CSV export',
    ],
  },
  {
    title: 'Match Play',
    description: 'Simple 1v1 life counter optimized for Standard, Modern, and Limited play.',
    icon: <Shield className="w-8 h-8" />,
    path: '/standard-tracker',
    color: 'from-sky-950/60 to-sky-900/20',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-800/40 hover:border-sky-600/60',
    badge: '1v1',
    features: [
      'Split-screen life counters',
      'Configurable starting life',
      'Large-format display',
      'Settings drawer',
      'History log',
    ],
  },
  {
    title: 'Dice Roller',
    description: 'Roll a D20 for initiative checks, coin flips, or any random decision.',
    icon: <Dices className="w-8 h-8" />,
    path: '/roll-dice',
    color: 'from-emerald-950/60 to-emerald-900/20',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-800/40 hover:border-emerald-600/60',
    badge: 'D20',
    features: [
      'Animated D20 roll',
      'Roll history (last 50)',
      'Quick result highlight',
    ],
  },
];

function GameModeCard({ mode }: { mode: GameMode }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        'relative rounded-2xl border bg-gradient-to-br transition-all duration-200 overflow-hidden',
        mode.color,
        mode.borderColor
      )}
    >
      {mode.badge && (
        <span className={cn('absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border', mode.accentColor, 'border-current opacity-80')}>
          {mode.badge}
        </span>
      )}

      <div className="p-5">
        <div className={cn('mb-3', mode.accentColor)}>{mode.icon}</div>
        <h2 className="text-xl font-bold text-foreground mb-1">{mode.title}</h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mode.description}</p>

        <div className="flex items-center gap-2">
          <Button
            className={cn('flex-1 font-semibold', mode.accentColor === 'text-amber-400' && 'bg-amber-600/20 hover:bg-amber-600/30 border-amber-600/40 text-amber-300', mode.accentColor === 'text-violet-400' && 'bg-violet-600/20 hover:bg-violet-600/30 border-violet-600/40 text-violet-300', mode.accentColor === 'text-sky-400' && 'bg-sky-600/20 hover:bg-sky-600/30 border-sky-600/40 text-sky-300', mode.accentColor === 'text-emerald-400' && 'bg-emerald-600/20 hover:bg-emerald-600/30 border-emerald-600/40 text-emerald-300')}
            variant="outline"
            onClick={() => navigate(mode.path)}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? 'Hide features' : 'Show features'}
            className="text-muted-foreground"
          >
            <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', expanded && 'rotate-180')} />
          </Button>
        </div>

        {expanded && (
          <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-4">
            {mode.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', mode.accentColor.replace('text-', 'bg-'))} />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Moonsilver Waypoints',
          text: 'Track your TCG games with Moonsilver Waypoints',
          url: window.location.origin,
        });
      } catch {
        // cancelled
      }
    }
  };

  return (
    <div className="page-content">
      {/* Hero */}
      <div className="relative px-5 pt-8 pb-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 to-transparent pointer-events-none" />
        <img src="/assets/icons/icon_24.png" alt="Moonsilver Waypoints" className="w-16 h-16 mx-auto mb-4 rounded-2xl shadow-lg shadow-violet-900/40" />
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-1">
          Moonsilver Waypoints
        </h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          Your TCG companion for tournaments, Commander pods, and more.
        </p>
        {'share' in navigator && (
          <Button variant="ghost" size="sm" onClick={handleShare} className="mt-3 text-muted-foreground">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        )}
      </div>

      {/* Game mode grid */}
      <div className="px-4 pb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {gameModes.map((mode) => (
          <GameModeCard key={mode.path} mode={mode} />
        ))}
      </div>
    </div>
  );
}
