/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
const minOperationsQueries = function (n, edges, queries) {
  let [directParents, counts, depths] = getParentsAndPrefixCounts(n, edges)
  let lcaModule = new LCA(n, directParents, depths)
  let ans = []
  for (let [a, b] of queries) {
    let lca = lcaModule.getLCA(a, b)
    let countsA = diffCounts(counts[a], counts[lca]),
      countsB = diffCounts(counts[b], counts[lca])
    let totalCounts = addCounts(countsA, countsB)
    let edgesInPath = depths[a] - depths[lca] + depths[b] - depths[lca]
    let maxCount = 0
    for (let i = 1; i <= 26; i++) {
      maxCount = Math.max(maxCount, totalCounts[i])
    }
    ans.push(edgesInPath - maxCount) // turn all other non-majority weights into the weight with the most occurances
  }
  return ans
}

function addCounts(countsA, countsB) {
  let total = Array(27)
  for (let i = 1; i <= 26; i++) {
    total[i] = countsA[i] + countsB[i]
  }
  return total
}

function diffCounts(countsA, countsLCA) {
  let diff = Array(27)
  for (let i = 1; i <= 26; i++) {
    diff[i] = countsA[i] - countsLCA[i]
  }
  return diff
}

function getParentsAndPrefixCounts(n, edges) {
  let directParents = Array(n).fill(-1)
  let graph = Array(n)
    .fill(0)
    .map(() => [])
  let prefixCounts = Array(n)
  for (let [u, v, w] of edges) {
    graph[u].push([v, w])
    graph[v].push([u, w])
  }
  let seen = Array(n).fill(false)
  seen[0] = true
  let queue = [[0, Array(27).fill(0), 0]]
  let depths = Array(n)
  while (queue.length) {
    let [node, count, depth] = queue.shift()
    prefixCounts[node] = count
    depths[node] = depth

    for (let [nei, weight] of graph[node]) {
      if (seen[nei]) continue
      let newCount = [...count]
      newCount[weight]++
      seen[nei] = true
      queue.push([nei, newCount, depth + 1])
      directParents[nei] = node
    }
  }
  return [directParents, prefixCounts, depths]
}

class LCA {
  constructor(n, directParents, depths) {
    this.maxDepth = Math.ceil(Math.log2(n))
    this.p = Array(this.maxDepth + 1)
      .fill(0)
      .map(() => Array(n).fill(-1))
    this.depths = depths

    // precomputation for binary lifting
    for (let node = 0; node < n; node++) {
      this.p[0][node] = directParents[node]
    }
    for (let pow2 = 1; pow2 <= this.maxDepth; pow2++) {
      for (let node = 0; node < n; node++) {
        let halfParent = this.p[pow2 - 1][node]
        this.p[pow2][node] =
          halfParent === -1 ? -1 : this.p[pow2 - 1][halfParent]
      }
    }
  }
  getLCA(a, b) {
    if (this.depths[a] > this.depths[b]) {
      let temp = a
      a = b
      b = temp
    }

    // bring both nodes up to the same depth
    let depthDiff = this.depths[b] - this.depths[a]
    for (let i = 0; i <= this.maxDepth; i++) {
      if ((depthDiff >> i) & 1) {
        b = this.p[i][b] // move b up to the 2^ith parent
      }
    }
    if (a === b) return a

    // move both nodes up by 2^ith levels if the 2^ith parents are not equal
    for (let i = this.maxDepth; i >= 0; i--) {
      // this decrements so that we can jump the nodes up incrementally
      if (this.p[i][a] !== this.p[i][b]) {
        // if 2^ith parents of both nodes are not equal, we can safely both move up
        a = this.p[i][a]
        b = this.p[i][b]
      }
    }
    return this.p[0][a]
  }
}
