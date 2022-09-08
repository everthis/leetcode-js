/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function(nums, limit) {
    let maxd = [], mind = [];
    let i = 0, j;
    for (j = 0; j < nums.length; ++j) {
        // non-increase
        while (maxd.length && nums[j] > maxd[maxd.length - 1]) maxd.pop();
        // non-decrease
        while (mind.length && nums[j] < mind[mind.length - 1]) mind.pop();

        maxd.push(nums[j]);
        mind.push(nums[j]);

        if (maxd[0] - mind[0] > limit) {
            if (maxd[0] == nums[i]) maxd.shift();
            if (mind[0] == nums[i]) mind.shift();
            ++i;
        }
    }
    return j - i; 
};

// another

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums, limit) {
  const maxDq = new Deque(), minDq = new Deque(), n = nums.length
  let l = 0, r = 0
  let res = 0
  for(r = 0; r < n; r++) {
    const cur = nums[r]
    while(!maxDq.isEmpty() && maxDq.last() < cur) {
      maxDq.pop()
    }
    maxDq.enqueue(cur)
    while(!minDq.isEmpty() && minDq.last() > cur) {
      minDq.pop()
    }
    minDq.enqueue(cur)

    while(maxDq.first() - minDq.first() > limit) {
      if(nums[l] === maxDq.first()) maxDq.dequeue()
      if(nums[l] === minDq.first()) minDq.dequeue()
      l++
    }
    res = Math.max(res, r - l + 1)
  }
  return res
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
