var patternMatching = function(pattern, value) {
	let count_a = 0,
		count_b = 0;
	for (const i of pattern) {
		if (i === 'a') {
			count_a++;
		} else {
			count_b++;
		}
	}
	if (count_a < count_b) {
		[count_a, count_b] = [count_b, count_a];
		const array = pattern.split('');
		for (let i = 0; i < array.length; i++) {
			array[i] = array[i] === 'a' ? 'b' : 'a';
		}
		pattern = array.join('');
	}
	console.log(pattern);
	if (value.length === 0) {
		return count_b === 0;
	}
	if (pattern.length === 0) {
		return false;
	}
	for (let len_a = 0; count_a * len_a <= value.length; len_a++) {
		const rest = value.length - count_a * len_a;
		if ((count_b === 0 && rest === 0) || (count_b !== 0 && rest % count_b === 0)) {
			const len_b = (count_b === 0 ? 0 : rest / count_b);
			let pos = 0,
				correct = true,
				value_a = '',
				value_b = '';
			for (const item of pattern) {
				if (item === 'a') {
					const sub = value.substring(pos, pos + len_a);
					if (value_a.length === 0) {
						value_a = sub;
					} else if (value_a !== sub) {
						correct = false;
						break;
					}
					pos += len_a;
				} else {
					const sub = value.substring(pos, pos + len_b);
					if (value_b.length === 0) {
						value_b = sub;
					} else if (value_b !== sub) {
						correct = false;
						break;
					}
					pos += len_b;
				}
			}
			if (correct && value_a !== value_b) {
				return true;
			}
		}
	}
	return false;
};
