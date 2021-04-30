/**
 * @param {string} word
 * @return {number}
 */
function longestBeautifulSubstring(word) {
  let res = 0, cur = 'a', cnt = 0
  const set = new Set()
  for(let ch of word) {
    if(ch < cur) {
      set.clear()
      cnt = 0
      cur = 'a'
      if(ch === cur) {
        cnt++
        set.add(cur)
      }
    } else {
      cnt++
      set.add(ch)
      cur = ch
      if(set.size === 5) res = Math.max(res, cnt)
    }
  }
  return res
}

// another

/**
 * @param {string} word
 * @return {number}
 */
function longestBeautifulSubstring(word) {
  let res = 0, cur = 'a', cnt = 0
  const set = new Set()
  for (let ch of word) {
    if (ch >= cur) {
      cnt++
      cur = ch
      set.add(ch)
    } else {
      set.clear()
      cnt = 0
      cur = 'a'
      if(ch === cur) {
        set.add(ch)
        cnt++
      }
    }
    if (set.size === 5) {
      res = Math.max(res, cnt)
    }
  }

  return res
}

// another

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
