/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = function(A, K) {
  let res = 0
  let prefix = 0
  const m = new Array(A.length + 1).fill(0)
  for (let i = 0, j = 0, cnt = 0, len = A.length; i < len; i++) {
    if (m[A[i]]++ === 0) cnt++
    if (cnt > K) {
      m[A[j++]]--
      cnt--
      prefix = 0
    }
    while (m[A[j]] > 1) {
      prefix++
      m[A[j++]]--
    }
    if (cnt === K) res += prefix + 1
  }
  return res
}

// another

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = function (A, K) {
  return mostK(K) - mostK(K - 1)
  function mostK(num) {
    const m = {}, len = A.length
    let i = 0, j = 0, res = 0
    for(j = 0; j < len; j++) {
      if(!m[A[j]]) m[A[j]] = 0, num--
      m[A[j]]++
      while(num < 0) {
        m[A[i]]--
        if(!m[A[i]]) num++
        i++
      }
      res += j - i + 1
    }
    return res
  }
}

