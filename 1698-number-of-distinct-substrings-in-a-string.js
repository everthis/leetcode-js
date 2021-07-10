/**
 * @param {string} s
 * @return {number}
 */
const countDistinct = function(s) {
  const set = new Set()
  for(let i = 0, len = s.length; i < len; i++) {
    for(let j = i + 1; j <= len; j++) {
      set.add(s.slice(i, j))
    }
  }
  
  return set.size
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const countDistinct = function (s, count = 0) {
  const root = new Trie()
  const N = s.length
  for (let i = 0; i < N; i++) {
    let node = root
    for (let j = i; j < N; j++) {
      const c = s[j]
      if (!node.children.has(c)) {
        node.children.set(c, new Trie())
        count++
      }
      node = node.children.get(c)
    }
  }
  return count
}
class Trie {
  constructor() {
    this.children = new Map()
  }
}
