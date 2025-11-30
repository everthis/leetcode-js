/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
  const n = s.length
  let used = new Set()
  let res = 0

  for(let i = 0;i < n; i++) {
    const e = s[i]
    if(!used.has(e)) {
      used.add(e)
      res++
    }
  }


  return res
};
