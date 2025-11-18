import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { MatchTracker } from './match-tracker';
import localForage from 'localforage';
import './match-tracker.js';

// Mock localForage
vi.mock('localforage', () => {
	const store: Record<string, any> = {};
	return {
		default: {
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
				Object.keys(store).forEach(key => delete store[key]);
				return Promise.resolve();
			}),
		},
	};
});

describe('MatchTracker', () => {
	let element: MatchTracker;

	beforeEach(async () => {
		await localForage.clear();
		element = document.createElement('match-tracker') as MatchTracker;
		document.body.appendChild(element);
	});

	afterEach(() => {
		document.body.removeChild(element);
	});

	describe('Initialization', () => {
		it('should initialize with default life totals of 40', () => {
			expect(element.handle1.life).toBe(40);
			expect(element.handle2.life).toBe(40);
			expect(element.handle3.life).toBe(40);
			expect(element.handle4.life).toBe(40);
		});

		it('should initialize with default player names', () => {
			expect(element.playerHandle1).toBe('Player 1');
			expect(element.playerHandle2).toBe('Player 2');
			expect(element.playerHandle3).toBe('Player 3');
			expect(element.playerHandle4).toBe('Player 4');
		});

		it('should initialize with empty match results', () => {
			expect(element.matchResults).toEqual([]);
		});

		it('should initialize with initial life tracker of 40', () => {
			expect(element.initialLifeTracker).toBe(40);
		});
	});

	describe('Life Total Management', () => {
		it('should increase player 1 life total', () => {
			const initialLife = element.handle1.life;
			element['updateLife'](1, 5, 'Gain');
			expect(element.handle1.life).toBe(initialLife + 5);
		});

		it('should decrease player 1 life total', () => {
			const initialLife = element.handle1.life;
			element['updateLife'](1, -5, 'Lose');
			expect(element.handle1.life).toBe(initialLife - 5);
		});

		it('should not allow life total to go below 0', () => {
			element['updateLife'](1, -50, 'Lose');
			expect(element.handle1.life).toBe(0);
		});

		it('should update life for all players independently', () => {
			element['updateLife'](1, 5, 'Gain');
			element['updateLife'](2, -3, 'Lose');
			element['updateLife'](3, 10, 'Gain');
			element['updateLife'](4, -2, 'Lose');

			expect(element.handle1.life).toBe(45);
			expect(element.handle2.life).toBe(37);
			expect(element.handle3.life).toBe(50);
			expect(element.handle4.life).toBe(38);
		});

		it('should log player actions', () => {
			element['updateLife'](1, 5, 'Gain');
			element['updateLife'](2, -3, 'Lose');

			expect(element['playerLogs'].length).toBe(2);
			expect(element['playerLogs'][0].player).toBe('Player 1');
			expect(element['playerLogs'][0].action).toBe('Gain');
			expect(element['playerLogs'][1].player).toBe('Player 2');
			expect(element['playerLogs'][1].action).toBe('Lose');
		});
	});

	describe('Player Name Management', () => {
		it('should update player 1 handle', () => {
			const event = new CustomEvent('sl-change', {
				detail: {},
			});
			Object.defineProperty(event, 'target', {
				value: { value: 'Alice' },
				writable: false,
			});

			element['handlePlayerHandleChange'](1, event);
			expect(element.playerHandle1).toBe('Alice');
		});

		it('should update player 2 handle', () => {
			const event = new CustomEvent('sl-change', {
				detail: {},
			});
			Object.defineProperty(event, 'target', {
				value: { value: 'Bob' },
				writable: false,
			});

			element['handlePlayerHandleChange'](2, event);
			expect(element.playerHandle2).toBe('Bob');
		});

		it('should use default name if empty string provided', () => {
			const event = new CustomEvent('sl-change', {
				detail: {},
			});
			Object.defineProperty(event, 'target', {
				value: { value: '' },
				writable: false,
			});

			element['handlePlayerHandleChange'](1, event);
			expect(element.playerHandle1).toBe('Player 1');
		});
	});

	describe('Initial Life Tracker', () => {
		it('should update initial life tracker', () => {
			const event = new CustomEvent('sl-change');
			Object.defineProperty(event, 'target', {
				value: { value: '30' },
				writable: false,
			});

			element['setInitialLifeTracker'](event);
			expect(element.initialLifeTracker).toBe(30);
		});

		it('should update all player life totals when initial life changes', () => {
			const event = new CustomEvent('sl-change');
			Object.defineProperty(event, 'target', {
				value: { value: '20' },
				writable: false,
			});

			element['setInitialLifeTracker'](event);

			expect(element.handle1.life).toBe(20);
			expect(element.handle2.life).toBe(20);
			expect(element.handle3.life).toBe(20);
			expect(element.handle4.life).toBe(20);
		});
	});

	describe('Match Result Recording', () => {
		beforeEach(() => {
			element.playerHandle1 = 'Alice';
			element.playerHandle2 = 'Bob';
			element.playerHandle3 = 'Charlie';
			element.playerHandle4 = 'Dave';
		});

		it('should record player 1 as winner', () => {
			element['recordResult'](1);

			expect(element.matchResults.length).toBe(1);
			expect(element.matchResults[0].player1Outcome).toBe('win');
			expect(element.matchResults[0].player2Outcome).toBe('loss');
			expect(element.matchResults[0].player3Outcome).toBe('loss');
			expect(element.matchResults[0].player4Outcome).toBe('loss');
		});

		it('should record player 2 as winner', () => {
			element['recordResult'](2);

			expect(element.matchResults.length).toBe(1);
			expect(element.matchResults[0].player1Outcome).toBe('loss');
			expect(element.matchResults[0].player2Outcome).toBe('win');
			expect(element.matchResults[0].player3Outcome).toBe('loss');
			expect(element.matchResults[0].player4Outcome).toBe('loss');
		});

		it('should record a draw', () => {
			element['recordResult']('draw');

			expect(element.matchResults.length).toBe(1);
			expect(element.matchResults[0].player1Outcome).toBe('draw');
			expect(element.matchResults[0].player2Outcome).toBe('draw');
			expect(element.matchResults[0].player3Outcome).toBe('draw');
			expect(element.matchResults[0].player4Outcome).toBe('draw');
		});

		it('should record player life totals in result', () => {
			element.handle1.life = 35;
			element.handle2.life = 20;
			element.handle3.life = 15;
			element.handle4.life = 0;

			element['recordResult'](1);

			expect(element.matchResults[0].player1LifeTracker).toBe(35);
			expect(element.matchResults[0].player2LifeTracker).toBe(20);
			expect(element.matchResults[0].player3LifeTracker).toBe(15);
			expect(element.matchResults[0].player4LifeTracker).toBe(0);
		});

		it('should record player handles in result', () => {
			element['recordResult'](1);

			expect(element.matchResults[0].player1Handle).toBe('Alice');
			expect(element.matchResults[0].player2Handle).toBe('Bob');
			expect(element.matchResults[0].player3Handle).toBe('Charlie');
			expect(element.matchResults[0].player4Handle).toBe('Dave');
		});

		it('should reset life totals after recording result', () => {
			element.handle1.life = 35;
			element.handle2.life = 20;

			element['recordResult'](1);

			expect(element.handle1.life).toBe(40);
			expect(element.handle2.life).toBe(40);
			expect(element.handle3.life).toBe(40);
			expect(element.handle4.life).toBe(40);
		});
	});

	describe('Player Statistics', () => {
		beforeEach(() => {
			element.playerHandle1 = 'Alice';
			element.playerHandle2 = 'Bob';
			element.playerHandle3 = 'Charlie';
			element.playerHandle4 = 'Dave';
		});

		it('should calculate wins for a player', () => {
			element['recordResult'](1); // Alice wins
			element['recordResult'](1); // Alice wins again

			const stats = element['getPlayerStats']('Alice');
			expect(stats.wins).toBe(2);
			expect(stats.losses).toBe(0);
		});

		it('should calculate losses for a player', () => {
			element['recordResult'](1); // Bob loses
			element['recordResult'](2); // Bob wins, Alice loses

			const aliceStats = element['getPlayerStats']('Alice');
			const bobStats = element['getPlayerStats']('Bob');

			expect(aliceStats.wins).toBe(1);
			expect(aliceStats.losses).toBe(1);
			expect(bobStats.wins).toBe(1);
			expect(bobStats.losses).toBe(1);
		});

		it('should calculate draws for a player', () => {
			element['recordResult']('draw');
			element['recordResult']('draw');

			const stats = element['getPlayerStats']('Alice');
			expect(stats.draws).toBe(2);
		});

		it('should calculate mixed results correctly', () => {
			element['recordResult'](1); // Alice wins
			element['recordResult'](2); // Bob wins, Alice loses
			element['recordResult']('draw'); // All draw
			element['recordResult'](1); // Alice wins again

			const aliceStats = element['getPlayerStats']('Alice');
			expect(aliceStats.wins).toBe(2);
			expect(aliceStats.losses).toBe(1);
			expect(aliceStats.draws).toBe(1);
		});
	});

	describe('Game Reset', () => {
		beforeEach(() => {
			element.playerHandle1 = 'Alice';
			element.playerHandle2 = 'Bob';
			element.handle1.life = 30;
			element.handle2.life = 25;
			element['updateLife'](1, 5, 'Gain');
			element['recordResult'](1);
		});

		it('should reset life totals', () => {
			element['resetLife']();

			expect(element.handle1.life).toBe(40);
			expect(element.handle2.life).toBe(40);
			expect(element.handle3.life).toBe(40);
			expect(element.handle4.life).toBe(40);
		});

		it('should clear player logs on life reset', () => {
			element['resetLife']();
			expect(element['playerLogs'].length).toBe(0);
		});

		it('should reset entire game including player names and results', () => {
			element['resetGame']();

			expect(element.playerHandle1).toBe('Player 1');
			expect(element.playerHandle2).toBe('Player 2');
			expect(element.playerHandle3).toBe('Player 3');
			expect(element.playerHandle4).toBe('Player 4');
			expect(element.matchResults.length).toBe(0);
			expect(element['playerLogs'].length).toBe(0);
		});
	});

	describe('Data Persistence', () => {
		it('should save data to localForage', async () => {
			element.playerHandle1 = 'Alice';
			element.handle1.life = 35;

			await element['saveToStorage']();

			const data = await localForage.getItem('playerData');
			expect(data).toBeDefined();
			expect((data as any).playerHandle1).toBe('Alice');
			expect((data as any).handle1.life).toBe(35);
		});

		it('should load data from localForage', async () => {
			const testData = {
				initialLifeTracker: 30,
				playerHandle1: 'Alice',
				playerHandle2: 'Bob',
				handle1: { life: 25 },
				handle2: { life: 35 },
				matchResults: [],
				playerLogs: [],
			};

			await localForage.setItem('playerData', testData);
			await element['loadFromStorage']();

			expect(element.playerHandle1).toBe('Alice');
			expect(element.playerHandle2).toBe('Bob');
			expect(element.handle1.life).toBe(25);
			expect(element.handle2.life).toBe(35);
			expect(element.initialLifeTracker).toBe(30);
		});

		it('should handle missing data gracefully', async () => {
			await localForage.clear();
			await element['loadFromStorage']();

			// Should use defaults
			expect(element.initialLifeTracker).toBe(40);
			expect(element.handle1.life).toBe(40);
		});
	});

	describe('CSV Export', () => {
		beforeEach(() => {
			element.playerHandle1 = 'Alice';
			element.playerHandle2 = 'Bob';
			element['recordResult'](1);
			element['recordResult'](2);
		});

		it('should convert match results to CSV', () => {
			const csv = element['convertArrayOfObjectsToCSV'](element.matchResults);

			expect(csv).toContain('player1Handle');
			expect(csv).toContain('Alice');
			expect(csv).toContain('Bob');
			expect(csv).toContain('win');
			expect(csv).toContain('loss');
		});

		it('should handle empty array', () => {
			const csv = element['convertArrayOfObjectsToCSV']([]);
			expect(csv).toBe('');
		});
	});

	describe('UI Helper Methods', () => {
		it('should get correct icon variant for lose action', () => {
			const log = { player: 'Alice', action: 'Lose', life: 35 };
			const variant = element['getPlayerIconVariant'](log);
			expect(variant).toBe('loyalty-down');
		});

		it('should get correct icon variant for gain action', () => {
			const log = { player: 'Alice', action: 'Gain', life: 45 };
			const variant = element['getPlayerIconVariant'](log);
			expect(variant).toBe('loyalty-up');
		});

		it('should get correct badge variant for lose action', () => {
			const log = { player: 'Alice', action: 'Lose', life: 35 };
			const variant = element['getPlayerBadgeVariant'](log);
			expect(variant).toBe('danger');
		});

		it('should get correct badge variant for gain action', () => {
			const log = { player: 'Alice', action: 'Gain', life: 45 };
			const variant = element['getPlayerBadgeVariant'](log);
			expect(variant).toBe('success');
		});
	});
});
