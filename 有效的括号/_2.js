var isValid = function(s) {
	let stark = [];
	let len = s.length;
	if (len % 2) return false;
	for (let i = 0; i < len; i++) {
		switch (s[i]) {
			case "(":
				stark.push(s[i]);
				break;
			case "[":
				stark.push(s[i]);
				break;
			case "{":
				stark.push(s[i]);
				break;
			case ")":
				if(stark.pop()!=="(") return false;
				break;
			case "]":
				if(stark.pop()!=="[") return false;
				break;
			case "}":
				if(stark.pop()!=="{") return false;
				break;
		}
	}
	return !stark.length;
};
let s1 = "([)]";
let s2 = "{[]}";
console.log(isValid(s1), isValid(s2));
