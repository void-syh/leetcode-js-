var maxArea = function(height) {
	let res = 0;
	let left = 0;
	let right = height.length-1;
	while(left<right){
		let sum = (right-left)*Math.min(height[left],height[right]);
		res = res>sum?res:sum;
		if(height[left]<=height[right]){
			left++;
		}else{
			right--;
		}
	}
	return res;
};
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));