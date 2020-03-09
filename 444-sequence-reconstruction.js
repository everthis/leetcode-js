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
