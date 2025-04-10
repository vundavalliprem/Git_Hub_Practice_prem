export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    // New power function added in testing branch
    power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }
}

// Example usage
const calc = new Calculator();
console.log("2 + 3 =", calc.add(2, 3));
console.log("5 - 2 =", calc.subtract(5, 2));
console.log("4 × 6 =", calc.multiply(4, 6));
console.log("8 ÷ 2 =", calc.divide(8, 2));
console.log("2 ^ 3 =", calc.power(2, 3)); 