function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function(root) {
    if (!root) return true;
    return Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

const treeHeight = function(root) {
    if (!root) return 0;
    return Math.max(1 + treeHeight(root.left), 1 + treeHeight(root.right))
}