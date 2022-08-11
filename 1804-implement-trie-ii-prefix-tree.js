class Node {
  constructor(val) {
    this.val = val
    this.cnt = 0
    this.children = {}
    this.wordCnt = 0
  }
}

const Trie = function () {
  this.root = new Node(null)
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root
  for(const ch of word) {
    if(cur.children[ch] == null) cur.children[ch] = new Node(ch)
    cur.children[ch].cnt++
    cur = cur.children[ch]
  }
  cur.wordCnt++
}

/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
  let cur = this.root
  for(const ch of word) {
    if(cur.children[ch] == null) return 0
    cur = cur.children[ch]
  }
  return cur.wordCnt
}

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
  let cur = this.root
  for(const ch of prefix) {
    if(cur.children[ch] == null) return 0
    cur = cur.children[ch]
  }
  return cur.cnt
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
  let cur = this.root
  for(const ch of word) {
    if(cur.children[ch] == null) break
    cur.children[ch].cnt--
    cur = cur.children[ch]
  }
  cur.wordCnt--
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
