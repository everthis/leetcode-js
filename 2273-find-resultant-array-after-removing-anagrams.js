/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = function(words) {
  const res = []
  const n = words.length

  for(let i = 0; i < n;) {
    let j = i + 1
    while(j < n && isAna(words[i], words[j])) j++
    res.push(words[i])
    i = j
  }
  return res
  
  function isAna(s1, s2) {
    const arr = Array(26).fill(0)
    const a = 'a'.charCodeAt(0)
    for(let i = 0; i < s1.length; i++) {
      arr[s1.charCodeAt(i) - a]++
    }
    for(let i = 0; i < s2.length; i++) {
      arr[s2.charCodeAt(i) - a]--
    }
    for(const e of arr) {
      if(e !== 0) return false
    }
    return true
  }
};

