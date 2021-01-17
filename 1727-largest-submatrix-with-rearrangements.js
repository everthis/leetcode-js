/**
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = function(a) {
 		let n = a.length;
		let m = a[0].length;
		let count = Array(m).fill(0);
		let result = 0;
		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < m; ++j) {
				count[j] = (a[i][j] ? count[j] + 1 : 0);
			}
			let b = count.slice();
            b.sort((a, b) => a - b)
			b = b.reverse()
			for (let j = 0; j < m; ++j) {
				result = Math.max(result, (j + 1) * b[j]);
			}
		}
		return result;   
};

