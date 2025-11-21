/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number}
 */
var minIncrease = function (n, edges, cost) {
  const tree = Array.from({ length: n }, () => [])

  for (const e of edges) {
    tree[e[0]].push(e[1])
    tree[e[1]].push(e[0])
  }

  const changes = [0]
  dfs(0, -1, tree, cost, changes)

  return changes[0]
}

function dfs(node, parent, tree, cost, changes) {
  const childCosts = []

  for (const nei of tree[node]) {
    if (nei === parent) {
      continue
    }

    const subCost = dfs(nei, node, tree, cost, changes)
    childCosts.push(subCost)
  }

  if (childCosts.length === 0) {
    return cost[node]
  }

  const maxCost = Math.max(...childCosts)

  for (const c of childCosts) {
    if (c < maxCost) {
      changes[0]++
    }
  }

  return cost[node] + maxCost
}


// another

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number}
 */
var minIncrease = function(n, edges, cost) {
  const g = {}
  for(const [u, v] of edges) {
    if(g[u] == null) g[u] = []
    if(g[v] == null) g[v] = []
    g[u].push(v)
    g[v].push(u)
  }
  let res = 0

  dfs(0, -1)
  return res

  function dfs(i, f) {
    const score = []
    for(let j of (g[i] || [])) {
      if(j === f) continue
      score.push(dfs(j, i))
    }
    if(score.length === 0) return cost[i]
    let ans = Math.max(...score)

    for(const v of score) {
      if(ans > v) res++
    }

    return ans + cost[i]
  }

};
