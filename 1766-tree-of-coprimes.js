/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
const getCoprimes = function (nums, edges) {
  const output = Array(nums.length).fill(null)
  const graph = new Map()
  for (let [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, [])
    if (!graph.has(v)) graph.set(v, [])
    graph.get(u).push(v)
    graph.get(v).push(u)
  }

  function getGCD(a, b) {
    if (!b) return a
    return getGCD(b, a % b)
  }

  // ancestors is an array of unique ancestors from the recent to the farthest
  // indices maps the index of each ancestor
  function dfs(i, ancestors, indices) {
    for (let num of ancestors) {
      const gcd = getGCD(nums[i], num)
      if (gcd === 1) {
        output[i] = indices[num]
        break
      }
    }

    if (output[i] === null) output[i] = -1
    ancestors = [nums[i], ...ancestors.filter((x) => x !== nums[i])]
    indices[nums[i]] = i
    for (let next of graph.get(i)) {
      if (output[next] === null) {
        dfs(next, ancestors, [...indices])
      }
    }
  }

  dfs(0, [], Array(51))
  return output
}
