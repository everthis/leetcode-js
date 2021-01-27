/**
 * @param {string} text
 * @return {number}
 */
const distinctEchoSubstrings = function (text) {
  const set = new Set()
  for(let len = 1; len <= text.length / 2; len++) {
    for(let l = 0, r = len, count = 0; l < text.length - len; l++, r++) {
      if(text.charAt(l) === text.charAt(r)) count++
      else count = 0

      if(count === len) {
        set.add(text.slice(l - len + 1, l + 1))
        count--
      }
    }
  }
  return set.size
}
