/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nodesBetweenCriticalPoints = function(head) {
  const arr = []
  let cur = head
  while(cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  const idxArr = []
  const n = arr.length
  for(let i = 1; i < n - 1; i++) {
    if((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) || (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
      idxArr.push(i)
    }
  }
  
  let min = Infinity, max = -1
  for(let i = 1; i < idxArr.length; i++) {
    if(idxArr[i] - idxArr[i - 1] < min) min = idxArr[i] - idxArr[i - 1]
  }
  if(idxArr.length > 1) max = idxArr[idxArr.length - 1] - idxArr[0]
  return [min === Infinity ? -1 : min, max]
};
