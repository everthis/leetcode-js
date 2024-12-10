/**
 * @param {number[]} edges
 * @return {number}
 */
const longestCycle = function(edges) {
  const n = edges.length;
  const visited = new Array(n).fill(false);
  const ind = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (edges[i] !== -1) {
      ind[edges[i]]++;
    }
  }
  let q = []
  for(let i = 0; i < n; i++) {
    if (ind[i] === 0) {
      q.push(i);
    }
  }
  while(q.length) {
    const node = q.pop()
    visited[node] = true;
    const nxt = edges[node];
    if(nxt !== -1) {
      ind[nxt]--;
      if (ind[nxt] === 0) {
        q.push(nxt);
      }
    }
  }
  let res = -1
  for(let i = 0; i < n; i++) {
    if (!visited[i]) {
        let cnt = 0
        let cur = i
        while (!visited[cur]) {
            visited[cur] = true
            cur = edges[cur]
            cnt++
        }
        res = Math.max(res, cnt)
    }
  }

  return res
};

// another

/**
 * @param {number[]} edges
 * @return {number}
 */
const longestCycle = function(edges) {
  const n = edges.length, colors = Array(n).fill(0), dis = Array(n).fill(0)
  let res = -1
  
  for(let i = 0; i < n; i++) {
    if(colors[i] === 0) {
      res = Math.max(res, dfs(i, 0))
    }
  }
  
  return res
  
  function dfs(u, d) {
    let ans = -1
    dis[u] = d
    colors[u]  = 1
    
    if(edges[u] !== -1) {
      if(colors[edges[u]] == 1) {
        return dis[u] - dis[edges[u]] + 1
      } else if(colors[edges[u]] === 0) {
        ans = Math.max(ans, dfs(edges[u], d + 1))         
      }
    }
    
    colors[u] = 2
    return ans
  }
};
