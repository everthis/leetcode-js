/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var specialNodes = function(n, edges, x, y, z) {
    const g = toGraph(n, edges)
    const dx = dijkstra(g, x)
    const dy = dijkstra(g, y)
    const dz = dijkstra(g, z)
    let res = 0

    for(let i = 0; i < n; i++) {
        const a = dx[i], b = dy[i], c = dz[i]

        const arr = [a,b,c].sort((m, n) => m - n)
        if(arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2]) {
            res++
        }
    }


    return res
};

function toGraph(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    return graph;
}

function dijkstra(graph, start) {
    const n = graph.length;
    const dist = Array(n).fill(Infinity);
    dist[start] = 0;

    const pq = new PQ((a, b) => a.dist < b.dist);
    pq.push({ node: start, dist: 0 });

    while (!pq.isEmpty()) {
        const { node: u, dist: d } = pq.pop();
        if (d > dist[u]) continue;

        for (const v of (graph[u] || [])) {
            const nd = d + 1;
            if (nd < dist[v]) {
                dist[v] = nd;
                pq.push({ node: v, dist: nd });
            }
        }
    }

    return dist;
}

class PQ {
  constructor(comparator = (a, b) => a > b) {
    this.heap = []
    this.top = 0
    this.comparator = comparator
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    return this.heap[this.top]
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value)
      this.siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this.swap(this.top, bottom)
    }
    this.heap.pop()
    this.siftDown()
    return poppedValue
  }
  replace(value) {
    const replacedValue = this.peek()
    this.heap[this.top] = value
    this.siftDown()
    return replacedValue
  }

  parent = (i) => ((i + 1) >>> 1) - 1
  left = (i) => (i << 1) + 1
  right = (i) => (i + 1) << 1
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j])
  swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]])
  siftUp = () => {
    let node = this.size() - 1
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  siftDown = () => {
    let node = this.top
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this.swap(node, maxChild)
      node = maxChild
    }
  }
}
