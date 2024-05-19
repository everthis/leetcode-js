/**
 * @param {number} k
 * @return {number}
 */
var waysToReachStair = function (k) {
  const memo = new Map()

  return dfs(1, 0, true)

  function dfs(cur, jump, minus) {
    const key = `${cur}-${jump}-${minus}`
    if (memo.has(key)) return memo.get(key)

    let ret = 0
    if (cur - 2 > k) {
      memo.set(key, ret)
      return ret
    }
    if (cur === k) {
      ret += 1
    }
    if (cur > 0 && minus) {
      ret += dfs(cur - 1, jump, false)
    }
    ret += dfs(cur + 2 ** jump, jump + 1, true)

    memo.set(key, ret)
    return ret
  }
}
