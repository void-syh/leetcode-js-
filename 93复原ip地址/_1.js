var restoreIpAddresses = function(s) {
	const res = [];
	const dfs = (subRes, start) => { // 复原从start开始的子串
		console.log(subRes);
		if (subRes.length == 4 && start == s.length) // 满4段，且用光所有字符
			res.push(subRes.join('.')); // 4段拼成字符串 推入结果数组
		if (subRes.length == 4 && start < s.length) // 满4段，但还没用光字符
			return; // 直接返回
		for (let len = 1; len <= 3; len++) { // 三种长度的选择
			if (s[start + len - 1] == undefined) return; // 字符不存在，超出边界了
			if (len != 1 && s[start] == '0') return; // 不能是0x 0xx
			const str = s.substring(start, start + len); // 当前选择切出的片段
			if (len == 3 && +str > 255) return; // 不能超过255
			subRes.push(str); // 作出选择
			dfs(subRes, start + len); // 基于这种选择，向下选择
			subRes.pop(); // 发现这种选择不行，撤销
		}
	};
	dfs([], 0); // dfs入口
	return res;
};
console.log(restoreIpAddresses('25525511135'));
