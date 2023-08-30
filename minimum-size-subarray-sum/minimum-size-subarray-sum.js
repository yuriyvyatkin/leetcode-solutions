/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Number.MAX_SAFE_INTEGER;
    let currentSum = 0;
    let slowPointer = 0;
    
    for (let fastPointer = 0; fastPointer < nums.length; ++fastPointer) {
        currentSum += nums[fastPointer];
        
        while (currentSum >= target) {
            minLength = Math.min(minLength, fastPointer - slowPointer + 1);
            currentSum -= nums[slowPointer];
            ++slowPointer;
        }
    }
    
    return (minLength !== Number.MAX_SAFE_INTEGER) ? minLength : 0;
};