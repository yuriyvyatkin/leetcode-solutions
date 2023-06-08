/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        for (let j = i; j < nums.length; j++) {
            while (i !== j && nums[j] === num) {
                nums.splice(j, 1);
            }
        }
    }
};