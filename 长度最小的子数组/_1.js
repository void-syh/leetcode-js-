// 给定一个含有 n 个正整数的数组和一个正整数 s， 
// 找出该数组中满足其和≥ s 的长度最小的连续子数组， 并返回其长度。 
// 如果不存在符合条件的连续子数组， 返回 0。
var minSubArrayLen = function(s, nums) {
	let res = nums.length + 1;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] >= s) return 1;
		let sum = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			sum += nums[j];
			if (sum >= s) res = (j - i + 1) < res ? (j - i + 1) : res;
		}
	}
	if (res > nums.length) return 0;
	else return res;
};
let s = 7,nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(s,nums));
