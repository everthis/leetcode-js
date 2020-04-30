/**
 * @param {number[][]} grid
 * @return {number}
 */
const containVirus = function (grid) {
  let ans = 0
  while (true) {
    const walls = model(grid)
    if (walls === 0) break
    ans += walls
  }
  return ans
  function model(grid) {
    const m = grid.length,
      n = grid[0].length
    const virus = [],
      toInfect = []
    const visited = Array.from({ length: m }, () => Array(n).fill(0))
    const walls = []
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && visited[i][j] === 0) {
          virus.push(new Set())
          toInfect.push(new Set())
          walls.push([0])
          dfs(
            grid,
            visited,
            virus[virus.length - 1],
            toInfect[toInfect.length - 1],
            walls[walls.length - 1],
            i,
            j
          )
        }
      }
    }
    let maxArea = 0,
      idx = -1
    for (let i = 0; i < toInfect.length; i++) {
      if (toInfect[i].size > maxArea) {
        maxArea = toInfect[i].size
        idx = i
      }
    }
    if (idx === -1) return 0
    for (let i = 0; i < toInfect.length; i++) {
      if (i !== idx) {
        for (let key of toInfect[i]) grid[(key / n) >> 0][key % n] = 1
      } else {
        for (let key of virus[i]) grid[(key / n) >> 0][key % n] = -1
      }
    }
    return walls[idx][0]
  }
  function dfs(grid, visited, virus, toInfect, wall, row, col) {
    const m = grid.length,
      n = grid[0].length
    if (row < 0 || row >= m || col < 0 || col >= n || visited[row][col] === 1)
      return
    if (grid[row][col] === 1) {
      visited[row][col] = 1
      virus.add(row * n + col)
      const dir = [0, -1, 0, 1, 0]
      for (let i = 0; i < 4; i++)
        dfs(
          grid,
          visited,
          virus,
          toInfect,
          wall,
          row + dir[i],
          col + dir[i + 1]
        )
    } else if (grid[row][col] === 0) {
      wall[0]++
      toInfect.add(row * n + col)
    }
  }
}

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const containVirus = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  while (true) {
    // list of regions can spread virus
    const regions = [];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) {
          const region = new Region();
          dfs(grid, i, j, region, visited);
          if (region.uninfected.size > 0) regions.push(region);
        }
      }
    }

    if (regions.length === 0) break;
    regions.sort((a, b) => a.uninfected.size - b.uninfected.size);
    let idx = -1, wall = -Infinity
    for(let i = 0, len = regions.length; i < len; i++) {
      if(regions[i].uninfected.size > wall) {
        wall = regions[i].uninfected.size
        idx = i
      }
    }
    const mostToBeInfected = regions[idx]
    ans += mostToBeInfected.wallNeeded
    regions.splice(idx, 1)
    for (let x of mostToBeInfected.infected) {
      let i = (x / n) >> 0,
        j = x % n;
      grid[i][j] = 2;
    }

    for (let region of regions) {
      for (let x of region.uninfected) {
        let i = (x / n) >> 0,
          j = x % n;
        grid[i][j] = 1;
      }
    }
  }

  return ans;
  function dfs(grid, i, j, region, visited) {
    if (i < 0 || i == m || j < 0 || j == n) return;
  
    if (grid[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      region.infected.add(i * n + j);
      dfs(grid, i - 1, j, region, visited);
      dfs(grid, i + 1, j, region, visited);
      dfs(grid, i, j - 1, region, visited);
      dfs(grid, i, j + 1, region, visited);
    } else if (grid[i][j] === 0) {
      region.wallNeeded += 1;
      region.uninfected.add(i * n + j);
    }
  }
};
class Region {
  constructor() {
    this.wallNeeded = 0;
    this.infected = new Set();
    this.uninfected = new Set();
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
