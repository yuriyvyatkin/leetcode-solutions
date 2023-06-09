/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const regex = /,0/g;
    let count = 0;
    let strNums = nums.join();
    
    strNums = strNums.replace(regex, () => {
        count += 1;
        return '';
    });
    if (strNums.startsWith('0,')) {
        strNums = strNums.slice(2);
        count += 1;
    }
    
    const newNums = strNums
        .split(',')
        .concat(new Array(count).fill(0));
        
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Number(newNums[i]);
    }
};