/**
 * @param {string} word
 * @return {number}
 */
const countVowelSubstrings = function(word) {
  let res = 0, n= word.length
  for(let i = 0; i < n - 1;i++) {
    for(let j = i + 1;j < n; j++) {
      if(valid(word, i, j)) res++
    }
  }
  
  return res
  
  function valid(s, i, j) {
    const set = new Set(['a', 'e', 'i', 'o','u'])
    const vis = new Set()
    for(let idx = i; idx <= j; idx++) {
      if(!set.has(s[idx])) return false
      else {
        vis.add(s[idx])
      }
    }
    // console.log(vis)
    return vis.size === 5
  }
};
