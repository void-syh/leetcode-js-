var countSmaller = function(nums) {
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		let temp = nums[i];
		let count = 0;
		for (let j = i; j < nums.length; j++) {
			if (nums[j] < nums[i]) count++
		}
		res.push(count)
	}
	return res;
};
const nums = [5, 2, 6, 1];
console.log(countSmaller(nums));
