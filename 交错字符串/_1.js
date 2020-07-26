var isInterleave = function(s1, s2, s3) {
	let n = s1.length,
		m = s2.length,
		t = s3.length;
	if (n + m != t) {
		return false;
	}
	
	let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(false));

	for (let i = 0; i <= s1.length; i++) {
		for (let j = 0; j <= s2.length; j++) {
			if (i === 0 && j === 0) {
				dp[i][j] = true
			} else if (i === 0) {
				dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[j - 1])
			} else if (j === 0) {

				dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i - 1])
			} else {
				dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i - 1 + j] ||
					dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
			}

		}
	}

	return dp[n][m];
};
