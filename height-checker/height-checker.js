/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let counter = 0;
    const sortedHeights = [...heights].sort((a, b) => a - b);
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            counter++;
        }
    }
    
    return counter;
};