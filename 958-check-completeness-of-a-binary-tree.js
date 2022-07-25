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
 * @return {boolean}
 */
const isCompleteTree = function(root) {
  let cur = [root]
  let depth = 1
  while(cur.length) {
    const nxt = []
    // console.log(cur)
    for(let i = 0; i < cur.length; i++) {
      const e = cur[i]
      if(e == null) nxt.push(null, null)
      else if(e) nxt.push(e.left, e.right)
    }
    
    if(!valid(cur) || (cur[cur.length - 1] == null && valid(nxt))) {
      return false
    }
    
    if(nxt.some(e => e != null)) {
      cur = nxt
    } else {
      cur = []
    }
    depth++
  }
  
  return true
  
  function valid(arr) {
    let firstNull = arr.length, lastNonNull = arr.length
    for(let i = 0; i < arr.length; i++) {
      const e = arr[i]
      if(firstNull === arr.length && e == null) firstNull = i
      if(e != null) lastNonNull = i
    }
    // console.log(firstNull, lastNonNull)
    return firstNull >= lastNonNull
  }
};
