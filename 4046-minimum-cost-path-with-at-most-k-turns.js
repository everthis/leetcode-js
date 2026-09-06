/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function(grid, k) {
    const rows = grid.length
    const cols = grid[0].length

    const dis = new Map()

    const pq = new PQ((a, b) => a[0] < b[0])
    pq.push([grid[0][0], 0, 0, -1, 0])
    const dirs = [[-1, 0], [1, 0], [0,1], [0,-1]]

    while(!pq.isEmpty()) {
        const [cost, r,c,lastDir, turned] = pq.pop()
        const sk = `${r},${c},${lastDir},${turned}`
        if(cost > (dis.get(sk) ?? 1e9)) {
            continue
        }
        if(r === rows - 1 && c === cols - 1) return cost

        for(let i = 0; i < dirs.length; i++) {
            const [dr, dc] = dirs[i]
            const nr = r + dr
            const nc = c + dc
            if(!(nr >= 0 && nr < rows && nc >= 0 && nc < cols)) {
                continue
            }
            const nt = turned + (lastDir !== -1 && i !== lastDir ? 1 : 0)
            if(nt > k) continue
            const newCost = cost + grid[nr][nc]
            const nsk = `${nr},${nc},${i},${nt}`

            if(newCost < (dis.get(nsk) ?? 1e9)  ) {
                dis.set(nsk, newCost)
                pq.push([newCost, nr, nc, i, nt])
            }
        }
    }


    return -1
};

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
