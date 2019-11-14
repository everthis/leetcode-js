/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = function(root, target, K) {
  const map = new Map();
  const res = [];
  if (target == null || K < 0 || root == null) return res;
  buildGraph(root, null);
  const visited = new Set();
  const q = [];
  visited.add(target);
  q.push(target);
  while (q.length) {
    const len = q.length;
    if (K === 0) {
      for (let i = 0; i < len; i++) res.push(q.shift().val);
      return res;
    }
    for (let i = 0; i < len; i++) {
      const el = q.shift();
      for (let e of map.get(el)) {
        if (visited.has(e)) continue;
        visited.add(e);
        q.push(e);
      }
    }
    K--;
  }
  return res;

  function buildGraph(node, parent) {
    if (node === null) return;
    if (!map.has(node)) {
      map.set(node, []);
      if (parent !== null) {
        map.get(node).push(parent);
        if (!map.has(parent)) map.set(parent, []);
        map.get(parent).push(node);
      }
      buildGraph(node.left, node);
      buildGraph(node.right, node);
    }
  }
};

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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = function(root, target, K) {
  let res = []
  dfs(root, target, K, res)
  return res
}

function dfs(node, target, k, res) {
  if (node === null) return -1
  if (node === target) {
    getRes(node, 0, k, res)
    return 1
  }
  let left = dfs(node.left, target, k, res)
  let right = dfs(node.right, target, k, res)
  if (left !== -1) {
    if (left === k) res.push(node.val)
    getRes(node.right, left + 1, k, res)
    return left + 1
  }
  if (right !== -1) {
    if (right === k) res.push(node.val)
    getRes(node.left, right + 1, k, res)
    return right + 1
  }
  return -1
}

function getRes(node, dist, k, res) {
  if (node === null) return
  if (dist === k) return res.push(node.val)
  getRes(node.left, dist + 1, k, res)
  getRes(node.right, dist + 1, k, res)
}
