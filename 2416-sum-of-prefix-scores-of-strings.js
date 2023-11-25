/**
 * @param {string[]} words
 * @return {number[]}
 */
const sumPrefixScores = (words) => {
  const n = words.length
  const trie = { _count: 0 }
  const result = []

  // Create our own custom trie with _count property.
  // We are storing how many time we passed current node.
  for (let i = 0; i < n; i++) {
    const word = words[i]

    let node = trie
    for (let j = 0; j < word.length; j++) {
      if (!node[word[j]]) node[word[j]] = {}
      node = node[word[j]]
      node._count = (node._count || 0) + 1
    }
  }

  // Collect all _count values together as a result
  for (let i = 0; i < n; i++) {
    const word = words[i]
    let count = 0

    let node = trie
    for (let j = 0; j < word.length; j++) {
      node = node[word[j]]
      count += node._count || 0
    }

    result[i] = count
  }

  return result
}

// another

/**
 * @param {string[]} words
 * @return {number[]}
 */
const sumPrefixScores = function(words) {
  let trie = new Trie();
  for (let word of words) {
    trie.add(word);
  } 

  let n = words.length, res = Array(n);
  for (let i = 0; i < words.length; i++) {
    res[i] = trie.getScore(words[i]);
  }
  return res;
};

class TrieNode {
  constructor() {
    this.children = {};
    this.count = 0; 
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  add(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      node = node.children;
      let char = word[i];
      if (!node[char]) node[char] = new TrieNode();
      node = node[char];
      node.count++;
    }
  }
  getScore(word) {
    let node = this.root, score = 0;
    for (let i = 0; i < word.length; i++) {
      node = node.children;
      let char = word[i];
      if (!node[char]) return score;
      node = node[char];
      score += node.count;
    }
    return score;
  }
};
