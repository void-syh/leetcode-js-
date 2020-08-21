var multiply = function(num1, num2) {
	if(num1==0||num2==0) return '0';
	const arr1 = num1.split('');
	const arr2 = num2.split('');
	const len1 = arr1.length;
	const len2 = arr2.length;
	let res = new Array(100).fill(0);
	for (let i = len1 - 1; i >= 0; i--) {
		for (let j = len2 - 1; j >= 0; j--) {
			res[len1 - i - 1 + len2 - j - 1] += (arr1[i] * arr2[j]);
			jinwei(res, len1 - i - 1 + len2 - j - 1);
		}
	}
	res = res.reverse();
	for (let i = 0; i < res.length; i++) {
		if(res[i]!=0){
			res=res.slice(i);
			break;
		} 
	}
	return res.join('');
};

function jinwei(res, i) {
	if (res[i] < 10) return;
	let flag = 0;
	while (res[i] > 9) {
		flag++;
		res[i] -= 10;
	}
	res[i + 1] += flag;
	jinwei(res, i + 1);
}
const num1 = '123456789';
const num2 = '987654321';
console.log(multiply(num1, num2));
