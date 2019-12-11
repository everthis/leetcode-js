/**

You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647
to represent INF as you may assume that the distance to a gate
is less than 2147483647.

Fill each empty room with the distance to its nearest gate.
If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4

*/

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const wallsAndGates = function(rooms) {
  const d = [0, 1, 0, -1, 0];
  const INF = 2147483647;
  if (rooms.length == 0) return;
  const m = rooms.length,
    n = rooms[0].length;
  const queue = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (rooms[i][j] == 0) queue.push(i * n + j);
    }
  }
  while (queue.length) {
    let x = queue.shift();
    let i = (x / n) >> 0,
      j = x % n;
    for (let k = 0; k < 4; k++) {
      let p = i + d[k],
        q = j + d[k + 1];
      if (0 <= p && p < m && 0 <= q && q < n && rooms[p][q] == INF) {
        rooms[p][q] = rooms[i][j] + 1;
        queue.push(p * n + q);
      }
    }
  }
};
