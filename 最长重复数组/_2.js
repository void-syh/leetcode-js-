var findLength = function(A, B) {
	let res = 0;
	let dp = new Array(A.length + 1);
	for (let i = 0; i < A.length + 1; i++) {
		dp[i] = new Array(B.length + 1).fill(0);
	}
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			if (A[i] == B[j]) {
				dp[i + 1][j + 1] = dp[i][j]+1;
			}
			res = dp[i+1][j+1]>res?dp[i+1][j+1]:res;
		}
	}
	return res;
};
let A = [1, 2, 3, 2, 1],
	B = [3, 2, 1, 4, 7];
console.log(findLength(A, B));
