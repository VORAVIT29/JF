function ticTacToe(board) {

    for (let r = 0; r < board.length; r++) {
        //เช็คสามตัวแนวนอนทั้งหมดตามรอบ
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2]) {
            return (board[r][0])
        }
        //เช็คแนวทแยงฝั้งซ้าย
        if (board[0][0] == board[1][1] && board[2][2]) {
            return (board[0][0])
        }

        for (let c = 0; c < board[r].length; c++) {
            //เช็คแนวตั้งทั้งหมดตามรอบ
            if (board[0][c] == board[1][c] && board[1][c] == board[2][c]) {
                return (board[0][c])
            }
            //เช็คแนวทแยงฝั่งขวา
            if (c == board[r].length - 1 && r == 0) {
                if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
                    return (board[0][2])
                }
            }
        }
    }
    return 'Draw'
}

//RUN
console.log(ticTacToe([
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
]))
console.log(ticTacToe([
    ['O', 'O', 'O'],
    ['O', 'X', 'X'],
    ['O', 'X', 'X']
]))
console.log(ticTacToe([
    ['X', 'X', 'O'],
    ['O', 'O', 'X'],
    ['X', 'X', 'O']
]))
console.log(ticTacToe([
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["X", "X", "X"]
]))
console.log(ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["E", "E", "X"]
]))

console.log(ticTacToe([
    ["X", "O", "E"],
    ["X", "O", "E"],
    ["E", "O", "X"]
]))