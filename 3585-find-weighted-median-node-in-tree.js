/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
const findMedian = (n, edges, queries) => {
  const graph = {}
  for (const [u, v, w] of edges) {
    if (!graph[u]) graph[u] = {}
    if (!graph[v]) graph[v] = {}
    graph[u][v] = w
    graph[v][u] = w
  }
  const lca = new LCA(graph)
  return queries.map(([u, v]) => lca.median(u, v))
}

class LCA {
  constructor(graph, root = 0) {
    this.graph = graph
    this.ancestors = {}
    this.timeIn = {}
    this.timeOut = {}
    this.timer = 0
    this.depth = {}
    this.dist = {}
    this.dfs(root, root, [root])
  }

  dfs(v, parent, path, d = 0) {
    this.timer += 1
    this.timeIn[v] = this.timer
    let up = 1
    while (path.length >= up) {
      if (!this.ancestors[v]) this.ancestors[v] = []
      this.ancestors[v].push(path[path.length - up])
      up *= 2
    }
    this.depth[v] = path.length
    this.dist[v] = d
    path.push(v)
    for (const [u, w] of Object.entries(this.graph[v])) {
      if (u != parent) {
        this.dfs(+u, v, path, d + w)
      }
    }
    path.pop()
    this.timer += 1
    this.timeOut[v] = this.timer
  }

  isAncestor(u, v) {
    return (
      this.timeIn[u] <= this.timeIn[v] && this.timeOut[u] >= this.timeOut[v]
    )
  }

  lca(u, v) {
    if (this.isAncestor(u, v)) {
      return u
    } else if (this.isAncestor(v, u)) {
      return v
    }
    let d = this.ancestors[u].length - 1
    while (d >= 0) {
      d = Math.min(d, this.ancestors[u].length - 1)
      if (!this.isAncestor(this.ancestors[u][d], v)) {
        u = this.ancestors[u][d]
      }
      d -= 1
    }
    return this.ancestors[u][0]
  }

  distance(u, v) {
    const a = this.lca(u, v)
    if (a === u || a === v) {
      return Math.abs(this.dist[v] - this.dist[u])
    }
    return this.dist[u] - this.dist[a] + (this.dist[v] - this.dist[a])
  }

  findNodeDist(u, distance, mode = 0) {
    let d = this.ancestors[u].length - 1
    let m = u
    while (d >= 0) {
      d = Math.min(d, this.ancestors[u].length - 1)
      const v = this.ancestors[u][d]
      if (this.dist[v] >= distance) {
        m = v
        u = this.ancestors[u][d]
      }
      d -= 1
    }
    if (mode === 0 || this.dist[m] === distance) {
      return m
    }
    return this.ancestors[m][0]
  }

  median(u, v) {
    const goal = this.distance(u, v) / 2
    const a = this.lca(u, v)
    if (u === a) {
      return this.findNodeDist(v, goal + this.dist[u])
    } else if (v === a) {
      return this.findNodeDist(u, goal + this.dist[v], 1)
    } else {
      const d = this.distance(a, u)
      if (d >= goal) {
        return this.findNodeDist(u, d - goal + this.dist[a], 1)
      } else {
        return this.findNodeDist(v, goal - d + this.dist[a])
      }
    }
  }
}
