/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
const frogPosition = function (n, edges, t, target) {
  const graph = { 1: new Set() }
  for (let [from, to] of edges) {
    if (graph[from]) graph[from].add(to)
    else graph[from] = new Set([to])
    if (graph[to]) graph[to].add(from)
    else graph[to] = new Set([from])
  }

  // dfs through the graph storing the vetices you've visited, number of jumps, and current vertice
  const dfs = (from, numJumps, visited) => {
    // if the count equals t then return 1 if the vertice is the target
    if (numJumps === t) return from === target ? 1 : 0

    // average out all the next results
    let numEdgesCanJump = 0
    let total = 0
    for (let to of graph[from]) {
      if (visited.has(to)) continue
      visited.add(to)
      total += dfs(to, numJumps + 1, visited)
      visited.delete(to)
      numEdgesCanJump++
    }

    // if we can jump, average all the next results
    // otherwise we can't jump anywhere and return 1 if we are at the target
    // if we are not at the target return 0
    if (numEdgesCanJump > 0) {
      return total / numEdgesCanJump
    }
    return from === target ? 1 : 0
  }
  return dfs(1, 0, new Set([1]))
}
