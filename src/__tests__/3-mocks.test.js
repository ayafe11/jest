describe('jest Mocking', () => {
    const someMockFunction = jest.fn((x, y) => x * y)

    test('mock for mocked fn', () => {
        someMockFunction(1, 2);
// The function was called exactly once
        expect(someMockFunction.mock.calls).toHaveLength(1);

// The first arg of the first call to the function was 'first arg'
        expect(someMockFunction.mock.calls[0][0]).toBe(1);

// The second arg of the first call to the function was 'second arg'
        expect(someMockFunction.mock.calls[0][1]).toBe(2);

// The return value of the first call to the function was 'return value'
        expect(someMockFunction.mock.results[0].value).toBe(2);

        const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

        const result = [11, 12].filter(num => filterTestFn(num));

        console.log(result);
// > [11]
        console.log(filterTestFn.mock.calls[0][0]); // 11
        console.log(filterTestFn.mock.calls[1][0]); // 12

    })


   /* test('mock for modules',()=>{
        beforeEach(()=>{
            jest.mock(fetch);
            fetch.mockImplementation(()=>Promise.resolve([1,2]));
            return fetchData().then(data => {
                expect(data).toEqual([1,2]);
            })
        })
    })*/
})