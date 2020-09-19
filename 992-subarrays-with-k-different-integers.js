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
  const atMostK = (A, K) => {
    let left = 0,
      right = 0,
      counter = 0,
      count = [],
      result = 0
    while (right < A.length) {
      let currentR = A[right++]
      !count[currentR] ? ((count[currentR] = 1), counter++) : count[currentR]++
      while (counter > K) {
        let currentL = A[left++]
        if (--count[currentL] == 0) counter--
      }
      result += right - left
    }
    return result
  }
  return atMostK(A, K) - atMostK(A, K - 1)
}
