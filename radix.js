// Helper function
function getDigit(num, i) {
    // Math.abs() allows negative funtions
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper function-counts how many digits are in the number
function digitCount(num) {
    if ( num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function-loops over nums in the array & keeps track of largest digit count
function mostDigits(nums) {
    let maxDigits = 0;

    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}



function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
    }
    return nums;
}

module.exports = {getDigit, digitCount, mostDigits, radixSort};