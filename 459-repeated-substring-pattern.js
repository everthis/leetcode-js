/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    const len = s.length
    let tmp = ''
    for(let i = 1; i <= len; i++) {
        tmp = s.substr(0, i)
        if (tmp.length === len) {
            return false
        }
        if (s === genStr(tmp, len)) {
            return true
        }
    }
    return false
};
function genStr(sub, limit) {
    let str = sub
    while(str.length < limit) {
        str += sub
    }
    return str
}

// another

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  const l = s.length
  const arr = DFA(s)
  return arr[l] && arr[l] % (l - arr[l]) === 0
  function DFA(s) {
    let i = 1
    let j = 0
    const len = s.length
    const prefix = Array(len + 1).fill(0)
    prefix[0] = -1
    prefix[1] = 0
    while (i < len) {
      if (s[j] === s[i]) {
        j++
        i++
        prefix[i] = j
      } else {
        if (j > 0) j = prefix[j]
        else i++
      }
    }
    return prefix
  }
}

// another

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let i = 1, j = 0, n = s.length;
    const dp = Array(n + 1).fill(0);
    while( i < s.length ){
        if( s[i] === s[j] ) dp[++i] = ++j;
        else if( j === 0 ) i++;
        else j = dp[j];
    }
    return dp[n] && (dp[n] % (n - dp[n]) === 0);   
};
