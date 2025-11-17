import analyzeArray from './analyzeArray.js';

describe('Array analyzer', () =>{

    test('Array analyzer object exist', () =>{
        expect(typeof analyzeArray()).toBe("object");
    });

    test('return properties', () =>{
        const object = analyzeArray();
        expect(object).toEqual({average: null, min: null, max: null, length: null});
    });

    test('return average, min, max and length properties from array', () =>{
        const object = analyzeArray([1,8,3,4,2,6]);
        expect(object).toEqual({average: 4, min: 1, max: 8, length: 6});
    });

    test('return average, min, max and length properties from array', () =>{
        const object = analyzeArray([1,8,3,8,10]);
        expect(object).toEqual({average: 6, min: 1, max: 10, length: 5});
    });
    
});