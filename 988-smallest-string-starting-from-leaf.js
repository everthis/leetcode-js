/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
const smallestFromLeaf = function(root) {
    const res = []
    chk(root, [], res)
    res.sort()
    return res[0]
};

function chk(node, path, res) {
  if(node == null) return
  path.push(node.val)
  if(node.left == null && node.right == null) {
    res.push(arrToStr( path.slice(0).reverse() ))
    return
  }
  chk(node.left, path.slice(0), res)
  chk(node.right, path.slice(0), res)
}

function numToChar(num) {
  const str = 'abcdefghijklmnopqrstuvwxyz'
  return str[num]
}

function arrToStr(arr) {
  let res = ''
  for(let i = 0; i < arr.length; i++) {
    res += numToChar(arr[i])
  }
  return res
}

// another

const smallestFromLeaf = function(root) {
    if (!root) return ''
    const char = String.fromCharCode(97 + root.val)
    let left = smallestFromLeaf(root.left)
    let right = smallestFromLeaf(root.right)
    if (!left) return right + char
    if (!right) return left + char
    return (left < right ? left : right) + char
};
