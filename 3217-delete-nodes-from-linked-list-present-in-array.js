/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const arr = []
    let cur = head
    while(cur) {
      arr.push(cur)
      cur = cur.next
    }
   const set = new Set(nums)
   let i = 0
   for(const e of arr) {
     if(set.has(e.val)) {
       arr[i] = null
     }
     i++
   }
   const res = arr.filter(e => e != null)
   for(let i = 0; i < res.length; i++) {
     const e = res[i]
     if(i === res.length - 1) {
       e.next = null
       break
     }
     e.next = res[i + 1]
   }
   return res[0]
};
