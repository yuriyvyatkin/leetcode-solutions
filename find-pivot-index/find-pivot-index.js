/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let numsSum = 0;
    
    for (num of nums) {
        numsSum += num;
    }
    
    for (let i = 0, leftSum = 0; i < nums.length; i++) {
        if (leftSum === numsSum - leftSum - nums[i]) {
            return i;
        }
        
        leftSum += nums[i]; 
    }
    
    return -1;
};