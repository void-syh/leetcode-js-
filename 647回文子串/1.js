var countSubstrings = function(s) {
    const len = s.length;
    const dp = new Array(len);
    let count = 0
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false);
    }
    for (let j = 0; j < len; j++) {
        for (i = 0; i <= j; i++) {
            if (i === j) dp[i][j] = true;
            if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
            if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true;
            if (dp[i][j]) count++;
        }
    }
    return count;
};

console.log(countSubstrings('aaa'))