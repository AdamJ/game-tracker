import { useState, useEffect, useCallback, useRef } from 'react';
import { storageService, type SideData } from '@/services/storage.service';

export interface SideState {
  points: number;
  name: string;
}

export interface SideLogEntry {
  side: string;
  action: 'Plus' | 'Minus';
  points: number;
}

const DEFAULT_POINTS = 20;

export function useStandard() {
  const [sides, setSides] = useState<[SideState, SideState]>([
    { points: DEFAULT_POINTS, name: 'Side 1' },
    { points: DEFAULT_POINTS, name: 'Side 2' },
  ]);
  const [initialPoints, setInitialPointsState] = useState(DEFAULT_POINTS);
  const [logs, setLogs] = useState<SideLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const stateRef = useRef({ sides, initialPoints, logs });
  stateRef.current = { sides, initialPoints, logs };

  const saveToStorage = useCallback(() => {
    const { sides: s, initialPoints: ip, logs: l } = stateRef.current;
    const data: SideData = {
      initialPointsTracker: ip,
      matchResults: [],
      side1: { points: s[0].points },
      side2: { points: s[1].points },
      sideHandle1: s[0].name,
      sideHandle2: s[1].name,
      sideLogs: l.map((e) => ({ side: e.side, action: e.action, points: e.points })),
    };
    storageService.saveSideData(data).catch(console.error);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await storageService.getSideData();
        if (data) {
          const ip = data.initialPointsTracker || DEFAULT_POINTS;
          setInitialPointsState(ip);
          setSides([
            { points: data.side1?.points ?? ip, name: data.sideHandle1 || 'Side 1' },
            { points: data.side2?.points ?? ip, name: data.sideHandle2 || 'Side 2' },
          ]);
        }
      } catch (err) {
        console.error('Failed to load standard data:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const updatePoints = useCallback((idx: 0 | 1, delta: number) => {
    setSides((prev) => {
      const next: [SideState, SideState] = [...prev] as [SideState, SideState];
      const newPoints = Math.max(0, prev[idx].points + delta);
      next[idx] = { ...prev[idx], points: newPoints };
      setLogs((prevLogs) => [
        ...prevLogs,
        { side: prev[idx].name, action: delta > 0 ? 'Plus' : 'Minus', points: newPoints },
      ]);
      setTimeout(saveToStorage, 0);
      return next;
    });
  }, [saveToStorage]);

  const setInitialPoints = useCallback((points: number) => {
    setInitialPointsState(points);
    setSides((prev) => [
      { ...prev[0], points },
      { ...prev[1], points },
    ]);
    setLogs([]);
    setTimeout(saveToStorage, 0);
  }, [saveToStorage]);

  const resetGame = useCallback(() => {
    const ip = stateRef.current.initialPoints;
    setSides((prev) => [
      { ...prev[0], points: ip },
      { ...prev[1], points: ip },
    ]);
    setLogs([]);
    setTimeout(saveToStorage, 0);
  }, [saveToStorage]);

  return {
    sides, initialPoints, logs, isLoading,
    updatePoints, setInitialPoints, resetGame,
  };
}
