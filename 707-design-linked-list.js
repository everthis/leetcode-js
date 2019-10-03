/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.arr = []
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (this.arr[index] !== undefined) {
    return this.arr[index]
  } else {
    return -1
  }
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.arr.unshift(val)
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.arr.push(val)
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (this.arr.length >= index) {
    this.arr.splice(index, 0, val)
  }
  if (index < 0) {
    this.arr.unshift(val)
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= 0 && index < this.arr.length) {
    this.arr.splice(index, 1)
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// another

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(val) {
  this.head = null
  this.tail = null
  this.size = 0
}

// Create Node class to store node data as an 'object'
var Node = function(val) {
  this.val = val
  this.next = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || this.size === 0 || index > this.size - 1) return -1
  let curr = this.head
  let i = 0
  while (i < index) {
    curr = curr.next
    i += 1
  }
  return curr.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val)
  if (this.head === null) {
    this.head = newNode
    this.tail = newNode
  } else {
    newNode.next = this.head
    this.head = newNode
  }
  this.size++
  return this
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const newNode = new Node(val)
  if (this.head === null) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    this.tail = newNode
  }
  this.size++
  return this
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return
  if (index <= 0) return this.addAtHead(val)
  if (index === this.size) return this.addAtTail(val)
  let newNode = new Node(val)
  let i = 0
  let curr = this.head
  while (i < index - 1) {
    curr = curr.next
    i++
  }
  newNode.next = curr.next ? curr.next : null
  curr.next = newNode
  this.size++
  return this
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size || index < 0) return
  if (index === 0) {
    this.head = this.head.next
    this.size--
    return this
  }
  let curr = this.head
  let i = 0
  while (i < index - 1) {
    i++
    curr = curr.next
  }
  curr.next = curr.next.next ? curr.next.next : null
  if (!curr.next) this.tail = curr
  this.size--
  return this
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

