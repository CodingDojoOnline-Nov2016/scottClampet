function selectionSort (array){
    var min = 0 
    var len = array.length - 1;

    for(i = 0; i < len; i++) {
    	// set current idx to min
        min = i;
        // check rest of array for a smaller value than min
        for(j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        // if min no longer = i, swap
        if(min != i){
            temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }
    return array
}

array1 = [4,3,2,5,1]
console.log(selectionSort(array1))
