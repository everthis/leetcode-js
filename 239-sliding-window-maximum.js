/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  const n = nums.length
  const stk = []
  const res = []
  
  for(let i = 0; i < n; i++) {
    while(stk.length && stk[0] < i - k + 1) {
      stk.shift()
    }
    while(stk.length && nums[stk[stk.length - 1]] <= nums[i]) {
      stk.pop()
    }
    stk.push(i)
    if(i >= k - 1) {
      res.push(nums[stk[0]])
    }
  }
  
  return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 0) return []
  const deque = new Deque()
  for (let i = 0; i < k - 1; i++) {
    while (!deque.isEmpty() && deque.last().val <= nums[i]) deque.pop()
    deque.enqueue({ val: nums[i], idx: i })
  }
  const result = []
  for (let i = k - 1; i < nums.length; i++) {
    if (!deque.isEmpty() && deque.first().idx <= i - k) deque.dequeue()
    while (!deque.isEmpty() && deque.last().val <= nums[i]) deque.pop()
    deque.enqueue({ val: nums[i], idx: i })
    result.push(deque.first().val)
  }
  return result
}

class Deque {
  constructor() {
    this.head = new Node()
    this.tail = this.head
  }

  isEmpty() {
    return this.head.next === null
  }

  first() {
    return this.head.next.value
  }

  last() {
    return this.tail.value
  }

  dequeue() {
    this.head = this.head.next
    this.head.prev = null
  }

  enqueue(value) {
    this.tail.next = new Node(value)
    this.tail.next.prev = this.tail
    this.tail = this.tail.next
  }

  pop() {
    this.tail = this.tail.prev
    this.tail.next = null
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}
