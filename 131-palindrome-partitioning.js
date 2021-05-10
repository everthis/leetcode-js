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

// another

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
  const res = []
  helper(s, 0, [], res)
  return res
};

function helper(str, idx, cur, res) {
  if(idx >= str.length) {
    res.push(cur.slice())
    return
  }
  for(let i = idx, len = str.length; i < len; i++) {
    const tmp = str.slice(idx, i + 1)
    if(chk(tmp)) {
      cur.push(tmp)
      helper(str, i + 1, cur, res)
      cur.pop()
    }
  }
}
function chk(str) {
  const n = str.length
  let l = 0, r = n - 1
  while(l < r) {
    if(str[l] !== str[r]) return false
    l++
    r--
  }
  return true
}
