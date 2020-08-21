var isSubsequence = function(s, t) {
	if (s.length === 0) return true;
	let left = 0;
	for (let i = 0; i < t.length; i++) {
		if (s[left] === t[i]) {
			left++;
			if (left === s.length) return true;
		}
	}
	return false;
};
const s = "abc",
	t = "ahbgdc";
console.log(isSubsequence(s, t));
