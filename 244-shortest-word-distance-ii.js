/**
 * @param {string[]} words
 */
const WordDistance = function(words) {
  this.wordMap = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (!this.wordMap[word]) this.wordMap[word] = []
    this.wordMap[word].push(i)
  }
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let min = Infinity
  const iList = this.wordMap[word1]
  const jList = this.wordMap[word2]
  for (let i = 0, j = 0; i < iList.length && j < jList.length; ) {
    min = Math.min(min, Math.abs(iList[i] - jList[j]))
    if (iList[i] < jList[j]) {
      i++
    } else {
      j++
    }
  }
  return min
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
