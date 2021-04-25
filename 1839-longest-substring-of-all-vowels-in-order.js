/**
 * @param {string} word
 * @return {number}
 */
function longestBeautifulSubstring(word) {
  let result = 0,
    current = 0
  let currentVowel = "a"
  const set = new Set()
  for (let i = 0; i < word.length; i++)
    if (word.charAt(i) < currentVowel) {
      set.clear()
      if (word.charAt(i) == "a") {
        set.add("a")
        current = 1
      } else current = 0
      currentVowel = "a"
    } else {
      current++
      currentVowel = word.charAt(i)
      set.add(currentVowel)
      if (set.size == 5) result = Math.max(result, current)
    }
  return result
}
