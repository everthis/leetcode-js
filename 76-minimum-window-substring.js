/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  const map = {}
  for (const c of t) {
    map[c] = (map[c] || 0) + 1
  }
  let counter = t.length
  let start = 0
  let end = 0
  let minLen = Infinity
  let minStart = 0
  while (end < s.length) {
    const eChar = s[end]
    if (map[eChar] > 0) {
      counter--
    }
    map[eChar] = (map[eChar] || 0) - 1
    end++
    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start
        minLen = end - start
      }
      const sChar = s[start]
      map[sChar] = (map[sChar] || 0) + 1
      if (map[sChar] > 0) {
        counter++
      }
      start++
    }
  }
  if (minLen !== Infinity) {
    return s.substring(minStart, minStart + minLen)
  }
  return ''
}
