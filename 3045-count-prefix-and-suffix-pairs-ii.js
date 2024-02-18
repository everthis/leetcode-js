class Trie {
  constructor() {
    this.word = null
    this.children = new Array(27)
    this.cnt = 0
  }
}
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  const M = 31
  let rt1 = new Trie()
  let rt2 = new Trie()
  let res = 0

  for (let w of words) {
    res += addAndCount(w)
  }

  return res

  function addAndCount(w) {
    let res = 0
    let pre = rt1
    let suf = rt2
    let n = w.length

    for (let i = 0; i < n; i++) {
      let a = w.charAt(i)
      let b = w.charAt(n - 1 - i)

      if (!pre.children[a.charCodeAt() & M]) {
        pre.children[a.charCodeAt() & M] = new Trie()
      }
      if (!suf.children[b.charCodeAt() & M]) {
        suf.children[b.charCodeAt() & M] = new Trie()
      }

      pre = pre.children[a.charCodeAt() & M]
      suf = suf.children[b.charCodeAt() & M]

      if (pre.word && suf.word === pre.word) {
        res += pre.cnt
      }
    }

    if (!pre.word) {
      pre.word = w
      suf.word = w
    }

    pre.cnt++
    suf.cnt++

    return res
  }
}
