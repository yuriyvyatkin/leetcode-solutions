/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const maxNumbers = new Set();
    
    for (const num of nums) {
        maxNumbers.add(num);
        if (maxNumbers.size > 3) {
            maxNumbers.delete(Math.min(...maxNumbers));
        }
    }
    
    return maxNumbers.size === 3 ? Math.min(...maxNumbers) : Math.max(...maxNumbers);
};