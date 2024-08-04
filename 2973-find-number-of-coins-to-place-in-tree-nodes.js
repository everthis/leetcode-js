/**
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number[]}
 */
var placedCoins = function (edges, cost) {
  let tree = buildRootedTree(buildGraph(cost.length, edges), 0)
  let res = Array(cost.length).fill()

  function solve(root) {
    let node = tree[root]
    let c = cost[root]

    if (c > 0) node.max1 = c
    else node.min1 = c

    for (let child of node.aNodes) {
      solve(child)
      let childNode = tree[child]
      opt(node, childNode.max1)
      opt(node, childNode.max2)
      opt(node, childNode.max3)
      opt(node, childNode.min1)
      opt(node, childNode.min2)
      opt(node, childNode.min3)
    }

    let cnt =
      !!node.min1 +
      !!node.min2 +
      !!node.min3 +
      !!node.max1 +
      !!node.max2 +
      !!node.max3
    if (cnt < 3) {
      res[root] = 1
      return
    }

    res[root] = 0
    let v = node.max1 * node.max2 * node.max3
    if (v > res[root]) res[root] = v
    v = node.max1 * node.min1 * node.min2
    if (v > res[root]) res[root] = v
  }

  solve(0)
  return res
}

/**
 * @typedef {{ aNodes: number[] }} TGraphNode
 * @param {number} n
 * @param {[number,number,number?][]} edges
 * @return {TGraphNode[]}
 */
function buildGraph(n, edges) {
  /** @type {TGraphNode[]} */
  let nodes = []
  for (let i = 0; i < n; i++) nodes.push({ aNodes: [] })

  let m = edges.length
  for (let i = 0; i < m; i++) {
    let [u, v] = edges[i]
    nodes[u].aNodes.push(v)
    nodes[v].aNodes.push(u)
  }

  return nodes
}

/**
 * @typedef {{ parent: number, min1, min2, min3, max1, max2, max3 }} TTreeNode
 * @param {(TGraphNode & TTreeNode)[]} graph
 * @param {number} root
 * @param {number?} parent
 * @return {(TGraphNode & TTreeNode)[]}
 */
function buildRootedTree(graph, root, parent) {
  let node = graph[root]
  node.parent = parent

  let m = node.aNodes.length
  let parentIndex = undefined
  for (let i = 0; i < m; i++) {
    if (node.aNodes[i] == parent) parentIndex = i
    else buildRootedTree(graph, node.aNodes[i], root)
  }

  if (parentIndex != undefined) {
    node.aNodes[parentIndex] = node.aNodes[m - 1]
    node.aNodes.pop()
  }

  node.max1 = 0
  node.max2 = 0
  node.max3 = 0
  node.min1 = 0
  node.min2 = 0
  node.min3 = 0
  return graph
}

/**
 * @param {TTreeNode} node
 * @param {number} cost
 */
function opt(node, cost) {
  if (!cost) return
  if (cost > 0) {
    if (cost >= node.max1) {
      node.max3 = node.max2
      node.max2 = node.max1
      node.max1 = cost
    } else if (cost >= node.max2) {
      node.max3 = node.max2
      node.max2 = cost
    } else if (cost > node.max3) {
      node.max3 = cost
    }
  } else {
    if (cost <= node.min1) {
      node.min3 = node.min2
      node.min2 = node.min1
      node.min1 = cost
    } else if (cost <= node.min2) {
      node.min3 = node.min2
      node.min2 = cost
    } else if (cost < node.min3) {
      node.min3 = cost
    }
  }
}
