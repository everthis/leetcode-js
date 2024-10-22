/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const countKConstraintSubstrings = function (s, k) {
  const n = s.length
  let res = 0,
    l = 0,
    r = 0,
    zero = 0,
    one = 0
  while (r < n) {
    if (s[r] === "0") zero++
    else one++
    while (zero > k && one > k) {
      if (s[l] === "0") zero--
      else one--
      l++
    }
    res += r - l + 1
    r++
  }

  return res
}

// another


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
  let res = 0
  const n = s.length
  for(let len = 1; len <= n; len++) {
    for(let j = 0; j + len <= n; j++) {
      const sub = s.slice(j, j + len)
      if(valid(sub)) res++
    }
  }
  
  return res
  
  function valid(str) {
    let one = 0
    const n = str.length
    for(const e of str) {
      if(e === '1') one++
    }
    
    return one <= k || n - one <= k 
  }
};
