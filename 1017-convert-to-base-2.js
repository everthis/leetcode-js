/**
 * @param {number} N
 * @return {string}
 */
const baseNeg2 = function(N) {
  return negBase(N, -2)
};

function negBase(val, base) {
  if(val === 0) return '0'
	let result = '';
	while (val !== 0) {
		let remainder = val % base;
		val = Math.trunc(val / base);
		if (remainder < 0) {
			remainder += -base;
			val += 1;
		}
		result = remainder + result;
	}
	return result;
}

// another

/**
 * @param {number} N
 * @return {string}
 */
const baseNeg2 = function(N) {
  if (N === 0) return "0"; 
  let res = ''
  while(N !== 0) {
    res = (N & 1) + res
    N = -(N >> 1)
  }
  return res; 
};
