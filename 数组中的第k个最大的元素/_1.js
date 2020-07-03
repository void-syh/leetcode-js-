var findKthLargest = function(nums, k) {
	nums.sort((a, b) => b - a);
	return nums[k - 1]
};
let nums = [3, 2, 1, 5, 6, 4],
	k = 2;
console.log(findKthLargest(nums, k));
