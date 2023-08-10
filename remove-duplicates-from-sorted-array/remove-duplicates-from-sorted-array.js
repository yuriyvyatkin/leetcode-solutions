/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1;
    let lastNum = nums[0];
    
    for (let j = 1; j < nums.length; j++) {
        if (lastNum < nums[j]) {
            lastNum = nums[i] = nums[j];
            i++;
        }
    }
    
    return i;
};