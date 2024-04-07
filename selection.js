function selectionSort(arr) {
    const sortedArray = [...arr];
    // Iterate through the array
    for(let i = 0; i < sortedArray.length -1; i++) {
        // Assuming 1st element is smallest value
        let minIndex = i;
        // Iterate through the rest of the elements of the array
        for(let j = i + 1; j < sortedArray.length; j++) {
            // If smaller element is found in the array, then minIndex is updated to that
            if(sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swaps the current element with the smallest element found
        if(minIndex !== i) {
            let temp = sortedArray[i];
            sortedArray[i] = sortedArray[minIndex];
            sortedArray[minIndex] = temp;
        } 
    }
    // Returns sorted array
    return sortedArray;
}

module.exports = selectionSort;