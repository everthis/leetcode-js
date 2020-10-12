/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const countSubgraphsForEachDiameter = function (n, edges) {
  const graph = {};
  for (let [u, v] of edges) {
    if (!graph[u - 1]) graph[u - 1] = [];
    if (!graph[v - 1]) graph[v - 1] = [];
    graph[u - 1].push(v - 1);
    graph[v - 1].push(u - 1);
  }
  let ans = Array(n - 1).fill(0);
  for (let i = 1, len = 2 ** n; i < len; i++) {
    const d = maxDistance(i);
    if (d > 0) ans[d - 1] += 1;
  }
  return ans;
  function bfs(src, cities) {
    const visited = new Set();
    visited.add(src);
    const q = [[src, 0]]; // Pair of (vertex, distance)
    let farthestDist = 0; // Farthest distance from src to other nodes
    while (q.length > 0) {
      const [u, d] = q.shift();
      farthestDist = d;
      for (let v of graph[u]) {
        if (!visited.has(v) && cities.has(v)) {
          visited.add(v);
          q.push([v, d + 1]);
        }
      }
    }
    return [farthestDist, visited];
  }
  function maxDistance(state) {
    // return: maximum distance between any two cities in our subset. O(n^2)
    const cities = new Set();
    for (let i = 0; i < n; i++) {
      if ((state >> i) & (1 === 1)) cities.add(i);
    }
    let ans = 0;
    for (let i of cities) {
      const [farthestDist, visited] = bfs(i, cities);
      if (visited.size < cities.size) return 0; // Can't visit all nodes of the tree -> Invalid tree
      ans = Math.max(ans, farthestDist);
    }
    return ans;
  }
};
