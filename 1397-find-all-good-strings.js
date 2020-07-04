/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
const findGoodStrings = function (n, s1, s2, evil) {
  const evilLen = evil.length
  const mod = 1000000007
  const kmp = buildKmpArray(evil)
  const cache = {}
  const cnt = (sIdx, evilIdx, isPrefixOf1, isPrefixOf2) => {
    if (evilIdx === evilLen) return 0
    if (sIdx === n) return 1
    const key = [sIdx, evilIdx, isPrefixOf1, isPrefixOf2].join('-')
    if (cache.hasOwnProperty(key)) return cache[key]
    let total = 0
    let first = isPrefixOf1 ? s1.charCodeAt(sIdx) : 97 // a;
    let last = isPrefixOf2 ? s2.charCodeAt(sIdx) : 122 // z;
    for (let i = first; i <= last; i++) {
      const char = String.fromCharCode(i)
      const isPre1 = isPrefixOf1 && i === first
      const isPre2 = isPrefixOf2 && i === last
      let evilPrefix = evilIdx
      while (evilPrefix && char !== evil[evilPrefix]) {
        evilPrefix = kmp[evilPrefix - 1]
      }
      if (char === evil[evilPrefix]) {
        evilPrefix += 1
      }
      total += cnt(sIdx + 1, evilPrefix, isPre1, isPre2)
    }
    return (cache[key] = total % mod)
  }
  return cnt(0, 0, true, true)
}

function buildKmpArray(str) {
  const result = new Array(str.length).fill(0)
  let j = 0
  for (let i = 1; i < str.length; i++) {
    while (j && str[j] !== str[i]) {
      j = result[j - 1]
    }
    if (str[i] === str[j]) {
      j += 1
    }
    result[i] = j
  }
  return result
}
