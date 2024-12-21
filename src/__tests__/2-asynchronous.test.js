const expectedApiResponse = {
    "name": "aya",
    "department": "Software Development"
}
describe('jest Asynchronous Code', () => {
    function fetchData() {
        return fetch('http://127.0.0.1:8081/data.json').then(res => res.json()).then((data) => data);
    }
    function fetchDataWithError() {
      return new Promise((resolve,reject)=>{
          reject('error');
      })

    }
    //!**Promises**!//
    test('Promises', () => {
        return fetchData().then(data => {
            expect(data).toEqual(expectedApiResponse);
        });
    })
    //**Async/ Await**//
    test('Async/Await', async () => {
        const data = await fetchData();
        expect(data).toEqual(expectedApiResponse);
        //or
        await expect(fetchData()).resolves.toEqual(expectedApiResponse);
        expect(fetchDataWithError()).rejects.toMatch('error');

    })
})