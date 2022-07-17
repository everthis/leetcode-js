/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
const AutocompleteSystem = function (sentences, times) {
  this.trie = new Trie()
  this.inputString = ''
  this.MAX_RESULTS = 3
  for (let i = 0, len = times.length; i < len; i++) {
    this.trie.insert(sentences[i], times[i])
  }
}

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    this.trie.insert(this.inputString)
    this.inputString = ''
    return []
  }
  this.inputString += c
  const strings = this.trie.stringsStartingWith(this.inputString)
  const results = Object.keys(strings)
  results.sort((a, b) => {
    const aFreq = strings[a]
    const bFreq = strings[b]
    return aFreq !== bFreq ? bFreq - aFreq : a > b ? 1 : -1
  })
  return results.slice(0, this.MAX_RESULTS)
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

// Using a Trie (Prefix tree).
/**
 * Initialize your data structure here.
 */
const Trie = function () {
  this._trie = {}
}

/**
 * Inserts a string into the trie a number of times.
 * @param {string} word
 * @param {number} [count=1]
 * @return {void}
 */
Trie.prototype.insert = function (word, count = 1) {
  if (!word.length || count < 1) {
    return
  }
  let curr = this._trie
  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (!curr.hasOwnProperty(char)) {
      curr[char] = {}
    }
    curr = curr[char]
  }
  if (!curr.hasOwnProperty('#')) {
    curr['#'] = 0
  }
  curr['#'] += count
}

/**
 * Returns if there is any string in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {Object}
 */
// Time: O(n), where n is the number of different strings in the Trie.
// Space: O(1)
Trie.prototype.stringsStartingWith = function (prefix) {
  if (!prefix.length) {
    return false
  }
  let curr = this._trie
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i]
    if (!curr.hasOwnProperty(char)) {
      return false
    }
    curr = curr[char]
  }
  const results = {}
  function traverse(node, chars) {
    if (!node) {
      return
    }
    Object.keys(node).forEach((char) => {
      if (char === '#') {
        results[chars] = node[char]
        return
      }
      traverse(node[char], chars + char)
    })
  }
  traverse(curr, prefix)
  return results
}

// another

class TrieNode {
  constructor() {
    this.children = new Map()
    this.counts = new Map()
    this.isWord = false
  }
}

class Pair {
  constructor(s, c) {
    this.str = s
    this.cnt = c
  }
}

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
const AutocompleteSystem = function (sentences, times) {
  this.root = new TrieNode()
  this.prefix = ''
  for (let i = 0, n = sentences.length; i < n; i++) {
    this.add(sentences[i], times[i])
  }
}

AutocompleteSystem.prototype.add = function (str, cnt) {
  let cur = this.root
  for (const ch of str) {
    let next = cur.children.get(ch)
    if (next == null) {
      next = new TrieNode()
      cur.children.set(ch, next)
    }
    cur = next
    cur.counts.set(str, (cur.counts.get(str) || 0) + cnt)
  }
  cur.isWord = true
}

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    this.add(this.prefix, 1)
    this.prefix = ''
    return []
  }
  this.prefix += c
  let cur = this.root
  for (const ch of this.prefix) {
    const next = cur.children.get(ch)
    if (next == null) {
      return []
    }
    cur = next
  }
  const pq = new PriorityQueue((a, b) =>
    a.cnt === b.cnt ? a.str.localeCompare(b.str) < 0 : a.cnt > b.cnt
  )

  for(const s of cur.counts.keys()) {
    pq.push(new Pair(s, cur.counts.get(s)))
  }
  const res = []
  for(let i = 0; i < 3 && pq.size(); i++) {
    res.push(pq.pop().str)
  }

  return res
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = []
    this.top = 0
    this.comparator = comparator
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    return this.heap[this.top]
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value)
      this.siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this.swap(this.top, bottom)
    }
    this.heap.pop()
    this.siftDown()
    return poppedValue
  }
  replace(value) {
    const replacedValue = this.peek()
    this.heap[this.top] = value
    this.siftDown()
    return replacedValue
  }

  parent = (i) => ((i + 1) >>> 1) - 1
  left = (i) => (i << 1) + 1
  right = (i) => (i + 1) << 1
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j])
  swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]])
  siftUp = () => {
    let node = this.size() - 1
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  siftDown = () => {
    let node = this.top
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this.swap(node, maxChild)
      node = maxChild
    }
  }
}
