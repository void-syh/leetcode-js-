var convert = function(s, numRows) {
	if(!s||s.length===0) return '';
	if(numRows===1||s.length===1||s.length<=numRows) return s;
	let arr = new Array(numRows);
	let res = '';
	let n = numRows*2-2;
	let str = s.split('');
	for(let i = 0;i<str.length;i++){
		let m = i%n;
		if(m>n/2) m = n-m;
		if(!arr[m]) arr[m]= new Array();
		arr[m].push(str[i]);
	}
	for(let i = 0;i<numRows;i++){
		let str1 = arr[i].join('');
		res+=str1;
	}
	return res;
};
const s = "LEETCODEISHIRING", numRows = 3;
console.log(convert(s,numRows));