/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
const earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  const { max, min } = Math
  const hash = {}
  function dp(l, r, m) {
    const key = `${l}${r}${m}`
    if (hash[key] != null) return hash[key]
    if (l > r) return dp(r, l, m)
    if (l === r) return [1, 1]
    let nxt_m = (m + 1) >> 1
    let ans = [n, 0]
    for (let i = 1; i < l + 1; i++) {
      let l_win = i - 1,
        l_lose = l - i
      for (
        let j = max(r - ~~(m / 2) - 1, 0) + l_lose + 1;
        j < min(r - 1 - l_win, nxt_m - i) + 1;
        j++
      ) {
        let tmp = dp(i, j, nxt_m)
        ans = [min(ans[0], tmp[0]), max(ans[1], tmp[1])]
      }
    }
    hash[key] = [ans[0] + 1, ans[1] + 1]
    return hash[key]
  }

  return dp(firstPlayer, n - secondPlayer + 1, n)
}
