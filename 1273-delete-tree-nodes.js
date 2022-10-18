/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
const deleteTreeNodes = function (nodes, parent, value) {
  const n = nodes
  const hash = {}
  hash[0] = new Node(value[0])
  for (let i = 1; i < n; i++) {
    hash[i] = new Node(value[i])
  }

  for (let i = 1; i < n; i++) {
    const p = parent[i]
    hash[p].children[i] = hash[i]
  }

  const r = hash[0]
  dfs(r)
  // console.log(n)
  return cnt(r)

  function dfs(node) {
    if (node == null) return 0
    let res = node.sum

    const keys = Object.keys(node.children)
    for (const k of keys) {
      res += dfs(hash[k])
    }

    node.sum = res
    return res
  }

  function cnt(node) {
    if (node == null) return 0
    if (node.sum === 0) return 0
    const keys = Object.keys(node.children)
    let res = 1
    for (const k of keys) {
      res += cnt(hash[k])
    }

    return res
  }
}

class Node {
  constructor(v) {
    this.val = v
    this.sum = v
    this.children = {}
  }
}
