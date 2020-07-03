var countAndSay = function(n) {
	if (n == 1) return "1";
	if (n == 2) return "11";
	let res = new Array(30);
	res[1] = "11";
	for (let i = 2; i < n; i++) {
		let num = 0;
		res[i] = new Array();
		let arr = res[i - 1].split('');
		for (let j = 0; j < arr.length; j++) {
			num++;
			if(arr[j]!=arr[j+1]){
				res[i].push(num);
				res[i].push(arr[j]);
				num=0;
			}
		}
		res[i] = res[i].join('');
	}
	return res[n-1];
};
console.log(countAndSay(4));
