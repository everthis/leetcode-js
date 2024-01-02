/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
const countPalindromePaths = function (parent, s) {
  const n = parent.length
  const nxt = Array.from({ length: n }, () => Array())
  const cnt = {0:0}
  for(let i = 1; i < n; i++) {
    nxt[parent[i]].push([i, s[i]])
  }
  let res = 0
  dfs(0, -1, 0)
  return res

  function dfs(node, parent, state) {
    if(cnt[state] != null) res += cnt[state]
    for(let i = 0; i < 26; i++) {
      const tmp = state ^ (1 << i)
      if(cnt[tmp] != null) res += cnt[tmp]
    }
    if(cnt[state] == null) cnt[state] = 0
    cnt[state] += 1

    for(const [next, ch] of (nxt[node] || [])) {
      if(next === parent) continue
      dfs(next, node, state ^ getMask(ch))
    }

  }

}
function getMask(c) {
  const a = 'a'.charCodeAt(0)
  return 1 << (c.charCodeAt(0) - a)
}


// another

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
const countPalindromePaths = function (parent, s) {
  let n = parent.length
  let dp = Array(n).fill(undefined)
  dp[0] = 0

  function getDp(x) {
    if (dp[x] != undefined) return dp[x]
    dp[x] = getDp(parent[x]) ^ getMask(s[x])
    return dp[x]
  }

  for (let i = 1; i < n; i++) getDp(i)
  dp.sort((a, b) => a - b)
  let counter = {}
  let res = 0

  for (let i = 0; i <= n; i++) {
    if (counter[dp[i]]) counter[dp[i]]++
    else {
      counter[dp[i]] = 1

      if (i) {
        let temp = dp[i - 1]
        let cntPrev = counter[temp]
        let c = 0

        while (temp) {
          let b = temp & -temp
          c += counter[dp[i - 1] ^ b] ?? 0
          temp ^= b
        }

        res += c * cntPrev + (cntPrev * (cntPrev - 1)) / 2
      }
    }
  }

  return res
}
function getMask(c) {
  return 1 << (c.charCodeAt() - 97)
}
