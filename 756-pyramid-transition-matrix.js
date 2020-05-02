/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
const pyramidTransition = function (bottom, allowed) {
  const map = new Map()
  allowed.map((item) => {
    const t = map.get(item[0] + item[1]) || new Array()
    t.push(item[2])
    map.set(item[0] + item[1], t)
  })
  const memo = new Map()
  const solve = function (cur, ind, next) {
    if (memo.has(cur)) return memo.get(cur)
    if (cur.length === 1) return true
    if (ind >= cur.length - 1) {
      const res = solve(next, 0, '')
      memo.set(next, res)
      return res
    }
    if (!map.has(cur.slice(ind, ind + 2))) {
      memo.set(cur, false)
      return false
    }
    for (let char of map.get(cur.slice(ind, ind + 2))) {
      if (solve(cur, ind + 1, next + char)) return true
    }
    return false
  }
  return solve(bottom, 0, '')
}
