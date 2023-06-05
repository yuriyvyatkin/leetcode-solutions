/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const nums = nums1.length > nums2.length ? {long: nums1, short: nums2} : {long: nums2, short: nums1};
    
    let set;
    const result = [];
    
    set = new Set(nums.long);
        
    for (let i = 0; i < nums.short.length; i++) {
        if (!set.has(nums.short[i])) {
            continue;
        }

        for (let j = 0; j < nums.long.length; j++) {
            if (nums.short[i] === nums.long[j]) {
                result.push(nums.short[i]);
                nums.long[j] = null;
                break;
            }
        }
    }
    
    return result;
};