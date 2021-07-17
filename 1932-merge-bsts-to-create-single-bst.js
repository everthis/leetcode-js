/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
const canMerge = function (trees) {
  const mapRoots = {}
  const mapLeaves = {}
  let prev

  //check all trees and hashMap all available roots and leaves
  for (let node of trees) {
    mapRoots[node.val] = node
    if (node.left != null) {
      if (mapLeaves[node.left.val] != null)
        //different nodes can't refer to the same node -> abnormal BST
        return null
      mapLeaves[node.left.val] = node.left
    }
    if (node.right != null) {
      if (mapLeaves[node.right.val] != null)
        //different nodes can't refer to the same node -> abnormal BST
        return null
      mapLeaves[node.right.val] = node.right
    }
  }

  let rootRes = null
  let count = trees.length

  //find potential root-result of the merged entire tree
  //that is node without any references from the parent leaf nodes
  for (let node of trees) {
    if (mapLeaves[node.val] == null) {
      rootRes = node
      break
    }
  }

  //if there are no nodes like that -> abnormal BST
  if (rootRes == null) return rootRes

  const q = []

  //put root-result leaves into queue
  if (rootRes.left != null) q.push(rootRes.left)
  if (rootRes.right != null) q.push(rootRes.right)
  count--

  while (q.length) {
    //get leaf from the queue and check if there is correponding available root
    let leaf = q.pop()
    let root = mapRoots[leaf.val]
    if (root != null) {
      //there is root matched to leaf, so let's merge it
      count--
      leaf.left = root.left
      leaf.right = root.right
      //add new leaves into the queue
      if (root.left != null) q.push(root.left)
      if (root.right != null) q.push(root.right)
    }
  }

  prev = 0
  //if we have merged all inputed trees and that is valid BST by values, then return rootRes
  return count == 0 && recSanity(rootRes) ? rootRes : null

  function recSanity(node) {
    if (node == null) return true

    if (!recSanity(node.left)) return false

    if (prev >= node.val) return false
    prev = node.val

    return recSanity(node.right)
  }
}
