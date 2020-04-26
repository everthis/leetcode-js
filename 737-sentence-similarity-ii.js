/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
const areSentencesSimilarTwo = function (words1, words2, pairs) {
  if (words1.length !== words2.length) return false
  const parent = {}

  function getParent(word) {
    if (parent[word] === undefined || parent[word] === word) return word
    return getParent(parent[word])
  }
  for (let [w1, w2] of pairs) {
    if (w1 > w2) [w1, w2] = [w2, w1]
    parent[w1] = getParent(w1)
    if (parent[w2] !== undefined) parent[getParent(w2)] = parent[w1]
    parent[w2] = parent[w1]
  }
  for (let i = 0; i < words1.length; i++) {
    let w1 = words1[i]
    let w2 = words2[i]
    if (getParent(w1) !== getParent(w2)) return false
  }
  return true
}
