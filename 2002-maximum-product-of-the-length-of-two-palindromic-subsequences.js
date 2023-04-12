/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
  const n = s.length;
  let max = 0;
  for (let i = 0; i < (1 << n); i++) {
    let n0 = palindromic(i, s, true);
    if (n0 === 0) continue;
    for (let j = 0; j < (1 << n); j++) {
      if ((i & j) > 0) continue;
      max = Math.max(palindromic(j, s) * n0, max);
    }
  }
  return max; 
};
function palindromic( i, s) {
  const n = s.length;
  let sub = "";
  for (let x = 0; x < n; x++) {
    if (i & (1 << x)) sub += s[x]
  }
  let len = sub.length;
  for (let i = 0; i < len; i++) {
    if (sub[i] !== sub[len - i - 1]) return 0;
  }
  return len;
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const maxProduct = function(s) {
  const s1 = [], s2 = [], n = s.length
  let res = 0
  dfs(0)
  return res
  
  function dfs(idx) {
    if(idx === n) {
      if(isPalindromic(s1) && isPalindromic(s2)) {
        res = Math.max(res, s1.length * s2.length)
      }
      return
    }
    const ch = s[idx]
    s1.push(ch)
    dfs(idx + 1)
    s1.pop()
    
    s2.push(ch)
    dfs(idx + 1)
    s2.pop()
    
    dfs(idx + 1)
  }
  function isPalindromic(arr) {
    let l = 0, r = arr.length - 1
    while(l < r) {
      if(arr[l] === arr[r]) {
        l++
        r--
      } else {
        return false
      }
    }
    return true
  }
};
