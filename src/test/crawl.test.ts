import { normalizeUrl } from '../modules/crawler/crawl';
import { test, expect } from '@jest/globals';

test('normalizeUrl strip protocol', () => {
	const input: string = 'https://dev.to/path';
	const actual: string = normalizeUrl(input);
	const expected: string = 'dev.to/path';
	expect(actual).toEqual(expected);
});

test('normalizeUrl strip trailing slash', () => {
	const input: string = 'https://dev.to/path/';
	const actual: string = normalizeUrl(input);
	const expected: string = 'dev.to/path';
	expect(actual).toEqual(expected);
});

test('normalizeUrl capitals', () => {
	const input: string = 'https://dEv.To/PAtH/';
	const actual: string = normalizeUrl(input);
	const expected: string = 'dev.to/path';
	expect(actual).toEqual(expected);
});
