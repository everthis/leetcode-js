/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function(words) {
  for(let str of words) {
    if(isPa(str)) return str
  }
  
  return ''
};

function isPa(str) {
  let l = 0, r = str.length - 1
  while(l < r) {
    if(str[l] !== str[r]) return false
    l++
    r--
  }
  
  
  return true
}
