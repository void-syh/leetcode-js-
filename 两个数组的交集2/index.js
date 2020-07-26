var intersect = function(nums1, nums2) {
	let hash = {};
	let res = [];
	for (let i of nums1) {
		if (hash[i]) hash[i]++;
		else hash[i] = 1;
	}
	for (let i of nums2) {
		if (hash[i] > 0) {
			res.push(i);
			hash[i]--;
		}
	}
	return res;
};
const nums1 = [4, 9, 5],
	nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
