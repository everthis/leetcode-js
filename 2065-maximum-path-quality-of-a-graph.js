/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
const maximalPathQuality = function(values, edges, maxTime) {
  const graph = {}, n = values.length
  for(const [u, v, t] of edges) {
    if(graph[u] == null) graph[u] = []
    if(graph[v] == null) graph[v] = []
    graph[u].push([v, t])
    graph[v].push([u, t])
  }
  let res = 0, visited = new Array(n).fill(0)
  visited[0] = 1
  bt(0, values[0], 0)
  return res

  function bt(i, val, time) {
    if(time > maxTime) return
    if(i === 0) res = Math.max(res, val)
    
    for(const [next, nextTime] of (graph[i] || [])) {
      const nextVal = visited[next] > 0 ? val : val + values[next]
      visited[next]++
      bt(next, nextVal, time + nextTime)
      visited[next]--
    }
  }
};

// another


/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
const maximalPathQuality = function(values, edges, maxTime) {
  const graph = {}, n = values.length
  for(const [u, v, t] of edges) {
    if(graph[u] == null) graph[u] = []
    if(graph[v] == null) graph[v] = []
    graph[u].push([v, t])
    graph[v].push([u, t])
  }
  let res = 0, visited = Array(n).fill(false)
  bt(0, 0, 0)
  return res

  function bt(i, cur, time) {
    if(time > maxTime) return
    const backup = visited[i]
    if(!visited[i]) {
      visited[i] = true
      cur += values[i]
    }

    if(i === 0) {
      res = Math.max(res, cur)
    }

    for(const [next, nextTime] of (graph[i] || [])) {
      bt(next, cur, time + nextTime)
    }
    visited[i] = backup
  }
};

// another

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
