/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let counter = 0;
    
    for (num of nums) {
        const numLength = String(num).split('').length;
        const numIsEven = numLength % 2 === 0;
        if (numIsEven) {
            ++counter;
        }
    }
    
    return counter;
};