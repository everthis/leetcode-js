/**
 * @param {string} s
 * @param {number} numOps
 * @return {number}
 */
var minLength = function (s, numOps) {
  const arr = Array.from(s, Number)

  const L = groupLengths(arr)

  let l = 1,
    r = 100000
  while (l < r) {
    const m = Math.floor((l + r) / 2)
    const need = check(arr, m)
    if (need <= numOps) {
      r = m
    } else {
      l = m + 1
    }
  }
  return l

  function check(A, k) {
    if (k === 1) {
      let res = 0
      for (let i = 0; i < A.length; i++) {
        if (A[i] === i % 2) res++
      }
      return Math.min(res, A.length - res)
    }
    return L.reduce((acc, l) => acc + Math.floor(l / (k + 1)), 0)
  }

  function groupLengths(arr) {
    const lengths = []
    let count = 1
    for (let i = 1; i <= arr.length; i++) {
      if (i < arr.length && arr[i] === arr[i - 1]) {
        count++
      } else {
        lengths.push(count)
        count = 1
      }
    }
    return lengths
  }
}
