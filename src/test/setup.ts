// Test setup file for Vitest
import { beforeAll, afterEach } from 'vitest';

// Setup before all tests
beforeAll(() => {
	// Mock localStorage
	const localStorageMock = {
		getItem: (key: string) => {
			return localStorageMock[key] || null;
		},
		setItem: (key: string, value: string) => {
			localStorageMock[key] = value;
		},
		removeItem: (key: string) => {
			delete localStorageMock[key];
		},
		clear: () => {
			Object.keys(localStorageMock).forEach((key) => {
				if (key !== 'getItem' && key !== 'setItem' && key !== 'removeItem' && key !== 'clear') {
					delete localStorageMock[key];
				}
			});
		},
	};

	global.localStorage = localStorageMock as any;

	// Mock sessionStorage
	global.sessionStorage = localStorageMock as any;
});

// Clear mocks after each test
afterEach(() => {
	localStorage.clear();
	sessionStorage.clear();
});
