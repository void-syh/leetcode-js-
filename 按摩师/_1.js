var massage = function(nums) {
	let dp = new Array(nums.length + 2);
	dp[0] = 0;
	dp[1] = 0;
	for (let i = 2; i < nums.length + 2; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
	}
	return dp[nums.length + 1];
};
let nums = [2, 1, 4, 5, 3, 1, 1, 3];
console.log(massage(nums));
