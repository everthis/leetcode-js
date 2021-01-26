/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumMoves = function (grid) {
  const n = grid.length;
  const start = [0, 0, 0, 1].join(',');
  const end = [n - 1, n - 2, n - 1, n - 1].join(",");
  let curr_level = new Set([start]);
  let moves = 0;
  const visited = new Set();
  while (curr_level.size) {
    const next_level = new Set();
    for (let pos of curr_level) {
      visited.add(pos);
      let [r1, c1, r2, c2] = pos.split(",").map((e) => +e);
      if (
        c1 + 1 < n &&
        grid[r1][c1 + 1] == 0 &&
        c2 + 1 < n &&
        grid[r2][c2 + 1] == 0
      ) {
        const coord = [r1, c1 + 1, r2, c2 + 1].join(",");
        if (!visited.has(coord)) {
          next_level.add(coord);
        }
      }
      if (
        r1 + 1 < n &&
        grid[r1 + 1][c1] == 0 &&
        r2 + 1 < n &&
        grid[r2 + 1][c2] == 0
      ) {
        const coord = [r1 + 1, c1, r2 + 1, c2].join(",");
        if (!visited.has(coord)) {
          next_level.add(coord);
        }
      }
      if (
        r1 == r2 &&
        c2 == c1 + 1 &&
        r1 + 1 < n &&
        grid[r1 + 1][c1] + grid[r1 + 1][c1 + 1] == 0
      ) {
        const coord = [r1, c1, r1 + 1, c1].join(",");
        if (!visited.has(coord)) {
          next_level.add(coord);
        }
      }
      if (
        c1 == c2 &&
        r2 == r1 + 1 &&
        c1 + 1 < n &&
        grid[r1][c1 + 1] + grid[r1 + 1][c1 + 1] == 0
      ) {
        const coord = [r1, c1, r1, c1 + 1].join(",");
        if (!visited.has(coord)) {
          next_level.add(coord);
        }
      }
    }
    if (next_level.has(end)) {
      return moves + 1;
    }
    curr_level = next_level;
    moves += 1;
  }
  return -1;
};
