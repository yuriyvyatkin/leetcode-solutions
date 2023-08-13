/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const numsSum = nums.reduce((a, b) => a + b);

    for (let i = 0, leftSum = 0; i < nums.length; i++) {
        if (leftSum === numsSum - leftSum - nums[i]) {
            return i;
        }
        
        leftSum += nums[i]; 
    }
    
    return -1;
};