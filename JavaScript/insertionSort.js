function insertionSort(inputArr) {
    console.log("Unsorted array:", inputArr);
    let A = inputArr.length;
    
    for (let j=1; j < A; j++) {
        // current element in unsorted subarray
        let currentValue = inputArr[j];
        // last element of sorted subarray
        let i = j - 1;

        while ((i > -1) && (currentValue < inputArr[i])) {
            inputArr[i+1] = inputArr[i];
            i = i - 1;
        };
        inputArr[i+1] = currentValue;
    };
    return console.log("Sorted array:", inputArr);
};

export default insertionSort;
