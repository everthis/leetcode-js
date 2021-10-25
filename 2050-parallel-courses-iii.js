/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function(n, relations, time) {
  const graph = {}, dist = Array(n).fill(0), inDegree = Array(n).fill(0)
  for(let [from, to] of relations) {
    from--, to--
    if (graph[from] == null) graph[from] = []
    graph[from].push(to)
    inDegree[to]++
  }
  const q = []
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) {
      q.push(i)
      dist[i] = time[i]
    }
  }

  while(q.length) {
    const u = q.shift()
    for(const v of (graph[u] || [])) {
      dist[v] = Math.max(dist[v], dist[u] + time[v])
      if(--inDegree[v] === 0) q.push(v)
    }
  }

  let res = 0
  for(let e of dist) {
    if(e > res) res = e
  }
  return res
};
