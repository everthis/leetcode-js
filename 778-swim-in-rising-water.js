/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = function(grid) {
    const pq = new PQ((a, b) => a[0] < b[0])
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    const n = grid.length
    const visited = Array.from({ length: n }, () => Array(n).fill(false))
    pq.push([grid[0][0], 0, 0])
    visited[0][0] = true
    let res = 0

    while (!pq.isEmpty()) {
        const [h, x, y] = pq.pop()
        res = Math.max(res, h)
        if (x === n - 1 && y === n - 1) {
            return res
        }
        for (const [dx, dy] of dirs) {
            const nx = x + dx
            const ny = y + dy
            if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited[nx][ny]) {
                continue
            }
            pq.push([grid[nx][ny], nx, ny])
            visited[nx][ny] = true
        }
    }
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

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = function(grid) {
   const n = grid.length
   const limit = n * n, { floor } = Math
   let l = 0, r = limit - 1
   
   while(l < r) {
     const mid = l + floor((r - l) / 2)
     if(valid(mid)) r = mid
     else l = mid + 1
   }
   
    return l
   
  
   function valid(h) {
     const visited = Array.from({ length: n }, () => Array(n).fill(0))
     if(grid[0][0] > h) return false
     return dfs(h, 0, 0, visited)
   }
  
   function dfs(h, i, j, visited) {
     if(i === n - 1 && j === n - 1) return true
     const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
     visited[i][j] = 1
     for(const [dx, dy] of dirs) {
       const nx = i + dx, ny = j + dy
       if(nx >= 0 && nx < n && ny >= 0 && ny < n && visited[nx][ny] === 0 && grid[nx][ny] <= h) {
         if(dfs(h, nx, ny, visited)) return true
       }
  
     }
     
     return false
   }
};

// another


/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = function(grid) {
  let n = grid.length;
  let low = grid[0][0],
    hi = n * n - 1;
  while (low < hi) {
    let mid = low + Math.floor((hi - low) / 2);
    if (valid(grid, mid)) hi = mid;
    else low = mid + 1;
  }
  return low;
};

function valid(grid, waterHeight) {
  let n = grid.length;
  const visited = Array.from(new Array(n), el => new Array(n).fill(0));
  const dir = [-1, 0, 1, 0, -1];
  return dfs(grid, visited, dir, waterHeight, 0, 0, n);
}
function dfs(grid, visited, dir, waterHeight, row, col, n) {
  visited[row][col] = 1;
  for (let i = 0; i < 4; ++i) {
    let r = row + dir[i],
      c = col + dir[i + 1];
    if (
      r >= 0 &&
      r < n &&
      c >= 0 &&
      c < n &&
      visited[r][c] == 0 &&
      grid[r][c] <= waterHeight
    ) {
      if (r == n - 1 && c == n - 1) return true;
      if (dfs(grid, visited, dir, waterHeight, r, c, n)) return true;
    }
  }
  return false;
}

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
const swimInWater = grid => {
  let time = 0;
  let N = grid.length;
  const visited = new Set();
  while (!visited.has(N * N - 1)) {
    visited.clear();
    dfs(grid, 0, 0, time, visited);
    time++;
  }
  return time - 1;
};

function dfs(grid, i, j, time, visited) {
  if (
    i < 0 ||
    i > grid.length - 1 ||
    j < 0 ||
    j > grid[0].length - 1 ||
    grid[i][j] > time ||
    visited.has(i * grid.length + j)
  )
    return;
  visited.add(i * grid.length + j);
  for (let dir of dirs) {
    dfs(grid, i + dir[0], j + dir[1], time, visited);
  }
}


// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
class UnionFind {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  root(i) {
    while (i != this.id[i]) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }
  isConnected(p, q) {
    return this.root(p) === this.root(q);
  }
  union(p, q) {
    if (this.isConnected(p, q)) return;
    this.id[this.root(p)] = this.root(q);
  }
}
const swimInWater = grid => {
  const N = grid.length;
  const uf = new UnionFind(N * N);
  let time = 0;
  while (!uf.isConnected(0, N * N - 1)) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (grid[i][j] > time) continue;
        if (i < N - 1 && grid[i + 1][j] <= time)
          uf.union(i * N + j, i * N + j + N);
        if (j < N - 1 && grid[i][j + 1] <= time)
          uf.union(i * N + j, i * N + j + 1);
      }
    }
    time++;
  }
  return time - 1;
};
