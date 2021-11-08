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

