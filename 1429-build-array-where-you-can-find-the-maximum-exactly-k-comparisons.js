/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const numOfArrays = function (n, m, k) {
	const mod = 1e9 + 7;
	const dp = [];
	for (let i = 0; i <= n; i++) {
		dp[i] = [];
		for (let j = 0; j <= m; j++) {
			dp[i][j] = [];
		}
	}
	// i: length; j: max; c: cost
	function f(i, j, c) {
		if (dp[i][j][c] !== undefined) return dp[i][j][c];
		if (c > i || c > j || c === 0) return (dp[i][j][c] = 0);
		if (i === 1 && c === 1) return (dp[i][j][c] = 1);
		let res = 0;
		// ... (j)
		for (let b = 1; b < j; b++) {
			res = (res + f(i - 1, b, c - 1)) % mod;
		}
		// ... (1 -> j)
		res = (res + f(i - 1, j, c) * j) % mod;
		return (dp[i][j][c] = res);
	}
	let res = 0;
	for (let b = 1; b <= m; b++) {
		res = (res + f(n, b, k)) % mod;
	}
	return res;
};
