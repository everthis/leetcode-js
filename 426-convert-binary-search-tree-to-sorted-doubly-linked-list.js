/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function(root) {
  let head = null, tail = null;
  const helper = (node) => {
    if(!node) return;
    helper(node.left);
    if(!head) head = node;
    if(tail) tail.right = node;
    node.left = tail;
    tail = node;
    helper(node.right);
  };
  helper(root);
  if(head) {
    head.left = tail;
    tail.right = head;
  }
  return head;
};

// another

/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function(root) {
  if(root == null) return null
  let cur = root
  let start = root
  while(start.left !== null) {
    start = start.left
  }
  let prev = null
  const stack = []
  while(stack.length !== 0 || cur !== null) {
    while(cur !== null) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    if(prev !== null) {
      prev.right = cur
      cur.left = prev
    }
    prev = cur
    cur = cur.right
  }
  start.left = prev
  prev.right = start
  return start
};
