/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const constrainedSubsetSum = function(nums, k) {
    const window = [[0,nums[0]]];
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        let [index,lastKsum] = window[0];
        if(index == i-k){
            window.shift();
        }
        let sum = Math.max(lastKsum, 0) + nums[i]
        max = Math.max(max, sum);
        while(window.length>0 && window[window.length-1][1] < sum){
            window.pop();
        }
        window.push([i,sum]);
    }
    return max;
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const constrainedSubsetSum = function (nums, k) {
  const dll = new DLL()
  dll.push([0, nums[0]])
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (!dll.isEmpty() && i - dll.peek().val[0] > k) {
      dll.shift()
    }
    const sum = Math.max(dll.peek().val[1], 0) + nums[i]
    max = Math.max(max, sum)
    while (!dll.isEmpty() && dll.peekLast().val[1] < sum) {
      dll.pop()
    }
    dll.push([i, sum])
  }
  return max
}

class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}
class DLL {
  constructor() {
    this.head = new Node()
    this.tail = null
    this.size = 0
  }
  peek() {
    return this.head.next
  }
  peekLast() {
    return this.tail
  }
  isEmpty() {
    return this.head.next == null
  }
  shift() {
    const h = this.head.next
    if (h) {
      this.head.next = h.next
      if (h.next) {
        h.next.prev = this.head
      } else {
        this.tail = null
      }
      this.size--
    }
  }
  pop() {
    if (this.tail == null) return
    const newTail = this.tail.prev
    if (newTail) {
      newTail.next = null
      this.tail.prev = null
      this.tail = newTail
      this.size--
    }

  }
  push(val) {
    const node = new Node(val)
    node.prev = this.tail ?? this.head
    node.prev.next = node
    this.tail = node
    this.size++
  }
}
