/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
  const list = new Set(wordList)
  if (!list.has(endWord)) return 0
  let one = new Set([beginWord])
  let two = new Set([endWord])
  let step = 1
  while (one.size && two.size) {
    let temp = new Set()
    if (two.size < one.size) [one, two] = [two, one]
    for (const word of one) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const candidate =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1)
          if (two.has(candidate)) return step + 1
          if (!list.has(candidate)) continue
          temp.add(candidate)
          list.delete(candidate)
        }
      }
    }
    ;[one, temp] = [temp, one]
    step++
  }
  return 0
}
