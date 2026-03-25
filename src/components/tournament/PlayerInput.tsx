import React, { useState } from 'react';
import { UserPlus, X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface PlayerInputProps {
  players: string[];
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (name: string) => void;
  onClearAll: () => void;
}

const PLAYER_REGEX = /^[a-zA-Z0-9]+$/;

export function PlayerInput({ players, onAddPlayer, onRemovePlayer, onClearAll }: PlayerInputProps) {
  const [newPlayer, setNewPlayer] = useState('');
  const [error, setError] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newPlayer.trim();
    if (!name) return;
    if (!PLAYER_REGEX.test(name)) {
      setError('Name must be alphanumeric with no spaces.');
      return;
    }
    if (players.includes(name)) {
      setError('Player already exists.');
      return;
    }
    onAddPlayer(name);
    setNewPlayer('');
    setError('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleAdd} className="space-y-2">
        <Label htmlFor="player-name">Add Player</Label>
        <div className="flex gap-2">
          <Input
            id="player-name"
            placeholder="PlayerName (no spaces)"
            value={newPlayer}
            onChange={(e) => {
              setNewPlayer(e.target.value);
              setError('');
            }}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!newPlayer.trim()}>
            <UserPlus className="w-4 h-4" />
          </Button>
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
        <p className="text-xs text-muted-foreground">Letters and numbers only, no spaces.</p>
      </form>

      {players.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-muted-foreground">{players.length} player{players.length !== 1 ? 's' : ''}</Label>
            <Button variant="ghost" size="sm" onClick={onClearAll} className="text-destructive hover:text-destructive h-7 text-xs">
              <Trash2 className="w-3 h-3 mr-1" />
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {players.map((player) => (
              <Badge key={player} variant="secondary" className="flex items-center gap-1 pr-1 pl-3 py-1 text-sm">
                {player}
                <button
                  onClick={() => onRemovePlayer(player)}
                  className="ml-1 rounded-full hover:bg-destructive/20 p-0.5 transition-colors"
                  aria-label={`Remove ${player}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {players.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">No players yet. Add some to get started.</p>
      )}
    </div>
  );
}
