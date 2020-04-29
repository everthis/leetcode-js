/**
 * @param {string[]} words
 */
const WordFilter = function (words) {
  this.trie = new trie()
  let val = 0
  for (let word of words) {
    /* suffix # prefix */
    let temp = ''
    this.trie.insert('#' + word, val)
    this.trie.insert(word + '#', val)
    for (let i = 0; i < word.length; i++) {
      temp = word.substring(i)
      temp += '#' + word
      this.trie.insert(temp, val)
    }
    val++
  }
}
/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
  return this.trie.startsWith(suffix + '#' + prefix)
}
/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
const trie = function () {
  this.map = new Map()
  this.isEnd = false
  this.val = -1
}
trie.prototype.insert = function (word, val) {
  let temp = this
  let i = 0
  while (i < word.length && temp.map.has(word[i])) {
    temp.val = Math.max(temp.val, val)
    temp = temp.map.get(word[i++])
  }
  while (i < word.length) {
    let t2 = new trie()
    temp.map.set(word[i++], t2)
    temp.val = Math.max(temp.val, val)
    temp = t2
  }
  temp.isEnd = true
  temp.val = Math.max(temp.val, val)
  return true
}
trie.prototype.startsWith = function (prefix) {
  let temp = this
  let i = 0
  while (i < prefix.length && temp.map.has(prefix[i]))
    temp = temp.map.get(prefix[i++])
  return i >= prefix.length ? temp.val : -1
}
