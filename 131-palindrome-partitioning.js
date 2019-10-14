/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
  let res = []
  backtrack(res, [], 0, s)
  return res
}

function backtrack(res, cur, start, s) {
  if (start === s.length) res.push([...cur])
  else {
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        cur.push(s.substring(start, i + 1))
        backtrack(res, cur, i + 1, s)
        cur.pop()
      }
    }
  }
}

function isPalindrome(str, start, i) {
  let l = start,
    r = i
  while (l < r) {
    if (str[l] !== str[r]) return false
    l++
    r--
  }
  return true
}
