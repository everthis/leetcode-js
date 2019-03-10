/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
  let preIndex = { index: 0 };
  return constructTreeUtil(
    preorder,
    preIndex,
    preorder[0],
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    preorder.length
  );
  function constructTreeUtil(pre, preIndex, key, min, max, size) {
    if (preIndex.index >= size) {
      return null;
    }
    let root = null;
    if (key > min && key < max) {
      root = new TreeNode(key);
      preIndex.index = preIndex.index + 1;
      if (preIndex.index < size) {
        root.left = constructTreeUtil(
          pre,
          preIndex,
          pre[preIndex.index],
          min,
          key,
          size
        );
        root.right = constructTreeUtil(
          pre,
          preIndex,
          pre[preIndex.index],
          key,
          max,
          size
        );
      }
    }
    return root;
  }
};
