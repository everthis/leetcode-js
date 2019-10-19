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
