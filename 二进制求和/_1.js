var addBinary = function(a, b) {
	if (a.length === 0 && b.length === 0) return '';
	if (a.length === 0) return b;
	if (b.length === 0) return a;
	let A = a.split('');
	let B = b.split('');
	let m = 0;
	let res = [];
	if (A.length > B.length)[A, B] = [B, A]
	let len = A.length - 1;
	while (len >= 0) {
		let sum = parseInt(A[len]) + parseInt(B[B.length - A.length + len]) + m;
		if (sum > 1) {
			res.unshift(sum - 2);
			m = 1;
		} else {
			res.unshift(sum);
			m = 0;
		}
		len--;
	}
	len = B.length - A.length - 1;
	while (len >= 0) {
		let sum = parseInt(B[len]) + m;
		if (sum > 1) {
			res.unshift(sum - 2);
			m = 1;
		} else {
			res.unshift(sum);
			m = 0;
		}
		len--;
	}
	if (m) res.unshift(1);
	return res.join('');
};
let a = "1101",
	b = "11";
console.log(addBinary(a, b));
