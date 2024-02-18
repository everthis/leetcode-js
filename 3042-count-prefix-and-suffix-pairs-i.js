/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let count = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let str1 = words[i]
      let str2 = words[j]
      if (isPrefixAndSuffix(str1, str2)) {
        count++
      }
    }
  }
  return count
  function isPrefixAndSuffix(s1, s2) {
    if (s2.startsWith(s1) && s2.endsWith(s1)) {
      return true
    }
    return false
  }
}
