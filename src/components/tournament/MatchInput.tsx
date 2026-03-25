import { useState } from 'react';
import { Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Match } from '@/services/storage.service';

interface MatchInputProps {
  players: string[];
  onRecordMatch: (match: Match) => void;
}

type WinnerChoice = 'player1' | 'player2' | 'draw' | '';

export function MatchInput({ players, onRecordMatch }: MatchInputProps) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [winner, setWinner] = useState<WinnerChoice>('');

  const canRecord = player1 && player2 && player1 !== player2 && winner !== '';

  const handleRecord = () => {
    if (!canRecord) return;
    let result: Match['result'];
    if (winner === 'player1') result = 'win';
    else if (winner === 'player2') result = 'loss';
    else result = 'draw';

    onRecordMatch({ player1, player2, result, timestamp: Date.now() });
    setPlayer1('');
    setPlayer2('');
    setWinner('');
  };

  const availableForP2 = players.filter((p) => p !== player1);
  const availableForP1 = players.filter((p) => p !== player2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label>Player 1</Label>
          <Select value={player1} onValueChange={(v) => { setPlayer1(v); setWinner(''); }}>
            <SelectTrigger>
              <SelectValue placeholder="Select…" />
            </SelectTrigger>
            <SelectContent>
              {availableForP1.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Player 2</Label>
          <Select value={player2} onValueChange={(v) => { setPlayer2(v); setWinner(''); }} disabled={!player1}>
            <SelectTrigger>
              <SelectValue placeholder="Select…" />
            </SelectTrigger>
            <SelectContent>
              {availableForP2.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      {player1 && player2 && (
        <div className="space-y-2">
          <Label>Winner</Label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'player1', label: player1 },
              { value: 'draw', label: 'Draw' },
              { value: 'player2', label: player2 },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setWinner(opt.value as WinnerChoice)}
                className={`px-2 py-2 rounded-lg border text-sm font-medium transition-all ${
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
      )}

      <Button onClick={handleRecord} disabled={!canRecord} className="w-full">
        <Swords className="w-4 h-4 mr-2" />
        Record Match
      </Button>

      {players.length < 2 && (
        <p className="text-xs text-muted-foreground text-center">Add at least 2 players in the Players tab.</p>
      )}
    </div>
  );
}
