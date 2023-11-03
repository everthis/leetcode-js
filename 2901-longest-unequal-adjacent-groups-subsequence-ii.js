/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getWordsInLongestSubsequence = function(n, words, groups) {
  let res = []
  let len = new Array(1001).fill(1)
  let next = new Array(1001).fill(-1)
  let startNodeWithMaxLen = -1
  let maxLen = 0
  for (let i = n - 1; i >= 0; i--) {
    for (let t = i + 1; t < n; t++) {
      if (len[i] < len[t] + 1 && check(words, groups, i, t)) {
        len[i] = len[t] + 1
        next[i] = t
      }
    }
    if (maxLen < len[i]) {
      maxLen = len[i]
      startNodeWithMaxLen = i
    }
  }
  let p = startNodeWithMaxLen
  while (p !== -1) {
    res.push(words[p])
    p = next[p]
  }
  return res

  function check(words, groups, i, lastInd) {
    if (
      groups[i] === groups[lastInd] ||
      words[i].length !== words[lastInd].length
    ) {
      return false
    }
    let diff = 0
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== words[lastInd][j]) {
        diff++
      }
    }
    return diff === 1
  }

};
