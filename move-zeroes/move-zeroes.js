/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = null;
    
    for (let i = 0; i < nums.length; i++) {
        if (writePointer === null && nums[i] === 0) {
            writePointer = i;
            continue;
        }
        
        if (nums[i] !== 0 && writePointer !== null) {
            nums[writePointer] = nums[i];
            nums[i] = 0;
            writePointer++;
        }
    }
};