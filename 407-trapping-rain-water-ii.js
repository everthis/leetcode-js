/**
 * @param {number[][]} heightMap
 * @return {number}
 */

const trapRainWater = function (heightMap) {
  const pq = new PriorityQueue((a, b) => a[2] < b[2])
  const m = heightMap.length, n = heightMap[0].length
  
  const visited = Array.from({ length: m }, () => Array(n).fill(false))
  
  for(let i = 0; i < m; i++) {
    visited[i][0] = visited[i][n - 1] = true
    pq.push([i, 0, heightMap[i][0]])
    pq.push([i, n - 1, heightMap[i][n - 1]])
  }
  for(let j = 1; j < n - 1; j++) {
    visited[0][j] = visited[m - 1][j] = true
    pq.push([0, j, heightMap[0][j]], [m - 1, j, heightMap[m - 1][j]])
  }
  
  let res = 0
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  while(!pq.isEmpty()) {
    const cur = pq.pop()
    const [r, c, h] = cur
    for(let dir of dirs) {
      const newR = r + dir[0], newC = c + dir[1]
      if(newR < 0 || newR >= m || newC < 0 || newC >= n || visited[newR][newC]) continue
      visited[newR][newC] = true
      res += Math.max(0, h - heightMap[newR][newC])
      pq.push([newR, newC, Math.max(h, heightMap[newR][newC])])
    }
  }
  
  return res

}
class PriorityQueue {
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
 * @param {number[][]} heightMap
 * @return {number}
 */

const trapRainWater = function (heightMap) {
  const pq = new PriorityQueue((a, b) => a[2] < b[2])
  const visited = []
  for (let i = 0; i < heightMap.length; i++) {
    visited[i] = []
    for (let j = 0; j < heightMap[0].length; j++) {
      if (
        i > 0 &&
        i < heightMap.length - 1 &&
        j > 0 &&
        j < heightMap[0].length - 1
      )
        continue
      pq.push([i, j, heightMap[i][j]])
      visited[i][j] = true
    }
  }

  let max = -Infinity,
    count = 0
  while (!pq.isEmpty()) {
    const cur = pq.pop()
    if (cur[2] > max) max = cur[2]
    check(cur[0], cur[1])
  }
  function check(row, col) {
    const step = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]
    for (let i = 0; i < step.length; i++) {
      let newR = row + step[i][0],
        newC = col + step[i][1]
      if (
        newR < 0 ||
        newR >= heightMap.length ||
        newC < 0 ||
        newC >= heightMap[0].length
      )
        continue
      if (visited[newR][newC]) continue
      visited[newR][newC] = true
      const newVal = heightMap[newR][newC]
      if (newVal < max) {
        count += max - newVal
        check(newR, newC)
      } else {
        pq.push([newR, newC, newVal])
      }
    }
  }

  return count
}
class PriorityQueue {
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
 * @param {number[][]} heightMap
 * @return {number}
 */
const trapRainWater = function(heightMap) {

    function PriorityQueueMin(){
      let heap=[null]
      function swim(idx){
        if(idx<2)return
        let k=Math.floor(idx/2)
        if(heap[idx][2]-heap[k][2]<0){
          swap(heap,idx,k)
          idx=k
          swim(idx)
        }
      }
      function sink(idx){
        let k=Math.floor(idx*2)
        if(k>=heap.length)return
        if(k<heap.length && heap[k+1] && heap[k][2]-heap[k+1][2]>0) k++
        if(heap[idx][2]-heap[k][2]>0){
          swap(heap,idx,k)
          idx=k
          sink(idx)
        }
      }
      function swap(arr,i,j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
      this.insert=function (v) {
        heap.push(v)
        swim(heap.length-1)
      }
      this.delMin=function () {
        swap(heap,1,heap.length-1)
        let min=heap.pop()
        sink(1)
        return min
      }
      this.isEmpty=function () {
        return heap.length===1
      }
    }
  
    let pq=new PriorityQueueMin()
    let visited=[]
    for(let i=0;i<heightMap.length;i++){
      visited[i]=[]
      for(let j=0;j<heightMap[0].length;j++){
        if((i>0 && i<heightMap.length-1) && (j>0 && j<heightMap[0].length-1))continue
        pq.insert([i,j,heightMap[i][j]])
        visited[i][j]=true
      }
    }
  
    let max=-Infinity,count=0
    while(!pq.isEmpty()){
      let cur=pq.delMin()
      if(cur[2]>max)max=cur[2]
      check(cur[0],cur[1])
    }
    function check(row,col){
      let step=[[-1,0],[1,0],[0,-1],[0,1]]
      for(let i=0;i<step.length;i++){
        let newR=row+step[i][0],newC=col+step[i][1]
        if((newR<0 || newR>=heightMap.length) || (newC<0 || newC>=heightMap[0].length))continue
        if(visited[newR][newC])continue
        visited[newR][newC]=true
        let newVal=heightMap[newR][newC]
        if(newVal<max){
          count+=max-newVal
          check(newR,newC)
        }else{
          pq.insert([newR,newC,newVal])
        }
      }
    }
  
    return count
  };
