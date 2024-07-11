/**
 * @param {string} target
 * @param {string[]} words
 * @param {number[]} costs
 * @return {number}
 */
var minimumCost = function (target, words, costs) {
  let ac = new AhoCorasick()
  for (let i = 0; i < words.length; i++) {
    ac.put(words[i], costs[i])
  }
  ac.build_fail()

  let n = target.length
  let f = new Array(n + 1).fill(Infinity)
  f[0] = 0
  let cur = (root = ac.root)
  for (let i = 1; i <= n; i++) {
    cur = cur.son[target.charCodeAt(i - 1) - 'a'.charCodeAt(0)]
    if (cur.len) {
      f[i] = Math.min(f[i], f[i - cur.len] + cur.cost)
    }
    let fail = cur.last
    while (fail !== root) {
      let tmp = f[i - fail.len] + fail.cost
      if (tmp < f[i]) {
        f[i] = tmp
      }
      fail = fail.last
    }
  }
  return f[n] === Infinity ? -1 : f[n]
}

class Node {
  constructor() {
    this.son = new Array(26).fill(null)
    this.fail = null
    this.last = null
    this.len = 0
    this.cost = Infinity
  }
}

class AhoCorasick {
  constructor() {
    this.root = new Node()
  }

  put(s, cost) {
    let cur = this.root
    for (let i = 0; i < s.length; i++) {
      let b = s.charCodeAt(i) - 'a'.charCodeAt(0)
      if (cur.son[b] === null) {
        cur.son[b] = new Node()
      }
      cur = cur.son[b]
    }
    cur.len = s.length
    cur.cost = Math.min(cur.cost, cost)
  }

  build_fail() {
    this.root.fail = this.root.last = this.root
    let q = []
    for (let i = 0; i < this.root.son.length; i++) {
      let son = this.root.son[i]
      if (son === null) {
        this.root.son[i] = this.root
      } else {
        son.fail = son.last = this.root
        q.push(son)
      }
    }
    while (q.length > 0) {
      let cur = q.shift()
      for (let i = 0; i < cur.son.length; i++) {
        let son = cur.son[i]
        if (son === null) {
          cur.son[i] = cur.fail.son[i]
          continue
        }
        son.fail = cur.fail.son[i]
        son.last = son.fail.len ? son.fail : son.fail.last
        q.push(son)
      }
    }
  }
}




// TLE below

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
