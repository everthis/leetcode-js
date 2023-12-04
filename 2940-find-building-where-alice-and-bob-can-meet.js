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
/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
const leftmostBuildingQueries = function(heights, queries) {
  const n = queries.length, m = heights.length
  const res = Array(n).fill(-1)
  const pq = new PQ((a,b) => a[0] < b[0])
  const que = Array.from({ length: m }, () => Array())
  for(let i = 0; i < n; i++) {
    let [a, b] = queries[i];
    if(a < b && heights[a] < heights[b]) {
      res[i] = b
    } else if(a > b && heights[a] > heights[b]) {
      res[i] = a
    } else if(a === b) {
      res[i] = a
    } else {
      que[Math.max(a, b)].push([Math.max(heights[a], heights[b]), i])
    }
  }
  
  for(let i = 0; i < m; i++) {
    while(!pq.isEmpty() && pq.peek()[0] < heights[i]) {
      const e = pq.pop()
      res[e[1]] = i
    }

    for(const e of que[i]) {
      pq.push(e)
    }
  }

  return res
};

// another


/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
  const st = []
  const [hs, qs] = [heights, queries]
  let n = qs.length;
  let ans = new Array(n).fill(-1);
  let es = new Array(hs.length).fill().map(() => []);
  for (let i = 0; i < n; i++) {
    let x = qs[i][0];
    let y = qs[i][1];
    if (x > y) {
      [x, y] = [y, x];
    }
    if (hs[y] > hs[x] || x === y) {
      ans[i] = y;
    } else {
      es[y].push([hs[x], i]);
    }
  }
  for (let i = hs.length - 1; i >= 0; i--) {
    let n1 = st.length;
    for (let [x, y] of es[i]) {
      let p = search(x);
      if (p < n1 && p >= 0) {
        ans[y] = st[p][1];
      }
    }
    while (st.length > 0 && st[st.length - 1][0] <= hs[i]) {
      st.pop();
    }
    st.push([hs[i], i]);
  }
  return ans;
  function search(x) {
    let l = 0;
    let r = st.length - 1;
    let ans = -1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (st[m][0] > x) {
        ans = Math.max(ans, m);
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return ans;
  }
}
