/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = function(words) {
  const arr = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for(let w  of words) {
    for(let ch of w) {
      arr[ch.charCodeAt(0) - a]++
    }
  }
  const n = words.length
  for(let i = 0; i < 26; i++) {
    if(arr[i] % n !== 0) return false
  }
  return true
};
