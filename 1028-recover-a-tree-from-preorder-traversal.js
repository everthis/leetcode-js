/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
const recoverFromPreorder = function(S) {
  const arr = []
  let tmp = S[0]
  for(let i = 1; i < S.length; i++) {
    if(S[i] === '-') {
      if(S[i-1] === '-') {
         tmp += '-'
       } else {
         arr.push(tmp)
         tmp = '-'
       }
    } else {
      if(S[i-1] === '-') {
        arr.push(tmp)
        tmp = S[i]
      } else {
        tmp += S[i]
      }
    }
  }
  arr.push(tmp)
  const resArr = []
  helper(resArr, arr, 0)
  return resArr[0]
};


function helper(nodeArr, strArr, idx) {
  if(idx >= strArr.length) return
  if(idx > 0) {
    
    if(strArr[idx].startsWith('-')) {
      helper(nodeArr, strArr, idx + 1)
    } else {
      nodeArr[idx] = new TreeNode(+strArr[idx])
      let d = strArr[idx - 1].length

      let tIdx

      for(let i = idx - 1; ; i = i - 2) {
        if(i>= 1) {
          if(strArr[i].length < d) {
            tIdx = i+1
            break
          }
        } else {

          tIdx = 0
          break
        }
      }
      
      if(nodeArr[tIdx].left) {
        nodeArr[tIdx].right = nodeArr[idx]
      } else {
        nodeArr[tIdx].left = nodeArr[idx]
      }
      helper(nodeArr, strArr, idx + 1)
    }

  } else {
    nodeArr[idx] = new TreeNode(+strArr[idx])
    helper(nodeArr, strArr, idx + 1)
  }
  
}

