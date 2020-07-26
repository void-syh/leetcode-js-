var minArray = function(numbers) {
	const len = numbers.length;
	for (let i = 1; i < len; i++) {
		if (numbers[i] < numbers[i - 1]) return numbers[i];
	}
	return numbers[0];
};
