function bubbleSort(array){
    for(let j = 0; j < array.length; j++){
        for(let i =0; i < array.length; i++){
            let num1 = array[i];
            let num2 = array[i+1];
            if(num1 > num2){
                let first = array.slice(0,i);
                let swapNumbers = swap(num1, num2);
                let last = array.slice(i+2);
                array = [...first, ...swapNumbers, ...last];
                console.log('after swapping', array);
            }
        }
    }
    return array;
}

function swap(num1, num2){
    return [num2, num1];
}