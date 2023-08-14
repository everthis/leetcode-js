/**
 * @param {number[][]} grid
 * @return {number}
 */
const maximumSafenessFactor = function (grid) {
  const n = grid.length;
  const isInBound = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
  const dist = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
  const queue = [];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        dist[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const [r, c] = queue.shift();
    const neighbors = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];

    for (const [nr, nc] of neighbors) {
      if (isInBound(nr, nc) && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  const maxDistance = new Array(n).fill(0).map(() => new Array(n).fill(0));
  maxDistance[0][0] = dist[0][0];
  queue.push([0, 0]);

  while (queue.length) {
    const [r, c] = queue.shift();
    const neighbors = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];

    for (const [nr, nc] of neighbors) {
      if (isInBound(nr, nc)) {
        const newDistance = Math.min(maxDistance[r][c], dist[nr][nc]);
        if (newDistance > maxDistance[nr][nc]) {
          maxDistance[nr][nc] = newDistance;
          queue.push([nr, nc]);
        }
      }
    }
  }

  return maxDistance[n - 1][n - 1];    
}
