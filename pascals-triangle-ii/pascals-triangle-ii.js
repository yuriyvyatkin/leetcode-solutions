/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];
    
    for (let i = 1; i <= rowIndex; i++) {
        const newRow = new Array(i + 1).fill(0);
        
        newRow[0] = 1;
        newRow[newRow.length - 1] = 1;
        
        for (let j = 1; j < newRow.length - 1; j++) {
            newRow[j] = row[j - 1] + row[j]; 
        }
        
        row = newRow;
    }
    
    return row;
};