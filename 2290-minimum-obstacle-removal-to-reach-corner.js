/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  const m = grid.length, n = grid[0].length
  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity))
  const pq = new MinPriorityQueue({ priority: (x) => x[0] })
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  dist[0][0] = 0
  pq.enqueue([dist[0][0], 0, 0])
  while(pq.size()) {
    const [v, i, j] = pq.dequeue().element
    if(i === m - 1 && j === n - 1) return v
    for(const [dx, dy] of dirs) {
      const nx = i + dx, ny = j + dy
      if(nx >= 0 && nx < m && ny >= 0 && ny < n && v + grid[nx][ny] < dist[nx][ny]) {
        dist[nx][ny] = v + grid[nx][ny]
        pq.enqueue([dist[nx][ny], nx, ny])
      }
    }
  }
};
