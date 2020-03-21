/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
const str2tree = function(s) {
  const stack = []
  for (let i = 0, j = i; i < s.length; i++, j = i) {
    const c = s.charAt(i)
    if (c === ')') stack.pop()
    else if ((c >= '0' && c <= '9') || c === '-') {
      while (
        i + 1 < s.length &&
        s.charAt(i + 1) >= '0' &&
        s.charAt(i + 1) <= '9'
      )
        i++
      const currentNode = new TreeNode(+s.slice(j, i + 1))
      if (stack.length) {
        const parent = stack[stack.length - 1]
        if (parent.left !== null) parent.right = currentNode
        else parent.left = currentNode
      }
      stack.push(currentNode)
    }
  }
  return stack.length === 0 ? null : stack[0]
}
