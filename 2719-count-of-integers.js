/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
const count = function (num1, num2, min_sum, max_sum) {
  const mod = 1e9 + 7
  let res = 0
  res =
    (cntNoGreater(num2, max_sum) - cntNoGreater(num2, min_sum - 1) + mod) % mod -
    (cntNoGreater(num1, max_sum) - cntNoGreater(num1, min_sum - 1) + mod) % mod
  res = (res + mod) % mod
  const sum1 = calc(num1)
  if (sum1 >= min_sum && sum1 <= max_sum) {
    res = (res + 1) % mod
  }

  return res

  function cntNoGreater(num, maxSum) {
    const memo = Array.from({ length: 2 }, () =>
      Array.from({ length: 23 }, () => Array(401).fill(-1))
    )
    return dfs(num, maxSum, 0, 0, 1, memo)
  }
  function dfs(num, maxSum, idx, sum, isSame, memo) {
    if(sum > maxSum) {
      return 0
    }
    if (idx === num.length) {
      return 1
    }
    if(memo[isSame][idx][sum] !== -1) {
      return memo[isSame][idx][sum]
    }
    let res = 0
    if(isSame) {
        for(let i = 0; i < num[idx]; i++) {
            res = (res + dfs(num, maxSum, idx + 1, sum + i, 0, memo)) % mod
        }
        res = (res + dfs(num, maxSum, idx + 1, sum + +num[idx], 1, memo)) % mod
    } else {
        for (let i = 0; i <= 9; i++) {
            res = (res + dfs(num, maxSum, idx + 1, sum + i, 0, memo)) % mod
        }
    }

    return memo[isSame][idx][sum] = res
  }
  function calc(num) {
    let res = 0
    for (const e of num) {
      res += +e
    }
    return res
  }
}
