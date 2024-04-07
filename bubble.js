function bubbleSort(arr) {
    // Iterate through the array
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -1; j++) {
            console.log(arr)
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// Optimized
function bubbleSort(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length -1; j++) {
            count ++;
            console.log(arr)
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    console.log("Total count", count)
    return arr;
}

module.exports = bubbleSort;