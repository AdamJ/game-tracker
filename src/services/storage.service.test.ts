import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
	StorageService,
	storageService,
	StorageKeys,
	type PlayerData,
	type AppSettings,
} from './storage.service';
import localForage from 'localforage';

// Mock localForage
vi.mock('localforage', () => {
	const store: Record<string, any> = {};

	const mockInstance = {
		getItem: vi.fn((key: string) => Promise.resolve(store[key] || null)),
		setItem: vi.fn((key: string, value: any) => {
			store[key] = value;
			return Promise.resolve(value);
		}),
		removeItem: vi.fn((key: string) => {
			delete store[key];
			return Promise.resolve();
		}),
		clear: vi.fn(() => {
			Object.keys(store).forEach((key) => delete store[key]);
			return Promise.resolve();
		}),
		keys: vi.fn(() => Promise.resolve(Object.keys(store))),
		length: vi.fn(() => Promise.resolve(Object.keys(store).length)),
	};

	return {
		default: {
			createInstance: vi.fn(() => mockInstance),
		},
	};
});

describe('StorageService', () => {
	let service: StorageService;

	beforeEach(async () => {
		service = new StorageService();
		await service.clear();
	});

	describe('Basic Operations', () => {
		it('should store and retrieve a string', async () => {
			const key = StorageKeys.PLAYERS;
			const value = ['Alice', 'Bob'];

			await service.setItem(key, value);
			const retrieved = await service.getItem<string[]>(key);

			expect(retrieved).toEqual(value);
		});

		it('should return null for non-existent key', async () => {
			const retrieved = await service.getItem('non-existent-key' as any);
			expect(retrieved).toBeNull();
		});

		it('should remove an item', async () => {
			const key = StorageKeys.PLAYERS;
			await service.setItem(key, ['Alice']);

			const removed = await service.removeItem(key);
			expect(removed).toBe(true);

			const retrieved = await service.getItem(key);
			expect(retrieved).toBeNull();
		});

		it('should clear all items', async () => {
			await service.setItem(StorageKeys.PLAYERS, ['Alice']);
			await service.setItem(StorageKeys.MATCH_HISTORY, []);

			const cleared = await service.clear();
			expect(cleared).toBe(true);

			const length = await service.length();
			expect(length).toBe(0);
		});

		it('should get all keys', async () => {
			await service.setItem(StorageKeys.PLAYERS, ['Alice']);
			await service.setItem(StorageKeys.MATCH_HISTORY, []);

			const keys = await service.keys();
			expect(keys).toContain(StorageKeys.PLAYERS);
			expect(keys).toContain(StorageKeys.MATCH_HISTORY);
		});

		it('should get storage length', async () => {
			await service.setItem(StorageKeys.PLAYERS, ['Alice']);
			await service.setItem(StorageKeys.MATCH_HISTORY, []);

			const length = await service.length();
			expect(length).toBe(2);
		});
	});

	describe('Players Management', () => {
		it('should get empty array when no players exist', async () => {
			const players = await service.getPlayers();
			expect(players).toEqual([]);
		});

		it('should save and retrieve players', async () => {
			const players = ['Alice', 'Bob', 'Charlie'];
			await service.savePlayers(players);

			const retrieved = await service.getPlayers();
			expect(retrieved).toEqual(players);
		});

		it('should update players list', async () => {
			await service.savePlayers(['Alice']);
			await service.savePlayers(['Alice', 'Bob']);

			const retrieved = await service.getPlayers();
			expect(retrieved).toEqual(['Alice', 'Bob']);
		});
	});

	describe('Match History Management', () => {
		it('should get empty array when no match history exists', async () => {
			const matches = await service.getMatchHistory();
			expect(matches).toEqual([]);
		});

		it('should save and retrieve match history', async () => {
			const matches = [
				{
					player1: 'Alice',
					player2: 'Bob',
					result: 'win' as const,
					timestamp: Date.now(),
				},
			];

			await service.saveMatchHistory(matches);

			const retrieved = await service.getMatchHistory();
			expect(retrieved).toEqual(matches);
		});

		it('should append to match history', async () => {
			const match1 = {
				player1: 'Alice',
				player2: 'Bob',
				result: 'win' as const,
			};
			const match2 = {
				player1: 'Bob',
				player2: 'Charlie',
				result: 'loss' as const,
			};

			await service.saveMatchHistory([match1]);
			await service.saveMatchHistory([match1, match2]);

			const retrieved = await service.getMatchHistory();
			expect(retrieved.length).toBe(2);
		});
	});

	describe('Player Data Management', () => {
		it('should return null when no player data exists', async () => {
			const data = await service.getPlayerData();
			expect(data).toBeNull();
		});

		it('should save and retrieve player data', async () => {
			const playerData: PlayerData = {
				initialLifeTracker: 40,
				matchResults: [],
				handle1: { life: 40 },
				handle2: { life: 35 },
				handle3: { life: 30 },
				handle4: { life: 25 },
				playerHandle1: 'Alice',
				playerHandle2: 'Bob',
				playerHandle3: 'Charlie',
				playerHandle4: 'Dave',
				playerLogs: [],
			};

			await service.savePlayerData(playerData);

			const retrieved = await service.getPlayerData();
			expect(retrieved).toEqual(playerData);
		});

		it('should update player data', async () => {
			const initialData: PlayerData = {
				initialLifeTracker: 40,
				matchResults: [],
				handle1: { life: 40 },
				handle2: { life: 40 },
				handle3: { life: 40 },
				handle4: { life: 40 },
				playerHandle1: 'Player 1',
				playerHandle2: 'Player 2',
				playerHandle3: 'Player 3',
				playerHandle4: 'Player 4',
				playerLogs: [],
			};

			await service.savePlayerData(initialData);

			const updatedData: PlayerData = {
				...initialData,
				handle1: { life: 35 },
				playerLogs: [{ player: 'Player 1', action: 'Lose', life: 35 }],
			};

			await service.savePlayerData(updatedData);

			const retrieved = await service.getPlayerData();
			expect(retrieved?.handle1.life).toBe(35);
			expect(retrieved?.playerLogs.length).toBe(1);
		});
	});

	describe('App Settings Management', () => {
		it('should return default settings when none exist', async () => {
			const settings = await service.getAppSettings();

			expect(settings).toEqual({
				theme: 'auto',
				defaultLifeTotal: 40,
				enableNotifications: true,
			});
		});

		it('should save and retrieve app settings', async () => {
			const settings: AppSettings = {
				theme: 'dark',
				defaultLifeTotal: 20,
				enableNotifications: false,
			};

			await service.saveAppSettings(settings);

			const retrieved = await service.getAppSettings();
			expect(retrieved).toEqual(settings);
		});

		it('should update partial settings', async () => {
			await service.saveAppSettings({
				theme: 'light',
			});

			const retrieved = await service.getAppSettings();
			expect(retrieved.theme).toBe('light');
		});
	});

	describe('Data Migration', () => {
		beforeEach(() => {
			// Mock localStorage
			const localStorageMock = {
				getItem: vi.fn((key: string) => {
					if (key === 'players') {
						return JSON.stringify(['Alice', 'Bob']);
					}
					if (key === 'matchHistory') {
						return JSON.stringify([
							{ player1: 'Alice', player2: 'Bob', result: 'win' },
						]);
					}
					return null;
				}),
				setItem: vi.fn(),
				removeItem: vi.fn(),
				clear: vi.fn(),
			};

			global.localStorage = localStorageMock as any;
		});

		it('should migrate players from localStorage', async () => {
			await service.migrateFromLocalStorage();

			const players = await service.getPlayers();
			expect(players).toEqual(['Alice', 'Bob']);
		});

		it('should migrate match history from localStorage', async () => {
			await service.migrateFromLocalStorage();

			const matches = await service.getMatchHistory();
			expect(matches).toEqual([
				{ player1: 'Alice', player2: 'Bob', result: 'win' },
			]);
		});
	});

	describe('Data Export/Import', () => {
		it('should export all data', async () => {
			await service.savePlayers(['Alice', 'Bob']);
			await service.saveMatchHistory([
				{ player1: 'Alice', player2: 'Bob', result: 'win' },
			]);

			const exported = await service.exportAllData();

			expect(exported[StorageKeys.PLAYERS]).toEqual(['Alice', 'Bob']);
			expect(exported[StorageKeys.MATCH_HISTORY]).toEqual([
				{ player1: 'Alice', player2: 'Bob', result: 'win' },
			]);
		});

		it('should import data', async () => {
			const data = {
				[StorageKeys.PLAYERS]: ['Alice', 'Bob', 'Charlie'],
				[StorageKeys.MATCH_HISTORY]: [
					{ player1: 'Alice', player2: 'Bob', result: 'win' },
					{ player1: 'Bob', player2: 'Charlie', result: 'loss' },
				],
			};

			const success = await service.importData(data);
			expect(success).toBe(true);

			const players = await service.getPlayers();
			const matches = await service.getMatchHistory();

			expect(players).toEqual(['Alice', 'Bob', 'Charlie']);
			expect(matches.length).toBe(2);
		});
	});

	describe('Singleton Instance', () => {
		it('should provide a singleton instance', () => {
			expect(storageService).toBeInstanceOf(StorageService);
		});

		it('should maintain state across references', async () => {
			await storageService.savePlayers(['Alice']);

			const players = await storageService.getPlayers();
			expect(players).toEqual(['Alice']);
		});
	});
});
