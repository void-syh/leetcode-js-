var removeBoxes = function(boxes) {
	const removeBoxes = (boxes) => {
		const n = boxes.length;
		// js创建三维数组有点麻烦
		const memo = new Array(n);
		for (let i = 0; i < n; i++) {
			memo[i] = new Array(n);
			for (let j = 0; j < n; j++) {
				memo[i][j] = new Array(n).fill(0);
			}
		}
		// 函数定义：移除区间[l,r]和区间前面和boxes[l]相同的k个数，所能产出的最大积分和
		const getMax = (l, r, k) => {
			if (l > r) return 0;
			if (memo[l][r][k] != 0) return memo[l][r][k];
			// 找出连续的数字，有k+1个
			while (l < r && boxes[l] == boxes[l + 1]) {
				k++;
				l++;
			}
			// 直接把这段连续的移除，收益(k+1)*(k+1)，加上对剩余部分的递归
			let points = (k + 1) * (k + 1) + getMax(l + 1, r, 0)
			// 移除中间部分子数组，让连续数字遇上和自己相同的数字
			for (let i = l + 1; i <= r; i++) {
				if (boxes[l] == boxes[i]) {
					points = Math.max(
						points,
						getMax(l + 1, i - 1, 0) + getMax(i, r, k + 1)
					)
				}
			}
			memo[l][r][k] = points;
			return points;
		};
		return getMax(0, n - 1, 0);
	};
};
