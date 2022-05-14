/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function(ranges, left, right) {
  const arr = Array(52).fill(0)
  for(let [s, e] of ranges) {
    arr[s]++
    arr[e + 1]--
  }
  for(let i = 1; i < 52; i++) {
    arr[i] += arr[i - 1]
  }
  for(let i = left; i <= right; i++) {
    if(arr[i] === 0) return false
  }
  
  return true
};

// another

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

// another

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function(ranges, left, right) {
  const arr = Array(52).fill(0)
  for(let [s, e] of ranges) {
    arr[s]++
    arr[e + 1]--
  }

  let overlaps = 0
  for(let i = 1; i <= right; i++) {
    overlaps += arr[i];
    if (i >= left && overlaps == 0) return false;
  }
  
  return true
};

