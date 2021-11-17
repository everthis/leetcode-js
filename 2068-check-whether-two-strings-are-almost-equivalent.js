/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const checkAlmostEquivalent = function(word1, word2) {
  const a = 'a'.charCodeAt(0), n = word1.length
  const arr1 = Array(26).fill(0), arr2 = Array(26).fill(0)
  
  for(const ch of word1) {
    arr1[ch.charCodeAt(0) - a]++
  }
  for(const ch of word2) {
    arr2[ch.charCodeAt(0) - a]++
  }
  for(let i = 0; i < 26; i++) {
    if(Math.abs(arr1[i] - arr2[i]) > 3) return false
  }
  
  return true
};
