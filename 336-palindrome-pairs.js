const reverseStr = s => {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    str = s[i] + str
  }
  return str
}
const isPalindrome = str => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}
/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function(words) {
  const map = new Map()
  words.forEach((word, idx) => map.set(word, idx))
  const result = []
  if (map.has('')) {
    const idx = map.get('')
    words.forEach((word, i) => {
      if (i !== idx && isPalindrome(word)) {
        result.push([idx, map.get(word)])
        result.push([map.get(word), idx])
      }
    })
  }
  map.delete('')
  words.forEach((word, idx) => {
    for (let i = 0; i < word.length; i++) {
      const left = word.slice(0, i)
      const right = word.slice(i)
      if (isPalindrome(left)) {
        const reversedRight = reverseStr(right)
        if (map.has(reversedRight) && map.get(reversedRight) !== idx) {
          result.push([map.get(reversedRight), idx])
        }
      }
      if (isPalindrome(right)) {
        const reversedLeft = reverseStr(left)
        if (map.has(reversedLeft) && map.get(reversedLeft) !== idx) {
          result.push([idx, map.get(reversedLeft)])
        }
      }
    }
  })
  return result
}
