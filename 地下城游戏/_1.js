var calculateMinimumHP = function(dungeon) {
	let m = dungeon.length;
	let n = dungeon[0].length;
	let dp = new Array(m + 1);
	for (let i = 0; i < m + 1; i++) {
		dp[i] = new Array(n + 1).fill(0);
	}
	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (i == m - 1 && j == n - 1) dp[i][j] = 1 - dungeon[i][j];
			else if (i == m - 1) {
				if (dungeon[i][j] < 0) dp[i][j] = Math.max(dp[i][j + 1], 1) - dungeon[i][j];
				else dp[i][j] = dp[i][j + 1] - dungeon[i][j];
			} else if (j == n - 1) {
				if (dungeon[i][j] < 0) dp[i][j] = Math.max(dp[i + 1][j], 1) - dungeon[i][j];
				else dp[i][j] = dp[i + 1][j] - dungeon[i][j];
			} else {
				if (dungeon[i][j] < 0) {
					dp[i][j] = Math.max(Math.min(dp[i + 1][j], dp[i][j + 1]), 1) - dungeon[i][j];
				} else dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
			}
		}
	}
	return dp[0][0] > 0 ? dp[0][0] : 1;
};

const dungeon = [
	[-2, -3, 3],
	[-5, -10, 1],
	[10, 30, -5]
];
console.log(calculateMinimumHP(dungeon));
