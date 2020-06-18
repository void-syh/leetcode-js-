var maxScoreSightseeingPair = function(A) {
	let max = 0;
	for(let i =0;i<A.length-1;i++){
		for(let j = i+1;j<A.length;j++){
			let sum = A[i]+A[j]-j+i;
			max = max>sum?max:sum;
		}
	}
	return max;
};
let A = [8,1,5,2,6];
console.log(maxScoreSightseeingPair(A));