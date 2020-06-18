//层次遍历
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var serialize = function(root) {
	if (!root) return '[]';
	let res = "";
	let node = root;
	const queue = [node];
	while (queue.length) {
		let now = queue.shift();
		if (now) {
			res += `${now.val},`;
			queue.push(now.left);
			queue.push(now.right);
		} else {
			res += "null,"
		}
	}
	res = res.substring(0, res.length - 1); // 去掉最后一个逗号

	return `[${res}]`;
};

var deserialize = function(data) {
	if (data.length <= 2) {
		return null;
	}
	const nodes = data.substring(1, data.length - 1).split(',');
	let root = new TreeNode(parseInt(nodes[0]));
	nodes.shift();
	const queue = [root];
	while (queue.length && nodes.length) {
		let node = queue.shift();

		const leftVal = nodes.shift();
		if (leftVal !== 'null') {
			node.left = new TreeNode(leftVal);
			queue.push(node.left);
		}
		const rightVal = nodes.shift();
		if (rightVal !== "null") {
			node.right = new TreeNode(rightVal);
			queue.push(node.right);
		}
	}
	return root;
};
let str = "[1,2,3,null,null,4,5,null,null,null,null]";
console.log(deserialize(str));
console.log(serialize(deserialize(str)));
