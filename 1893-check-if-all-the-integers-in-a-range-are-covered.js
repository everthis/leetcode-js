/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function(ranges, left, right) {
	for(let i = left; i <= right; i++) {
		let seen = false;
		for(let j = 0; j < ranges.length && !seen; j++) 
			if(i >= ranges[j][0] && i <= ranges[j][1]) 
				seen = true;
		if(!seen) return false;
	}
	return true;
};
