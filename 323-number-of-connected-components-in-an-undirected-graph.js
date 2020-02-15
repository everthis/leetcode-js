/**

Given n nodes labeled from 0 to n - 1 and a list of undirected
edges (each edge is a pair of nodes), write a function to find
the number of connected components in an undirected graph.

Example 1:

Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

Output: 2

Example 2:

Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1

Note:
You can assume that no duplicate edges will appear in edges.
Since all edges are undirected, [0, 1] is the same
as [1, 0] and thus will not appear together in edges.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = function(n, edges) {
  const nums = Array(n).fill(-1)
  for (let i = 0; i < edges.length; i++) {
    const x = find(nums, edges[i][0])
    const y = find(nums, edges[i][1])
    if (x !== y) nums[x] = y
  }
  return nums.filter(num => num === -1).length
}

const find = (nums, i) => {
  if (nums[i] === -1) return i
  return find(nums, nums[i])
}
