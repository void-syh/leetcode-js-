var uniquePathsWithObstacles = function(obstacleGrid) {
	let dp = new Array(obstacleGrid.length);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(obstacleGrid[0].length).fill(0);
	}
	if (obstacleGrid[0][0] == 1) dp[0][0] = 0;
	else dp[0][0] = 1;
	for (let i = 0; i < obstacleGrid.length; i++) {
		for (let j = 0; j < obstacleGrid[i].length; j++) {
			if (i == 0 && j == 0) continue;
			if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
			else if (i == 0) dp[i][j] = dp[i][j - 1];
			else if (j == 0) dp[i][j] = dp[i - 1][j];
			else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}
	return dp[dp.length - 1][dp[0].length - 1];
};
let obstacleGrid = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
];
console.log(uniquePathsWithObstacles(obstacleGrid));
