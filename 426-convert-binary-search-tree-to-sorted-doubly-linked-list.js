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
  if(root === null) return null
  const left = treeToDoublyList(root.left)
  const right = treeToDoublyList(root.right)
  root.left = root
  root.right = root
  return connect(connect(left, root), right)
};

// n1 is the head of circular DLL as well as n2
function connect(n1, n2) {
  if(n1 === null) return n2
  if(n2 === null) return n1
  const t1 = n1.left
  const t2 = n2.left

  t1.right = n2
  n2.left = t1
  t2.right = n1
  n1.left = t2

  return n1
}

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
