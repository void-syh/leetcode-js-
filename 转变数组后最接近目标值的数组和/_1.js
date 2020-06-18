var findBestValue = function(arr, target) {
	arr = arr.sort();
	const len = arr.length;
	let sum =0;
	for(let i of arr){
		sum += i ;
	}
	if(sum<=target) return arr[len-1];
	else{
		for(let i = 0;i<arr[len-1];i++){
			sum = makeSum(arr,i);
			if(sum==target) return i;
			if(sum>target) return Math.abs(makeSum(arr,i)-target)<Math.abs(makeSum(arr,i-1)-target)?i:i-1;
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
