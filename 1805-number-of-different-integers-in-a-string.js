/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function(word) {
  let cur = ''
  const n = word.length
  const set = new Set()
  for(let i = 0; i < n; i++ ) {
    if(word[i] >= '0' && word[i] <= '9') cur += word[i]
    else {
      if(cur) set.add(+cur)
      cur = ''
    }
    if(i === n - 1 && cur) set.add(+cur)
  }

  return set.size
};
