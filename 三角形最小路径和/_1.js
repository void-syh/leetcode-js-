var minimumTotal = function(triangle) {
	let dp = new Array(triangle.length);
	let res = Number.MAX_VALUE;
	for (let i = 0; i < triangle.length; i++) {
		dp[i] = new Array(i + 1).fill(0);
	}
	for (let i = 0; i < triangle.length; i++) {
		for (let j = 0; j < triangle[i].length; j++) {
			if (i === 0 && j === 0) dp[i][j] = triangle[i][j];
			else if (j === 0) dp[i][j] = dp[i - 1][j] + triangle[i][j];
			else if (j === triangle[i].length - 1) dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
			else dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
			if (i === triangle.length - 1) res = dp[i][j] < res ? dp[i][j] : res;
		}
	}
	return res;
};
const triangle = [
	[2],
	[3, 4],
	[6, 5, 7],
	[4, 1, 8, 3]
];
console.log(minimumTotal(triangle));
