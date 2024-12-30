

describe('Timers', () => {
    beforeEach(() => {
        jest.useFakeTimers(); // Enable fake timers
        jest.spyOn(global, "setTimeout");
    });

    afterEach(() => {
        jest.clearAllTimers(); // Clear timers after each test
    });
    function timerGame() {
      return new Promise((resolve, reject)=>{
          setTimeout(() => {
              resolve( "start game");
          }, 1000)
      })
    }

    it('should pass the time when call the timer function',async () => {
        const res= timerGame();
        // Fast-forward time by 1 second
        //jest.advanceTimersByTime(1000);
        //////or
        // Fast-forward until all timers have been executed
        jest.runAllTimers();

        const value = await res;
        expect(setTimeout).toHaveBeenCalledTimes(1);

        expect(value).toBe("start game");
    })
})
