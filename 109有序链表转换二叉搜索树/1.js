function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var sortedListToBST = function(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const buildTree = function(start, end) {
        if (start > end) return null;
        const mid = (start + end) >>> 1;
        const root = new TreeNode(arr[mid]);
        root.left = buildTree(start, mid - 1);
        root.right = buildTree(mid + 1, end);
        return root;
    }

    return buildTree(0, arr.length - 1);
};