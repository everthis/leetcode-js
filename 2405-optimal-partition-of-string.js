/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let res = 0, n = s.length
  let i = 0, j = 0, num = 0
  const set = new Set()
  for(let i = 0; i < n; i++) {
    const ch = s[i]
    if(set.has(ch)) {
      res++
      num = 1
      set.clear()
    } else {

    }
    set.add(ch)
  }
  
  return res + 1
};
