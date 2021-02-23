/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
const highestPeak = function(isWater) {
  let q = []
  const visited = new Set()
  const m = isWater.length, n = isWater[0].length
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(isWater[i][j] === 1) {
          q.push([i, j, 0])
          visited.add(`${i},${j}`)
      }
    }
  }
  const res = Array.from({ length: m }, () => Array(n).fill(0))
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  
  while(q.length) {
    const size = q.length
    const next = []
    // Array.shift time complexity: O(n)
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      const [row, col, val] = cur
      for(let dir of dirs) {
        const newRow = row + dir[0], newCol = col + dir[1]
        const key = `${newRow},${newCol}`
        if(newRow < 0 || newRow >= m || newCol < 0 || newCol >= n || visited.has(key) || res[newRow][newCol] !== 0) continue
        next.push([newRow, newCol, val + 1])
        res[newRow][newCol] = val + 1
        visited.add(key)
      }
    }
    q = next

  }
  return res
};
