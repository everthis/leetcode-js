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
