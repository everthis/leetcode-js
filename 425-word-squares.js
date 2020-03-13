/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = function(words) {
  const length = words[0].length
  const createPrefixMap = function(words) {
    const result = new Map()
    for (let word of words) {
      for (let i = 0; i < word.length - 1; ++i) {
        const prefix = word.slice(0, i + 1)
        const array = result.get(prefix)
        if (array) {
          array.push(word)
        } else {
          result.set(prefix, [word])
        }
      }
    }
    return result
  }
  const backtracking = function(step, result, martix, wordsList) {
    if (step === length) {
      result.push([...martix])
      return
    }
    for (let word of wordsList) {
      martix.push(word)
      let prefix = ''
      for (let i = 0; i < step + 1; ++i) {
        prefix += martix[i][step + 1]
      }
      let newLists = dictMap.get(prefix)
      newLists = newLists ? newLists : []
      backtracking(step + 1, result, martix, newLists)
      martix.pop()
    }
  }
  const result = []
  const dictMap = createPrefixMap(words)
  backtracking(0, result, [], words)
  return result
}
