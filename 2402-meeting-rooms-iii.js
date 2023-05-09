/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
const mostBooked = function(n, meetings) {
  const rooms = Array(n).fill(0)
  const busy = new PQ((a, b) => a[1] === b[1] ? a[0] < b[0] : a[1] < b[1])
  const avail = new PQ((a, b) => a[0] < b[0])
  for(let i = 0; i < n; i++) {
    avail.push([i, 0])
  }
  meetings.sort((a, b) => a[0] - b[0])
  
  for(let i = 0, len = meetings.length; i < len; i++) {
    const [s, e] = meetings[i]
    while(!busy.isEmpty() && busy.peek()[1] <= s) {
      avail.push(busy.pop())
    }
    if(!avail.isEmpty()) {
      const r = avail.pop()
      r[1] = e
      rooms[r[0]]++
      busy.push(r)
    } else {
      const r = busy.pop()
      r[1] += e - s
      rooms[r[0]]++
      busy.push(r)
    }
  }
  let res = 0
  // console.log(meetings.length, rooms)
  const maxNum = Math.max(...rooms)
  for(let i = 0; i < n; i++) {
    if(rooms[i] === maxNum) {
      res = i
      break
    }
  }
  return res
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
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    const count = new Array(n).fill(0);
    const freeTime = new Array(n).fill(0);
    meetings.sort((a, b) => a[0] - b[0]);
    for(let i = 0 ; i < meetings.length ; i++){
        let minRoom = -1;
        let minTime = Number.MAX_SAFE_INTEGER;
        for(let j = 0 ; j < n ; j++){
            if(freeTime[j] <= meetings[i][0]){
                count[j]++;
                freeTime[j] = meetings[i][1];
                minRoom = -1;
                break;
            }
            if(freeTime[j] < minTime){
                minTime = freeTime[j];
                minRoom = j;
            }
        }
        if(minRoom !== -1){
            count[minRoom]++;
            freeTime[minRoom] += meetings[i][1] - meetings[i][0]; 
        }
    }
    
    let ans = 0;
    let maxCount = count[0];
    for(let i = 1 ; i < n ; i++){
        if(count[i] > maxCount){ 
            ans = i;
            maxCount = count[i];
        }
    }
    return ans;  
};
