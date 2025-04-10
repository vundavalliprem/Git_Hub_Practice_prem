import { Calculator } from './calculator';

describe('Calculator', () => {
    const calc = new Calculator();

    test('adds two numbers correctly', () => {
        expect(calc.add(2, 3)).toBe(5);
        expect(calc.add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(calc.subtract(5, 2)).toBe(3);
        expect(calc.subtract(1, 1)).toBe(0);
    });

    test('multiplies two numbers correctly', () => {
        expect(calc.multiply(4, 6)).toBe(24);
        expect(calc.multiply(0, 5)).toBe(0);
    });

    test('divides two numbers correctly', () => {
        expect(calc.divide(8, 2)).toBe(4);
        expect(calc.divide(0, 5)).toBe(0);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calc.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
}); 