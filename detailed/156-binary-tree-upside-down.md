![alt text](https://github.com/everthis/leetcode-js/blob/master/images/binary-tree-upside-down.webp "binary-tree-upside-down")

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const upsideDownBinaryTree = function(root) {
  let curr = root
  let next = null
  let temp = null
  let prev = null
  while (curr !== null) {
    next = curr.left
    curr.left = temp
    temp = curr.right
    curr.right = prev
    prev = curr
    curr = next
  }
  return prev
}

// another

const upsideDownBinaryTree = function(root) {
  if (root == null || root.left == null) {
    return root
  }
  const newRoot = upsideDownBinaryTree(root.left)
  root.left.left = root.right
  root.left.right = root
  root.left = null
  root.right = null
  return newRoot
}
```
