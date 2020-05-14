/**
 * Initialize your data structure here.
 */
const Trie = function() {
  this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.root
  word.split('').forEach(ch => (curr = curr[ch] = curr[ch] || {}))
  curr.isWord = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.traverse(word)
  return !!node && !!node.isWord   
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
   return !!this.traverse(prefix)   
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

Trie.prototype.traverse = function(word) {
  let curr = this.root
  for (let i = 0; i < word.length; i++) {
    if (!curr) return null
    curr = curr[word[i]]
  }
  return curr
}

// another

class Trie {
  constructor() {
    this.links = new Map();
    this.isWord = false;
  }
  insert(word) {
    let node = this;
    for (const c of word) {
      if (!node.links.has(c)) node.links.set(c, new Trie());
      node = node.links.get(c);
    }
    node.isWord = true;
  }
  search(word) {
    const node = this.traverse(word);
    return node ? node.isWord : false;
  }
  startsWith(prefix) {
    const node = this.traverse(prefix);
    return node !== null;
  }
  traverse(word) {
    let node = this;
    for (const c of word) {
      if (node.links.has(c)) node = node.links.get(c);
      else return null;
    }
    return node;
  }
}

// another
/**
 * Initialize your data structure here.
 */
const Trie = function () {
  this.root = new Node(null)
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (!cur.children.has(word[i])) cur.children.set(word[i], new Node(null))
    cur = cur.children.get(word[i])
    if (i === len - 1) cur.word = true
  }
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root
  for (let i = 0, len = word.length; i < len; i++) {
    if (cur.children.has(word[i])) cur = cur.children.get(word[i])
    else return false
    if (i === len - 1) return cur.word === true
  }
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root
  for (let i = 0, len = prefix.length; i < len; i++) {
    if (cur.children.has(prefix[i])) cur = cur.children.get(prefix[i])
    else return false
    if (i === len - 1) return true
  }
}

class Node {
  constructor(v) {
    this.val = v
    this.word = false
    this.children = new Map()
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
