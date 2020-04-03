/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.a = new Array(k).fill(0)
  this.front = 0
  this.rear = -1
  this.len = 0
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (!this.isFull()) {
    this.rear = (this.rear + 1) % this.a.length
    this.a[this.rear] = value
    this.len++
    return true
  } else return false
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.isEmpty()) {
    this.front = (this.front + 1) % this.a.length
    this.len--
    return true
  } else return false
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.a[this.front]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.a[this.rear]
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.len === 0
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.len == this.a.length
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
