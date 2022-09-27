/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function (s) {
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (const e of s) {
    freq[e.charCodeAt(0) - a]++
  }
  let res = 0
  freq.sort((a, b) => b - a)

  // console.log(freq)
  for (let i = 0; i < 26; i++) {
    if (freq[i] === 0) break
    const step = 1 + Math.floor(i / 9)
    const val = step * freq[i]
    res += val
  }

  return res
}
