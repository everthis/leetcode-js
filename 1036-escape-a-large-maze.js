/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
const isEscapePossible = function(blocked, source, target) {
  const blockedSet = new Set()
  for (let el of blocked) {
    let key = el[0] + "," + el[1]
    blockedSet.add(key)
  }
  return canVisit(blockedSet, source, target) && canVisit(blockedSet, target, source)
}

function canVisit(blocked, start, end) {
  const visited = new Set()
  return dfs(blocked, start[0], start[1], end[0], end[1], visited)
}
function dfs(blocked, i, j, m, n, visited) {
  visited.add(i + "," + j)
  const dirs = [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]]
  if ((i == m && j == n) || visited.size >= 20000) {
    return true
  }
  for (let dir of dirs) {
    let nextKey = dir[0] + "," + dir[1]
    if (
      dir[0] >= 0 &&
      dir[1] >= 0 &&
      dir[0] < 1e6 &&
      dir[1] < 1e6 &&
      !blocked.has(nextKey) &&
      !visited.has(nextKey)
    ) {
      if (dfs(blocked, dir[0], dir[1], m, n, visited)) {
        return true
      }
    }
  }
  return false
}
