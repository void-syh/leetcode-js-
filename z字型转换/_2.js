var convert = function(s, numRows) {
	if(!s||s.length===0) return '';
	if(numRows===1||s.length===1||s.length<=numRows) return s;
	let rows = [];
	let str = s.split('');
	for(let i = 0; i<numRows; i++) rows[i] = "";
	let loc = 0;
	let down = false;
	for(let i =0;i<str.length;i++){
		rows[loc] += str[i];
		if(loc==0||loc==numRows-1){
			down=!down;
		}
		loc +=down?1:-1;
	}
	let res = "";
	for(let i = 0;i<numRows;i++){
		res+=rows[i];
	}
	return res;
};
const s = "LEETCODEISHIRING", numRows = 3;
console.log(convert(s,numRows));