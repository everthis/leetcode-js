/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(word) {
  const n = word.length, { abs } = Math

  let res = 0
  for(let i = 1; i < n;) {
    const delta = abs(word.charCodeAt(i) - word.charCodeAt(i - 1))
    if(delta <= 1) {
      res++
      i += 2
    } else i++

  }

  return res
};
