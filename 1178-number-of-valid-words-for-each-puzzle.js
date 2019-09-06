/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
const findNumOfValidWords = function(words, puzzles) {
  let n = puzzles.length,
    offset = 'a'.charCodeAt()
  let res = new Array(n).fill(0)
  let cnt = {}

  for (let w of words) {
    let mask = 0
    for (let c of w) {
      mask |= 1 << (c.charCodeAt() - offset)
    }
    cnt[mask] = ~~cnt[mask] + 1
  }
  for (let i = 0; i < n; i++) {
    let s = puzzles[i],
      len = s.length
    for (let k = 0; k < 1 << (len - 1); k++) {
      let mask = 1 << (s[0].charCodeAt() - offset)
      for (let j = 0; j < len - 1; j++) {
        if (k & (1 << j)) {
          mask |= 1 << (s[j + 1].charCodeAt() - offset)
        }
      }
      res[i] += ~~cnt[mask]
    }
  }
  return res
}
