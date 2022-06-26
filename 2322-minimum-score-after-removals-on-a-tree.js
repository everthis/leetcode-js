/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function (nums, edges) {
  let n = nums.length,
    ans = Infinity
  let visited = Array(n).fill(0)
  let pc = []
  let adj = Array.from({ length: n }, () => [])
  let child_xor = Array(n).fill(0)
  let childs = Array.from({ length: n }, () => Array(n).fill(false))
  const { min, max } = Math
  let par = Array(n).fill(0)

  // Creating an adjacency matrix
  for (const edge of edges)
    adj[edge[0]].push(edge[1]), adj[edge[1]].push(edge[0])

  dfs(0)

  // console.log(childs)
  // console.log(pc)
  for (let i = 0; i < pc.length; i++)
    for (let j = i + 1; j < pc.length; j++) {
      // removing an edge i and j
      let a = pc[i][1],
        b = pc[j][1] // node that will come below when you delete an edge i and j
      let xa = child_xor[a],
        xb = child_xor[b],
        xc = child_xor[0]
      // console.log(a,b)
      if (childs[a][b]) (xc ^= xa), (xa ^= xb)
      else (xc ^= xa), (xc ^= xb)

      ans = min(max(xa, max(xb, xc)) - min(xa, min(xb, xc)), ans)
    }

  return ans

  function dfs(i) {
    let ans = nums[i]
    visited[i] = true

    for (let p of par) childs[p][i] = true // Defining this node as the child of all its parents

    par.push(i)

    for (let child of adj[i] || [])
      if (!visited[child]) {
        pc.push([i, child])
        ans ^= dfs(child) // Recurcively calculating xors
      }

    par.pop()

    return (child_xor[i] = ans)
  }
}
