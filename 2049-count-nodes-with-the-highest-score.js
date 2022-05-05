/**
 * @param {number[]} parents
 * @return {number}
 */
const countHighestScoreNodes = function(parents) {
  const n = parents.length, graph = {}, hash = {}
  for(let i = 1; i < n; i++) {
    if(graph[parents[i]] == null) graph[parents[i]] = []
    graph[parents[i]].push(i)
  }
  dfs(0)
  
  function dfs(node) {
    let product = 1, num = 0
    for(let child of (graph[node] || [])) {
      const tmp = dfs(child)
      product *= tmp
      num += tmp
    }
    if(n - 1 - num > 0) product *= (n - 1 - num)
    hash[product] = (hash[product] || 0) + 1
    return num + 1
  }
  const maxKey = Math.max(...Object.keys(hash))
  return hash[maxKey]
};

// another

/**
 * @param {number[]} parents
 * @return {number}
 */
const countHighestScoreNodes = function(parents) {
  const n = parents.length, hash = {}, graph = {}
  for(let i = 1; i < n; i++) {
    if(graph[parents[i]] == null) graph[parents[i]] = []
    graph[parents[i]].push(i)
  }

  dfs(0)
  const mk = Math.max(...Object.keys(hash))
  return hash[mk]
  
  function dfs(i) {
    let num = 0, prod = 1
    for(const e of (graph[i] || []) ) {
      const tmp = dfs(e)
      num += tmp
      prod *= tmp
    }
    
    if(n - 1 - num > 0) prod *= (n - 1 - num)
    hash[prod] = (hash[prod] || 0) + 1

    return num + 1
  }
};
