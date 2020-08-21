//利用哈希表
const twoSum = function(nums, target) {
    const len = nums.length;
    let hashMap = [];
    for (let i = 0; i < len; i++) {
        let aim = target - nums[i];
        if (hashMap[aim] > -1) return [hashMap[aim], i]; //如果哈希表中已经有想要的数，就已经找到了，返回
        hashMap[nums[i]] = i;
    }
    return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
//时间复杂度O(n)