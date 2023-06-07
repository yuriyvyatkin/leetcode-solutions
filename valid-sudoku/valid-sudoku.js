/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boxDimension = 3;
    let boxes = new Array(board.length / boxDimension).fill('').map(() => new Array());
    
    for (let i = 0; i < board.length; i++) {
        const rowNums = board[i].filter((item) => item !== '.');
        const rowSet = new Set(rowNums);
        if (rowNums.length !== rowSet.size) {
            return false;
        }
        
        const columnNums = [];
        
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] !== '.') {
                boxes[Math.trunc(j / boxDimension)].push(board[j][i]);

                columnNums.push(board[j][i]);
            }
        }
        
        const columnSet = new Set(columnNums);
        if (columnNums.length !== columnSet.size) {
            return false;
        }

        if (i !== 0 && Number.isInteger((i + 1) / boxDimension)) {
            for (let k = 0; k < boxes.length; k++) {
                const boxSet = new Set(boxes[k]);
                if (boxes[k].length !== boxSet.size) {
                    return false;
                }
            }
            
            boxes = new Array(board.length / boxDimension).fill('').map(() => new Array());
        }
    }
    
    return true;
};