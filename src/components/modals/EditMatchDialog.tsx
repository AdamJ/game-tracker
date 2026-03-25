import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Match } from '@/services/storage.service';

interface EditMatchDialogProps {
  open: boolean;
  match: Match | null;
  onClose: () => void;
  onSave: (match: Match) => void;
}

type WinnerChoice = 'player1' | 'player2' | 'draw';

export function EditMatchDialog({ open, match, onClose, onSave }: EditMatchDialogProps) {
  const [winner, setWinner] = useState<WinnerChoice>('draw');

  useEffect(() => {
    if (match) {
      if (match.result === 'win') setWinner('player1');
      else if (match.result === 'loss') setWinner('player2');
      else setWinner('draw');
    }
  }, [match]);

  if (!match) return null;

  const handleSave = () => {
    let result: Match['result'];
    if (winner === 'player1') result = 'win';
    else if (winner === 'player2') result = 'loss';
    else result = 'draw';
    onSave({ ...match, result });
    onClose();
  };

  const options = [
    { value: 'player1' as const, label: match.player1 },
    { value: 'draw' as const, label: 'Draw' },
    { value: 'player2' as const, label: match.player2 },
  ];

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Match Result</DialogTitle>
        </DialogHeader>
        <div className="py-2 space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            {match.player1} <span className="font-bold text-foreground">vs</span> {match.player2}
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">Winner</p>
            <div className="grid grid-cols-3 gap-2">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setWinner(opt.value)}
                  className={`px-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    winner === opt.value
                      ? 'border-primary bg-primary/20 text-primary'
                      : 'border-border bg-secondary/50 text-muted-foreground hover:border-muted-foreground/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
