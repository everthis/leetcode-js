/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
const findMinStep = function(board, hand) {
  const map = {}
  for (let c of hand) map[c] = (map[c] || 0) + 1
  const res = helper(board, map)
  return res === Number.MAX_VALUE ? -1 : res
}

function helper(s, m) {
  const str = reduce(s)
  if (str.length === 0) return 0
  let res = Number.MAX_VALUE
  let i = 0
  while (i < str.length) {
    const beg = i
    while (i < str.length && str[i] === str[beg]) {
      i++
    }
    if (m[str[beg]] >= 3 - (i - beg)) {
      const dval = 3 - i + beg
      m[str[beg]] -= dval
      const tmp = helper(s.slice(0, beg) + s.slice(i), m)
      m[str[beg]] += dval
      if (tmp !== Number.MAX_VALUE) res = res < tmp + dval ? res : tmp + dval
    }
  }
  return res
}
function reduce(str) {
  let res = ''
  let i = 0
  while (i < str.length) {
    const beg = i
    while (i < str.length && str[beg] === str[i]) {
      i++
    }
    if (i - beg >= 3) {
      return reduce(str.slice(0, beg) + str.slice(i))
    }
  }
  return str
}
