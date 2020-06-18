var maxScoreSightseeingPair = function(A) {
	let res = 0;
	let max = A[0];
	for(let i = 1;i<A.length;i++){
		res = res>max+A[i]-i?res:max+A[i]-i;
		max = max>A[i]+i?max:A[i]+i;
	}
	return res;
};
let A = [8,1,5,2,6];
console.log(maxScoreSightseeingPair(A));