/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
	let n = derived.length
	let r1 = Array(n).fill(0)
	for (let i = 0; i < n-1; i++) {
		r1[i+1] = derived[i] ^ r1[i]
	}
	if (r1[n-1]^r1[0] == derived[n-1]) {
		return true
	}
	r1[0] = 1
	for (let i = 0; i < n-1; i++) {
		r1[i+1] = derived[i] ^ r1[i]
	}
	if (r1[n-1]^r1[0] == derived[n-1]) {
		return true
	}
	return false
};
