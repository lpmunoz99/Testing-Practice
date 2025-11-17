import caesarCipher from './caesarCipher.js';

describe('Caesar Cipher', () =>{

    test('return string encrypted', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('return any string encrypted', () => {
        expect(caesarCipher('def', 3)).toBe('ghi');
    });

    test('wrapping from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('case preservation', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('punctuation test', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

});