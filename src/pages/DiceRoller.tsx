import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ConfirmDialog } from '@/components/modals/ConfirmDialog';

const STORAGE_KEY = 'diceRollHistory';
const MAX_HISTORY = 50;

function loadHistory(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: number[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
}

function D20Icon({ value }: { value: number | null }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* D20 polygon */}
      <polygon
        points="50,5 95,30 95,70 50,95 5,70 5,30"
        className="fill-violet-900/60 stroke-violet-400"
        strokeWidth="2"
      />
      <polygon
        points="50,5 95,30 50,50"
        className="fill-violet-800/40 stroke-violet-500/50"
        strokeWidth="1"
      />
      <polygon
        points="50,5 5,30 50,50"
        className="fill-violet-950/40 stroke-violet-500/50"
        strokeWidth="1"
      />
      <polygon
        points="50,95 95,70 50,50"
        className="fill-violet-800/40 stroke-violet-500/50"
        strokeWidth="1"
      />
      <polygon
        points="50,95 5,70 50,50"
        className="fill-violet-950/40 stroke-violet-500/50"
        strokeWidth="1"
      />
      {value !== null && (
        <text
          x="50"
          y="56"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-bold"
          fontSize={value >= 10 ? '22' : '26'}
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          {value}
        </text>
      )}
    </svg>
  );
}

export default function DiceRoller() {
  const [history, setHistory] = useState<number[]>(loadHistory);
  const [isRolling, setIsRolling] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const latestRoll = history[0] ?? null;

  const roll = useCallback(() => {
    if (isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      const result = Math.floor(Math.random() * 20) + 1;
      setHistory((prev) => {
        const next = [result, ...prev].slice(0, MAX_HISTORY);
        saveHistory(next);
        return next;
      });
      setIsRolling(false);
    }, 500);
  }, [isRolling]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
    setConfirmClear(false);
  }, []);

  return (
    <div className="page-content">
      <Header title="Dice Roller" showBack showAbout />
      <div className="flex flex-col items-center px-5 py-6 gap-6">
        {/* D20 button */}
        <div className="w-48 h-48 cursor-pointer select-none" onClick={roll}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isRolling ? 'rolling' : latestRoll ?? 'empty'}
              initial={{ rotate: 0, scale: 1 }}
              animate={isRolling ? { rotate: [0, 180, 360], scale: [1, 1.1, 1] } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-full drop-shadow-lg drop-shadow-violet-900/50"
            >
              <D20Icon value={isRolling ? null : latestRoll} />
            </motion.div>
          </AnimatePresence>
        </div>

        {latestRoll !== null && !isRolling && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-6xl font-extrabold text-violet-300">{latestRoll}</p>
            {latestRoll === 20 && <p className="text-emerald-400 font-bold mt-1">Critical Hit! 🎉</p>}
            {latestRoll === 1 && <p className="text-rose-400 font-bold mt-1">Critical Fail!</p>}
          </motion.div>
        )}

        <Button onClick={roll} disabled={isRolling} size="lg" className="w-40 font-bold">
          {isRolling ? 'Rolling…' : 'Roll D20'}
        </Button>

        {/* History */}
        {history.length > 0 && (
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Roll History ({history.length})</p>
              <Button variant="ghost" size="sm" onClick={() => setConfirmClear(true)} className="text-destructive hover:text-destructive h-7 text-xs">
                <Trash2 className="w-3 h-3 mr-1" />
                Clear
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {history.map((roll, i) => (
                <Badge
                  key={i}
                  variant={i === 0 ? 'default' : 'neutral'}
                  className="text-sm px-2.5 py-1 font-mono"
                >
                  {roll}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      <ConfirmDialog
        open={confirmClear}
        title="Clear Roll History"
        message="This will delete all roll history."
        confirmLabel="Clear"
        onConfirm={clearHistory}
        onCancel={() => setConfirmClear(false)}
      />
    </div>
  );
}
