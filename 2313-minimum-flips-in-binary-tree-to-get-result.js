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
 * @param {boolean} result
 * @return {number}
 */
const minimumFlips = function (root, result) {
  const [FALSE, TRUE, OR, AND, XOR, NOT] = [0, 1, 2, 3, 4, 5]
  const costs = new Map()

  const getMin = (node, target) => {
    if (node.val === FALSE || node.val === TRUE)
      return Math.abs(target - node.val)

    const nodeCosts = costs.get(node) || [-1, -1]
    if (nodeCosts[target] >= 0) return nodeCosts[target]

    if (node.val === NOT) {
      nodeCosts[target] = getMin(node.left || node.right, 1 - target)
    } else if (node.val === OR) {
      nodeCosts[target] =
        target === FALSE
          ? getMin(node.left, 0) + getMin(node.right, 0)
          : Math.min(
              getMin(node.left, 0) + getMin(node.right, 1),
              getMin(node.left, 1) + getMin(node.right, 0),
              getMin(node.left, 1) + getMin(node.right, 1)
            )
    } else if (node.val === AND) {
      nodeCosts[target] =
        target === TRUE
          ? getMin(node.left, 1) + getMin(node.right, 1)
          : Math.min(
              getMin(node.left, 0) + getMin(node.right, 1),
              getMin(node.left, 1) + getMin(node.right, 0),
              getMin(node.left, 0) + getMin(node.right, 0)
            )
    } else {
      nodeCosts[target] =
        target === FALSE
          ? Math.min(
              getMin(node.left, 0) + getMin(node.right, 0),
              getMin(node.left, 1) + getMin(node.right, 1)
            )
          : Math.min(
              getMin(node.left, 0) + getMin(node.right, 1),
              getMin(node.left, 1) + getMin(node.right, 0)
            )
    }

    costs.set(node, nodeCosts)
    return nodeCosts[target]
  }

  return getMin(root, result ? 1 : 0)
}
