/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const nums = nums1.length > nums2.length ? {long: nums1, short: nums2} : {long: nums2, short: nums1};
    
    let set;
    const result = [];
    
    set = new Set(nums.short);
        
    for (let i = 0; i < nums.long.length; i++) {
        if (!set.has(nums.long[i])) {
            continue;
        }

        for (let j = 0; j < nums.short.length; j++) {
            if (nums.long[i] === nums.short[j]) {
                result.push(nums.long[i]);
                nums.short[j] = null;
                break;
            }
        }
    }
    
    return result;
};