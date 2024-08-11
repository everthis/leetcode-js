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

// another

class TrieNode {
  constructor() {
    this.sfx = null // Suffix link
    this.dict = null // Dictionary link
    this.child = new Array(26).fill(null)
    this.word_id = -1 // Index of the word ending at this node
  }
}
// Speeds up Trie construction
const preallocated_nodes = Array.from({ length: 50005 }, () => new TrieNode())

/**
 * @param {string} target
 * @param {string[]} words
 * @param {number[]} costs
 * @return {number}
 */
function minimumCost(target, words, costs) {
  const trie = new Trie(words, costs)
  const n = target.length
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= n; ++i) {
    const suffixes = trie.suffixesAfterAppending(target[i - 1])
    for (const j of suffixes) {
      dp[i] = Math.min(dp[i], dp[i - words[j].length] + costs[j])
    }
  }

  return dp[n] === Infinity ? -1 : dp[n]
}

class Trie {
  constructor(words, costs) {
    this.count = 0
    this.root = this.newTrieNode()
    this.root.sfx = this.root.dict = this.root

    for (let i = 0; i < words.length; ++i) {
      const word = words[i]
      let u = this.root
      for (const c of word) {
        const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
        if (!u.child[index]) {
          u.child[index] = this.newTrieNode()
        }
        u = u.child[index]
      }
      if (u.word_id < 0 || costs[i] < costs[u.word_id]) {
        u.word_id = i
      }
    }

    // BFS is used to set up the suffix and dictionary links for each node
    // The suffix link of a node points to the longest proper suffix of the word represented by the node that is also a prefix of some word in the dictionary.
    // The dictionary link is used to quickly find the next node in the dictionary chain.
    const queue = [this.root]
    while (queue.length > 0) {
      const u = queue.shift()
      for (let i = 0; i < 26; ++i) {
        const v = u.child[i]
        if (!v) continue

        let p = u.sfx
        while (p !== this.root && !p.child[i]) {
          p = p.sfx
        }

        if (u !== this.root && p.child[i]) {
          v.sfx = p.child[i]
        } else {
          v.sfx = this.root
        }

        v.dict = v.sfx.word_id >= 0 ? v.sfx : v.sfx.dict
        queue.push(v)
      }
    }
    this.curr = this.root
  }

  newTrieNode() {
    preallocated_nodes[this.count] = new TrieNode()
    return preallocated_nodes[this.count++]
  }

  // This method is used to update the current node and find all matching suffixes after appending a character
  suffixesAfterAppending(letter) {
    const index = letter.charCodeAt(0) - 'a'.charCodeAt(0)

    // It follows suffix links until it finds a child node corresponding to the character or reaches the root.
    while (this.curr !== this.root && !this.curr.child[index]) {
      this.curr = this.curr.sfx
    }

    // If a valid child node is found, it updates the current node and collects all word IDs reachable through the dictionary links.
    const result = []
    if (this.curr.child[index]) {
      this.curr = this.curr.child[index]
      let u = this.curr
      if (u.word_id < 0) {
        u = u.dict
      }
      while (u.word_id >= 0) {
        result.push(u.word_id)
        u = u.dict
      }
    }
    return result
  }
}
