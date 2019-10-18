/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
  const seen = new Set()
  const seeing = new Set()
  const adj = [...Array(numCourses)].map(r => [])
  for (let [u, v] of prerequisites) {
    adj[v].push(u)
  }
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false
    }
  }
  return true
  function dfs(v) {
    if (seen.has(v)) return true
    if (seeing.has(v)) return false
    seeing.add(v)
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false
      }
    }
    seeing.delete(v)
    seen.add(v)
    return true
  }
}

// another

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(vertices, edges) {
  const sortedOrder = []
  if (vertices <= 0) {
    return sortedOrder
  }
  const inDegree = Array(vertices).fill(0)
  const graph = Array(vertices)
    .fill(0)
    .map(() => Array())
  edges.forEach(edge => {
    let parent = edge[0]
    let child = edge[1]
    graph[parent].push(child)
    inDegree[child]++
  })
  const sources = []
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i)
    }
  }
  while (sources.length > 0) {
    const vertex = sources.shift()
    sortedOrder.push(vertex)

    graph[vertex].forEach(child => {
      inDegree[child] -= 1
      if (inDegree[child] === 0) {
        sources.push(child)
      }
    })
  }
  return sortedOrder.length === vertices ? true : false
}
