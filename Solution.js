
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
    this.rows = board.length;
    this.columns = board[0].length;
    this.isStableBoard = false;

    while (isStableBoard === false) {
        isStableBoard = true;
        leftToRightCheck(board);
        topToBottomCheck(board);
        updateBoard(board);
    }
    return board;
};

/**
 * @param {number[][]} board
 */
function leftToRightCheck(board) {
    for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c + 2 < this.columns; c++) {
            let type = Math.abs(board[r][c]);
            if (type !== 0 && type === Math.abs(board[r][c + 1]) && type === Math.abs(board[r][c + 2])) {
                board[r][c] = board[r][c + 1] = board[r][c + 2] = -type;
                this.isStableBoard = false;
            }
        }
    }
}

/**
 * @param {number[][]} board
 */
function topToBottomCheck(board) {
    for (let c = 0; c < this.columns; c++) {
        for (let r = 0; r + 2 < this.rows; r++) {
            let type = Math.abs(board[r][c]);
            if (type !== 0 && type === Math.abs(board[r + 1][c]) && type === Math.abs(board[r + 2][c])) {
                board[r][c] = board[r + 1][c] = board[r + 2][c] = -type;
                this.isStableBoard = false;
            }
        }
    }
}

/**
 * @param {number[][]} board
 */
function updateBoard(board) {

    for (let c = 0; c < this.columns; c++) {
        let indexUpdate = this.rows - 1;
        for (let r = this.rows - 1; r >= 0; r--) {
            if (board[r][c] > 0) {
                board[indexUpdate--][c] = board[r][c];
            }
        }
        while (indexUpdate >= 0) {
            board[indexUpdate--][c] = 0;
        }
    }
}
