/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function(n, relations, time) {
  const graph = {}, dist = Array(n).fill(0), inDegree = Array(n).fill(0)
  
  for(let [pre, next] of relations) {
    pre--, next--
    if(graph[pre] == null) graph[pre] = []
    graph[pre].push(next)
    inDegree[next]++
  }

  const q = []
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) {
      q.push(i)
      dist[i] = time[i]
    }
  }

  let res = 0
  while(q.length) {
    const cur = q.shift()
    for(const next of (graph[cur] || [])) {
      dist[next] = Math.max(dist[next], dist[cur] + time[next])
      inDegree[next]--
      if(inDegree[next] === 0) q.push(next)
    }
  }
  
  return Math.max(...dist)
}

// another

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
