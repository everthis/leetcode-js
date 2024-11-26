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

// another

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
    const graph = {};
    for (let i = 0;i < prerequisites.length;i++) {
        const e = prerequisites[i];
        inDegree[e[0]]++;
        if (graph[e[1]]) {
            graph[e[1]].push(e[0]);
        } else {
            graph[e[1]] = [e[0]];
        }
    }
    let q = []
    for (let i = 0;i < inDegree.length;i++) {
        if (inDegree[i] === 0) {
            q.push(i);
        }
    }
    const res = []
    let count = 0;
    while(q.length) {
        const tmp = []
        const size = q.length
        for(let i = 0;i < size;i++) {
            const node = q[i]
            res.push(node)
            count++
            if (graph[node]) {
                for (let j = 0;j < graph[node].length;j++) {
                    inDegree[graph[node][j]]--
                    if (inDegree[graph[node][j]] === 0) {
                        tmp.push(graph[node][j])
                    }
                }
            }
        }

        q = tmp
    }

    return count === numCourses ? res : [];
};
