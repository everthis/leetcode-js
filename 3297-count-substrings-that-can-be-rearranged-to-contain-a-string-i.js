/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  const mp1 = new Array(26).fill(0)
  const mp2 = new Array(26).fill(0)
  let missing = 0

  for (const c of word2) {
    mp1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < 26; i++) {
    if (mp1[i] > 0) {
      missing += mp1[i]
    }
  }

  let res = 0
  let left = 0
  const n = word1.length

  for (let right = 0; right < n; right++) {
    const c = word1[right].charCodeAt(0) - 'a'.charCodeAt(0)
    mp2[c]++
    if (mp1[c] > 0 && mp2[c] <= mp1[c]) {
      missing--
    }

    while (missing === 0) {
      res += n - right
      const left_char = word1[left].charCodeAt(0) - 'a'.charCodeAt(0)
      if (mp1[left_char] > 0 && mp2[left_char] <= mp1[left_char]) {
        missing++
      }
      mp2[left_char]--
      left++
    }
  }

  return res
}
