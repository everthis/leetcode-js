/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
  const arr = s.split(' ')
  const n = arr.length, res = Array(n)
  for(let e of arr) {
    const idx = +e[e.length - 1]
    res[idx - 1] = e.slice(0, e.length - 1)
  }
  return res.join(' ')
};
