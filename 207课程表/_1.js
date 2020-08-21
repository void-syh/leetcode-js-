// 错误解法

var canFinish = function(numCourses, prerequisites) {
	let arr = new Array(numCourses).fill(1);
	for (let i = 0; i < prerequisites.length; i++) {
		arr[prerequisites[i][0]] = 0;
	}
	let prearr = [...arr];
	while (1) {
		for (let i = 0; i < prerequisites.length; i++) {
			if (arr[prerequisites[i][1]] === 1) {
				arr[prerequisites[i][0]] = 1;
			}
		}
		if (prearr.toString() === arr.toString()) break;
		else prearr = [...arr];
	}
	if (arr.includes(0)) return false;
	else return true;
};
console.log(canFinish(6, [
	[3, 0],
	[3, 1],
	[4, 1],
	[4, 2],
	[5, 3],
	[5, 4]
]));
