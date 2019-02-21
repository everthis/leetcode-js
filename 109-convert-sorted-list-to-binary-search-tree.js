/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
    if(head == null) return null
    const arr = []
    let cur = head
    while(cur !== null) {
        arr.push(cur)
        cur = cur.next
    }
    return build(arr, null, '')
};

function build(arr, parent, type) {
    if(arr.length === 0) return
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)
    const node = new TreeNode(arr[mid].val)
    if(parent) parent[type] = node
    build(left, node, 'left')
    build(right, node, 'right')
    return node
}

// another

const sortedListToBST = function(head, tail = null) {
    if (head === tail) {
        return null;
    } else if (head.next === tail) {
        return new TreeNode(head.val);
    } else {
        let slow = head; 
        let fast = head;
        while (fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let node = new TreeNode(slow.val);
        node.left = sortedListToBST(head, slow);
        node.right = sortedListToBST(slow.next, tail);
        return node;
    }
};
