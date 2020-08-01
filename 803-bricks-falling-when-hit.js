/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
const hitBricks = function (grid, hits) {
  const n = grid[0].length
  const m = hits.length
  const res = new Array(m).fill(0)
  for (const [r, c] of hits) {
    if (grid[r][c] == 1) grid[r][c] = 0
    else grid[r][c] = -1
  }
  for (let j = 0; j < n; j++) {
    getConnectedCount(grid, 0, j)
  }
  for (let i = m - 1; i >= 0; i--) {
    const [r, c] = hits[i]
    if (grid[r][c] == -1) continue
    grid[r][c] = 1
    if (isConnectedToTop(grid, r, c)) {
      res[i] = getConnectedCount(grid, r, c) - 1
    }
  }
  return res
}
const isConnectedToTop = (grid, i, j) => {
  if (i == 0) return true
  const dircs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (const [dx, dy] of dircs) {
    const nx = i + dx
    const ny = j + dy
    if (
      0 <= nx &&
      nx < grid.length &&
      0 <= ny &&
      ny < grid[0].length &&
      grid[nx][ny] == 2
    ) {
      return true
    }
  }
  return false
}

const getConnectedCount = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] != 1
  )
    return 0
  let count = 1
  grid[i][j] = 2
  count +=
    getConnectedCount(grid, i + 1, j) +
    getConnectedCount(grid, i - 1, j) +
    getConnectedCount(grid, i, j + 1) +
    getConnectedCount(grid, i, j - 1)
  return count
}

// another

/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
const hitBricks = function (grid, hits) {
  const SPACE = 0
  const BRICK = 1
  const WILL_HIT = 2
  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const rows = grid.length
  const cols = grid[0].length
  const ds = new DisjointSet(rows * cols + 1)

  for (const [hitR, hitC] of hits) {
    if (grid[hitR][hitC] === BRICK) {
      grid[hitR][hitC] = WILL_HIT
    }
  }

  function hash(r, c) {
    return r * cols + c + 1
  }

  function unionAround(r, c) {
    const hashed = hash(r, c)
    for (const [rDiff, cDiff] of DIRECTIONS) {
      const rNext = r + rDiff
      const cNext = c + cDiff
      if (grid[rNext] !== undefined && grid[rNext][cNext] === BRICK) {
        ds.union(hashed, hash(rNext, cNext))
      }
    }
    if (r === 0) ds.union(0, hashed)
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === BRICK) unionAround(i, j)
    }
  }
  let numBricksLeft = ds.size[ds.find(0)]
  const numBricksDropped = new Array(hits.length)
  // backwards
  for (let i = hits.length - 1; i >= 0; i--) {
    const [hitR, hitC] = hits[i]
    if (grid[hitR][hitC] === WILL_HIT) {
      grid[hitR][hitC] = BRICK
      unionAround(hitR, hitC)
      const newNumBricksLeft = ds.size[ds.find(0)]
      numBricksDropped[i] = Math.max(newNumBricksLeft - numBricksLeft - 1, 0)
      numBricksLeft = newNumBricksLeft
    } else {
      numBricksDropped[i] = 0
    }
  }
  return numBricksDropped
}

class DisjointSet {
  constructor(n) {
    this.size = new Array(n).fill(1)
    this.parent = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
    }
  }
  find(x) {
    if (x === this.parent[x]) return x
    this.parent[x] = this.find(this.parent[x])

    return this.parent[x]
  }
  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX !== rootY) {
      // attach X onto Y
      this.parent[rootX] = rootY
      this.size[rootY] += this.size[rootX]
    }
  }
}

