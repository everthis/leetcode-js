/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var isPossibleToRearrange = function (s, t, k) {
  const d = Math.floor(s.length / k)
  if (s === t) return true
  const map = new Map()

  for (let i = 0; i < s.length; i += d) {
    const req = s.substring(i, i + d)
    if (map.has(req)) {
      map.set(req, map.get(req) + 1)
    } else {
      map.set(req, 1)
    }
  }

  for (let i = 0; i < t.length; i += d) {
    const tar = t.substring(i, i + d)
    if (!map.has(tar)) return false
    else if (map.get(tar) < 1) return false
    else {
      map.set(tar, map.get(tar) - 1)
    }
  }

  return true
}
