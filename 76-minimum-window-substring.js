/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const a = 'a'.charCodeAt(0)
  const A = 'A'.charCodeAt(0)
  const arr = new Array(52).fill(0)
  const n = s.length
  const idx = (ch) => {
    const code = ch.charCodeAt(0)
    return code - (code >= a ? a : A) + (code >= a ? 26 : 0)
  }
  for (const ch of t) {
    arr[idx(ch)]++
  }
  let l = 0, r = 0
  let res = ''
  while(r < n) {
    const i = idx(s[r])
    arr[i]--
    while(l < r && arr[idx(s[l])] < 0) {
        arr[idx(s[l])]++
        l++
    }
    const tmp = s.slice(l, r + 1)
    if(arr.every(x => x <= 0) && (res === '' || tmp.length < res.length)) {
      res = tmp
    }
    r++
  }

  return res
};

// another

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
