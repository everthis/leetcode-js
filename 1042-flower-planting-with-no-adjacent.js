/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = function(N, paths) {
  const map = {};
  for (let i = 0; i < N; i++) {
    map[i] = [];
  }
  for (let path of paths) {
    let l = path[0] - 1;
    let r = path[1] - 1;
    map[l].push(r);
    map[r].push(l);
  }
  const result = new Array(N).fill(-1);
  for (let i = 0; i < N; i++) {
    let colors = new Array(4).fill(false);
    for (let neighbor of map[i]) {
      if (result[neighbor] !== -1) {
        colors[result[neighbor]] = true;
      }
    }
    for (let j = 0; j < colors.length; j++) {
      if (!colors[j]) {
        result[i] = j;
        break;
      }
    }
  }
  return result.map(i => ++i);
};
