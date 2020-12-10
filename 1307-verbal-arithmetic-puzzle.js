/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
const isSolvable = function (words, result) {
  const _isSolvable = (wordIndex, charIndex, wordsSum, resultSum, num) => {
    if (wordIndex >= words.length) {
      return wordsSum === resultSum
    }
    const wordLen = words[wordIndex].length
    if (charIndex >= wordLen) {
      if (wordIndex === words.length - 1) {
        return _isSolvable(wordIndex + 1, 0, wordsSum, num, 0)
      }
      return _isSolvable(wordIndex + 1, 0, wordsSum + num, resultSum, 0)
    }
    const char = words[wordIndex][charIndex]
    if (map.get(char) !== undefined) {
      if (map.get(char) === 0 && num === 0 && charIndex >= 1) {
        return false
      }
      return _isSolvable(
        wordIndex,
        charIndex + 1,
        wordsSum,
        resultSum,
        num * 10 + map.get(char)
      )
    }
    for (let digit = 0; digit <= 9; digit++) {
      if (digit === 0 && num === 0 && wordLen > 1) continue
      if (map.get(digit) !== undefined) continue
      map.set(digit, char)
      map.set(char, digit)
      if (
        _isSolvable(
          wordIndex,
          charIndex + 1,
          wordsSum,
          resultSum,
          num * 10 + digit
        )
      ) {
        return true
      }
      map.set(digit, undefined)
      map.set(char, undefined)
    }
    return false
  }
  const map = new Map()
  words = [...words, result]
  return _isSolvable(0, 0, 0, 0, 0)
}
