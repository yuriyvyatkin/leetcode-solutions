/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] = -nums[num - 1];
        }
    }

    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};