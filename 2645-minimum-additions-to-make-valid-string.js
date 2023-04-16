/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
	let pattern = "abc"
	let p1 = 0, p2 = 0
	let cnt = 0
	while( p1 < word.length) {
		while( p1 < word.length && word[p1] != pattern[p2]) {
			p2 = (p2 + 1) % 3
			cnt++
		}
		p1++
		p2 = (p2 + 1) % 3
	}
	if (p2 == 1) {
		cnt += 2
	} else if (p2 == 2) {
		cnt += 1
	}
	return cnt
};
