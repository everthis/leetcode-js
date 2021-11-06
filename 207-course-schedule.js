/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
  const [graph, inDegree] = buildGraph(numCourses, prerequisites)
  
  const q = []
  for(let i = 0; i < numCourses; i++) {
    if(inDegree.get(i) == null) q.push(i)
  }
  let num = 0
  while(q.length) {
    const pre = q.pop()
    num++
    for(const next of (graph.get(pre) || [])) {
      inDegree.set(next, inDegree.get(next) - 1)
      if(inDegree.get(next) === 0) q.push(next)
    }
  }
  return num === numCourses
  
  
  function buildGraph(n, arr) {
    const res = new Map(), inDegree = new Map()
    for(const [cur, pre] of arr) {
      if(res.get(pre) == null) res.set(pre, new Set())
      res.get(pre).add(cur)
      if(inDegree.get(cur) == null) inDegree.set(cur, 0)
      inDegree.set(cur, inDegree.get(cur) + 1)
    }
    return [res, inDegree]
  }
};

// another

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

// another

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
  const set = new Set(), hash = {}
  for(let i = 0; i < prerequisites.length; i++) {
    const [cur, pre] = prerequisites[i]
    if(hash[cur] == null) hash[cur] = new Set()
    hash[cur].add(pre)
  }
  const q = []

  for(let i = 0; i < numCourses; i++) {
    if(hash[i] == null) q.push(i)
  }
  let visited = 0

  while(q.length) {
    const cur = q.shift()
    visited++
    Object.keys(hash).forEach(k => {
       if(hash[k].has(cur)) {
         hash[k].delete(cur)
       }
       if(hash[k].size === 0) {
         delete hash[k]
         q.push(+k)
       }
    })
  }
  return visited === numCourses
};
