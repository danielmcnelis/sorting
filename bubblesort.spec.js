
console.log('bubblesort', bubblesort)

let swapCounter;
let comparisonCounter;
let testArr;
describe('Bubble Sort', function(){
    beforeAll(() => {
        swapCounter = 0;
        comparisonCounter = 0;
        testArr = [5,2,6,1,7,9];
        spyOn('swap').and.callThrough();

    });

    it('handles an empty array', function(){
        console.log('original', testArr);
      expect( bubbleSort([]) ).toEqual([]);
    });

    it('handles an empty array', function(){
        console.log('original', testArr);
      expect( bubbleSort(testArr) ).toEqual( [1,2,5,6,7,9] );
    });

    it('to call swap when it needs to swap', function () {
        bubbleSort([5,2,6,1,7,9]);
      expect(swap.calls.count()).toEqual(4);
    });


  });