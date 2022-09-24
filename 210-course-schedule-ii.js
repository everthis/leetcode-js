/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
  const graph = {}, inDegree = Array(numCourses).fill(0)
  for(const [s, e] of prerequisites) {
    inDegree[s]++
    if(graph[e] == null) graph[e] = []
    graph[e].push(s)
  }
  
  const res = []
  let q = []
  for(let i = 0; i < numCourses; i++) {
    if(inDegree[i] === 0) q.push(i)
  }
  
  while(q.length) {
    const nxt = []
    for(let i = 0; i < q.length; i++) {
      const cur = q[i]
      res.push(cur)
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(inDegree[e] === 0) nxt.push(e)
      }
    }
    q = nxt
  }
  
  return res.length === numCourses ? res : []
}

// another

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
