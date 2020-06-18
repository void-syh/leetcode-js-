var threeSum = function(nums) {
	let res = new Array();
	for(let i =0;i<nums.length;i++){
		for(let j=i+1;j<nums.length;j++){
			for(let t=j+1;t<nums.length;t++){
				if(nums[i]+nums[j]+nums[t]===0){
					let arr = new Array(3);
					arr[0]=nums[i];
					arr[1]=nums[j];
					arr[2]=nums[t];
					arr.sort();
					res.push(arr);
				}
			}
		}
	}
	for(let i=0;i<res.length;i++){
		for(let j=i+1;j<res.length;j++){
			if(res[i][0]==res[j][0]&&res[i][1]==res[j][1]&&res[i][2]==res[j][2]){
				res.splice(j,1);
				j--
			}
		}
	}
	return res;
};
const nums = [-1, 0, 1, 2, -1, -4];
const nums1 = [0,0,0,0];
console.log(threeSum(nums1));