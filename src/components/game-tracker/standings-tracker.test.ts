import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { StandingsTracker } from './standings-tracker';
import { storageService } from '../../services/storage.service';
import './standings-tracker.js';

describe('StandingsTracker', () => {
	let element: StandingsTracker;

	beforeEach(() => {
		// Clear localStorage before each test
		localStorage.clear();

		// Create a fresh element for each test
		element = document.createElement('standings-tracker') as StandingsTracker;
		document.body.appendChild(element);
	});

	afterEach(() => {
		document.body.removeChild(element);
	});

	describe('Player Management', () => {
		it('should add a player', async () => {
			await element.addPlayer('Alice');
			expect(element.players).toContain('Alice');
			expect(element.players.length).toBe(1);
		});

		it('should add multiple players', async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.addPlayer('Charlie');

			expect(element.players).toEqual(['Alice', 'Bob', 'Charlie']);
			expect(element.players.length).toBe(3);
		});

		it('should remove a player', async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.removePlayer('Alice');

			expect(element.players).not.toContain('Alice');
			expect(element.players).toContain('Bob');
			expect(element.players.length).toBe(1);
		});

		it('should clear all players', async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.clearAllPlayers();

			expect(element.players.length).toBe(0);
		});

		it('should persist players to storage', async () => {
			await element.addPlayer('Alice');
			const stored = await storageService.getPlayers();
			expect(stored).toEqual(['Alice']);
		});
	});

	describe('Match Recording', () => {
		beforeEach(async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
		});

		it('should record a match with a win', async () => {
			const match = {
				player1: 'Alice',
				player2: 'Bob',
				result: 'win' as const,
			};

			await element.recordMatch(match);

			expect(element.matchHistory.length).toBe(1);
			expect(element.matchHistory[0]).toEqual(match);
		});

		it('should record a match with a loss', async () => {
			const match = {
				player1: 'Alice',
				player2: 'Bob',
				result: 'loss' as const,
			};

			await element.recordMatch(match);

			expect(element.matchHistory.length).toBe(1);
			expect(element.matchHistory[0]).toEqual(match);
		});

		it('should record a match with a draw', async () => {
			const match = {
				player1: 'Alice',
				player2: 'Bob',
				result: 'draw' as const,
			};

			await element.recordMatch(match);

			expect(element.matchHistory.length).toBe(1);
			expect(element.matchHistory[0]).toEqual(match);
		});

		it('should persist match history to storage', async () => {
			const match = {
				player1: 'Alice',
				player2: 'Bob',
				result: 'win' as const,
			};

			await element.recordMatch(match);

			const stored = await storageService.getMatchHistory();
			expect(stored).toEqual([match]);
		});
	});

	describe('Standings Calculation', () => {
		beforeEach(async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.addPlayer('Charlie');
		});

		it('should initialize standings with zero wins/losses/draws', () => {
			element.calculateStandings();

			expect(element.standings.length).toBe(3);
			element.standings.forEach(standing => {
				expect(standing.wins).toBe(0);
				expect(standing.losses).toBe(0);
				expect(standing.draws).toBe(0);
				expect(standing.points).toBe(0);
			});
		});

		it('should award 3 points for a win', async () => {
			await element.recordMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'win',
			});

			const aliceStanding = element.standings.find(s => s.name === 'Alice');
			const bobStanding = element.standings.find(s => s.name === 'Bob');

			expect(aliceStanding?.wins).toBe(1);
			expect(aliceStanding?.points).toBe(3);
			expect(bobStanding?.losses).toBe(1);
			expect(bobStanding?.points).toBe(0);
		});

		it('should award 3 points for a loss (player2 wins)', async () => {
			await element.recordMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'loss',
			});

			const aliceStanding = element.standings.find(s => s.name === 'Alice');
			const bobStanding = element.standings.find(s => s.name === 'Bob');

			expect(aliceStanding?.losses).toBe(1);
			expect(aliceStanding?.points).toBe(0);
			expect(bobStanding?.wins).toBe(1);
			expect(bobStanding?.points).toBe(3);
		});

		it('should award 1 point each for a draw', async () => {
			await element.recordMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'draw',
			});

			const aliceStanding = element.standings.find(s => s.name === 'Alice');
			const bobStanding = element.standings.find(s => s.name === 'Bob');

			expect(aliceStanding?.draws).toBe(1);
			expect(aliceStanding?.points).toBe(1);
			expect(bobStanding?.draws).toBe(1);
			expect(bobStanding?.points).toBe(1);
		});

		it('should calculate win percentage correctly', async () => {
			// Alice: 2 wins, 1 loss = 66.67% win rate
			await element.recordMatch({ player1: 'Alice', player2: 'Bob', result: 'win' });
			await element.recordMatch({ player1: 'Alice', player2: 'Charlie', result: 'win' });
			await element.recordMatch({ player1: 'Alice', player2: 'Bob', result: 'loss' });

			const aliceStanding = element.standings.find(s => s.name === 'Alice');
			expect(aliceStanding?.winPercentage).toBeCloseTo(66.67, 2);
		});

		it('should sort standings by points descending', async () => {
			await element.recordMatch({ player1: 'Alice', player2: 'Bob', result: 'win' }); // Alice: 3pts
			await element.recordMatch({ player1: 'Bob', player2: 'Charlie', result: 'win' }); // Bob: 3pts
			await element.recordMatch({ player1: 'Alice', player2: 'Charlie', result: 'win' }); // Alice: 6pts

			expect(element.standings[0].name).toBe('Alice');
			expect(element.standings[0].points).toBe(6);
		});

		it('should use win percentage as tiebreaker', async () => {
			// Alice: 1 win, 0 losses = 100% win rate, 3 points
			await element.recordMatch({ player1: 'Alice', player2: 'Bob', result: 'win' });

			// Charlie: 1 win, 1 loss = 50% win rate, 3 points
			await element.recordMatch({ player1: 'Charlie', player2: 'Bob', result: 'win' });
			await element.recordMatch({ player1: 'Alice', player2: 'Charlie', result: 'win' });

			// Both have 3 points, but Alice has better win percentage
			const topTwo = element.standings.slice(0, 2);
			expect(topTwo[0].name).toBe('Alice');
			expect(topTwo[0].points).toBe(6);
		});

		it('should handle multiple matches correctly', async () => {
			await element.recordMatch({ player1: 'Alice', player2: 'Bob', result: 'win' });
			await element.recordMatch({ player1: 'Bob', player2: 'Charlie', result: 'win' });
			await element.recordMatch({ player1: 'Charlie', player2: 'Alice', result: 'draw' });

			const aliceStanding = element.standings.find(s => s.name === 'Alice');
			const bobStanding = element.standings.find(s => s.name === 'Bob');
			const charlieStanding = element.standings.find(s => s.name === 'Charlie');

			expect(aliceStanding?.wins).toBe(1);
			expect(aliceStanding?.draws).toBe(1);
			expect(aliceStanding?.points).toBe(4); // 3 + 1

			expect(bobStanding?.wins).toBe(1);
			expect(bobStanding?.losses).toBe(1);
			expect(bobStanding?.points).toBe(3);

			expect(charlieStanding?.wins).toBe(0);
			expect(charlieStanding?.losses).toBe(1);
			expect(charlieStanding?.draws).toBe(1);
			expect(charlieStanding?.points).toBe(1);
		});
	});

	describe('Match Editing', () => {
		beforeEach(async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.recordMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'win',
			});
		});

		it('should edit a match', async () => {
			const editedMatch = {
				player1: 'Alice',
				player2: 'Bob',
				result: 'loss' as const,
			};

			element.editMatchIndex = 0;
			await element.editMatch(editedMatch);

			expect(element.matchHistory[0].result).toBe('loss');
		});

		it('should recalculate standings after edit', async () => {
			// Initially Alice has 3 points (win)
			let aliceStanding = element.standings.find(s => s.name === 'Alice');
			expect(aliceStanding?.points).toBe(3);

			// Edit to loss (Bob wins)
			element.editMatchIndex = 0;
			await element.editMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'loss',
			});

			aliceStanding = element.standings.find(s => s.name === 'Alice');
			const bobStanding = element.standings.find(s => s.name === 'Bob');

			expect(aliceStanding?.points).toBe(0);
			expect(bobStanding?.points).toBe(3);
		});
	});

	describe('Data Export', () => {
		beforeEach(async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.recordMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'win',
			});
		});

		it('should export match results to CSV format', () => {
			// Mock the downloadCSV method to capture the CSV data
			let capturedCSV = '';
			element.downloadCSV = (csv: string) => {
				capturedCSV = csv;
			};

			element.exportMatchResults();

			expect(capturedCSV).toContain('Alice,Bob,win');
		});

		it('should export standings to CSV format', async () => {
			let capturedCSV = '';
			element.downloadCSV = (csv: string) => {
				capturedCSV = csv;
			};

			await element.exportStandings();

			expect(capturedCSV).toContain('Alice');
			expect(capturedCSV).toContain('Bob');
		});
	});

	describe('Clear Operations', () => {
		beforeEach(async () => {
			await element.addPlayer('Alice');
			await element.addPlayer('Bob');
			await element.recordMatch({
				player1: 'Alice',
				player2: 'Bob',
				result: 'win',
			});
		});

		it('should clear match results', async () => {
			await element.clearMatchResultsConfirmed();

			expect(element.matchHistory.length).toBe(0);
			const stored = await storageService.getMatchHistory();
			expect(stored).toEqual([]);
		});

		it('should clear standings', async () => {
			await element.clearStandingsConfirmed();

			expect(element.standings.length).toBe(0);
			const stored = await storageService.getMatchHistory();
			expect(stored).toBeNull();
		});

		it('should recalculate standings after clearing match results', async () => {
			await element.clearMatchResultsConfirmed();

			// All players should have 0 points
			element.standings.forEach(standing => {
				expect(standing.points).toBe(0);
				expect(standing.wins).toBe(0);
				expect(standing.losses).toBe(0);
				expect(standing.draws).toBe(0);
			});
		});
	});

	describe('Data Persistence', () => {
		it('should load players from localStorage on init', async () => {
			localStorage.setItem('players', JSON.stringify(['Alice', 'Bob']));

			const newElement = document.createElement('standings-tracker') as StandingsTracker;
			document.body.appendChild(newElement);

			await newElement.loadData();

			expect(newElement.players).toEqual(['Alice', 'Bob']);

			document.body.removeChild(newElement);
		});

		it('should load match history from localStorage on init', async () => {
			const matches = [
				{ player1: 'Alice', player2: 'Bob', result: 'win' as const },
			];
			localStorage.setItem('matchHistory', JSON.stringify(matches));

			const newElement = document.createElement('standings-tracker') as StandingsTracker;
			document.body.appendChild(newElement);

			await newElement.loadData();

			expect(newElement.matchHistory).toEqual(matches);

			document.body.removeChild(newElement);
		});

		it('should handle missing localStorage data gracefully', async () => {
			localStorage.clear();

			const newElement = document.createElement('standings-tracker') as StandingsTracker;
			document.body.appendChild(newElement);

			await newElement.loadData();

			expect(newElement.players).toEqual([]);
			expect(newElement.matchHistory).toEqual([]);

			document.body.removeChild(newElement);
		});

		it('should handle corrupted localStorage data gracefully', async () => {
			localStorage.setItem('players', 'invalid json');

			const newElement = document.createElement('standings-tracker') as StandingsTracker;
			document.body.appendChild(newElement);

			await newElement.loadData();

			expect(newElement.players).toEqual([]);

			document.body.removeChild(newElement);
		});
	});
});
