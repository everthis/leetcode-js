/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0)
  const graph = {}
  for (let [course, prereq] of prerequisites) {
    indegree[course]++
    graph[prereq] === undefined
      ? (graph[prereq] = [course])
      : graph[prereq].push(course)
  }
  const queue = [],
    ans = []
  for (let i = 0; i < indegree.length; i++) if (!indegree[i]) queue.push(i)
  while (queue.length) {
    let cur = queue.shift()
    ans.push(cur)
    for (let neigbhors of graph[cur] || []) {
      if (!--indegree[neigbhors]) queue.push(neigbhors)
    }
  }
  return ans.length === numCourses ? ans : []
}

// another

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
  const seen = new Set()
  const seeing = new Set()
  const res = []

  const adj = [...Array(numCourses)].map(r => [])
  for (let [u, v] of prerequisites) {
    adj[v].push(u)
  }
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return []
    }
  }
  return res.reverse()

  function dfs(v) {
    if (seen.has(v)) {
      return true
    }
    if (seeing.has(v)) {
      return false
    }
    seeing.add(v)
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false
      }
    }
    seeing.delete(v)
    seen.add(v)
    res.push(v)
    return true
  }
}
