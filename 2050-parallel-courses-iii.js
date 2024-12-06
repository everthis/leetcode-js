/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function(n, relations, time) {
  const adj = Array(n + 1).fill(0).map(() => []);
    const inDegree = Array(n + 1).fill(0);
    for (const [u, v] of relations) {
        adj[u].push(v);
        inDegree[v]++;
    }
    let q = []
    const finishTime = Array(n + 1).fill(0);
    for(let i = 1; i <= n; i++) {
        if(inDegree[i] === 0) {
            q.push(i);
            finishTime[i] = time[i - 1];
        }
    }


    while(q.length) {
        const size = q.length;
        const tmp = []
        for(let i = 0; i < size; i++) {
            const e = q[i];
            for(const v of adj[e]) {
                inDegree[v]--;
                finishTime[v] = Math.max(finishTime[v], finishTime[e] + time[v - 1]);
                if(inDegree[v] === 0) {
                    tmp.push(v);
                }
            }
        }

        q = tmp
    }

    return Math.max(...finishTime.slice(1))
};

// another

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function (n, relations, time) {
  const inDegree = Array(n + 1).fill(0)
  const graph = {}, dist = Array(n + 1).fill(0)
  
  for(const [pre, nxt] of relations) {
    if(graph[pre] == null) graph[pre] = []
    graph[pre].push(nxt)
    inDegree[nxt]++
  }

  let q = []
  for(let i = 1;i <=n;i++) {
    if(inDegree[i]===0) {
      q.push(i)
      dist[i] = time[i - 1]
    }
  }
  while(q.length) {
    const size = q.length, nxt = []

    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        dist[e] = Math.max(dist[e], dist[cur] + time[e - 1])
        inDegree[e]--
        if(inDegree[e] === 0) {
          nxt.push(e)
        }
      }
    }

    q = nxt
  }

  return Math.max(...dist)
}

// another

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function(n, relations, time) {
  const graph = {}, dist = Array(n).fill(0), inDegree = Array(n).fill(0)
  
  for(let [pre, next] of relations) {
    pre--, next--
    if(graph[pre] == null) graph[pre] = []
    graph[pre].push(next)
    inDegree[next]++
  }

  const q = []
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) {
      q.push(i)
      dist[i] = time[i]
    }
  }

  let res = 0
  while(q.length) {
    const cur = q.shift()
    for(const next of (graph[cur] || [])) {
      dist[next] = Math.max(dist[next], dist[cur] + time[next])
      inDegree[next]--
      if(inDegree[next] === 0) q.push(next)
    }
  }
  
  return Math.max(...dist)
}

// another

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function(n, relations, time) {
  const graph = {}, dist = Array(n).fill(0), inDegree = Array(n).fill(0)
  for(let [from, to] of relations) {
    from--, to--
    if (graph[from] == null) graph[from] = []
    graph[from].push(to)
    inDegree[to]++
  }
  const q = []
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) {
      q.push(i)
      dist[i] = time[i]
    }
  }

  while(q.length) {
    const u = q.shift()
    for(const v of (graph[u] || [])) {
      dist[v] = Math.max(dist[v], dist[u] + time[v])
      if(--inDegree[v] === 0) q.push(v)
    }
  }

  let res = 0
  for(let e of dist) {
    if(e > res) res = e
  }
  return res
};
