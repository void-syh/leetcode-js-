//方法一优化版
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(null);
    let head = res;
    let flag = 0;
    while (l1 != null || l2 != null || flag) {
        //补齐
        if (!l1) l1 = new ListNode(null);
        if (!l2) l2 = new ListNode(null);
        let sum = (l1.val || 0) + (l2.val || 0) + flag;
        if (sum > 9) {
            sum -= 10;
            flag = 1;
        } else flag = 0;
        head.next = new ListNode(sum);
        head = head.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    return res.next;
};