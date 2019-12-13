/**

Given a non-empty 2D array grid of 0's and 1's,
an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands. An island is considered to
be the same as another if and only if one island can
be translated (and not rotated or reflected) to equal the other.

Example 1:
11000
11000
00011
00011

Given the above grid map, return 1.

Example 2:
11011
10000
00001
11011

Given the above grid map, return 3.

Notice that:
11
1
and
 1
11
are considered different island shapes, because we do not consider reflection / rotation.
Note: The length of each dimension in the given grid does not exceed 50.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numDistinctIslands = function(grid) {
  if (!grid.length) return 0;
  const pattern = new Set();
  grid.forEach((rows, row) => {
    rows.forEach((val, col) => {
      if (val === 1) pattern.add(depthFirst(grid, row, col, "o"));
    });
  });
  return pattern.size;
};

function depthFirst(graph, row, col, di) {
  if (graph[row] && graph[row][col]) {
    graph[row][col] = 0;
    let p =
      di +
      depthFirst(graph, row + 1, col, "d") +
      depthFirst(graph, row - 1, col, "u") +
      depthFirst(graph, row, col + 1, "r") +
      depthFirst(graph, row, col - 1, "l") +
      "b";
    return p;
  } else return "";
}
