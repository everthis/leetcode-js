/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function(root) {
  this.root = root;
  this.stack = [];
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  while (this.root) {
    this.stack.push(this.root);
    this.root = this.root.left;
  }
  this.root = this.stack.pop();
  const result = this.root.val;
  this.root = this.root.right;
  return result;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.root || this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// another

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function(root) {
  this.generator = dfsGenerator(root)
  this.root = root
  this.nextSmall = this.generator.next().value
}
function* dfsGenerator(root) {
  if (root === null) return
  const stack = []
  let current = root
  while (true) {
    if (current) {
      stack.push(current)
      current = current.left
    } else if (stack.length) {
      const top = stack.pop()
      yield top.val
      current = top.right
    } else {
      break
    }
  }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const smallReturn = this.nextSmall
  this.nextSmall = this.generator.next().value
  return smallReturn
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.nextSmall !== undefined ? true : false
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


