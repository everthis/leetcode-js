/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringTwoDistinct = function(s) {
  const map = new Map()
  let start = 0,
    end = 0,
    counter = 0,
    len = 0
  while (end < s.length) {
    let c = s.charAt(end)
    map.set(c, (map.get(c) || 0) + 1)
    if (map.get(c) === 1) counter++
    end++
    while (counter > 2) {
      let cTemp = s.charAt(start)
      map.set(cTemp, map.get(cTemp) - 1)
      if (map.get(cTemp) === 0) {
        counter--
      }
      start++
    }
    len = Math.max(len, end - start)
  }
  return len
}
