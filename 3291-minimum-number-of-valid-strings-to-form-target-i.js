  class TrieNode {
    constructor() {
      this.children = new Array(26).fill(null)
    }
  }
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function(words, target) {
  const n = target.length
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0

  const a = 'a'.charCodeAt(0)
  const root = new TrieNode()
  for (const word of words) {
    let node = root
    for (const c of word) {
      const index = c.charCodeAt(0) - a
      if (!node.children[index]) {
        node.children[index] = new TrieNode()
      }
      node = node.children[index]
    }
  }

  for (let i = 0; i < n; i++) {
    if (dp[i] === Infinity) continue
    let node = root
    for (let j = i; j < n; j++) {
      const index = target[j].charCodeAt(0) - a
      if (!node.children[index]) break
      node = node.children[index]
      dp[j + 1] = Math.min(dp[j + 1], dp[i] + 1)
    }
  }

  return dp[n] === Infinity ? -1 : dp[n]
};
