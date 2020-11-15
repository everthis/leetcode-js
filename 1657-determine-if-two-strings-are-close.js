/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function(word1, word2) {
  const len1 = word1.length, len2 = word2.length
  if(len1 !== len2) return false
  const a = ('a').charCodeAt(0)
  const arr1 = Array(26).fill(0)
  const arr2 = Array(26).fill(0)
  for(let i = 0; i < len1; i++) {
    arr1[word1.charCodeAt(i) - a]++
    arr2[word2.charCodeAt(i) - a]++
  }
  return chk1(arr1, arr2)
  function chk1(a1, a2) {
    const a11 = a1.slice(0)
    a11.sort()
    const a22 = a2.slice(0)
    a22.sort()
    for(let i = 0, len = a1.length; i < len; i++) {
      if((a1[i] !== 0 && a2[i] === 0) || (a1[i] === 0 && a2[i] !== 0) ) return false
    }
    for(let i = 0, len = a1.length; i < len; i++) {
      if(a11[i] !== a22[i]) return false
    }
    return true
  }
};
