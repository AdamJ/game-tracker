
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlayerPanelProps {
  name: string;
  life: number;
  color: string;
  onGain: () => void;
  onLose: () => void;
}

export function PlayerPanel({ name, life, color, onGain, onLose }: PlayerPanelProps) {
  return (
    <div className={cn('flex flex-col h-full border border-border/30 rounded-2xl overflow-hidden', color)}>
      {/* Gain button */}
      <button
        onClick={onGain}
        className="flex-1 flex items-center justify-center active:opacity-70 transition-opacity"
        aria-label={`${name}: gain 1 life`}
      >
        <Plus className="w-8 h-8 text-foreground/60" strokeWidth={2.5} />
      </button>

      {/* Life total + name */}
      <div className="py-2 px-3 text-center flex flex-col items-center justify-center">
        <div className="life-display text-foreground leading-none">{life}</div>
        <div className="text-xs text-muted-foreground mt-1 truncate max-w-full px-2">{name}</div>
      </div>

      {/* Lose button */}
      <button
        onClick={onLose}
        className="flex-1 flex items-center justify-center active:opacity-70 transition-opacity"
        aria-label={`${name}: lose 1 life`}
      >
        <Minus className="w-8 h-8 text-foreground/60" strokeWidth={2.5} />
      </button>
    </div>
  );
}
