/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLengthOfOptimalCompression = function(s, k) {
  const m = new Map()
  function counter(start, last, lastCount, left) {
    if(left < 0) return Infinity
    if(start >= s.length) return 0
    let res
    const k = `${start}-${last}-${lastCount}-${left}`
    if(m.has(k)) return m.get(k)
    if(s[start] === last) {
      const incr = (lastCount === 1 || lastCount === 9 || lastCount === 99) ? 1 : 0
      res = incr + counter(start + 1, last, lastCount + 1, left)
    } else {
      const keepCounter = 1 + counter(start + 1, s[start], 1, left)
      const delCounter = counter(start + 1, last,  lastCount, left - 1)
      res = Math.min(keepCounter, delCounter)
    }
    m.set(k, res)
    return res
  }
  return counter(0, '', 0, k)
};
