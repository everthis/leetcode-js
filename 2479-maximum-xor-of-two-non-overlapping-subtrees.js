class TrieNode {
  constructor() {
    this.next = [null, null]
  }
}
const bigIntMinAndMax = (...args) => {
  return args.reduce(
    ([min, max], e) => {
      return [e < min ? e : min, e > max ? e : max]
    },
    [args[0], args[0]],
  )
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
const maxXor = function (n, edges, values) {
  const ins = new Solution()
  return Number(ins.maxXor(n, edges, values))
}

class Solution {
  constructor() {
    this.next = []
    this.val = []
    this.values = []
    this.root = null
    this.ret = 0n
  }

  insert(num) {
    let node = this.root
    num = BigInt(num)
    for (let i = 63n; i >= 0n; i--) {
      const d = (num >> i) & 1n
      if (node.next[d] === null) {
        node.next[d] = new TrieNode()
      }
      node = node.next[d]
    }
  }

  find(num) {
    num = BigInt(num)
    let node = this.root
    if (this.root.next[0] === null && this.root.next[1] === null) {
      return 0
    }
    let ret = 0n
    for (let i = 63n; i >= 0n; i--) {
      const d = (num >> i) & 1n
      if (node.next[1n - d] !== null) {
        ret += 1n << i
        node = node.next[1n - d]
      } else {
        ret += 0n
        node = node.next[d]
      }
    }
    return ret
  }

  maxXor(n, edges, values) {
    this.values = values
    for (let i = 0; i < n; i++) {
      this.next[i] = []
    }
    for (let i = 0; i < edges.length; i++) {
      const [a, b] = edges[i]
      this.next[a].push(b)
      this.next[b].push(a)
    }
    this.root = new TrieNode()
    this.dfs(0, -1)
    this.dfs2(0, -1)
    return this.ret
  }

  dfs(cur, parent) {
    let v = this.values[cur]
    for (let i = 0; i < this.next[cur].length; i++) {
      const nxt = this.next[cur][i]
      if (nxt === parent) continue
      v += this.dfs(nxt, cur)
    }
    this.val[cur] = v
    return v
  }

  dfs2(cur, parent) {
    for (let i = 0; i < this.next[cur].length; i++) {
      const nxt = this.next[cur][i]
      if (nxt === parent) continue
      this.ret = bigIntMinAndMax(this.ret, this.find(this.val[nxt]))[1]
      this.dfs2(nxt, cur)
      this.insert(this.val[nxt])
    }
  }
}
