/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function(n, edges) {
  const nums = Array(n).fill(-1)
  for(let i = 0; i < edges.length; i++) {
    const x = find(nums, edges[i][0])
    const y = find(nums, edges[i][1])
    if(x === y) return false
    nums[x] = y
  }
  return edges.length === n - 1
  function find(arr, i) {
    if(arr[i] === -1) return i
    return find(arr, arr[i])
  }
};
