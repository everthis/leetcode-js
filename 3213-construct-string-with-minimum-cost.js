const mx = 1000000000
/**
 * @param {string} target
 * @param {string[]} words
 * @param {number[]} costs
 * @return {number}
 */
var minimumCost = function (target, words, costs) {
  const n = target.length
  const dp = new Array(n + 1).fill(mx)
  const t = new Trie(30)

  for (let i = 0; i < words.length; i++) {
    t.insert(words[i], costs[i])
  }

  dp[n] = 0

  for (let i = n - 1; i >= 0; i--) {
    let cur = t
    for (let j = i; j <= n && cur !== null; j++) {
      if (cur.cost !== mx) {
        dp[i] = Math.min(dp[j] + cur.cost, dp[i])
      }
      if (j < n) {
        cur = cur.sons[target.charCodeAt(j) - 'a'.charCodeAt(0)]
      }
    }
  }

  return dp[0] === mx ? -1 : dp[0]
}

class Trie {
  constructor(range) {
    this.range = range
    this.cost = mx
    this.sons = new Array(range).fill(null)
  }

  insert(str, cost) {
    let cur = this
    for (let c of str) {
      if (cur.sons[c.charCodeAt(0) - 'a'.charCodeAt(0)] === null) {
        cur.sons[c.charCodeAt(0) - 'a'.charCodeAt(0)] = new Trie(this.range)
      }
      cur = cur.sons[c.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    cur.cost = Math.min(cur.cost, cost)
  }

  destroy() {
    for (let t of this.sons) {
      if (t !== null) {
        t.destroy()
      }
    }
  }
}
