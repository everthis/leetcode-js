class Node {
  constructor(v, s) {
    this.val = v
    this.sum = s
    this.left = null
    this.right = null
    this.dup = 1
  }
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function(nums) {
  const ans = new Array(nums.length).fill(0)
  let root = null
  for (let i = nums.length - 1; i >= 0; i--) {
    root = insert(nums[i], root, ans, i, 0)
  }
  return ans
}

function insert(num, node, ans, i, preSum) {
  if (node == null) {
    node = new Node(num, 0)
    ans[i] = preSum
  } else if (node.val == num) {
    node.dup++
    ans[i] = preSum + node.sum
  } else if (node.val > num) {
    node.sum++
    node.left = insert(num, node.left, ans, i, preSum)
  } else {
    node.right = insert(num, node.right, ans, i, preSum + node.dup + node.sum)
  }
  return node
}
