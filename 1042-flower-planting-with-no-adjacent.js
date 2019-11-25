/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = function(N, paths) {
  let map = {};
  for (let i = 0; i < N; i++) {
    map[i] = [];
  }

  for (let path of paths) {
    let lhs = path[0] - 1;
    let rhs = path[1] - 1;
    map[lhs].push(rhs);
    map[rhs].push(lhs);
  }

  let result = new Array(N).fill(-1);
  for (let i = 0; i < N; i++) {
    let colors = new Array(4).fill(false);
    for (let neighbor of map[i]) {
      if (result[neighbor] !== -1) {
        colors[result[neighbor] - 1] = true;
      }
    }
    for (let j = 0; j < colors.length; j++) {
      if (!colors[j]) {
        result[i] = j + 1;
        break;
      }
    }
  }

  return result;
};
