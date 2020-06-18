var maxArea = function(height) {
	let res = 0;
	for(let i = 0;i<height.length-1;i++){
		for(let j =i+1;j<height.length;j++){
			let now = (j-i)*Math.min(height[i],height[j]);
			res = res>now?res:now;
		}
	}
	return res;
};
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));