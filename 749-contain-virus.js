/**
 * @param {number[][]} grid
 * @return {number}
 */
const containVirus = function (grid) {
  const R = grid.length
  const C = grid[0].length
  let ans = 0
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  while (true) {
    let walls = process(grid)
    ans += walls
    if (walls === 0) break
  }
  return ans
  function process(grid) {
    let maxArea = 0,
      ans = 0,
      color = -1,
      row = -1,
      col = -1
    // visited virus as 1, visited 0 using different color to indicate being affected by different virus

    let visited = Array.from({ length: R }, () => Array(C).fill(0))

    // find the max zero area.
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (grid[i][j] === 1 && visited[i][j] === 0) {
          const walls = [0]
          const area = dfs(grid, visited, i, j, color, walls)
          if (area > maxArea) {
            maxArea = area
            ans = walls[0]
            row = i
            col = j
          }
          color-- // different islands using different color
        }
      }
    }

    removeIsland(grid, row, col)
    // spread by one step
    visited = Array.from({ length: R }, () => Array(C).fill(0))
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (grid[i][j] === 1 && visited[i][j] === 0) {
          spread(grid, visited, i, j)
        }
      }
    }
    return ans
  }
  function dfs(grid, visited, r, c, color, walls) {
    if (r < 0 || r > R - 1 || c < 0 || c > C - 1) return 0
    if (grid[r][c] === 0) {
      walls[0]++
      if (visited[r][c] === color) return 0
      visited[r][c] = color
      return 1
    }
    if (visited[r][c] === 1 || grid[r][c] !== 1) return 0
    visited[r][c] = 1
    let ans = 0
    for (let dir of dirs) {
      const x = r + dir[0]
      const y = c + dir[1]
      ans += dfs(grid, visited, x, y, color, walls)
    }
    return ans
  }

  function removeIsland(grid, r, c) {
    if (r < 0 || r > R - 1 || c < 0 || c > C - 1 || grid[r][c] !== 1) return
    grid[r][c] = -1
    for (let dir of dirs) {
      const x = r + dir[0]
      const y = c + dir[1]
      removeIsland(grid, x, y)
    }
  }

  function spread(grid, visited, r, c) {
    if (r < 0 || r > R - 1 || c < 0 || c > C - 1 || visited[r][c] === 1) return
    if (grid[r][c] === -1) return
    visited[r][c] = 1
    if (grid[r][c] === 0) {
      grid[r][c] = 1
      return
    }
    for (let dir of dirs) {
      const x = r + dir[0]
      const y = c + dir[1]
      spread(grid, visited, x, y)
    }
  }
}

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const containVirus = function (grid) {
  const infected = 1
  const healthy = 0
  const quarantined = 2
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const mod = 100
  const encode = (row, col) => row + col * mod
  const decode = (num) => [num % mod, Math.floor(num / mod)]
  const disjointSet = {}
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const coord = encode(row, col)
      disjointSet[coord] = coord
      if (grid[row][col] === 0) continue
      if (grid[row][col - 1] === 1) union(coord, encode(row, col - 1))
      if (row > 0 && grid[row - 1][col] === 1)
        union(coord, encode(row - 1, col))
    }
  }
  let numWalls = 0
  while (true) {
    const impact = quarantineAndContaminate()
    if (impact === 0) return numWalls
    numWalls += impact
    spreadVirus()
  }
  function find(coord) {
    return (disjointSet[coord] =
      disjointSet[coord] === coord ? coord : find(disjointSet[coord]))
  }
  function union(coord, toCoord) {
    return (disjointSet[find(coord)] = find(toCoord))
  }
  function quarantineAndContaminate() {
    const impact = new Map()
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] !== infected) continue
        const root = find(encode(row, col))
        if (!impact.has(root)) impact.set(root, new Set())
        for (let [down, right] of directions) {
          if (grid[row + down] && grid[row + down][col + right] === healthy) {
            impact.get(root).add(encode(row + down, col + right))
          }
        }
      }
    }
    let impactedCoords = new Set()
    let root = null
    for (let [node, coords] of impact) {
      if (impactedCoords.size < coords.size) {
        impactedCoords = coords
        root = node
      }
    }
    if (impactedCoords.size === 0) return 0
    return quarantine(...decode(root))
  }
  function quarantine(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return 0
    if (grid[row][col] === 2) return 0
    if (grid[row][col] === 0) return 1
    let totalWalls = 0
    grid[row][col] = 2
    for (let [down, right] of directions) {
      totalWalls += quarantine(row + down, col + right)
    }
    return totalWalls
  }
  function spreadVirus() {
    const infectedCoords = new Set()
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] !== healthy) continue
        for (let [down, right] of directions) {
          if (grid[row + down] && grid[row + down][col + right] === infected) {
            infectedCoords.add(encode(row, col))
          }
        }
      }
    }
    for (let coord of infectedCoords) {
      const [row, col] = decode(coord)
      grid[row][col] = 1
      for (let [down, right] of directions) {
        if (grid[row + down] && grid[row + down][col + right] === 1) {
          union(coord, encode(row + down, col + right))
        }
      }
    }
  }
}
