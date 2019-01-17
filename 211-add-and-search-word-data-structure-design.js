/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor() {
    this.children = [];
    this.isWord = false;
  }
}

const WordDictionary = function() {
  this.root = new TrieNode();
  this.aCode = "a".charCodeAt(0);
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let c of word.split("")) {
    let code = c.charCodeAt(0);
    if (node.children[code - this.aCode] == null) {
      node.children[code - this.aCode] = new TrieNode();
    }
    node = node.children[code - this.aCode];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return this._match(word.split(""), 0, this.root);
};
WordDictionary.prototype._match = function(arr, k, node) {
  if (k == arr.length) {
    return node && node.isWord;
  }
  if (arr[k] === ".") {
    for (let i = 0; node != null && i < node.children.length; i++) {
      if (
        node.children[i] !== null &&
        this._match(arr, k + 1, node.children[i])
      ) {
        return true;
      }
    }
  } else {
    return (
      node != null && node.children[arr[k].charCodeAt(0) - this.aCode] != null &&
      this._match(arr, k + 1, node.children[arr[k].charCodeAt(0) - this.aCode])
    );
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
