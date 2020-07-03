function ListNode(val) {
	this.val = val;
	this.next = null;
}
var removeDuplicateNodes = function(head) {
	let arr = [];
	let prev = null;
	let current = head;
	while (current !== null) {
		if (arr[current.val] > 0) {
			// 有重复的
			prev.next = current.next;
			current = prev.next;
		} else {
			arr[current.val] = 1;
			prev = current;
			current = current.next;
		}
	}
	return head;
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
console.log(removeDuplicateNodes(head));
