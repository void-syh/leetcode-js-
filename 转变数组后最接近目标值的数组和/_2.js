var findBestValue = function(arr, target) {
	arr = arr.sort();
	const len = arr.length;
	let sum =0;
	for(let i of arr){
		sum += i ;
	}
	if(sum<=target) return arr[len-1];
	else{
		let left = 0;
		let right = arr[len-1];
		let mid = -1;
		while(left<right){
			mid = parseInt((left+right)/2);
			sum = makeSum(arr,mid);
			if(sum==target) return mid;
			if(sum>target) right=mid;
			else left=mid;
			if(left==right-1) return Math.abs(makeSum(arr,left)-target)<=Math.abs(makeSum(arr,right)-target)?left:right;
		}
	}
};

function makeSum(arr,value){
	let sum = 0;
	for(let i of arr){
		if(i>value){
			sum+=value;
		}else sum+=i;
	}
	return sum;
}
let arr = [4, 9, 3],
	target = 10;
console.log(findBestValue(arr, target));