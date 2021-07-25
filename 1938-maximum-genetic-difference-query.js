/**
 * @param {number[]} parents
 * @param {number[][]} queries
 * @return {number[]}
 */
const maxGeneticDifference = function (parents, queries) {
  let pn = parents.length,
    qn = queries.length
  let root = parents.indexOf(-1)
  let children = initializeGraph(pn)
  for (let i = 0; i < pn; i++) {
    if (i != root) {
      children[parents[i]].push(i)
    }
  }
  let freq = Array(1 << 20).fill(0)
  let queriesByNode = initializeGraph(pn)
  for (let i = 0; i < qn; i++) {
    let query = queries[i]
    queriesByNode[query[0]].push(new Query(i, query[1]))
  }

  let res = Array(qn).fill(0)
  const dfs = (idx) => {
    let y = (1 << 19) + idx
    while (y > 0) {
      freq[y]++
      y >>= 1
    }
    for (const qnode of queriesByNode[idx]) {
      let j = qnode.index,
        x = qnode.val
      let cum = 0
      let bit = 1 << 18
      while (bit > 0) {
        let ii = (((1 << 19) ^ cum ^ x ^ bit) / bit) >> 0
        if (freq[ii] > 0) cum += bit
        bit >>= 1
      }
      res[j] = cum
    }
    for (const child of children[idx]) dfs(child)
    y = (1 << 19) + idx
    while (y > 0) {
      freq[y]--
      y >>= 1
    }
  }
  dfs(root)
  return res
}

const initializeGraph = (n) => {
  let G = []
  for (let i = 0; i < n; i++) G.push([])
  return G
}

function Query(index, val) {
  this.index = index
  this.val = val
}
