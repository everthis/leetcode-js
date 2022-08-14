/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const minWindow = function (s1, s2) {
  const S = s1,T=s2
    let m = T.length, n = S.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j + 1;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (T.charAt(i - 1) == S.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    let start = 0, len = n + 1;
    for (let j = 1; j <= n; j++) {
        if (dp[m][j] != 0) {
            if (j - dp[m][j] + 1 < len) {
                start = dp[m][j] - 1;
                len = j - dp[m][j] + 1;
            }
        }
    }
    return len == n + 1 ? "" : S.substring(start, start + len);
}

// another

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const minWindow = function (s1, s2) {
  let n1 = s1.length,
    n2 = s2.length,
    s1Idx = 0,
    s2Idx = 0,
    start = -1,
    len = n1 + 1
  while (s1Idx < n1) {
    if (s1[s1Idx] === s2[s2Idx]) {
      if (s2Idx === n2 - 1) {
        const end = s1Idx
        while (s2Idx >= 0) {
          while (s1[s1Idx] !== s2[s2Idx]) s1Idx--
          s2Idx--
          s1Idx--
        }
        const tmp = end - s1Idx
        if (tmp < len) {
          len = tmp
          start = s1Idx + 1
        }
        s2Idx++
        s1Idx += 2
      } else {
        s2Idx++
        s1Idx++
      }
    } else s1Idx++
  }
  return start === -1 ? '' : s1.slice(start, start + len)
}

// another

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const minWindow = function(s1, s2) {
  let res = '', n = s1.length, m = s2.length
  if(s1 === '' || s2 === '') return res
  let minLen = Infinity
  let right = 0
  while(right < n) {
    let tIndex = 0
    while(right < n) {
      if(s1[right] === s2[tIndex]) tIndex++
      if(tIndex === m) break
      right++
    }
    if(right === n) break
    let left = right
    tIndex = m - 1
    while(left >= 0) {
      if(s1[left] === s2[tIndex]) {
        tIndex--
      }
      if(tIndex < 0) break
      left--
    }
    
    if(right - left + 1 < minLen) {
      minLen = right - left + 1
      res = s1.slice(left, right + 1)
    }
    right = left + 1
  }
  
  return res
};

// another

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
