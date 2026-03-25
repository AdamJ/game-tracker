
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showShare?: boolean;
  showAbout?: boolean;
  className?: string;
}

export function Header({ title, showBack = false, showShare = false, showAbout = false, className }: HeaderProps) {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Moonsilver Waypoints',
          text: 'Track your TCG games with Moonsilver Waypoints',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share not supported
      }
    }
  };

  return (
    <header className={cn('flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-30', className)}>
      {showBack && (
        <Button variant="ghost" size="icon-sm" onClick={() => navigate('/')} aria-label="Back to home">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      )}

      <div className="flex items-center gap-2 flex-1 min-w-0">
        <img src="/assets/icons/icon_24.png" alt="" className="w-6 h-6 rounded-sm flex-shrink-0" />
        <h1 className="font-bold text-lg truncate text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-1">
        {showShare && 'share' in navigator && (
          <Button variant="ghost" size="icon-sm" onClick={handleShare} aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        )}
        {showAbout && (
          <Button variant="ghost" size="icon-sm" onClick={() => navigate('/about')} aria-label="About">
            <Info className="h-4 w-4" />
          </Button>
        )}
      </div>
    </header>
  );
}
