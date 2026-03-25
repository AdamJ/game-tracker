import { useState } from 'react';
import { Plus, Minus, Settings, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ConfirmDialog } from '@/components/modals/ConfirmDialog';
import { useStandard } from '@/hooks/useStandard';
import { cn } from '@/lib/utils';

function SidePanel({
  name,
  points,
  onPlus,
  onMinus,
  flipped = false,
  colorClass,
}: {
  name: string;
  points: number;
  onPlus: () => void;
  onMinus: () => void;
  flipped?: boolean;
  colorClass: string;
}) {
  return (
    <div className={cn('flex flex-col flex-1 border border-border/30 rounded-2xl overflow-hidden', colorClass, flipped && 'rotate-180')}>
      <button
        onClick={onPlus}
        className="flex-1 flex items-center justify-center active:opacity-60 transition-opacity"
        aria-label={`${name}: plus`}
      >
        <Plus className="w-10 h-10 text-foreground/50" strokeWidth={2} />
      </button>

      <div className={cn('py-3 text-center', flipped && 'rotate-180')}>
        <div className="life-display text-foreground leading-none">{points}</div>
        <p className="text-xs text-muted-foreground mt-1">{name}</p>
      </div>

      <button
        onClick={onMinus}
        className="flex-1 flex items-center justify-center active:opacity-60 transition-opacity"
        aria-label={`${name}: minus`}
      >
        <Minus className="w-10 h-10 text-foreground/50" strokeWidth={2} />
      </button>
    </div>
  );
}

export function StandardTracker() {
  const { sides, initialPoints, logs, isLoading, updatePoints, setInitialPoints, resetGame } = useStandard();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-2 px-3 pt-2 h-full">
      {/* Side panels */}
      <div className="flex flex-col gap-2 flex-1">
        <SidePanel
          name={sides[0].name}
          points={sides[0].points}
          onPlus={() => updatePoints(0, 1)}
          onMinus={() => updatePoints(0, -1)}
          flipped
          colorClass="bg-gradient-to-b from-sky-950/40 to-sky-900/10"
        />
        <SidePanel
          name={sides[1].name}
          points={sides[1].points}
          onPlus={() => updatePoints(1, 1)}
          onMinus={() => updatePoints(1, -1)}
          colorClass="bg-gradient-to-b from-rose-950/40 to-rose-900/10"
        />
      </div>

      {/* Settings FAB */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg shadow-black/40 border border-border"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-2xl max-h-[70vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <div className="space-y-5 py-4">
            <div className="space-y-2">
              <Label>Starting Points</Label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  min={1}
                  defaultValue={initialPoints}
                  className="w-28"
                  onBlur={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val) && val > 0) setInitialPoints(val);
                  }}
                />
                <Button variant="outline" size="sm" onClick={() => setConfirmReset(true)} className="text-destructive border-destructive/30">
                  <RotateCcw className="w-4 h-4 mr-1.5" />
                  Reset
                </Button>
              </div>
            </div>

            {logs.length > 0 && (
              <div className="space-y-2">
                <Label className="text-muted-foreground">History</Label>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {[...logs].reverse().map((entry, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm py-1 px-2 rounded bg-secondary/40">
                      <Badge variant={entry.action === 'Plus' ? 'success' : 'destructive'} className="text-xs">{entry.action}</Badge>
                      <span className="text-muted-foreground">{entry.side}</span>
                      <span className="ml-auto font-mono font-bold">{entry.points}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <ConfirmDialog
        open={confirmReset}
        title="Reset Points"
        message={`Reset both sides to ${initialPoints} points?`}
        confirmLabel="Reset"
        onConfirm={() => { resetGame(); setConfirmReset(false); setSheetOpen(false); }}
        onCancel={() => setConfirmReset(false)}
      />
    </div>
  );
}
