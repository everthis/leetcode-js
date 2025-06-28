/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minimumWeight = function (edges, queries) {
  const n = edges.length + 1
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v, w] of edges) {
    adj[u].push([v, w])
    adj[v].push([u, w])
  }

  const parent = Array.from({ length: n }, (_, i) => i)
  const size = Array(n).fill(1)

  function findSet(v) {
    while (parent[v] !== v) {
      v = parent[v]
      parent[v] = parent[parent[v]]
    }
    return v
  }

  function unionSets(a, b) {
    a = findSet(a)
    b = findSet(b)
    if (size[a] < size[b]) {
      ;[a, b] = [b, a]
    }
    parent[b] = a
    size[a] += size[b]
    return a
  }

  const queriesByV = Array.from({ length: n }, () => [])
  for (let i = 0; i < queries.length; i++) {
    const [a, b, c] = queries[i]
    queriesByV[a].push([b, c, i])
    queriesByV[b].push([c, a, i])
    queriesByV[c].push([a, b, i])
  }

  const visited = Array(n).fill(false)
  const ancestor = Array.from({ length: n }, (_, i) => i)
  const dist = Array(n).fill(0)
  const res = Array(queries.length).fill(0)

  function dfs(v) {
    visited[v] = true

    for (const [b, c, i] of queriesByV[v]) {
      res[i] += dist[v]
      if (visited[b]) {
        res[i] -= dist[ancestor[findSet(b)]]
      }
      if (visited[c]) {
        res[i] -= dist[ancestor[findSet(c)]]
      }
    }

    for (const [u, w] of adj[v]) {
      if (visited[u]) {
        continue
      }

      dist[u] = dist[v] + w
      dfs(u)
      ancestor[unionSets(v, u)] = v
    }
  }

  dfs(0)
  return res
}
