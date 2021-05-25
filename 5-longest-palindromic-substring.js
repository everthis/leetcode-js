/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let res = ''
  for(let i = 0, len = s.length; i < len; i++) {
    let s1 = chk(s,i,i), s2 = chk(s,i,i+1)
    if(s1.length > res.length) res = s1
    if(s2.length > res.length) res = s2
  }
  return res
};

function chk(s, i, j) {
  for(; i>= 0 && j < s.length; i--, j++) {
    if(s[i] !== s[j]) break
  }
  return s.slice(i+1, j)
}

// another

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let T = preProcess(s);
  let n = T.length;
  let P = [];
  let C = 0,
    R = 0;
  let i_mirror;
  for (let i = 1; i < n - 1; i++) {
    i_mirror = 2 * C - i; // equals to i' = C - (i-C)

    P[i] = R > i ? Math.min(R - i, P[i_mirror]) : 0;

    // Attempt to expand palindrome centered at i
    while (T[i + 1 + P[i]] == T[i - 1 - P[i]]) P[i]++;

    // If palindrome centered at i expand past R,
    // adjust center based on expanded palindrome.
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }

  // Find the maximum element in P.
  let maxLen = 0;
  let centerIndex = 0;
  for (let j = 1; j < n - 1; j++) {
    if (P[j] > maxLen) {
      maxLen = P[j];
      centerIndex = j;
    }
  }

  return s.substr((centerIndex - 1 - maxLen) / 2, maxLen);
};

function preProcess(s) {
  let n = s.length;
  if (n === 0) return "^$";
  let ret = "^";
  for (let i = 0; i < n; i++) ret += "#" + s.substr(i, 1);

  ret += "#$";
  return ret;
}

// another

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  const n = s.length
  let res = ''
  for(let i = 0; i < n; i++) {
    const first = chk(s, i, i, n)
    if(first.length > res.length) res = first
    const second = chk(s, i, i + 1, n)
    if(second.length > res.length) res = second
  }
  return res
};

function chk(str, i, j, n) {
  if(j >= n) return str[i]
  let l = i, r = j
  while(l >= 0 && r < n) {
    if(str[l] === str[r]) {
      l--
      r++
    } else {
      return str.slice(l + 1, r)
    }
  }
  if(l < 0) {
    return str.slice(0, r)
  } else {
    return str.slice(l + 1, n)
  }
}

