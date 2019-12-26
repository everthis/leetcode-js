/**

Given two sparse matrices A and B, return the result of AB.
You may assume that A's column number is equal to B's row number.

Example:

Input:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

Output:

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |

*/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const multiply = function(A, B) {
  const aLen = A.length, bLen = B.length
  if(aLen === 0 || bLen === 0) return []
  const aCol = A[0].length, bCol = B[0].length
  const res = Array.from({ length: aLen }, () => new Array(bCol).fill(0))
  for(let i = 0; i < aLen; i++) {
    for(let j = 0; j < bCol; j++) {
      let tmp = 0
      for(let k = 0; k < bLen; k++) {
        tmp += A[i][k] * B[k][j]
      }
      res[i][j] = tmp
    }
  }
  return res
};
