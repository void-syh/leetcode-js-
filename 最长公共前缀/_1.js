var longestCommonPrefix = function(strs) {
	if (strs.length === 0) return "";
	let arr = strs[0].split('');
	if(arr.length === 0) return "";
	if(strs.length === 1) return strs[0];
	let res = arr[0];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j].indexOf(res)!=0)
				return res.slice(0, res.length - 1);
		}
		if(arr[i+1]) res += arr[i+1];
		else return res;
	}
	return res;
};
let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
