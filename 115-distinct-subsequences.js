/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function(s, t) {
  const tlen = t.length
  const slen = s.length
  const mem = Array.from({ length: tlen + 1 }, () =>
    new Array(slen + 1).fill(0)
  )
  for (let j = 0; j <= slen; j++) {
    mem[0][j] = 1
  }
  for (let i = 0; i < tlen; i++) {
    for (let j = 0; j < slen; j++) {
      if (t.charAt(i) === s.charAt(j)) {
        mem[i + 1][j + 1] = mem[i][j] + mem[i + 1][j]
      } else {
        mem[i + 1][j + 1] = mem[i + 1][j]
      }
    }
  }
  return mem[tlen][slen]
}
