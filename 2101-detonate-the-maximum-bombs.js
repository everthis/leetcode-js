/**
 * @param {number[][]} bombs
 * @return {number}
 */
 const maximumDetonation = function(bombs) {
  let n = bombs.length, res = 1, graph = {}
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if (i === j) continue
      if (bombAdj(bombs[i], bombs[j])) {
        if (graph[i] == null) graph[i] = []
        graph[i].push(j)
      }
    }
  }
  function dfs(node, visited) {
    for(const next of (graph[node] || [])) {
      if(!visited.has(next)) {
        visited.add(next)
        dfs(next, visited)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    const set = new Set([i])
    dfs(i, set)
    res = Math.max(res, set.size)
  }

  return res
};

function bombAdj(source, target) {
  const [x1, y1, r1] = source
  const [x2, y2] = target
  const { abs } = Math
  return abs(x1 - x2) ** 2 + abs(y1 - y2) ** 2 <= r1 ** 2
}
