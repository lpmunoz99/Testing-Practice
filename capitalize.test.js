import capitalize from './capitalize.js'

test('return module', () => {
    expect(capitalize).toBeDefined();
});

test('first letter capitalized', () => {
    expect(capitalize('hola')).toBe('Hola');
});

test('any word with first letter capitalized', () => {
    expect(capitalize('adios')).toBe('Adios');
});