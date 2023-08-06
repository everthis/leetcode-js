/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
const findMaximumElegance = function (items, k) {
  let v = items
  let n = v.length
  const { max } = Math
  v.sort((a, b) => b[0] - a[0]) //sort according to profit
  let ans = 0
  let m = {}
  for (let i = 0; i < k; i++) {
    ans += v[i][0]
    if (m[v[i][1]] == null) m[v[i][1]] = 0
    m[v[i][1]]++
  }
  let sz = Object.keys(m).length
  ans += sz * sz
  let res = ans
  let j = k - 1
  for (let i = k; i < n; i++) {
    if (m[v[i][1]] == 0 || m[v[i][1]] == null) {
      //try to increase unique elements
      while (j >= 0 && m[v[j][1]] < 2) j-- //finding smallest number in 0 to k-1 whose frequency is more than 1, and removing it to increasing uniquenes of the subsequence
      if (j < 0) break //no number found that has frequency more than two
      m[v[j][1]]--
      m[v[i][1]]++
      res -= v[j][0]
      res += v[i][0]
      res -= sz * sz
      sz++
      res += sz * sz
      j--
      ans = max(ans, res) //keep taking max
    }
  }
  return max(ans, res)
}
