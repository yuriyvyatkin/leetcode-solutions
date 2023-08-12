/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let a = null;
    
    for (let b = 0; b < nums.length; b++) {
        if (a === null && nums[b] % 2 !== 0) {
            a = b;
            continue;
        }
        
        if (a !== null && nums[b] % 2 === 0) {
            const tempo = nums[b];
            nums[b] = nums[a];
            nums[a] = tempo;
            a++;
        }
    }
    
    return nums;
};