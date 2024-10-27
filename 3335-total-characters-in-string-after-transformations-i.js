/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const MOD = 10 ** 9 + 7
  let charCounts = new Array(26).fill(0)

  for (const c of s) {
    charCounts[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
  }

  for (let i = 0; i < t; i++) {
    const newCounts = new Array(26).fill(0)
    for (let j = 0; j < 25; j++) {
      newCounts[j + 1] += charCounts[j]
    }
    newCounts[0] = (newCounts[0] + charCounts[25]) % MOD
    newCounts[1] = (newCounts[1] + charCounts[25]) % MOD
    charCounts = newCounts
  }

  return charCounts.reduce((a, b) => (a + b) % MOD, 0)
}
