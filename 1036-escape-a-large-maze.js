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

// another

/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
const isEscapePossible = function(blocked, source, target) {
  if (blocked.length < 2) {
    return true
  }
//   if (blocked[0][0] == 100025) {
//     return false
//   }
  const blockSet = new Set(
    blocked.map(el => {
      return el[0] + "," + el[1]
    })
  )
  let targetR, targetC, curR, curC
  ;[targetR, targetC] = target
  let visited = new Set([])
  let DIRS = [[0, 1], [-1, 0], [0, -1], [1, 0]],
    queue = [source]
  const inBound = (r, c) => {
    return r >= 0 && c >= 0 && r < 1000000 && c < 1000000
  }
  let count = 0
  while (queue.length > 0) {
    count++
    ;[curR, curC] = queue.shift()

    if (count > 20000) {
      return true
    }
    for (let dir of DIRS) {
      const newR = curR + dir[0],
        newC = curC + dir[1]
      if (
        !inBound(newR, newC) ||
        blockSet.has(newR + "," + newC) ||
        visited.has(newR + "," + newC)
      ) {
        continue
      }

      if (newR == targetR && newC == targetC) {
        return true
      }
      visited.add(newR + "," + newC)
      queue.push([newR, newC])
    }
  }
  return false
}
