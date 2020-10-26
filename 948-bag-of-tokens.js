/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
const bagOfTokensScore = function (tokens, P) {
  tokens.sort((a, b) => a - b)
  let res = 0,
    score = 0,
    i = 0,
    j = tokens.length - 1
  while (i <= j) {
    if (P >= tokens[i]) {
      P -= tokens[i++]
      res = Math.max(res, ++score)
    } else if (score > 0) {
      score--
      P += tokens[j--]
    } else break
  }
  return res
}
