/**

Assume you have an array of length n initialized with all 0's and are given k update operations.
Each operation is represented as a triplet:
[startIndex, endIndex, inc] which increments each element of
subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

Return the modified array after all k operations were executed.

Example:

Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
Output: [-2,0,3,5,3]
Explanation:

Initial state:
[0,0,0,0,0]

After applying operation [1,3,2]:
[0,2,2,2,0]

After applying operation [2,4,3]:
[0,2,5,5,3]

After applying operation [0,2,-2]:
[-2,0,3,5,3]

*/

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
const getModifiedArray = function(length, updates) {
  const res = new Array(length).fill(0)
  for (let update of updates) {
    let value = update[2]
    let start = update[0]
    let end = update[1]
    res[start] += value
    if (end < length - 1) res[end + 1] -= value
  }
  let sum = 0
  for (let i = 0; i < length; i++) {
    sum += res[i]
    res[i] = sum
  }
  return res
}
