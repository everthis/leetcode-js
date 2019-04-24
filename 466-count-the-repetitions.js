/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
const getMaxRepetitions = function(s1, n1, s2, n2) {
  let j = 0,
    i,
    count = 0,
    perCycle = 0,
    firstEnd = -1,
    lastEnd = -1,
    nonMatch = 0
  for (i = 0; i < s1.length * n1; i++) {
    if (s2[j] === s1[i % s1.length]) {
      j++
      nonMatch = 0
    } else if (++nonMatch >= s1.length) break
    if (j === s2.length) {
      count++
      perCycle++
      j = 0
      if (lastEnd !== -1) continue
      else if (firstEnd === -1) {
        firstEnd = i
        perCycle = 0
      } else if ((i - firstEnd) % s1.length === 0) {
        let cycleLen = i - firstEnd
        let remainLen = s1.length * n1 - i - 1
        let cycles = Math.floor(remainLen / cycleLen)
        count += cycles * perCycle
        i += cycles * cycleLen
      }
    }
  }
  return Math.floor(count / n2)
}
