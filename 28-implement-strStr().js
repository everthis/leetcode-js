/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  const m = haystack.length, n = needle.length
  
  const lps = process(needle)
  for(let j = 0, i = 0; i < m; i++) {
    while(j > 0 && haystack[i] !== needle[j]) {
      j = lps[j - 1]
    }
    if(haystack[i] === needle[j]) {
      j++
      if(j === n) {
        return i - n + 1
      }
    }
  }
  return -1
  
  function process(s) {
    const n = s.length
    const lps = Array(n).fill(0)
    for(let len = 0, i = 1; i < n; i++) {
      while(len > 0 && s[i] !== s[len]) {
        len = lps[len - 1]
      }
      if(s[i] === s[len]) {
        len++
        lps[i] = len
      }
    }
    
    return lps
  }
};

// another

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(a, b) {
  if(b === '') return 0
  if(a.length < b.length) return -1
  if(a.length === b.length) return a === b ? 0 : -1
  const m = a.length, n = b.length
  const fail = Array(n).fill(-1)
  // DFA
  for(let i = 1; i < n; i++) {
    let j = fail[i - 1]
    while(j !== -1 && b[j + 1] !== b[i]) {
      j = fail[j]      
    }
    if(b[j + 1] === b[i]) fail[i] = j + 1
  }
  let pos = -1
  for(let i = 0; i < m; i++) {
    while(pos !== -1 && a[i] !== b[pos + 1]) pos = fail[pos]
    if(a[i] === b[pos + 1]) {
      pos++
      if(pos === n - 1) return i - n + 1
    }
  }
  return -1
};

// another

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) {
        return i;
      }
      if (i + j === haystack.length) return -1;
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }
    }
  }
};
