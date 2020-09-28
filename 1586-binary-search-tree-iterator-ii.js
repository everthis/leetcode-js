/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function(root) {
  this.r = root
  const ans = []
  helper(root, ans)
  this.arr = ans
  this.cur = -1
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.arr.length && this.cur < this.arr.length - 1
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.cur += 1
  return this.arr[this.cur]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
  return this.arr.length && this.cur > 0
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
  return this.arr[--this.cur]
};

function helper(node, res) {
  if(node == null) return
  if(node.left) {
    helper(node.left, res)
  }
  res.push(node.val)
  if(node.right) {
    helper(node.right, res)
  }
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */

// another

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
  this.nums = []
  this.stack = []
  this.node = root
  this.i = 0 // pointer to next node
  this.size = 0
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.i < this.size || this.stack.length > 0 || !!this.node
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.i < this.size) return this.nums[this.i++]
  if (this.stack.length || this.node) {
    while (this.node) {
      this.stack.push(this.node)
      this.node = this.node.left
    }
    this.node = this.stack.pop()
    this.i += 1
    this.size += 1
    const val = this.node.val
    this.nums.push(val)
    this.node = this.node.right
    return val
  }
  return -1
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function () {
  return this.i - 2 >= 0
}

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function () {
  return this.nums[--this.i - 1]
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */

