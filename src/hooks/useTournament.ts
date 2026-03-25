import { useState, useEffect, useCallback } from 'react';
import { storageService, type Match, type Standing } from '@/services/storage.service';
import { downloadCSV } from '@/lib/utils';

function calculateStandings(players: string[], matchHistory: Match[]): Standing[] {
  const map = new Map<string, { wins: number; losses: number; draws: number; points: number; winPercentage: number }>();
  players.forEach((p) => map.set(p, { wins: 0, losses: 0, draws: 0, points: 0, winPercentage: 0 }));

  matchHistory.forEach((match) => {
    const p1 = map.get(match.player1);
    const p2 = map.get(match.player2);
    if (p1 && p2) {
      if (match.result === 'win') {
        p1.wins++;
        p1.points += 3;
        p2.losses++;
      } else if (match.result === 'loss') {
        p2.wins++;
        p2.points += 3;
        p1.losses++;
      } else {
        p1.draws++;
        p1.points++;
        p2.draws++;
        p2.points++;
      }
    }
  });

  const standings: Standing[] = Array.from(map.entries()).map(([name, s]) => {
    const total = s.wins + s.losses + s.draws;
    return {
      name,
      wins: s.wins,
      losses: s.losses,
      draws: s.draws,
      points: s.points,
      winPercentage: total > 0 ? parseFloat(((s.wins / total) * 100).toFixed(2)) : 0,
    };
  });

  return standings.sort((a, b) =>
    b.points !== a.points ? b.points - a.points : b.winPercentage - a.winPercentage
  );
}

export function useTournament() {
  const [players, setPlayers] = useState<string[]>([]);
  const [matchHistory, setMatchHistory] = useState<Match[]>([]);
  const [standings, setStandings] = useState<Standing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [p, m] = await Promise.all([
          storageService.getPlayers(),
          storageService.getMatchHistory(),
        ]);
        setPlayers(p);
        setMatchHistory(m);
        setStandings(calculateStandings(p, m));
      } catch (err) {
        console.error('Error loading tournament data:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const addPlayer = useCallback(async (name: string) => {
    setPlayers((prev) => {
      const next = [...prev, name];
      storageService.savePlayers(next);
      setStandings(calculateStandings(next, matchHistory));
      return next;
    });
  }, [matchHistory]);

  const removePlayer = useCallback(async (name: string) => {
    setPlayers((prev) => {
      const next = prev.filter((p) => p !== name);
      storageService.savePlayers(next);
      setStandings(calculateStandings(next, matchHistory));
      return next;
    });
  }, [matchHistory]);

  const clearPlayers = useCallback(async () => {
    setPlayers([]);
    setStandings([]);
    await storageService.savePlayers([]);
  }, []);

  const recordMatch = useCallback(async (match: Match) => {
    setMatchHistory((prev) => {
      const next = [...prev, match];
      storageService.saveMatchHistory(next);
      setStandings(calculateStandings(players, next));
      return next;
    });
  }, [players]);

  const editMatch = useCallback(async (index: number, edited: Match) => {
    setMatchHistory((prev) => {
      const next = prev.map((m, i) => (i === index ? edited : m));
      storageService.saveMatchHistory(next);
      setStandings(calculateStandings(players, next));
      return next;
    });
  }, [players]);

  const deleteMatch = useCallback(async (index: number) => {
    setMatchHistory((prev) => {
      const next = prev.filter((_, i) => i !== index);
      storageService.saveMatchHistory(next);
      setStandings(calculateStandings(players, next));
      return next;
    });
  }, [players]);

  const clearMatchHistory = useCallback(async () => {
    setMatchHistory([]);
    setStandings(calculateStandings(players, []));
    await storageService.saveMatchHistory([]);
  }, [players]);

  const exportStandings = useCallback(() => {
    const header = 'name,wins,losses,draws,points,winPercentage';
    const rows = standings.map((s) => `${s.name},${s.wins},${s.losses},${s.draws},${s.points},${s.winPercentage}`);
    downloadCSV(header + '\n' + rows.join('\n'), 'standings.csv');
  }, [standings]);

  const exportMatchResults = useCallback(() => {
    const header = 'player1,player2,result';
    const rows = matchHistory.map((m) => `${m.player1},${m.player2},${m.result}`);
    downloadCSV(header + '\n' + rows.join('\n'), 'match-results.csv');
  }, [matchHistory]);

  return {
    players,
    matchHistory,
    standings,
    isLoading,
    addPlayer,
    removePlayer,
    clearPlayers,
    recordMatch,
    editMatch,
    deleteMatch,
    clearMatchHistory,
    exportStandings,
    exportMatchResults,
  };
}
