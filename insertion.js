function insertionSort(arr) {
    // Iterate through the array starting at the 2nd element since 1st
    //  element is presumed to be sorted
    for(let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        // Initialize j as the index preceding i
        let j = i -1;

        // Iterate through the sorted portion of the array to find 
        // the correct position for the current value
        while(j >= 0 && arr[j] > currVal) {
            // Shift elements to the right to make space for insertion
            arr[j +1] = arr[j]
             // Move to the previous index to continue the comparison
            j--;
        }
        // Insert the current value into its correct position
        arr[j + 1] = currVal;
    }
    return arr;
}

module.exports = insertionSort;