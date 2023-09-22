/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
const minimumScore = function (nums, edges) {
  const n = nums.length, m = edges.length
  const graph = {}
  const children = {}
  const xor = nums.slice(0)
  const degree = Array(n).fill(0)

  for(const [p, q] of edges) {
    if(graph[p] == null) graph[p] = []
    if(graph[q] == null) graph[q] = []
    graph[p].push(q)
    graph[q].push(p)
    degree[p]++
    degree[q]++
  }

  let val = 0
  const seen = new Set()
  const queue = []
  for(let i = 0; i < n; i++) {
    val ^= nums[i]
    if(degree[i] === 1) {
      queue.push(i)
      seen.add(i)
    }
  }

  while(queue.length) {
    const cur = queue.shift()
    for(const nxt of (graph[cur] || [])) {
      if(!seen.has(nxt)) {
        if(children[nxt] == null) children[nxt] = new Set()
        children[nxt].add(cur)
        for(const e of (children[cur] || [])) {
          children[nxt].add(e)
        }
        xor[nxt] ^= xor[cur]
      }
      degree[nxt]--
      if(degree[nxt] === 1) {
        seen.add(nxt)
        queue.push(nxt)
      }
    }
  }

  let res = Infinity

  for(let i = 0; i < m - 1; i++) {
    for(let j = i + 1; j < m; j++) {
      let [a, b] = edges[i]
      // Let a, c be the lower break points
      if(children[a]?.has(b)) {
        ;[a, b] = [b, a]
      }
      let [c, d] = edges[j]
      if(children[c]?.has(d)) {
        ;[c, d] = [d, c]
      } 
      let cur
      if(children[a]?.has(c)) {
        cur = [xor[c], xor[a] ^ xor[c], val ^ xor[a]] 
      } else if(children[c]?.has(a)) {
        cur = [xor[a], xor[c] ^ xor[a], val ^ xor[c]]
      } else {
        cur = [xor[a], xor[c], val ^ xor[a] ^ xor[c]]
      }
      res = Math.min(res, Math.max(...cur) - Math.min(...cur))
    }
  }

  return res
}

// another

/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function (nums, edges) {
  let n = nums.length,
    ans = Infinity
  let visited = Array(n).fill(0)
  let pc = []
  let adj = Array.from({ length: n }, () => [])
  let child_xor = Array(n).fill(0)
  let childs = Array.from({ length: n }, () => Array(n).fill(false))
  const { min, max } = Math
  let par = Array(n).fill(0)

  // Creating an adjacency matrix
  for (const edge of edges)
    adj[edge[0]].push(edge[1]), adj[edge[1]].push(edge[0])

  dfs(0)

  // console.log(childs)
  // console.log(pc)
  for (let i = 0; i < pc.length; i++)
    for (let j = i + 1; j < pc.length; j++) {
      // removing an edge i and j
      let a = pc[i][1],
        b = pc[j][1] // node that will come below when you delete an edge i and j
      let xa = child_xor[a],
        xb = child_xor[b],
        xc = child_xor[0]
      // console.log(a,b)
      if (childs[a][b]) (xc ^= xa), (xa ^= xb)
      else (xc ^= xa), (xc ^= xb)

      ans = min(max(xa, max(xb, xc)) - min(xa, min(xb, xc)), ans)
    }

  return ans

  function dfs(i) {
    let ans = nums[i]
    visited[i] = true

    for (let p of par) childs[p][i] = true // Defining this node as the child of all its parents

    par.push(i)

    for (let child of adj[i] || [])
      if (!visited[child]) {
        pc.push([i, child])
        ans ^= dfs(child) // Recurcively calculating xors
      }

    par.pop()

    return (child_xor[i] = ans)
  }
}

// another

/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
const minimumScore = function (nums, edges) {
  const n = nums.length,
    m = edges.length
  const graph = {},
    degree = Array(n).fill(0)
  const children = [],
    vArr = nums.slice()
  for (let i = 0; i < n; i++) children[i] = new Set()
  for (const [u, v] of edges) {
    if (graph[u] == null) graph[u] = []
    if (graph[v] == null) graph[v] = []
    graph[u].push(v)
    graph[v].push(u)
    degree[u]++
    degree[v]++
  }
  let v = 0,
    q = []
  const seen = new Set()
  for (let i = 0; i < n; i++) {
    v ^= nums[i]
    if (degree[i] === 1) {
      q.push(i)
      seen.add(i)
    }
  }

  while (q.length) {
    const tmp = []
    const size = q.length
    for (let i = 0; i < size; i++) {
      const cur = q[i]
      for (const nxt of graph[cur]) {
        // chidlren
        // vArr
        if (!seen.has(nxt)) {
          children[nxt].add(cur)
          children[nxt] = mergeSet(children[nxt], children[cur])
          vArr[nxt] ^= vArr[cur]
        }
        degree[nxt]--
        if (degree[nxt] === 1) {
          tmp.push(nxt)
          seen.add(nxt)
        }
      }
    }

    q = tmp
  }

  let res = Infinity
  for (let i = 0; i < m - 1; i++) {
    for (let j = i + 1; j < m; j++) {
      let [a, b] = edges[i]
      if (children[a].has(b)) {
        ;[a, b] = [b, a]
      }
      let [c, d] = edges[j]
      if (children[c].has(d)) {
        ;[c, d] = [d, c]
      }
      if (children[c].has(a)) {
        const tmp = [vArr[a], vArr[c] ^ vArr[a], v ^ vArr[c]]
        res = Math.min(res, Math.max(...tmp) - Math.min(...tmp))
      } else if (children[a].has(c)) {
        const tmp = [vArr[c], vArr[a] ^ vArr[c], v ^ vArr[a]]
        res = Math.min(res, Math.max(...tmp) - Math.min(...tmp))
      } else {
        const tmp = [vArr[a], vArr[c], v ^ vArr[a] ^ vArr[c]]
        res = Math.min(res, Math.max(...tmp) - Math.min(...tmp))
      }
    }
  }

  return res
}

function mergeSet(s, t) {
  for (const e of t) {
    s.add(e)
  }
  return s
}

