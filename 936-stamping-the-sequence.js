/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
const movesToStamp = function (stamp, target) {
  const S = stamp.split('')
  const T = target.split('')
  const res = []
  const visited = Array(T.length).fill(false)
  let stars = 0

  while (stars < T.length) {
    let doneReplace = false
    for (let i = 0; i <= T.length - S.length; i++) {
      if (!visited[i] && canReplace(T, i, S)) {
        stars = doReplace(T, i, S.length, stars)
        doneReplace = true
        visited[i] = true
        res.push(i)
        if (stars === T.length) {
          break
        }
      }
    }

    if (!doneReplace) {
      return []
    }
  }

  const resArray = Array(res.length).fill(0)
  for (let i = 0; i < res.length; i++) {
    resArray[i] = res[res.length - i - 1]
  }
  return resArray
  function canReplace(T, p, S) {
    for (let i = 0; i < S.length; i++) {
      if (T[i + p] !== '*' && T[i + p] !== S[i]) {
        return false
      }
    }
    return true
  }

  function doReplace(T, p, len, count) {
    for (let i = 0; i < len; i++) {
      if (T[i + p] !== '*') {
        T[i + p] = '*'
        count++
      }
    }
    return count
  }
}
