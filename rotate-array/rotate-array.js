/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const steps = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, steps - 1);
    reverse(nums, steps, nums.length - 1)
};

var reverse = function (nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        
        start++;
        end--;
    }
}