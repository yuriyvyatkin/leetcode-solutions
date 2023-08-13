/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const largestNum = Math.max(...nums);
    const largestNumIndex = nums.indexOf(largestNum);
    
    for (let i = 0; i < nums.length; ++i) {
        if (i !== largestNumIndex && nums[i] * 2 > largestNum) {
            return -1;
        }
    }
    
    return largestNumIndex;
};