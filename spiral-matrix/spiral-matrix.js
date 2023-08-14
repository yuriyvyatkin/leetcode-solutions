/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = 0;
    let col = 0;
    let lastRow = matrix.length - 1;
    let lastCol = matrix[0].length - 1;
    const result = [];
    
    while (row <= lastRow && col <= lastCol) {
        // вправо
        for (let i = col; i <= lastCol; i++) {
            result.push(matrix[row][i]);
        }
        row++;
        
        // вниз
        for (let i = row; i <= lastRow; i++) {
            result.push(matrix[i][lastCol]);
        }
        lastCol--;
        
        // влево
        if (row <= lastRow) {
            for (let i = lastCol; i >= col; i--) {
                result.push(matrix[lastRow][i]);
            }
        }
        lastRow--;
        
        // вверх
        if (col <= lastCol) {
            for (let i = lastRow; i >= row; i--) {
                result.push(matrix[i][col]);
            }
        }
        col++;
    }
    
    return result;
};