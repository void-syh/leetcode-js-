var integerBreak = function(n) {
	if (n === 2) return 1;
	if (n === 3) return 2;
	const m = parseInt(n / 3);
	const r = n % 3;
	if (r === 1) return Math.pow(3, m - 1) * 4;
	if (r === 0) return Math.pow(3, m);
	return Math.pow(3, m) * r;
};
console.log(integerBreak(20));
