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
 * @return {number}
 */
const widthOfBinaryTree = function (root) {
  let max = 1n
  const stack = []
  const bi = BigInt
  const width = (root, level, pos) => {
    if (root == null) return
    if (level >= stack.length) stack.push(pos)
    else {
      // console.log(stack)
      const tmp = pos - stack[level] + 1n
      if(tmp > max) max = tmp
    }
    width(root.left, level + 1, 2n * pos)
    width(root.right, level + 1, 2n * pos + 1n)
  }
  width(root, 0, 1n)
  return Number(max)
}


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
 * @return {number}
 */
const widthOfBinaryTree = function(root) {
    const mins = [0]
    let max = 0
  
    dfs(root, 0, 0)
    return max
  
    // depth first search
    function dfs(currentNode, depth, position) {
      if (!currentNode) return
      if (depth === mins.length) {
        mins[depth] = position
      }
  
      const delta = position - mins[depth]
      max = Math.max(max, delta + 1)
      dfs(currentNode.left, depth + 1, delta * 2)
      dfs(currentNode.right, depth + 1, delta * 2 + 1)
    }
  }
