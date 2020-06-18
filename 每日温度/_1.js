var dailyTemperatures = function(T) {
	let arr = new Array();
	for (let i = 0; i < T.length; i++) {
		for (let j = i + 1; j < T.length; j++) {
			if (T[i] < T[j]) {
				arr[i] = j-i;
				break;
			}
		}
		if (!arr[i]) {
			arr[i] = 0;
		}
	}
	return arr;
};
let T = new Array(73, 74, 75, 71, 69, 72, 76, 73);
console.log(dailyTemperatures(T));
