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
