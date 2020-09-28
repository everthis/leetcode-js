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
