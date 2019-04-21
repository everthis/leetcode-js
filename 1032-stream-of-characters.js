/**
 * @param {string[]} words
 */
const StreamChecker = function(words) {
  this.maxLen = 0
  this.pos = -1
  this.s = []
  this.root = new Node()
  for (let w of words) {
    this.add(w)
    this.maxLen = Math.max(this.maxLen, w.length)
  }
}

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.s[++this.pos] = letter
  return this.find(this.s, this.pos, Math.min(this.pos + 1, this.maxLen))
}

StreamChecker.prototype.add = function(word) {
  let len = word.length
  let p = this.root
  for (let i = len - 1; i >= 0; i--) {
    let k = word.charCodeAt(i) - 'a'.charCodeAt(0)
    if (p.child[k] == null) p.child[k] = new Node()
    p = p.child[k]
  }
  p.valid = true
}

StreamChecker.prototype.find = function(s, pos, len) {
  let p = this.root
  for (let i = 0; i < len; i++) {
    let k = s[pos - i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (p.child[k] == null) return false
    p = p.child[k]
    if (p.valid) return true
  }
  return false
}
class Node {
  constructor() {
    this.child = []
    this.valid = false
  }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
