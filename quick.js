/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx = 0, endIdx = arr.length -1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[startIdx];
    let swapIdx = startIdx;

    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from start of the swapPoint
    swap(arr, startIdx, swapIdx);
    return swapIdx;
}

function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx < rightIdx) {
        // Partition the array and get the pivot index
        let pivotIndex = pivot(arr, leftIdx, rightIdx);
        // Recursively call quickSort on the left and right halves
        quickSort(arr, leftIdx, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, rightIdx);
    }
    // Return the sorted array
    return arr;
}

module.exports = {
    pivot,
    quickSort
};

