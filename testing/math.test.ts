import { add, subtract } from './math.utils';

describe('MathUtils', () => {
    test('add should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, -1)).toBe(-2);
    });

    test('subtract should return the difference of two numbers', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(0, 5)).toBe(-5);
    });
});
