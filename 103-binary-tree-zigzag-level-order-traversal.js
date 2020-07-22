/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  if(root == null) return []
  const row = [root]
  const res = []
  bfs(row, res)
  for(let i = 0; i < res.length; i++) {
    res[i] = i % 2 === 0 ? res[i] : res[i].reverse()
  }
  return res
};

function bfs(row, res) {
  if(row.length === 0) return
  let tmp = []
  let next = []
  for(let i = 0; i< row.length; i++) {
    tmp.push(row[i].val)
    if(row[i].left) {
       next.push(row[i].left)
    }
    if(row[i].right) {
       next.push(row[i].right)
    }
  }
  if(tmp.length) {
    res.push(tmp)
  }
  bfs(next, res)
}

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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const zigzag = [];
  let numLevels = 1;
  while (queue.length > 0) {
    const width = queue.length;
    const levelTraversal = [];
    for (let i = 0; i < width; i++) {
      const currentNode = queue.shift();
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.left) queue.push(currentNode.left);
      numLevels % 2 === 0
        ? levelTraversal.push(currentNode.val)
        : levelTraversal.unshift(currentNode.val);
    }
    zigzag.push(levelTraversal);
    numLevels++;
  }

  return zigzag;
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  const res = []
  dfs(root, res, 0)
  return res
  
  function dfs(node, res, level) {
    if(node == null) return
    if(res.length <= level) res.push([])
    const tmp = res[level]
    if(level % 2 === 0) tmp.push(node.val)
    else tmp.unshift(node.val)
    
    dfs(node.left, res, level + 1)
    dfs(node.right, res, level + 1)
  }
};
