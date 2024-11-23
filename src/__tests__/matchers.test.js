const sum = require('../sum');

////////////***Topic 1: Jest Matchers***///////////////
describe('Jest Matchers', () => {
    test('adds 1 + 2 to be 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
//**Object Equality**//
    test('object equality', () => {
        object1 = {name: "aya", age: 34};
        object2 = {name: "aya", age: 34};
        expect(object1).toEqual(object2);
    })
//**Truthiness**//
    test('Truthiness Matchers', () => {
        //[TODO] change variable value according to matcher you'd like to test
        let variable = "";
        // expect(variable).toBeNull() //variable =null;
        // expect(variable).toBeUndefined(); //variable = undefined;
        //  expect(variable).toBeDefined(); // variable = "value";
        //  expect(variable).toBeTruthy(); // variable = "value";
        expect(variable).toBeFalsy(); // variable = "";
    })
//**Numbers**//
    test('Numbers Matchers', () => {
        const value = 0.1 + 0.2;
//         expect(value).toBeGreaterThan(3); //value = 2+2
//         expect(value).toBeGreaterThanOrEqual(3.5); //value = 2+2
//         expect(value).toBeLessThan(5); //value = 2+2
//         expect(value).toBeLessThanOrEqual(4.5); //value = 2+2
// // toBe and toEqual are equivalent for numbers //value = 2+2
//         expect(value).toBe(4); //value = 2+2
//         expect(value).toEqual(4); //value = 2+2

        expect(value).toBeCloseTo(0.3); // This works.
    })
//**Strings**//
    test('Strings Matchers', () => {
        const value = "this is the word";
        expect(value).not.toMatch(/x/);
    });
//**Arrays**//
    test('Arrays Matchers', () => {
        const value = [1, 1, 2, 2, 3];
        expect(value).toContain(1);
        expect(new Set(value)).toContain(1);
    })
//**Exceptions**//
    test('Exceptions Matchers', () => {
        expect(() => testException()).toThrow();
        expect(() => testException()).toThrow(Error);
        expect(() => testException()).toThrow("error thrown");
        expect(() => testException()).toThrow(/error/);
    });
})

function testException() {
    throw new Error("error thrown");
}