import { useState, useEffect, useCallback, useRef } from 'react';
import { storageService, type MatchResult, type PlayerData } from '@/services/storage.service';
import { arrayToCSV, downloadCSV } from '@/lib/utils';

export interface PlayerState {
  life: number;
  name: string;
}

export interface LogEntry {
  player: string;
  action: 'Gain' | 'Lose';
  life: number;
}

const DEFAULT_LIFE = 40;
const DEFAULT_NAMES = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];

function defaultPlayers(life = DEFAULT_LIFE): PlayerState[] {
  return DEFAULT_NAMES.map((name) => ({ life, name }));
}

export function useCommander() {
  const [players, setPlayers] = useState<PlayerState[]>(defaultPlayers());
  const [initialLife, setInitialLifeState] = useState(DEFAULT_LIFE);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use a ref to avoid stale closure issues when saving
  const stateRef = useRef({ players, initialLife, matchResults, logs });
  stateRef.current = { players, initialLife, matchResults, logs };

  const saveToStorage = useCallback(() => {
    const { players: p, initialLife: il, matchResults: mr, logs: l } = stateRef.current;
    const data: PlayerData = {
      initialLifeTracker: il,
      matchResults: mr,
      handle1: { life: p[0].life },
      handle2: { life: p[1].life },
      handle3: { life: p[2].life },
      handle4: { life: p[3].life },
      playerHandle1: p[0].name,
      playerHandle2: p[1].name,
      playerHandle3: p[2].name,
      playerHandle4: p[3].name,
      playerLogs: l.map((entry) => ({ player: entry.player, action: entry.action, life: entry.life })),
    };
    storageService.savePlayerData(data).catch(console.error);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await storageService.getPlayerData();
        if (data) {
          setInitialLifeState(data.initialLifeTracker || DEFAULT_LIFE);
          setMatchResults(data.matchResults || []);
          setPlayers([
            { life: data.handle1?.life ?? data.initialLifeTracker, name: data.playerHandle1 || DEFAULT_NAMES[0] },
            { life: data.handle2?.life ?? data.initialLifeTracker, name: data.playerHandle2 || DEFAULT_NAMES[1] },
            { life: data.handle3?.life ?? data.initialLifeTracker, name: data.playerHandle3 || DEFAULT_NAMES[2] },
            { life: data.handle4?.life ?? data.initialLifeTracker, name: data.playerHandle4 || DEFAULT_NAMES[3] },
          ]);
          setLogs((data.playerLogs || []).map((l) => ({ player: l.player, action: l.action as 'Gain' | 'Lose', life: l.life })));
        }
      } catch (err) {
        console.error('Failed to load commander data:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const updateLife = useCallback((idx: number, delta: number) => {
    setPlayers((prev) => {
      const next = prev.map((p, i) => {
        if (i !== idx) return p;
        const newLife = Math.max(0, p.life + delta);
        return { ...p, life: newLife };
      });
      const action: 'Gain' | 'Lose' = delta > 0 ? 'Gain' : 'Lose';
      setLogs((prevLogs) => [
        ...prevLogs,
        { player: prev[idx].name, action, life: Math.max(0, prev[idx].life + delta) },
      ]);
      setTimeout(saveToStorage, 0);
      return next;
    });
  }, [saveToStorage]);

  const updateName = useCallback((idx: number, name: string) => {
    setPlayers((prev) => {
      const next = prev.map((p, i) => (i === idx ? { ...p, name } : p));
      setTimeout(saveToStorage, 0);
      return next;
    });
  }, [saveToStorage]);

  const setInitialLife = useCallback((life: number) => {
    setInitialLifeState(life);
    setPlayers(DEFAULT_NAMES.map((name, i) => ({
      name: stateRef.current.players[i]?.name || name,
      life,
    })));
    setLogs([]);
    setTimeout(saveToStorage, 0);
  }, [saveToStorage]);

  const recordResult = useCallback((winner: 0 | 1 | 2 | 3 | 'draw') => {
    const p = stateRef.current.players;
    const outcomes: MatchResult['player1Outcome'][] = [0, 1, 2, 3].map((i) =>
      winner === 'draw' ? 'draw' : winner === i ? 'win' : 'loss'
    );
    const result: MatchResult = {
      player1Handle: p[0].name,
      player2Handle: p[1].name,
      player3Handle: p[2].name,
      player4Handle: p[3].name,
      player1LifeTracker: p[0].life,
      player2LifeTracker: p[1].life,
      player3LifeTracker: p[2].life,
      player4LifeTracker: p[3].life,
      player1Outcome: outcomes[0],
      player2Outcome: outcomes[1],
      player3Outcome: outcomes[2],
      player4Outcome: outcomes[3],
      timestamp: Date.now(),
    };
    setMatchResults((prev) => [...prev, result]);
    // Reset life after recording
    setPlayers((prev) => prev.map((p) => ({ ...p, life: stateRef.current.initialLife })));
    setLogs([]);
    setTimeout(saveToStorage, 0);
  }, [saveToStorage]);

  const resetGame = useCallback(() => {
    const il = stateRef.current.initialLife;
    setPlayers(DEFAULT_NAMES.map((name, i) => ({
      name: stateRef.current.players[i]?.name || name,
      life: il,
    })));
    setLogs([]);
    setMatchResults([]);
    setTimeout(saveToStorage, 0);
  }, [saveToStorage]);

  const resetLife = useCallback(() => {
    const il = stateRef.current.initialLife;
    setPlayers((prev) => prev.map((p) => ({ ...p, life: il })));
    setLogs([]);
    setTimeout(saveToStorage, 0);
  }, [saveToStorage]);

  const getPlayerStats = useCallback((name: string) => {
    return matchResults.reduce(
      (acc, r) => {
        const handles = [r.player1Handle, r.player2Handle, r.player3Handle, r.player4Handle];
        const outcomes = [r.player1Outcome, r.player2Outcome, r.player3Outcome, r.player4Outcome];
        const idx = handles.indexOf(name);
        if (idx === -1) return acc;
        const outcome = outcomes[idx];
        return {
          wins: acc.wins + (outcome === 'win' ? 1 : 0),
          losses: acc.losses + (outcome === 'loss' ? 1 : 0),
          draws: acc.draws + (outcome === 'draw' ? 1 : 0),
        };
      },
      { wins: 0, losses: 0, draws: 0 }
    );
  }, [matchResults]);

  const exportToCSV = useCallback(() => {
    if (matchResults.length === 0) return;
    const csv = arrayToCSV(matchResults as unknown as Record<string, unknown>[]);
    downloadCSV(csv, 'game_results.csv');
  }, [matchResults]);

  return {
    players, initialLife, matchResults, logs, isLoading,
    updateLife, updateName, setInitialLife,
    recordResult, resetGame, resetLife,
    getPlayerStats, exportToCSV,
  };
}
