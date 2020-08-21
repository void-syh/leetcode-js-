var addStrings = function(num1, num2) {
	if (num1.length === 0) return num2;
	if (num2.length === 0) return num1;
	num1 = num1.split('');
	num2 = num2.split('');
	let flag = 0;
	let fir = num1.length - 1;
	let sec = num2.length - 1;
	if (fir < sec) {
		[num1, num2] = [num2, num1];
		[fir, sec] = [sec, fir];
	}
	const arr = [];
	while (sec >= 0) {
		let count = parseInt(num1[fir]) + parseInt(num2[sec]) + parseInt(flag);
		if (count > 9) {
			arr.unshift(count - 10);
			flag = 1;
		} else {
			arr.unshift(count);
			flag = 0;
		}
		fir--;
		sec--;
	}
	while (fir >= 0) {
		let count = parseInt(num1[fir]) + parseInt(flag);
		if (count > 9) {
			arr.unshift(count - 10);
			flag = 1;
		} else {
			arr.unshift(count);
			flag = 0;
		}
		fir--;
	}
	if (flag === 1) arr.unshift(1);
	return arr.join('');
};
const num1 = '9';
const num2 = '99';
console.log(addStrings(num1, num2));
