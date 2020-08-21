function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var maxDepth = function(root) {
	return countDepth(root) - 1;
};

function countDepth(node) {
	if (node == null) return 1
	return Math.max(countDepth(node.left), countDepth(node.right)) + 1;
}

const head = new TreeNode(3);
head.left = new TreeNode(9);
head.right = new TreeNode(20);
head.right.left = new TreeNode(15);
console.log(maxDepth(head));
