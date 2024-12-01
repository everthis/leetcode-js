class Graph {
  constructor(n) {
    this.n = n
    this.adj = Array.from({ length: n }, () => [])
    this.weight = new Map()
    for (let i = 0; i < n; i++) {
      this.weight.set(i, new Map())
    }
  }

  addEdgeOri(i, j, w = 0) {
    this.adj[i].push(j)
    this.weight.get(i).set(j, w)
  }

  addEdge(i, j, w = 0) {
    // Add w to v's list.
    this.adj[i].push(j)
    // Add v to w's list
    this.adj[j].push(i)
    this.weight.get(i).set(j, w)
    this.weight.get(j).set(i, w)
  }
}

function dijkstra(graph, source) {
  const ans = new Array(graph.n).fill(Number.MAX_SAFE_INTEGER / 2)
  const pq = new MinPriorityQueue({ priority: (item) => item[1] })
  pq.enqueue([source, 0])

  while (pq.size() > 0) {
    const [item, dis] = pq.dequeue().element
    if (ans[item] <= dis) continue
    ans[item] = dis

    graph.adj[item].forEach((neighbor) => {
      if (ans[neighbor] >= Number.MAX_SAFE_INTEGER / 2) {
        pq.enqueue([neighbor, dis + graph.weight.get(item).get(neighbor)])
      }
    })
  }
  return ans
}

function maxTargetNodes(edges1, edges2) {
  const n = edges1.length + 1
  const m = edges2.length + 1
  const g1 = new Graph(n)
  const g2 = new Graph(m)

  edges1.forEach(([a, b]) => g1.addEdge(a, b, 1))
  edges2.forEach(([a, b]) => g2.addEdge(a, b, 1))

  const dis1 = dijkstra(g1, 0)
  const dis2 = dijkstra(g2, 0)

  const a0 = new Set()
  const a1 = new Set()
  const b0 = new Set()
  const b1 = new Set()

  for (let i = 0; i < dis1.length; i++) {
    if (dis1[i] % 2 === 0) {
      a0.add(i)
    } else {
      a1.add(i)
    }
  }

  for (let i = 0; i < dis2.length; i++) {
    if (dis2[i] % 2 === 0) {
      b0.add(i)
    } else {
      b1.add(i)
    }
  }

  const b = Math.max(b0.size, b1.size)
  const ans = []

  for (let i = 0; i < n; i++) {
    if (a0.has(i)) {
      ans.push(a0.size + b)
    } else {
      ans.push(a1.size + b)
    }
  }

  return ans
}
