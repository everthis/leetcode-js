/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const shortestCommonSupersequence = function(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length
  const mat = Array.from({ length: len1 + 1 }, () =>
    new Array(len2 + 1).fill(0)
  )
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i == 0) {
        mat[i][j] = str2.slice(0, j)
        continue
      }
      if (j == 0) {
        mat[i][j] = str1.slice(0, i)
        continue
      }
      mat[i][j] = mat[i - 1][j] + str1[i - 1]
      let cand1 = mat[i][j - 1] + str2[j - 1]
      if (cand1.length < mat[i][j].length) mat[i][j] = cand1
      if (str1[i - 1] === str2[j - 1]) {
        let cand2 = mat[i - 1][j - 1] + str1[i - 1]
        if (cand2.length < mat[i][j].length) mat[i][j] = cand2
      }
    }
  }
  return mat[len1][len2]
}
