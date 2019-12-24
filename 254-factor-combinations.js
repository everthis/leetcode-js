/**

Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.

Note:

You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Example 1:

Input: 1
Output: []
Example 2:

Input: 37
Output:[]
Example 3:

Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
Example 4:

Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]

*/

/**
 * @param {number} n
 * @return {number[][]}
 */
const getFactors = function(n) {
  const res = []
  if(n <= 3) return res
  helper(n, 2, [], res)
  return res
};
function helper(n, start, cur, res) {
  if(n === 1) {
    if(cur.length > 1) {
      res.push(cur.slice())
    }
    return
  }
  for(let i = start; i <= Math.sqrt(n); i++) {
    if(n % i !== 0) continue
    cur.push(i)
    helper(n/i, i, cur, res)
    cur.pop()
  }
  let i = n
  cur.push(i)
  helper(n/i, i, cur, res)
  cur.pop()
}
