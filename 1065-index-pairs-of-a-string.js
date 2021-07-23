/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = function(text, words) {
  const res = [], trie = buildTrie(words)
  const n = text.length
  for(let i = 0; i < n; i++) {
    let node = trie
    for(let j = i; j < n; j++) {
      if(node.children[text[j]] == null) break
      node = node.children[text[j]]
      if(node.isWord) res.push([i, j])
    }
  }

  return res
};

function buildTrie(words) {
  const root = new Trie()
  
  for(let word of words) {
    let node = root
    for(let c of word) {
      if(node.children[c] == null) node.children[c] = new Trie()
      node = node.children[c]
    }
    node.isWord = true
  }

  return root
}

class Trie {
  constructor() {
    this.children = {}
    this.isWord = false
  }
}
