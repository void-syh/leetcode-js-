var isPalindrome = function(x) {
	let n = (x + "").split("");
	let m = parseInt(n.reverse().join(''));
	console.log(m,n);
	if (m==x) return true;
	else return false;
};
let x = -121;
console.log(isPalindrome(x));
