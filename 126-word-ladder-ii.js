/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = function (beginWord, endWord, wordList) {
  const res = []
  if (!wordList.includes(endWord)) return res
  const set1 = new Set([beginWord]),
    set2 = new Set([endWord]),
    wordSet = new Set(wordList),
    temp = [beginWord]
  const map = new Map()
  const traverse = (set1, set2, dir) => {
    if (set1.size === 0) return false
    if (set1.size > set2.size) return traverse(set2, set1, !dir)
    for (const val of set1.values()) {
      if (wordSet.has(val)) wordSet.delete(val)
    }
    for (const val of set2.values()) {
      if (wordSet.has(val)) wordSet.delete(val)
    }
    const set = new Set()
    let done = false
    for (const str of set1.values()) {
      for (let i = 0; i < str.length; i++) {
        for (let ch = 'a'.charCodeAt(); ch <= 'z'.charCodeAt(); ch++) {
          const word =
            str.slice(0, i) + String.fromCharCode(ch) + str.slice(i + 1)
          const key = dir ? str : word
          const val = dir ? word : str
          const list = map.get(key) || []
          if (set2.has(word)) {
            done = true
            list.push(val)
            map.set(key, list)
          }
          if (!done && wordSet.has(word)) {
            set.add(word)
            list.push(val)
            map.set(key, list)
          }
        }
      }
    }
    return done || traverse(set2, set, !dir)
  }
  const dfs = (word) => {
    if (word === endWord) {
      res.push(temp.slice())
      return
    }
    const nei = map.get(word) || []
    for (const w of nei) {
      temp.push(w)
      dfs(w)
      temp.pop()
    }
  }
  traverse(set1, set2, true)
  dfs(beginWord)
  return res
}
