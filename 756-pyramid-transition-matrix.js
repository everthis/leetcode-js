/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
const pyramidTransition = function (bottom, allowed) {
  const m = new Map()
  for (let e of allowed) {
    const p = e.slice(0, 2)
    if (!m.has(p)) m.set(p, new Set())
    m.get(p).add(e[2])
  }
  return dfs(bottom, '', m, 0)
}

function dfs(row, next, m, i) {
  if (row.length === 1) return true
  if (next.length + 1 === row.length) return dfs(next, '', m, 0)
  for (let c of m.get(row.slice(i, i + 2)) || new Set())
    if (dfs(row, next + c, m, i + 1)) return true
  return false
}

