/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
const stringIndices = function (wordsContainer, wordsQuery) {
  const root = new TrieNode()
  const arr = []
  for (let i = 0; i < wordsContainer.length; i++) {
    arr.push({ word: wordsContainer[i], index: i })
  }
  arr.sort((a, b) => {
    if (a.word.length !== b.word.length) return a.word.length - b.word.length
    else return a.index - b.index
  })
  for (let i = arr.length - 1; i >= 0; i--) {
    let node = root
    const s = arr[i].word
    for (let j = s.length - 1; j >= 0; j--) {
      const charIndex = s[j].charCodeAt(0) - 'a'.charCodeAt(0)
      if (node.next[charIndex] === null) {
        node.next[charIndex] = new TrieNode()
      }
      node = node.next[charIndex]
      node.idx = arr[i].index
    }
  }
  root.idx = arr[0].index
  const res = []
  for (const query of wordsQuery) {
    let node = root
    let ans = -1
    for (let i = query.length - 1; i >= 0; i--) {
      const charIndex = query[i].charCodeAt(0) - 'a'.charCodeAt(0)
      if (node.next[charIndex] !== null) {
        node = node.next[charIndex]
      } else {
        break
      }
    }

    ans = node.idx

    res.push(ans)
  }
  return res
}

class TrieNode {
  constructor() {
    this.next = new Array(26).fill(null)
    this.idx = -1
  }
}
