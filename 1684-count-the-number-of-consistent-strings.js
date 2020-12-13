/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const set = new Set()
  for(let c of allowed) set.add(c)
  let res = 0
  for(let i = 0, len = words.length; i < len; i++) {
    const cur = words[i]
    let b = true
    for(let c of cur) {
      if(!set.has(c)) {
        b = false
        break
      }
    }
    if(b) res++
  }
  
  return res
};
