function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var hasPathSum = function(root, sum) {
	if (root == null) return false
	if (root.left == null && root.right == null) {
		return sum - root.val == 0
	}
	return hasPathSum(root.left, sum - root.val) ||
		hasPathSum(root.right, sum - root.val)
};
