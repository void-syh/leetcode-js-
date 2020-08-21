//暴力 两次循环
const twoSum = function(nums, target) {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        let aim = target - nums[i];
        for (let j = i + 1; j < len; j++) {
            if (nums[j] === aim) return [i, j];
        }
    }
    return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
//时间复杂度O(n^2);