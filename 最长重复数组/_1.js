var findLength = function(A, B) {
	let res = 0;
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			let m = i;
			let n = j;
			let length = 0;
			while (((m<A.length) && (n<B.length)) && (A[m] == B[n])) {
				length++;
				m++;
				n++;
			}
			if (length > res) {
				res = length;
			}
		}
	}
	return res;
};
let A = [1,2,3,2,1],
	B = [3,2,1,4,7];
console.log(findLength(A, B));
