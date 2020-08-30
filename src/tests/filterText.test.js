import {filterText} from '../client/js/filterText'


describe('Test filterText should exist' , () => {
    test('It should return true', async () => {
        expect(filterText).toBeDefined();
    });
});

describe('Test filterText should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof filterText).toBe("function");
    });
});





