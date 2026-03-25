
import { Pencil, Trash2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Match } from '@/services/storage.service';

interface MatchHistoryListProps {
  matchHistory: Match[];
  onEditMatch: (index: number) => void;
  onDeleteMatch: (index: number) => void;
}

function resultBadgeVariant(result: Match['result'], perspective: 'player1' | 'player2') {
  if (result === 'draw') return 'neutral';
  if ((result === 'win' && perspective === 'player1') || (result === 'loss' && perspective === 'player2')) {
    return 'success';
  }
  return 'destructive';
}

function resultLabel(result: Match['result'], perspective: 'player1' | 'player2') {
  if (result === 'draw') return 'Draw';
  if ((result === 'win' && perspective === 'player1') || (result === 'loss' && perspective === 'player2')) {
    return 'Won';
  }
  return 'Lost';
}

export function MatchHistoryList({ matchHistory, onEditMatch, onDeleteMatch }: MatchHistoryListProps) {
  if (matchHistory.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Clock className="w-10 h-10 mx-auto mb-2 opacity-20" />
        <p className="text-sm">No matches recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {[...matchHistory].reverse().map((match, revIndex) => {
        const index = matchHistory.length - 1 - revIndex;
        return (
          <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/30">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm text-foreground">{match.player1}</span>
                <Badge variant={resultBadgeVariant(match.result, 'player1')} className="text-xs">
                  {resultLabel(match.result, 'player1')}
                </Badge>
                <span className="text-muted-foreground text-xs">vs</span>
                <span className="font-medium text-sm text-foreground">{match.player2}</span>
                <Badge variant={resultBadgeVariant(match.result, 'player2')} className="text-xs">
                  {resultLabel(match.result, 'player2')}
                </Badge>
              </div>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <Button variant="ghost" size="icon-sm" onClick={() => onEditMatch(index)} aria-label="Edit match">
                <Pencil className="w-3.5 h-3.5" />
              </Button>
              <Button variant="ghost" size="icon-sm" onClick={() => onDeleteMatch(index)} aria-label="Delete match" className="text-destructive hover:text-destructive">
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
