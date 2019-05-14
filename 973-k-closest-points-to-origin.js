/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = (points, K) => {
  let len = points.length,
    l = 0,
    r = len - 1
  while (l <= r) {
    let mid = helper(points, l, r)
    if (mid === K) break
    if (mid < K) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return points.slice(0, K)
}

function helper(A, l, r) {
  let pivot = A[l]
  let ll = l
  while (l < r) {
    while (l < r && compare(A[r], pivot) >= 0) r--
    while (l < r && compare(A[l], pivot) <= 0) l++
    swap(A, l, r)
  }
  swap(A, ll, l)
  return l
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function compare(p1, p2) {
  return p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1]
}
