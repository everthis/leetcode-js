/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
const spiralMatrix = function (m, n, head) {
  const mat = Array.from({ length: m }, () => Array(n).fill(-1));
  let cur = head;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let i = 0,
    j = 0,
    left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1,
    idx = 0;
  while (cur) {
    mat[i][j] = cur.val;
    if (idx === 0 && j === right) {
      idx = (idx + 1) % 4;
      right--;
    } else if (idx === 1 && i === bottom) {
      idx = (idx + 1) % 4;
      bottom--;
    } else if (idx === 2 && j === left) {
      idx = (idx + 1) % 4;
      left++;
    } else if (idx === 3 && i === top + 1) {
      idx = (idx + 1) % 4;
      top++;
    }
    i += dirs[idx][0];
    j += dirs[idx][1];
    cur = cur.next;
  }

  return mat;
};
