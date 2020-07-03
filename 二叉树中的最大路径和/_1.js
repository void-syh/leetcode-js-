function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var maxPathSum = function(root) {
	let max = Number.MIN_SAFE_INTEGER;
	let dfs = (root) => {
		if(root==null) return 0;
		let left = Math.max(0,dfs(root.left));
		let right = Math.max(0,dfs(root.right));
		max = Math.max(max,left+root.val+right);
		return root.val + Math.max(left,right);
	}
	dfs(root);
	return max;
};
