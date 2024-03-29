/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let row = 0;
    let col = 0;
    let directionUp = true;
    const lastRow = mat.length - 1;
    const lastCol = mat[0].length - 1;
    const length = mat.length * mat[0].length;
    const result = [];
    
    for (let i = 0; i < length; i++) {
        result.push(mat[row][col]);
        
        if (directionUp) {
            if (col === lastCol) {
                row++;
                directionUp = false;
            } else if (row === 0) {
                col++;
                directionUp = false;
            } else {
                row--;
                col++;
            }
        } else {
            if (row === lastRow) {
                col++;
                directionUp = true;
            } else if (col === 0) {
                row++;
                directionUp = true;
            } else {
                row++;
                col--;
            }
        }
    }
    
    return result;
};