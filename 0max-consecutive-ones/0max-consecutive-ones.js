/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let longestRowLength = 0;
    let currentRowLength = 0;
    
    for (num of nums) {
        if (num === 0) {
            if (currentRowLength > longestRowLength) {
               longestRowLength = currentRowLength;
            }
            currentRowLength = 0; 
        } else if (num === 1) {
            ++currentRowLength;
        }
    }
    
    return currentRowLength > longestRowLength ? currentRowLength : longestRowLength;
};