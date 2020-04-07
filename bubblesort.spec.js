
let swapCounter;
let comparisonCounter;
let testArr;
describe('Bubble Sort', function(){
    beforeEach(() => {
        swapCounter = 0;
        comparisonCounter = 0;
        testArr = [5,2,6,1,7,9];

    });
    it('handles an empty array', function(){
        console.log('original', testArr);
      expect( bubbleSort(testArr) ).toEqual( [1,2,5,6,7,9] );
    });

  });