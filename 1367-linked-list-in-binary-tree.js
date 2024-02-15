/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSubPath(head, root) {
  let needle = convertLinkedListToArray(head);
  let lps = computeKMPTable(needle);
  return kmpSearch(root, 0);

  function kmpSearch(i, j) {
    if (j === needle.length) return true;
    if (i === null) return false;
    while (j > 0 && i.val !== needle[j]) j = lps[j - 1];
    if (i.val === needle[j]) j++;
    return kmpSearch(i.left, j) || kmpSearch(i.right, j);
  }

  function computeKMPTable(pattern) {
    let n = pattern.length;
    let lps = new Array(n);
    for (let i = 0; i < n; i++) {
      lps[i] = 0;
    }
    for (let i = 1, j = 0; i < n; i++) {
      while (j > 0 && pattern[i] !== pattern[j]) j = lps[j - 1];
      if (pattern[i] === pattern[j]) lps[i] = ++j;
    }
    return lps;
  }

  function convertLinkedListToArray(head) {
    let list = [];
    while (head !== null) {
      list.push(head.val);
      head = head.next;
    }
    return list;
  }
}


// another


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSubPath = function(head, root) {
  return dfs(root)
  
  function dfs(node) {
    if(node == null) return false
    if(head.val === node.val) {
      let cur = head
      let q = [node]
      while(q.length) {
        const v = cur.val
        const tmp = []
        let mark = false
        for(const e of q) {
          if(e.val === v) {
            mark = true
            if(e.left) tmp.push(e.left)
            if(e.right) tmp.push(e.right)
          }
        }
        if(cur && !mark) break
        cur = cur.next
        if(cur == null) return true
        q = tmp
      }
    }
    return dfs(node.left) || dfs(node.right)
  }
  
};


// another


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSubPath = function(head, root) {
  const res = { found: false }
  traverse(root, head, res)
  return res.found
};

function traverse(node, list, res) {
  if(res.found) return
  if(node == null) return
  if(node.val === list.val && helper(node, list)) {
    res.found = true
    return
  } 
  traverse(node.left, list, res)
  traverse(node.right, list, res)
}

function helper(node, list) {
  if(list == null) return true
  if(node == null) return false
  if(list.val !== node.val) return false
  return helper(node.left, list.next) || helper(node.right, list.next)
}
