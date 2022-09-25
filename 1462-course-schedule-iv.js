/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const n = numCourses, m = prerequisites.length
  const graph = {}, inDegree = Array(n).fill(0)
  
  for(const [s, e] of prerequisites) {
    if(graph[s] == null) graph[s] = []
    inDegree[e]++
    graph[s].push(e)
  }
  
  let q = []
  
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) q.push(i)
  }
  
  const hash = {}

  while(q.length) {
    const size = q.length
    const nxt = []
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(hash[e] == null) hash[e] = new Set()
        hash[e].add(cur)
        for(const dep of (hash[cur] || [])) {
          hash[e].add(dep)
        }
      
        if(inDegree[e] === 0) {
          nxt.push(e)
        }
      }
    }
    
    q = nxt
  }
  
  const res = []
  for(const [p, e] of queries) {
    if(hash[e] && hash[e].has(p)) res.push(true)
    else res.push(false)
  }
  
  return res
}

// another


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  // https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
  const n = numCourses
  const connected = Array.from({ length: n }, () => Array(n).fill(false))
  for(let p of prerequisites) connected[p[0]][p[1]] = true
  for(let k = 0; k < n; k++) {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        connected[i][j] = connected[i][j] || (connected[i][k] && connected[k][j]);
      }
    }
  }
  const res = []
  for(let q of queries) res.push(connected[q[0]][q[1]])
  return res
};

// another

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const n = numCourses
  const connected = Array.from({ length: n }, () => Array(n).fill(false))
  for (let p of prerequisites) connected[p[0]][p[1]] = true
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        connected[i][j] =
          connected[i][j] || (connected[i][k] && connected[k][j])
      }
    }
  }
  const res = []
  for (let q of queries) res.push(connected[q[0]][q[1]])
  return res
}

// another

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const graph = {},
    connected = Array.from({ length: numCourses }, () =>
      Array(numCourses).fill(-1)
    )
  for (const [u, v] of prerequisites) {
    if (graph[u] == null) graph[u] = []
    graph[u].push(v)
    connected[u][v] = 1
  }

  const res = []
  for (const [u, v] of queries) res.push(dfs(u, v))

  return res

  function dfs(u, v) {
    if (connected[u][v] !== -1) return connected[u][v]
    let res = false
    for (const next of graph[u] || []) {
      if (!res) {
        res ||= dfs(next, v)
      } else break
    }
    connected[u][v] = res
    return res
  }
}

