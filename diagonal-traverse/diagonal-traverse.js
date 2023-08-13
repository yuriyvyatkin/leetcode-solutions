/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (mat.length === 0 || mat[0].length === 0) return [];
    
    let m = mat.length;
    let n = mat[0].length;
    let result = [];
    let row = 0, col = 0;
    let directionUp = true;
    
    for (let i = 0; i < m * n; i++) {
        result.push(mat[row][col]);
        if (directionUp) {
            if (col === n - 1) {
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
            if (row === m - 1) {
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