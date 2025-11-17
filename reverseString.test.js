import {reverseString} from './reverseString.js'

test('return reverse string', () => {
    expect(reverseString('hola')).toBe('aloh');
});

test('return reverse any string', () => {
    expect(reverseString('adios')).toBe('soida');
});