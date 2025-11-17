import {calculator} from './calculator.js';

describe('Calculator', () => {

    test('Calculator object exist', () =>{
        expect(typeof calculator).toBe("object");
    });

    test('Sum of 2 + 2', () => {
        expect(calculator.add(2,2)).toBe(4);
    });

    test('Sum of any number', () => {
        expect(calculator.add(4,4)).toBe(8);
    });

    test('Subtraction of 2 - 2', () => {
        expect(calculator.sub(2,2)).toBe(0);
    });

    test('Subtraction of any number', () => {
        expect(calculator.sub(8,4)).toBe(4);
    });

    test('Multiplication of 2 * 2', () => {
        expect(calculator.multiplication(2,2)).toBe(4);
    });

    test('Multiplication of any number', () => {
        expect(calculator.multiplication(10,10)).toBe(100);
    });

    test('Division of 2 / 2', () => {
        expect(calculator.division(2,2)).toBe(1);
    });

    test('Division of any number', () => {
        expect(calculator.division(4,2)).toBe(2);
    });
});