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
