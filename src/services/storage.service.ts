import localForage from 'localforage';

/**
 * Centralized Storage Service
 * Provides a consistent interface for storing and retrieving data across the application
 * Uses localForage for better performance and larger storage capacity
 */

// Storage Keys
export const StorageKeys = {
	PLAYERS: 'players',
	MATCH_HISTORY: 'matchHistory',
	PLAYER_DATA: 'playerData',
	STANDARD_TRACKER_DATA: 'standardTrackerData',
	APP_SETTINGS: 'appSettings',
} as const;

export type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

// Type definitions for stored data
export interface Player {
	name: string;
}

export interface Match {
	player1: string;
	player2: string;
	result: 'win' | 'loss' | 'draw';
	timestamp?: number;
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
	playerLogs: Array<{
		player: string;
		action: string;
		life: number;
	}>;
}

export interface AppSettings {
	theme?: 'light' | 'dark' | 'auto';
	defaultLifeTotal?: number;
	enableNotifications?: boolean;
}

/**
 * Storage Service Class
 * Provides type-safe methods for interacting with localForage
 */
class StorageService {
	private store: LocalForage;

	constructor() {
		this.store = localForage.createInstance({
			name: 'game-tracker-db',
			storeName: 'game_data',
			description: 'Game tracker application data',
		});
	}

	/**
	 * Get an item from storage
	 */
	async getItem<T>(key: StorageKey): Promise<T | null> {
		try {
			const value = await this.store.getItem<T>(key);
			return value;
		} catch (error) {
			console.error(`Error getting item ${key}:`, error);
			return null;
		}
	}

	/**
	 * Set an item in storage
	 */
	async setItem<T>(key: StorageKey, value: T): Promise<boolean> {
		try {
			await this.store.setItem(key, value);
			return true;
		} catch (error) {
			console.error(`Error setting item ${key}:`, error);
			return false;
		}
	}

	/**
	 * Remove an item from storage
	 */
	async removeItem(key: StorageKey): Promise<boolean> {
		try {
			await this.store.removeItem(key);
			return true;
		} catch (error) {
			console.error(`Error removing item ${key}:`, error);
			return false;
		}
	}

	/**
	 * Clear all items from storage
	 */
	async clear(): Promise<boolean> {
		try {
			await this.store.clear();
			return true;
		} catch (error) {
			console.error('Error clearing storage:', error);
			return false;
		}
	}

	/**
	 * Get all keys from storage
	 */
	async keys(): Promise<string[]> {
		try {
			return await this.store.keys();
		} catch (error) {
			console.error('Error getting keys:', error);
			return [];
		}
	}

	/**
	 * Get the number of items in storage
	 */
	async length(): Promise<number> {
		try {
			return await this.store.length();
		} catch (error) {
			console.error('Error getting length:', error);
			return 0;
		}
	}

	// Specialized methods for common operations

	/**
	 * Get players list
	 */
	async getPlayers(): Promise<string[]> {
		const players = await this.getItem<string[]>(StorageKeys.PLAYERS);
		return players || [];
	}

	/**
	 * Save players list
	 */
	async savePlayers(players: string[]): Promise<boolean> {
		return await this.setItem(StorageKeys.PLAYERS, players);
	}

	/**
	 * Get match history
	 */
	async getMatchHistory(): Promise<Match[]> {
		const matches = await this.getItem<Match[]>(StorageKeys.MATCH_HISTORY);
		return matches || [];
	}

	/**
	 * Save match history
	 */
	async saveMatchHistory(matches: Match[]): Promise<boolean> {
		return await this.setItem(StorageKeys.MATCH_HISTORY, matches);
	}

	/**
	 * Get player data (for match tracker)
	 */
	async getPlayerData(): Promise<PlayerData | null> {
		return await this.getItem<PlayerData>(StorageKeys.PLAYER_DATA);
	}

	/**
	 * Save player data (for match tracker)
	 */
	async savePlayerData(data: PlayerData): Promise<boolean> {
		return await this.setItem(StorageKeys.PLAYER_DATA, data);
	}

	/**
	 * Get app settings
	 */
	async getAppSettings(): Promise<AppSettings> {
		const settings = await this.getItem<AppSettings>(StorageKeys.APP_SETTINGS);
		return settings || {
			theme: 'auto',
			defaultLifeTotal: 40,
			enableNotifications: true,
		};
	}

	/**
	 * Save app settings
	 */
	async saveAppSettings(settings: AppSettings): Promise<boolean> {
		return await this.setItem(StorageKeys.APP_SETTINGS, settings);
	}

	/**
	 * Migrate data from localStorage to localForage
	 * This is useful for transitioning existing data
	 */
	async migrateFromLocalStorage(): Promise<void> {
		try {
			// Migrate players
			const playersData = localStorage.getItem('players');
			if (playersData) {
				const players = JSON.parse(playersData);
				await this.savePlayers(players);
				console.log('Migrated players from localStorage');
			}

			// Migrate match history
			const matchHistoryData = localStorage.getItem('matchHistory');
			if (matchHistoryData) {
				const matches = JSON.parse(matchHistoryData);
				await this.saveMatchHistory(matches);
				console.log('Migrated match history from localStorage');
			}

			// Note: Don't clear localStorage here - let components handle that
			// after they verify the migration was successful
		} catch (error) {
			console.error('Error migrating from localStorage:', error);
		}
	}

	/**
	 * Export all data as JSON
	 */
	async exportAllData(): Promise<Record<string, any>> {
		const data: Record<string, any> = {};
		const keys = await this.keys();

		for (const key of keys) {
			data[key] = await this.store.getItem(key);
		}

		return data;
	}

	/**
	 * Import data from JSON
	 */
	async importData(data: Record<string, any>): Promise<boolean> {
		try {
			for (const [key, value] of Object.entries(data)) {
				await this.store.setItem(key, value);
			}
			return true;
		} catch (error) {
			console.error('Error importing data:', error);
			return false;
		}
	}
}

// Export a singleton instance
export const storageService = new StorageService();

// Export the class for testing
export { StorageService };
