/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
const sequenceReconstruction = function(org, seqs) {
  const pairs = {}
  const idxs = {}
  for (let i = 0; i < org.length; i++) idxs[org[i]] = i
  for (let j = 0; j < seqs.length; j++) {
    const s = seqs[j]
    for (let i = 0; i < s.length; i++) {
      if (idxs[s[i]] == null) return false
      if (i > 0 && idxs[s[i - 1]] >= idxs[s[i]]) return false
      pairs[`${s[i - 1]}_${s[i]}`] = 1
    }
  }

  for (let i = 0; i < org.length; i++)
    if (pairs[`${org[i - 1]}_${org[i]}`] == null) return false

  return true
}

// another

/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
const sequenceReconstruction = function(org, seqs) {
  const graph = new Map()
  const indegree = new Map()
  seqs.forEach(seq => {
    for (let i = 0; i < seq.length; i++) {
      if (!graph.has(seq[i])) graph.set(seq[i], [])
      if (!indegree.has(seq[i])) indegree.set(seq[i], 0)
      if (i > 0) {
        graph.get(seq[i - 1]).push(seq[i])
        indegree.set(seq[i], indegree.get(seq[i]) + 1)
      }
    }
  })
  if (org.length !== graph.size) return false
  const array = []
  for (let [key, val] of indegree.entries()) {
    if (val === 0) array.push(key)
  }
  let index = 0
  while (array.length > 0) {
    if (array.length > 1) return false
    const current = array.shift()
    if (org[index] !== current) {
      return false
    }
    index++
    graph.get(current).forEach(next => {
      indegree.set(next, indegree.get(next) - 1)
      if (indegree.get(next) === 0) array.push(next)
    })
  }
  return index === org.length
}

