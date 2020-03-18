/**
 * @param {string[]} strs
 * @return {number}
 */
const findLUSlength = function(strs) {
  strs.sort((a, b)  => b.length - a.length)
  const dup = getDuplicates(strs)
  for(let i = 0; i < strs.length; i++) {
    if(!dup.has(strs[i])) {
      if(i === 0) return strs[0].length
      for(let j = 0; j < i; j++) {
        if(isSubsequence(strs[j], strs[i])) break
        if(j === i - 1) return strs[i].length
      }
    }
  }
  return -1
};

function isSubsequence(a, b) {
  let i = 0, j = 0
  while(i < a.length && j < b.length) {
    if(a.charAt(i) === b.charAt(j)) j++
    i++
  }
  return j === b.length
}

function getDuplicates(arr) {
  const set = new Set()
  const dup = new Set()
  for(let el of arr) {
    if(set.has(el)) dup.add(el)
    else set.add(el)
  }
  return dup
}

