var longestPalindrome = function(s) {
	let arr = s.split("");
	let temp = [];
	let L = 0;
	let R = 0;
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			if (arr[i] === arr[j]) {
				if (j > i + 2) {
					temp = arr.slice(i + 1, j);
					if (temp.join('') !== temp.reverse().join('')) continue;
					else if (R - L < j - i) {
						L = i;
						R = j;
					}
				} else if (R - L < j - i) {
					L = i;
					R = j;
				}
			}
		}
	}
	return arr.slice(L,R+1).join('');
};
const s = "babad";
console.log(longestPalindrome(s));
