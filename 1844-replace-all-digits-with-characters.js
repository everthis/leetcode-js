/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
  let arr = s.split('')
  for(let i = 1; i < s.length; i += 2) {
    arr[i] = shift(s[i - 1], +s[i])
  }

  return arr.join('')

  function shift(ch, x) {
    return String.fromCharCode(ch.charCodeAt(0) + x)
  }
};
