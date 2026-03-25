
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Tournament',
    path: '/game-tracker',
    icon: (
      <img src="/assets/svg/ranking-star-solid.svg" alt="" className="w-6 h-6 opacity-80" />
    ),
  },
  {
    label: 'Commander',
    path: '/counter',
    icon: (
      <img src="/assets/svg/bcore.svg" alt="" className="w-6 h-6 opacity-80" />
    ),
  },
  {
    label: 'Home',
    path: '/',
    icon: (
      <img src="/assets/svg/wizards.svg" alt="" className="w-6 h-6 opacity-80" />
    ),
    end: true,
  },
  {
    label: 'Match Play',
    path: '/standard-tracker',
    icon: (
      <img src="/assets/svg/shield-halved-solid.svg" alt="" className="w-6 h-6 opacity-80" />
    ),
  },
  {
    label: 'Dice',
    path: '/roll-dice',
    icon: (
      <img src="/assets/svg/d20.svg" alt="" className="w-6 h-6 opacity-80" />
    ),
  },
];

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-t border-white/5 bottom-nav">
      <div className="flex items-stretch justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 flex-1 min-w-0 px-1 transition-colors',
                isActive
                  ? 'text-violet-400'
                  : 'text-slate-500 hover:text-slate-300'
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    'transition-all duration-200',
                    isActive ? 'opacity-100 scale-110' : 'opacity-60'
                  )}
                  style={isActive ? { filter: 'brightness(0) saturate(100%) invert(67%) sepia(64%) saturate(502%) hue-rotate(228deg) brightness(101%) contrast(96%)' } : {}}
                >
                  {item.icon}
                </span>
                <span className={cn('text-[10px] font-medium truncate', isActive ? 'text-violet-400' : 'text-slate-500')}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
