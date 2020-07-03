var firstMissingPositive = function(nums) {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		set.add(nums[i]);
	}
	for (let i = 1; i <= nums.length + 1; i++) {
		if (!set.has(i)) return i;
	}
};
let nums = [1,2,0];
console.log(firstMissingPositive(nums));