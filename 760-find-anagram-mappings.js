/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = function(A, B) {
  const m = new Map()
  for(let i = 0, len = B.length; i < len; i++) {
    m.set(B[i], i)
  }
  const res = []
  for(let i = 0, len = A.length; i < len; i++) {
    res.push(m.get(A[i]))
  }
  return res
};
