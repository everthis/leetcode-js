/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
const twoSumBSTs = function(root1, root2, target) {
  if(root1 == null && root2 == null) return false
  if(root2 == null) return root1.val === target
  if(root1 == null) return root2.val === target
  if(root1.val + root2.val === target) return true
  if(root1.val + root2.val < target) {
    return twoSumBSTs(root1.right, root2, target) || twoSumBSTs(root1, root2.right, target)
  } else {
    return twoSumBSTs(root1.left, root2, target) || twoSumBSTs(root1, root2.left, target)
  }
};

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
const twoSumBSTs = function(root1, root2, target) {
  if(root1 == null || root2 == null) return false
  const s1 = [], s2 = []
  while(true) {
    while(root1) {
      s1.push(root1)
      root1 = root1.left
    }
    while(root2) {
      s2.push(root2)
      root2 = root2.right
    }
    if(s1.length === 0 || s2.length === 0) return false
    const t1 = s1[s1.length - 1], t2 = s2[s2.length - 1]
    if(t1.val + t2.val === target) return true
    if(t1.val + t2.val < target) {
      root1 = t1.right
      s1.pop()
    } else {
      root2 = t2.left
      s2.pop()
    }
    
  }
  return false
};
