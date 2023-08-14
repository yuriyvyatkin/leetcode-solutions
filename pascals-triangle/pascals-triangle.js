/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        
        const newRow = [1];
        
        for (let j = 0; j < i - 1; j++) {
            newRow.push(prevRow[j] + prevRow[j + 1]);
        }
        
        newRow.push(1);
        
        result.push(newRow);
    }
    
    return result;
};