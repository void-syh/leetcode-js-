var threeSumClosest = function(nums, target) {
	nums = nums.sort(function sortNumber(a, b) {
		return a - b
	});
	let res = nums[0] + nums[1] + nums[2];
	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;
		let aim = target - nums[i];
		while (left < right) {
			let sum = nums[left] + nums[right];
			res = Math.abs(target - res) <= Math.abs(aim - sum) ? res : sum + nums[i];
			if (right - left == 1) break;
			if (aim == sum) return target;
			else if (aim > sum) {
				left++;
			} else {
				right--;
			}
		}
	}
	return res;
};

let nums = [-1, 2, 1, -4],
	target = 1;
console.log(threeSumClosest(nums, target));
