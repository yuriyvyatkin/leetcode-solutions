/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largestNum = -1;
    let secondLargestNum = -1;
    let largestNumIndex = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = nums[i];
            largestNumIndex = i;
        } else if (nums[i] > secondLargestNum) {
            secondLargestNum = nums[i];
        }
    }
    
    if (secondLargestNum * 2 <= largestNum) {
        return largestNumIndex;
    }

    return -1;
};