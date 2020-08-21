const updateBoard = (board, click) => {
    const m = board.length;
    const n = board[0].length;
    const dx = [1, 1, 1, -1, -1, -1, 0, 0];
    const dy = [1, 0, -1, 0, 1, -1, 1, -1];
    const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n;

    const bfs = (x, y) => {
        const queue = [
            [x, y]
        ];
        while (queue.length) {
            const [x, y] = queue.shift();
            let count = 0;
            for (let i = 0; i < 8; i++) {
                const nX = x + dx[i];
                const nY = y + dy[i];
                if (inBound(nX, nY) && board[nX][nY] == 'M') {
                    count++;
                }
            }
            if (count == 0) {
                board[x][y] = 'B';
                for (let i = 0; i < 8; i++) {
                    const nX = x + dx[i];
                    const nY = y + dy[i];
                    if (inBound(nX, nY) && board[nX][nY] == 'E') {
                        board[nX][nY] = 'B';
                        queue.push([nX, nY]);
                    }
                }
            } else {
                board[x][y] = count + '';
            }
        }
    };

    const [cX, cY] = click;
    if (board[cX][cY] == 'M') {
        board[cX][cY] = 'X';
    } else {
        bfs(cX, cY);
    }
    return board;
};