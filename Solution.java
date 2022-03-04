
public class Solution {

    int rows;
    int columns;
    boolean isStableBoard;

    public int[][] candyCrush(int[][] board) {
        this.rows = board.length;
        this.columns = board[0].length;

        while (isStableBoard == false) {
            isStableBoard = true;
            leftToRightCheck(board);
            topToBottomCheck(board);
            updateBoard(board);
        }
        return board;
    }

    public void leftToRightCheck(int[][] board) {
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c + 2 < columns; c++) {
                int type = Math.abs(board[r][c]);
                if (type != 0 && type == Math.abs(board[r][c + 1]) && type == Math.abs(board[r][c + 2])) {
                    board[r][c] = board[r][c + 1] = board[r][c + 2] = -type;
                    isStableBoard = false;
                }
            }
        }
    }

    public void topToBottomCheck(int[][] board) {
        for (int c = 0; c < columns; c++) {
            for (int r = 0; r + 2 < rows; r++) {
                int type = Math.abs(board[r][c]);
                if (type != 0 && type == Math.abs(board[r + 1][c]) && type == Math.abs(board[r + 2][c])) {
                    board[r][c] = board[r + 1][c] = board[r + 2][c] = -type;
                    isStableBoard = false;
                }
            }
        }
    }

    public void updateBoard(int[][] board) {

        for (int c = 0; c < columns; c++) {
            int indexUpdate = rows - 1;
            for (int r = rows - 1; r >= 0; r--) {
                if (board[r][c] > 0) {
                    board[indexUpdate--][c] = board[r][c];
                }
            }
            while (indexUpdate >= 0) {
                board[indexUpdate--][c] = 0;
            }
        }
    }
}
