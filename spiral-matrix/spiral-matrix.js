/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let result = [];
    let rowStart = 0, rowEnd = matrix.length - 1;
    let colStart = 0, colEnd = matrix[0].length - 1;
    
    while (rowStart <= rowEnd && colStart <= colEnd) {
        // Перемещение вправо
        for (let col = colStart; col <= colEnd; col++) {
            result.push(matrix[rowStart][col]);
        }
        rowStart++;

        // Перемещение вниз
        for (let row = rowStart; row <= rowEnd; row++) {
            result.push(matrix[row][colEnd]);
        }
        colEnd--;

        // Перемещение влево
        if (rowStart <= rowEnd) {
            for (let col = colEnd; col >= colStart; col--) {
                result.push(matrix[rowEnd][col]);
            }
        }
        rowEnd--;

        // Перемещение вверх
        if (colStart <= colEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                result.push(matrix[row][colStart]);
            }
        }
        colStart++;
    }
    
    return result;
};