/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
const maximumBobPoints = function(numArrows, aliceArrows) {
  let bestScore = 0, res = null
  const sum = arr => arr.reduce((ac, e) => ac + e, 0)
  bt(0, numArrows, 0, Array(12).fill(0))
  res[0] += numArrows - sum(res)
  return res

  function bt(k, remain, score, bobArrows) {
    if(k == 12) {
      if(score > bestScore) {
        bestScore = score
        res = bobArrows.slice(0)
      }
      return
    }
    bt(k + 1, remain, score, bobArrows)
    let arrowsNeeded = aliceArrows[k] + 1
    if(remain >= arrowsNeeded) {
      let bak = bobArrows[k]
      bobArrows[k] = arrowsNeeded
      bt(k + 1, remain - arrowsNeeded, score + k, bobArrows)
      bobArrows[k] = bak
    }
  }
};
