
import { Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Standing } from '@/services/storage.service';

interface StandingsDisplayProps {
  standings: Standing[];
}

const medalColors = ['text-amber-400', 'text-slate-400', 'text-amber-700'];

export function StandingsDisplay({ standings }: StandingsDisplayProps) {
  if (standings.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Trophy className="w-10 h-10 mx-auto mb-2 opacity-20" />
        <p className="text-sm">No standings yet. Add players and record matches.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left pb-2 text-muted-foreground font-medium pl-2">#</th>
            <th className="text-left pb-2 text-muted-foreground font-medium">Player</th>
            <th className="text-center pb-2 text-muted-foreground font-medium">W</th>
            <th className="text-center pb-2 text-muted-foreground font-medium">L</th>
            <th className="text-center pb-2 text-muted-foreground font-medium">D</th>
            <th className="text-center pb-2 text-muted-foreground font-medium">Pts</th>
            <th className="text-right pb-2 text-muted-foreground font-medium pr-2 hidden sm:table-cell">Win%</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s, i) => (
            <tr key={s.name} className="border-b border-border/20 last:border-0">
              <td className="py-2.5 pl-2">
                {i < 3 ? (
                  <Trophy className={`w-4 h-4 ${medalColors[i]}`} />
                ) : (
                  <span className="text-muted-foreground text-xs">{i + 1}</span>
                )}
              </td>
              <td className="py-2.5 font-medium text-foreground">{s.name}</td>
              <td className="py-2.5 text-center">
                <Badge variant="success" className="text-xs px-1.5 py-0">{s.wins}</Badge>
              </td>
              <td className="py-2.5 text-center">
                <Badge variant="destructive" className="text-xs px-1.5 py-0">{s.losses}</Badge>
              </td>
              <td className="py-2.5 text-center">
                <Badge variant="neutral" className="text-xs px-1.5 py-0">{s.draws}</Badge>
              </td>
              <td className="py-2.5 text-center font-bold text-foreground">{s.points}</td>
              <td className="py-2.5 text-right pr-2 text-muted-foreground hidden sm:table-cell">{s.winPercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
