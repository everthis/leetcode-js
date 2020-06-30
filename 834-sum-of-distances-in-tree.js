/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function (N, edges) {
  const graph = createGraph(N, edges)
  const counts = new Array(N).fill(0)
  const dists = new Array(N).fill(0)
  dists[0] = getCount(graph, 0, -1, counts).sum
  return transferDist(N, graph, 0, -1, counts, dists)
}

function transferDist(N, graph, u, pre, counts, dists) {
  if (pre >= 0) {
    const nRight = counts[u]
    const nLeft = N - nRight
    dists[u] = dists[pre] - nRight + nLeft
  }
  for (const v of graph[u]) {
    if (v !== pre) {
      transferDist(N, graph, v, u, counts, dists)
    }
  }
  return dists
}

function getCount(graph, u, pre, counts) {
  const output = { nNodes: 0, sum: 0 }
  for (const v of graph[u]) {
    if (v !== pre) {
      const result = getCount(graph, v, u, counts)
      output.nNodes += result.nNodes
      output.sum += result.nNodes + result.sum
    }
  }
  output.nNodes += 1
  counts[u] = output.nNodes
  return output
}

function createGraph(N, edges) {
  const graph = new Array(N).fill(null).map(() => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  return graph
}
