/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function(n) {
  let perm = []
  for(let i = 0; i < n; i++) {
    perm[i] = i
  }
  let clone = perm.slice()
  let res = 0
  
  while(true) {
    res++
    let arr = clone.slice()
    for(let i = 0; i < clone.length; i++) {
      if(i % 2 === 0) arr[i] = clone[i / 2]
      else arr[i] = clone[n / 2 + (i - 1) / 2]
    }
    
    if(chk(perm, arr)) break
    clone = arr
  }
  
  
  return res
  
  function chk(a1, a2) {
    for(let i = 0, len = a1.length; i < len; i++) {
      if(a1[i] !== a2[i]) return false
    }
    return true
  }
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function(n) {
  let res = 0, i = 1;
  while (res === 0 || i > 1) {
    i = i * 2 % (n - 1);
    res++;
  }
  return res;
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function(n) {
	if (n === 2) return 1
	const mod = n - 1
	let curr_power = 2
	let cnt = 1
	// Find multiplicative order modulo n-1
	while (curr_power !== 1) {
		curr_power = (2 * curr_power) % mod
		cnt++
  }
	return cnt
};
