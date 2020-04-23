/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const minWindow = function (S, T) {
  if (S.length === 0 || T.length === 0) {
    return ''
  }
  let right = 0
  let minLen = Number.MAX_VALUE
  let result = ''
  while (right < S.length) {
    let tIndex = 0
    while (right < S.length) {
      if (S.charAt(right) === T.charAt(tIndex)) {
        tIndex++
      }
      if (tIndex === T.length) {
        break
      }
      right++
    }
    if (right === S.length) {
      break
    }
    let left = right
    tIndex = T.length - 1
    while (left >= 0) {
      if (S.charAt(left) === T.charAt(tIndex)) {
        tIndex--
      }
      if (tIndex < 0) {
        break
      }
      left--
    }
    if (right - left + 1 < minLen) {
      minLen = right - left + 1
      result = S.slice(left, right + 1)
    }
    // we have to move right pointer to the next position of left pointer, NOT the next position
    // of right pointer
    right = left + 1
  }
  return result
}
