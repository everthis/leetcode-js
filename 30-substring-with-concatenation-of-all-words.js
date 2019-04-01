/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  if (words == null || words.length === 0 || !s) return []
  const wh = {}
  const slen = s.length
  const wl = words[0].length
  const len = words[0].length * words.length
  words.forEach(el => {
    if (wh[el]) wh[el]++
    else wh[el] = 1
  })
  const res = []
  for (let i = 0; i < slen - len + 1; i++) {
    if (chk(wh, s.slice(i, i + len), wl, words.length)) res.push(i)
  }
  return res
}

function chk(hash, str, wl, num) {
  const oh = {}
  for (let i = 0; i < num; i++) {
    let tmp = str.slice(i * wl, i * wl + wl)
    if (oh[tmp]) oh[tmp]++
    else oh[tmp] = 1
  }
  const keys = Object.keys(hash)
  for (let i = 0; i < keys.length; i++) {
    if (oh[keys[i]] !== hash[keys[i]]) return false
  }
  return true
}

// another

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  if (s === "" || words.length === 0) return []
  const wordMap = new Map()
  words.forEach(item => {
    if (wordMap.has(item)) {
      wordMap.set(item, wordMap.get(item) + 1)
    } else {
      wordMap.set(item, 1)
    }
  })
  const w = words[0].length
  const wlen = words.length
  const ans = []
  const n = s.length
  for (let i = 0; i < w; i++) {
    let left = i
    let count = 0
    let sMap = new Map()
    for (let j = i; j <= n - w; j += w) {
      let sub = s.substring(j, j + w)
      if (wordMap.has(sub)) {
        if (sMap.has(sub)) {
          sMap.set(sub, sMap.get(sub) + 1)
        } else {
          sMap.set(sub, 1)
        }
        if (sMap.get(sub) <= wordMap.get(sub)) {
          count++
        } else {
          while (sMap.get(sub) > wordMap.get(sub)) {
            let next = s.substring(left, left + w)
            sMap.set(next, sMap.get(next) - 1)
            if (sMap.get(next) < wordMap.get(next)) {
              count--
            }
            left += w
          }
        }
        if (count === wlen) {
          ans.push(left)
          let first = s.substring(left, left + w)
          sMap.set(first, sMap.get(first) - 1)
          left += w
          count--
        }
      } else {
        sMap.clear()
        count = 0
        left = j + w
      }
    }
  }
  return ans
}
