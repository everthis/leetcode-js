/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
const frogPosition = function (n, edges, t, target) {
  const m = new Map()
  for(let e of edges) {
    const [from, to] = e
    if(!m.has(from - 1)) m.set(from - 1, [])
    if(!m.has(to - 1)) m.set(to - 1, [])
    m.get(from - 1).push(to - 1)
    m.get(to - 1).push(from - 1)
  }
  const visited = new Set()
  visited.add(0)
  const q = [0]
  const res = [1]
  while(q.length && t-- > 0) {
    for(let size = q.length; size > 0 ; size--) {
      const u = q.shift()
      let count = 0
      for(let e of (m.get(u) || [])) {
        if(!visited.has(e)) count++
      }
      for(let e of (m.get(u) || [])) {
        if(visited.has(e)) continue
        q.push(e)
        visited.add(e)
        res[e] = res[u] / count
      }
      if(count > 0) res[u] = 0      
    }
  }
  return res[target - 1] || 0
}

// another

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
