var maxProfit = function(prices) {
	if (prices.length < 2) return 0;
	let dp = new Array(prices.length);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(2);
	}
	dp[0][0] = 0;
	dp[0][1] = 0 - prices[0];
	dp[1][0] = Math.max(0, prices[1] - prices[0]);
	dp[1][1] = Math.max(-prices[1], -prices[0]);
	for (let i = 2; i < prices.length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
		console.log(dp);
	}
	return dp[prices.length - 1][0];
};
let prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices));
