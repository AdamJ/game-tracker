import localForage from 'localforage';

export const StorageKeys = {
  PLAYERS: 'players',
  MATCH_HISTORY: 'matchHistory',
  PLAYER_DATA: 'playerData',
  STANDARD_TRACKER_DATA: 'standardTrackerData',
  APP_SETTINGS: 'appSettings',
} as const;

export type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

export interface Player {
  name: string;
}

export interface Match {
  player1: string;
  player2: string;
  result: 'win' | 'loss' | 'draw';
  timestamp?: number;
}

export interface Standing {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  winPercentage: number;
}

export interface MatchResult {
  player1Handle: string;
  player2Handle: string;
  player3Handle: string;
  player4Handle: string;
  player1LifeTracker: number;
  player2LifeTracker: number;
  player3LifeTracker: number;
  player4LifeTracker: number;
  player1Outcome: 'win' | 'loss' | 'draw';
  player2Outcome: 'win' | 'loss' | 'draw';
  player3Outcome: 'win' | 'loss' | 'draw';
  player4Outcome: 'win' | 'loss' | 'draw';
  timestamp?: number;
}

export interface PlayerData {
  initialLifeTracker: number;
  matchResults: MatchResult[];
  handle1: { life: number };
  handle2: { life: number };
  handle3: { life: number };
  handle4: { life: number };
  playerHandle1: string;
  playerHandle2: string;
  playerHandle3: string;
  playerHandle4: string;
  playerLogs: Array<{ player: string; action: string; life: number }>;
}

export interface SideData {
  initialPointsTracker: number;
  matchResults: StandardMatchResult[];
  side1: { points: number };
  side2: { points: number };
  sideHandle1: string;
  sideHandle2: string;
  sideLogs: Array<{ side: string; action: string; points: number }>;
}

export interface StandardMatchResult {
  sideOneHandle: string;
  sideTwoHandle: string;
  sideOnePointsTracker: number;
  sideTwoPointsTracker: number;
  sideOneOutcome: 'win' | 'loss' | 'draw';
  sideTwoOutcome: 'win' | 'loss' | 'draw';
}

export interface AppSettings {
  theme?: 'light' | 'dark' | 'auto';
  defaultLifeTotal?: number;
  enableNotifications?: boolean;
}

class StorageService {
  private store: LocalForage;

  constructor() {
    this.store = localForage.createInstance({
      name: 'game-tracker-db',
      storeName: 'game_data',
      description: 'Game tracker application data',
    });
  }

  async getItem<T>(key: StorageKey): Promise<T | null> {
    try {
      return await this.store.getItem<T>(key);
    } catch (error) {
      console.error(`Error getting item ${key}:`, error);
      return null;
    }
  }

  async setItem<T>(key: StorageKey, value: T): Promise<boolean> {
    try {
      await this.store.setItem(key, value);
      return true;
    } catch (error) {
      console.error(`Error setting item ${key}:`, error);
      return false;
    }
  }

  async removeItem(key: StorageKey): Promise<boolean> {
    try {
      await this.store.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item ${key}:`, error);
      return false;
    }
  }

  async clear(): Promise<boolean> {
    try {
      await this.store.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }

  async keys(): Promise<string[]> {
    try {
      return await this.store.keys();
    } catch {
      return [];
    }
  }

  async getPlayers(): Promise<string[]> {
    const players = await this.getItem<string[]>(StorageKeys.PLAYERS);
    return players || [];
  }

  async savePlayers(players: string[]): Promise<boolean> {
    return this.setItem(StorageKeys.PLAYERS, players);
  }

  async getMatchHistory(): Promise<Match[]> {
    const matches = await this.getItem<Match[]>(StorageKeys.MATCH_HISTORY);
    return matches || [];
  }

  async saveMatchHistory(matches: Match[]): Promise<boolean> {
    return this.setItem(StorageKeys.MATCH_HISTORY, matches);
  }

  async getPlayerData(): Promise<PlayerData | null> {
    return this.getItem<PlayerData>(StorageKeys.PLAYER_DATA);
  }

  async savePlayerData(data: PlayerData): Promise<boolean> {
    return this.setItem(StorageKeys.PLAYER_DATA, data);
  }

  async getSideData(): Promise<SideData | null> {
    return this.getItem<SideData>(StorageKeys.STANDARD_TRACKER_DATA);
  }

  async saveSideData(data: SideData): Promise<boolean> {
    return this.setItem(StorageKeys.STANDARD_TRACKER_DATA, data);
  }

  async getAppSettings(): Promise<AppSettings> {
    const settings = await this.getItem<AppSettings>(StorageKeys.APP_SETTINGS);
    return (
      settings || {
        theme: 'dark',
        defaultLifeTotal: 40,
        enableNotifications: true,
      }
    );
  }

  async migrateFromLocalStorage(): Promise<void> {
    try {
      const playersData = localStorage.getItem('players');
      if (playersData) {
        await this.savePlayers(JSON.parse(playersData));
        localStorage.removeItem('players');
      }
      const matchHistoryData = localStorage.getItem('matchHistory');
      if (matchHistoryData) {
        await this.saveMatchHistory(JSON.parse(matchHistoryData));
        localStorage.removeItem('matchHistory');
      }
    } catch (error) {
      console.error('Error migrating from localStorage:', error);
    }
  }

  async exportAllData(): Promise<Record<string, unknown>> {
    const data: Record<string, unknown> = {};
    const keys = await this.keys();
    for (const key of keys) {
      data[key] = await this.store.getItem(key);
    }
    return data;
  }
}

export const storageService = new StorageService();
