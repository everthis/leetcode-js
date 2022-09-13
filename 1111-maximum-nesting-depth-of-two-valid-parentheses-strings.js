/**
 * @param {string} seq
 * @return {number[]}
 */
const maxDepthAfterSplit = function(seq) {
  const n = seq.length
  const res = Array(n).fill(0)
  let depth = 0
  for(let i = 0; i < n; i++) {
    const ch = seq[i]
    if(ch === '(') {
      depth++
    }
    res[i] = depth % 2
    if(ch === ')') depth--
  }
  return res
};
