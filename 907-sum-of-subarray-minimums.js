/**
 * @param {number[]} A
 * @return {number}
 */
const sumSubarrayMins = function (A) {
  const n = A.length
  const s1 = []
  const s2 = []
  const left = new Array(n)
  const right = new Array(n)

  for (let i = 0; i < n; i++) {
    let count = 1
    while (s1.length && s1[s1.length - 1][0] > A[i]) {
      count += s1.pop()[1]
    }
    left[i] = count
    s1.push([A[i], count])
  }

  for (let i = n - 1; i >= 0; i--) {
    let count = 1
    // use ">=" to deal with duplicate elements
    while (s2.length && s2[s2.length - 1][0] >= A[i]) {
      count += s2.pop()[1]
    }
    right[i] = count
    s2.push([A[i], count])
  }

  let res = 0
  const mod = 1e9 + 7
  for (let i = 0; i < n; i++) {
    res = (res + left[i] * A[i] * right[i]) % mod
  }
  return res
}
