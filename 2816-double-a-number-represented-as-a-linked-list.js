/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
  const res = dfs(head)
  if(res.val > 9) {
    const dummy = new ListNode(1)
    dummy.next = res
    res.val = res.val % 10
    return dummy
  } else return res
  
  function dfs(node) {
    if(node == null) return
    const nxt = dfs(node.next)
    let val = node.val * 2
    if(nxt && nxt.val > 9) {
      val++
      nxt.val = nxt.val % 10
      node.val = val
      return node
    } else {
      node.val = val
      return node
    }
    
  }
  
  
};
