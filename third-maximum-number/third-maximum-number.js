/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const highestNums = [nums[0], null, null];
    
    for (let i = 1; i < nums.length; i++) {
        if (highestNums.includes(nums[i])) {
            continue;
        }
        
        for (let j = 0; j < highestNums.length; j++) {
            // const highestNum = highestNums.findIndex
            if (highestNums[j] < nums[i]) {
                console.log(j)
                for (let k = 1; k >= j; k--) {
                    highestNums[k + 1] = highestNums[k];
                }
                console.log(i)
                console.log(highestNums)
                highestNums[j] = nums[i];
                break;
            }

            if (highestNums[j] === null) {
                highestNums[j] = nums[i];
            }
        }
    }
    
    console.log('result')
    console.log(highestNums.filter(Number.isInteger))
    
    if (highestNums[2] === highestNums[1]) {
        highestNums[2] = null;
    }
    
    if (highestNums[1] === highestNums[0]) {
        highestNums[1] = null;
    }

    return highestNums[2] !== null ? highestNums[2] : Math.max(...highestNums.filter(Number.isInteger));
};