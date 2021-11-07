/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
const maximalPathQuality = function(values, edges, maxTime) {
    let zeroMax = 0;
    let n = values.length;
    let ll = Array.from({length: n + 1}, () => [])
    for (let edge of edges) {
      let u = edge[0];
      let v = edge[1];
      let t = edge[2];
      ll[u].push([v, t]);
      ll[v].push([u, t]);
    }
    const visited = Array(n + 1).fill(false);
    dfs(0, 0, 0, maxTime, visited);
    return zeroMax;

    function dfs(val,  curNode,  curTime,  maxTime, visited) {
      if (curTime > maxTime) {
        return;
      }
      let before = visited[curNode];
      if (!visited[curNode]) {
        val += values[curNode];
        visited[curNode] = true;
      }
      if (curNode == 0) {
        zeroMax = Math.max(zeroMax, val);
      }
      for (let next of (ll[curNode] || [])) {
        dfs(val, next[0], curTime + next[1], maxTime, visited);
      }
      visited[curNode] = before;
    }
};
