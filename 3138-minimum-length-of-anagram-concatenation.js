/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  const n = s.length

  function checkI(k) {
    const set = new Set()
    for (let i = 0; i < n; i += k) {
      const sub = s
        .substring(i, i + k)
        .split('')
        .sort()
        .join('')
      set.add(sub)
      if (set.size > 1) return false
    }
    return true
  }

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (checkI(i)) {
        return i
      }
    }
  }

  return s.length
}
