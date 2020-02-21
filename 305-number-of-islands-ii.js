/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
const numIslands2 = function(m, n, positions) {
  const result = []
  if (m <= 0 || n <= 0) return result
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  let count = 0
  const roots = new Array(m * n).fill(-1)
  for (let p of positions) {
    let root = n * p[0] + p[1]
    if (roots[root] !== -1) {
      result.push(count)
      continue
    }
    roots[root] = root
    count++
    for (let dir of dirs) {
      const x = p[0] + dir[0]
      const y = p[1] + dir[1]
      const nb = n * x + y
      if (x < 0 || x >= m || y < 0 || y >= n || roots[nb] === -1) continue
      const rootNb = findIsland(roots, nb)
      if (root !== rootNb) {
        roots[root] = rootNb
        root = rootNb
        count--
      }
    }
    result.push(count)
  }
  return result
}

function findIsland(roots, id) {
  while (id !== roots[id]) {
    roots[id] = roots[roots[id]]
    id = roots[id]
  }
  return id
}
