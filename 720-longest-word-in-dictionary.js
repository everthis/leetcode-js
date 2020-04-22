/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function(words) {
  if(words == null || words.length === 0) return ''
  words.sort()
  const s = new Set()
  let res = ''
  for(let i = 0, len = words.length; i < len; i++) {
    const w = words[i]
    if(w.length === 1 || s.has(w.slice(0, w.length - 1))) {
      res = w.length > res.length ? w : res
      s.add(w)
    }
  }
  return res
};
