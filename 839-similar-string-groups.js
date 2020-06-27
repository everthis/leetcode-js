/**
 * @param {string[]} A
 * @return {number}
 */
const numSimilarGroups = function (A) {
  const all = new Set(A)
  const isSimilar = function (w1, w2) {
    if (w1 === w2) return true
    let misMatch = 0
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) misMatch++
      if (misMatch > 2) return false
    }
    return true
  }
  const recur = function (s) {
    all.delete(s)
    for (let n of all) {
      if (isSimilar(s, n)) {
        recur(n)
      }
    }
  }
  let ans = 0
  while (all.size) {
    const current = all.values().next().value
    recur(current)
    ans++
  }
  return ans
}
