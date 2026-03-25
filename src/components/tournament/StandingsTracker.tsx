import { useState } from 'react';
import { Download, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlayerInput } from './PlayerInput';
import { MatchInput } from './MatchInput';
import { StandingsDisplay } from './StandingsDisplay';
import { MatchHistoryList } from './MatchHistoryList';
import { EditMatchDialog } from '@/components/modals/EditMatchDialog';
import { ConfirmDialog } from '@/components/modals/ConfirmDialog';
import { useTournament } from '@/hooks/useTournament';
import type { Match } from '@/services/storage.service';

export function StandingsTracker() {
  const {
    players, matchHistory, standings, isLoading,
    addPlayer, removePlayer, clearPlayers,
    recordMatch, editMatch, deleteMatch, clearMatchHistory,
    exportStandings, exportMatchResults,
  } = useTournament();

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [confirmClearAll, setConfirmClearAll] = useState(false);
  const [matchInputOpen, setMatchInputOpen] = useState(true);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Match input collapsible */}
      <div className="rounded-2xl border border-border/50 overflow-hidden">
        <button
          className="w-full flex items-center justify-between px-4 py-3 bg-secondary/30 hover:bg-secondary/50 transition-colors"
          onClick={() => setMatchInputOpen(!matchInputOpen)}
        >
          <span className="font-semibold text-sm text-foreground">Record Match</span>
          {matchInputOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </button>
        {matchInputOpen && (
          <div className="p-4 border-t border-border/30">
            <MatchInput players={players} onRecordMatch={recordMatch} />
          </div>
        )}
      </div>

      <Tabs defaultValue="standings">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="standings">Standings</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="players">Players</TabsTrigger>
        </TabsList>

        <TabsContent value="standings" className="space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p className="text-sm text-muted-foreground">{standings.length} player{standings.length !== 1 ? 's' : ''}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={exportStandings} disabled={standings.length === 0}>
                <Download className="w-3.5 h-3.5 mr-1" />
                Export
              </Button>
              <Button variant="outline" size="sm" onClick={() => setConfirmClearAll(true)} disabled={matchHistory.length === 0} className="text-destructive hover:text-destructive border-destructive/30">
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                Clear
              </Button>
            </div>
          </div>
          <StandingsDisplay standings={standings} />
        </TabsContent>

        <TabsContent value="history" className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">{matchHistory.length} match{matchHistory.length !== 1 ? 'es' : ''}</p>
            <Button variant="outline" size="sm" onClick={exportMatchResults} disabled={matchHistory.length === 0}>
              <Download className="w-3.5 h-3.5 mr-1" />
              Export CSV
            </Button>
          </div>
          <MatchHistoryList
            matchHistory={matchHistory}
            onEditMatch={(i) => setEditIndex(i)}
            onDeleteMatch={deleteMatch}
          />
        </TabsContent>

        <TabsContent value="players">
          <PlayerInput
            players={players}
            onAddPlayer={addPlayer}
            onRemovePlayer={removePlayer}
            onClearAll={clearPlayers}
          />
        </TabsContent>
      </Tabs>

      <EditMatchDialog
        open={editIndex !== null}
        match={editIndex !== null ? matchHistory[editIndex] : null}
        onClose={() => setEditIndex(null)}
        onSave={(edited: Match) => { if (editIndex !== null) editMatch(editIndex, edited); setEditIndex(null); }}
      />

      <ConfirmDialog
        open={confirmClearAll}
        title="Clear All Match Data"
        message="This will delete all match history and reset standings. Players will remain. This cannot be undone."
        confirmLabel="Clear All"
        onConfirm={() => { clearMatchHistory(); setConfirmClearAll(false); }}
        onCancel={() => setConfirmClearAll(false)}
      />
    </div>
  );
}
