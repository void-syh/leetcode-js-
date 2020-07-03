var minSubArrayLen = function(s, nums) {
	let res = nums.length + 1;
	let i = 0;
	let j = 0;
	let sum = 0;
	while (j < nums.length) {
		sum += nums[j];
		while (sum >= s) {
			res = Math.min(res, (j - i + 1));
			sum -= nums[i];
			i++;
		}
		j++
	}
	if (res > nums.length) return 0;
	else return res;
};
let s = 7,
	nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(s, nums));
