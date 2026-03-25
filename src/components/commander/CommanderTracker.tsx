import { useState } from 'react';
import { Download, RotateCcw, RefreshCw } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ConfirmDialog } from '@/components/modals/ConfirmDialog';
import { PlayerPanel } from './PlayerPanel';
import { useCommander } from '@/hooks/useCommander';

const PANEL_COLORS = [
  'bg-gradient-to-b from-amber-950/40 to-amber-900/10',
  'bg-gradient-to-b from-sky-950/40 to-sky-900/10',
  'bg-gradient-to-b from-emerald-950/40 to-emerald-900/10',
  'bg-gradient-to-b from-rose-950/40 to-rose-900/10',
];

export function CommanderTracker() {
  const {
    players, initialLife, matchResults, logs, isLoading,
    updateLife, updateName, setInitialLife,
    recordResult, resetGame, resetLife,
    getPlayerStats, exportToCSV,
  } = useCommander();

  const [confirmReset, setConfirmReset] = useState(false);
  const [activeTab, setActiveTab] = useState('life');

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const trackerHeight = 'calc(100svh - 4rem - env(safe-area-inset-bottom) - 4rem)';

  return (
    <div className="flex flex-col" style={{ height: 'calc(100svh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 4rem)' }}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1 overflow-hidden">
        <TabsList className="mx-3 mt-2 grid grid-cols-5 flex-shrink-0">
          <TabsTrigger value="life" className="text-xs">Life</TabsTrigger>
          <TabsTrigger value="results" className="text-xs">Results</TabsTrigger>
          <TabsTrigger value="standings" className="text-xs">Standings</TabsTrigger>
          <TabsTrigger value="log" className="text-xs">Log</TabsTrigger>
          <TabsTrigger value="setup" className="text-xs">Setup</TabsTrigger>
        </TabsList>

        {/* Life tracker - full height 2x2 grid */}
        <TabsContent value="life" className="flex-1 overflow-hidden m-0 mt-2">
          <div className="grid grid-cols-2 gap-2 px-3 h-full" style={{ height: trackerHeight }}>
            {players.map((player, i) => (
              <PlayerPanel
                key={i}
                name={player.name}
                life={player.life}
                color={PANEL_COLORS[i]}
                onGain={() => updateLife(i, 1)}
                onLose={() => updateLife(i, -1)}
              />
            ))}
          </div>
        </TabsContent>

        {/* Results tab */}
        <TabsContent value="results" className="flex-1 overflow-y-auto px-3">
          <div className="space-y-4 py-3">
            <p className="text-sm text-muted-foreground text-center">Record the winner of this game</p>
            <div className="grid grid-cols-2 gap-2">
              {players.map((player, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="h-14 text-sm font-semibold"
                  onClick={() => recordResult(i as 0 | 1 | 2 | 3)}
                >
                  {player.name} Wins
                </Button>
              ))}
            </div>
            <Button variant="outline" className="w-full" onClick={() => recordResult('draw')}>
              Draw
            </Button>

            {matchResults.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border/50">
                      {players.map((p) => (
                        <th key={p.name} className="pb-2 text-left text-muted-foreground font-medium px-1">{p.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matchResults.map((r, i) => (
                      <tr key={i} className="border-b border-border/20">
                        {[r.player1Outcome, r.player2Outcome, r.player3Outcome, r.player4Outcome].map((o, j) => (
                          <td key={j} className="py-1.5 px-1">
                            <Badge variant={o === 'win' ? 'success' : o === 'loss' ? 'destructive' : 'neutral'} className="text-xs">{o}</Badge>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Standings tab */}
        <TabsContent value="standings" className="flex-1 overflow-y-auto px-3">
          <div className="py-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left pb-2 text-muted-foreground font-medium">Player</th>
                  <th className="text-center pb-2 text-muted-foreground font-medium">W</th>
                  <th className="text-center pb-2 text-muted-foreground font-medium">L</th>
                  <th className="text-center pb-2 text-muted-foreground font-medium">D</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => {
                  const stats = getPlayerStats(player.name);
                  return (
                    <tr key={player.name} className="border-b border-border/20">
                      <td className="py-2.5 font-medium">{player.name}</td>
                      <td className="py-2.5 text-center"><Badge variant="success" className="text-xs">{stats.wins}</Badge></td>
                      <td className="py-2.5 text-center"><Badge variant="destructive" className="text-xs">{stats.losses}</Badge></td>
                      <td className="py-2.5 text-center"><Badge variant="neutral" className="text-xs">{stats.draws}</Badge></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Action log tab */}
        <TabsContent value="log" className="flex-1 overflow-y-auto px-3">
          <div className="py-3 space-y-1.5">
            {logs.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">No actions logged yet.</p>
            ) : (
              [...logs].reverse().map((entry, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-secondary/40 text-sm">
                  <Badge variant={entry.action === 'Gain' ? 'success' : 'destructive'} className="text-xs">{entry.action}</Badge>
                  <span className="text-muted-foreground">{entry.player}</span>
                  <span className="ml-auto font-mono font-bold">{entry.life}</span>
                </div>
              ))
            )}
          </div>
        </TabsContent>

        {/* Setup tab */}
        <TabsContent value="setup" className="flex-1 overflow-y-auto px-3">
          <div className="py-3 space-y-5">
            <div className="space-y-2">
              <Label>Starting Life</Label>
              <Input
                type="number"
                min={1}
                defaultValue={initialLife}
                className="w-32"
                onBlur={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val > 0) setInitialLife(val);
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {players.map((player, i) => (
                <div key={i} className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Player {i + 1}</Label>
                  <Input
                    defaultValue={player.name}
                    placeholder={`Player ${i + 1}`}
                    onBlur={(e) => updateName(i, e.target.value || `Player ${i + 1}`)}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1" onClick={resetLife}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset Life
              </Button>
              <Button variant="outline" className="flex-1 text-destructive hover:text-destructive border-destructive/30" onClick={() => setConfirmReset(true)}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Full Reset
              </Button>
            </div>

            <Button variant="outline" className="w-full" onClick={exportToCSV} disabled={matchResults.length === 0}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <ConfirmDialog
        open={confirmReset}
        title="Reset All Data"
        message="This will reset all life totals, names, and match history. This cannot be undone."
        confirmLabel="Reset All"
        onConfirm={() => { resetGame(); setConfirmReset(false); }}
        onCancel={() => setConfirmReset(false)}
      />
    </div>
  );
}
