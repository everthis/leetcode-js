/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const checkPalindromeFormation = function (a, b) {
  return check(a, b) || check(b, a)
}

function isPalindrome(s, i, j) {
  for (; i < j; ++i, --j) {
    if (s[i] != s[j]) return false
  }
  return true
}

function check(a, b) {
  for (let i = 0, j = a.length - 1; i < j; ++i, --j) {
    if (a[i] !== b[j]) return isPalindrome(a, i, j) || isPalindrome(b, i, j)
  }
  return true
}
