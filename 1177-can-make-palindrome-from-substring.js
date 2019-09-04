/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const canMakePaliQueries = function(s, queries) {
  const code = ch => ch.charCodeAt(0) - 'a'.charCodeAt(0)
  const preCount = [...s].reduce(
    (a, c) => {
      let nc = a[a.length - 1]
      nc ^= 1 << code(c) //NOT on one bit
      a.push(nc)
      return a
    },
    [0]
  )
  return queries.map(q => {
    let subCount = preCount[q[1] + 1] ^ preCount[q[0]]
    let oddChs = 0
    while (subCount > 0) {
      oddChs += subCount & 1
      subCount >>= 1
    }
    return Math.floor(oddChs / 2) <= q[2]
  })
}
