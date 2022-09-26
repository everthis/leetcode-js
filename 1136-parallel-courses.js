/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
const minimumSemesters = function (n, relations) {
  const inDegree = Array(n + 1).fill(0)
  const graph = {}
  for(const [prev, nxt] of relations) {
    if(graph[prev] == null) graph[prev] = []
    graph[prev].push(nxt)

    inDegree[nxt]++
  }

  let q = []
  for(let i = 1; i <= n; i++) {
    if(inDegree[i] === 0) q.push(i)
  }

// console.log(inDegree)
  let res = 0, cnt = 0
  while(q.length) {
    const size = q.length, nxt = []

    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(inDegree[e] === 0) {
          nxt.push(e)
        }
      }
    }
    res++
    cnt += size
    q = nxt
    // console.log(nxt)
  }
// console.log(cnt, res)

  return cnt === n ? res : -1
}


// another

/**
 * @param {number} N
 * @param {number[][]} relations
 * @return {number}
 */
const minimumSemesters = function (N, relations) {
  const g = new Map() // key: prerequisite, value: course list.
  const inDegree = new Array(N + 1).fill(0) // inDegree[i]: number of prerequisites for i.
  for (let r of relations) {
    if (!g.has(r[0])) g.set(r[0], [])
    g.get(r[0]).push(r[1]) // construct graph.
    ++inDegree[r[1]] // count prerequisites for r[1].
  }
  const q = [] // save current 0 in-degree vertices.
  for (let i = 1; i <= N; ++i) if (inDegree[i] === 0) q.push(i)
  let semester = 0
  while (q.length) {
    // BFS traverse all currently 0 in degree vertices.
    for (let sz = q.length; sz > 0; --sz) {
      // sz is the search breadth.
      const c = q.shift()
      --N
      // c's in-degree is currently 0, but it is not a prerequisite of anyone else.
      if (!g.has(c)) continue
      const tmp = g.get(c)
      g.delete(c)
      for (let course of tmp)
        if (--inDegree[course] === 0)
          // decrease the in-degree of course's neighbors.
          q.push(course) // add current 0 in-degree vertex into Queue.
    }
    ++semester // need one more semester.
  }
  return N === 0 ? semester : -1
}
