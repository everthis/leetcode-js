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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const set1 = new Set(), set2 = new Set()
  traverse(root1, set1)
  traverse(root2, set2)
  const res = []
  const it1 = set1[Symbol.iterator]()
  const it2 = set2[Symbol.iterator]()
  let { value: value1, done: done1 } = it1.next()
  let { value: value2, done: done2 } = it2.next()
  while(done1 === false || done2 === false) {
    if(done2 || value1 < value2) {
      res.push(value1)
      const obj = it1.next()
      value1 = obj.value
      done1 = obj.done
    }else {
      res.push(value2)
      const obj = it2.next()
      value2 = obj.value
      done2 = obj.done
    }
  }
  
  
  return res
  
  
  function traverse(node, set) {
    if(node == null) return
    traverse(node.left, set)
    set.add(node.val)
    traverse(node.right, set)
  }
};
