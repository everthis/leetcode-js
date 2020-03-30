/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2, memo = new Map()) {
  if (word1 === word2) return 0
  if (word1 === '' || word2 === '') return Math.max(word1.length, word2.length)
  const len1 = word1.length
  const len2 = word2.length
  if (memo.has(`${word1}-${word2}`)) return memo.get(`${word1}-${word2}`)
  let res
  if (word1[len1 - 1] === word2[len2 - 1]) {
    res = minDistance(word1.slice(0, len1 - 1), word2.slice(0, len2 - 1), memo)
  } else {
    res =
      1 +
      Math.min(
        minDistance(word1.slice(0, len1 - 1), word2, memo),
        minDistance(word1, word2.slice(0, len2 - 1), memo)
      )
  }
  memo.set(`${word1}-${word2}`, res)
  return res
}

// another

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const len1 = word1.length
  const len2 = word2.length
  const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(0))
  for(let i = 1; i <= len1; i++) {
    for(let j = 1; j<= len2; j++) {
      if(word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return len1 + len2 - dp[len1][len2] * 2
}

// another

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const len1 = word1.length
  const len2 = word2.length
  const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(0))
  for(let i = 1; i <= len2; i++) {
    dp[0][i] = i
  }
  for(let j = 1; j <= len1; j++) {
    dp[j][0] = j
  }
  for(let i = 1; i <= len1; i++) {
    for(let j = 1; j<= len2; j++) {
      if(word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
    }
  }
  return dp[len1][len2]
}
