/**
 * @param {number[][]} arr
 * @return {number}
 */
const minFallingPathSum = function (arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const [m1, m2] = min2(arr[i - 1])
    for (j = 0; j < n; j++) {
      arr[i][j] += arr[i - 1][j] !== m1 ? m1 : m2
    }
  }
  return Math.min(...arr[n - 1])
}

function min2(arr) {
  let m1 = Infinity, m2 = Infinity
  arr.forEach(e => {
    if(e < m1) m2 = m1, m1 = e
    else if(e < m2) m2 = e
  })
  return [m1, m2]
}
