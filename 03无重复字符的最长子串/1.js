//滑动窗口
const lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let res = 0;
    while (1) {
        let index = s.slice(left, right).indexOf(s[right]);
        if (index !== -1) left += (index + 1);
        let len = right - left + 1;
        res = res > len ? res : len;
        if (right === s.length - 1) break;
        right++;
    }
    return res;
};
console.log(lengthOfLongestSubstring('acba'))