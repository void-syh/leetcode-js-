//数学方法
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    const head = res;
    let flag = 0;
    //先把短的加上去
    while (l1 != null && l2 != null) {
        let sum = l1.val + l2.val + flag;
        if (sum > 9) {
            sum -= 10;
            flag = 1;
        } else flag = 0;
        res.next = new ListNode(sum);
        res = res.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    //再加长的剩余部分
    while (l1) {
        let sum = l1.val + flag;
        if (sum > 9) {
            sum -= 10;
            flag = 1;
        } else flag = 0;
        res.next = new ListNode(sum);
        res = res.next;
        l1 = l1.next;
    }

    while (l2) {
        let sum = l2.val + flag;
        if (sum > 9) {
            sum -= 10;
            flag = 1;
        } else flag = 0
        res.next = new ListNode(sum);
        res = res.next;
        l2 = l2.next;
    }
    //还有进位就要把进位加上
    if (flag) res.next = new ListNode(1);
    return head.next;
};