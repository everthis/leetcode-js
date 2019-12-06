/**

Given a binary tree, return the vertical order traversal of its
nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order
should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7 

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]

Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]

Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]

*/

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
const verticalOrder = function(root) {
  const res = []
  if(root == null) return res
  const map = new Map()
  const q = []
  const cols = []
  q.push(root)
  cols.push(0)
  let min = 0
  let max = 0
  while(q.length) {
    const node = q.shift()
    const col = cols.shift()
    if(!map.has(col)) {
      map.set(col, [])
    }
    map.get(col).push(node.val)
    if(node.left !== null) {
      q.push(node.left)
      cols.push(col - 1)
      min = Math.min(min, col - 1)
    }
    if(node.right !== null) {
      q.push(node.right)
      cols.push(col + 1)
      max = Math.max(max, col + 1)
    }
  }
  for(let i = min; i <= max; i++) {
    res.push(map.get(i))
  }
  return res
};

// another

const verticalOrder = function(root) {
  if (!root) return []
  let result = []
  function recurse(root, col, row) {
    if (!root) return
    recurse(root.left, col - 1, row + 1)
    recurse(root.right, col + 1, row + 1)
    result[col] = result[col] || []
    result[col][row] = result[col][row] || []
    result[col][row].push(root.val)
  }

  recurse(root, 100, 0)
  return result
    .filter(x => x)
    .map(row => row.reduce((acc, val) => acc.concat(val), []))
}


