/**
 * @param {number[]} preorder
 * @return {boolean}
 */
const verifyPreorder = function(preorder) {
  let low = Number.MIN_VALUE,
    i = -1
  for (let p of preorder) {
    if (p < low) return false
    while (i >= 0 && p > preorder[i]) low = preorder[i--]
    preorder[++i] = p
  }
  return true
}
