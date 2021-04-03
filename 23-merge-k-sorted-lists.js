/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  return merge(lists, 0, lists.length - 1)
}
function merge(lists, l, r) {
  if (l > r) return null
  if (l === r) return lists[l]
  let m = Math.floor((r + l) / 2)
  let left = merge(lists, l, m)
  let right = merge(lists, m + 1, r)
  let head = new ListNode(0)
  let dummy = head
  while (left && right) {
    if (left.val <= right.val) {
      head.next = left
      left = left.next
    } else {
      head.next = right
      right = right.next
    }
    head = head.next
  }
  head.next = left ? left : right
  return dummy.next
}

// another

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  if(lists == null || lists.length === 0) return null
  if(lists.length === 1) return lists[0]
  if(lists.length === 2) return mergeTwo(lists[0], lists[1])
  const left = mergeKLists(lists.slice(0, ~~(lists.length / 2)))
  const right = mergeKLists(lists.slice(~~(lists.length / 2)))
  
  return mergeTwo(left, right)
};

function mergeTwo(l1, l2) {
  const dummy = new ListNode()
  let cur = dummy
  while(l1 && l2) {
    if(l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if(l1) cur.next = l1
  if(l2) cur.next = l2
  
  
  return dummy.next
}


// another

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  if(lists == null || lists.length === 0) return null
  const dummy = new ListNode()
  let head = dummy
  const pq = new PriorityQueue((a, b) => a.val < b.val)
  for(let list of lists) {
    while(list) {
      pq.push(list)
      list = list.next
    }
  }
  while(!pq.isEmpty()) {
    const pop = pq.pop()
    head.next = new ListNode(pop.val)
    head = head.next
  }
  return dummy.next
};

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
