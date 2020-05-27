/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
  const visited = Array(graph.length).fill(0);
  for (let i = 0; i < graph.length; i++) {
    if (visited[i] !== 0) {
      continue;
    }
    const queue = [];
    queue.push(i);
    visited[i] = 1;
    while (queue.length > 0) {
      const index = queue.shift();
      for (let j = 0; j < graph[index].length; j++) {
        const temp = graph[index][j];
        if (visited[temp] === 0) {
          visited[temp] = visited[index] * -1;
          queue.push(temp);
        } else {
          if (visited[temp] === visited[index]) return false;
        }
      }
    }
  }
  return true;
};
