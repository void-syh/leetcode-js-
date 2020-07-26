function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
	if(nums.length===0) return null;
	const middle = parseInt(nums.length / 2);
	const root = new TreeNode(nums[middle]);
	root.left = sortedArrayToBST(nums.slice(0, middle));
	root.right = sortedArrayToBST(nums.slice(middle + 1))
	return root;
};

const arr = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(arr));
