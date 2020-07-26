const divingBoard = function(shorter, longer, k) {
	if (k == 0) return [];
	let res = [];
	if (shorter == longer) {
		res.push(shorter * k);
		return res;
	}
	for (let i = 0; i <= k; i++) {
		res.push(longer * i + shorter * (k - i));
	}
	return res;
};
const shorter = 1,
	longer = 2,
	k = 3;
console.log(divingBoard(shorter, longer, k));
