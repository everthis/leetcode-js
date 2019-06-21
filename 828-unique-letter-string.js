/**
 * @param {string} S
 * @return {number}
 */
const uniqueLetterString = function(S) {
  const len = S.length
  if (len === 0) return 0
  if (len === 1) return 1
  let count = 0
  let lastP = new Array(26).fill(0)
  let lastLastP = new Array(26).fill(0)
  let pre = 0
  for (let i = 0; i < len; i++) {
    let idx = S.charCodeAt(i) - 'A'.charCodeAt(0)
    pre += i - lastP[idx] + 1
    pre -= lastP[idx] - lastLastP[idx]
    count += pre
    lastLastP[idx] = lastP[idx]
    lastP[idx] = i + 1
  }
  return count % 1000000007
}
