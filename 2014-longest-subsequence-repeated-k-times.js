/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const longestSubsequenceRepeatedK = function(s, k) {
  const n = s.length, a = 'a'.charCodeAt(0)
  
  let res = ''
  const q = ['']
  
  while(q.length) {
    const size = q.length
    for(let i = 0; i < size; i++) {
      const cur = q.shift()
      for(let j = 0; j < 26; j++) {
        const next = cur + String.fromCharCode(a + j)
        if(isSub(s, next, k)) {
          res = next
          q.push(next)
        }
      }
      
    }
  }
  
  return res
  
  
  function isSub(s, p, k) {
    let repeated = 0
    for(let i = 0, j = 0, n = s.length, m = p.length; i < n; i++) {
      if(s[i] === p[j]) {
        j++
        if(j === m) {
          repeated++
          j = 0
          if(repeated === k) {
            return true
          }
        }
      }
    }
    
    return false
  }
};

// another

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
    // Max length of the subsequence can be determined by the length of the string and k
    const maxLen = Math.floor(s.length / k);

    // Find all possible characters that can appear in the subsequence (characters must appear at
    // least k times in s)
    const charCount = new Map();
    const possibleChars = []

    for (const char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    for (const char of charCount.keys()) {
        if (charCount.get(char) >= k) {
            possibleChars.push(char);
        }
    }

    // Test possibilities
    let ans = "";
    dfs("");

    return ans;

    // Recursive function, tests if the given subsequence repeats k times in s
    function dfs(seq) {
        // Does not have enough repeats, return
        if (countRepeats(seq) < k) {
            return;
        }

        // Update our answer if the new subsequence is better
        if (seq.length > ans.length || (seq.length === ans.length && seq > ans)) {
            ans = seq;
        }

        // Append possible characters to the subsequence and test again
        if (seq.length < maxLen) {
            for (const char of possibleChars) {
                dfs(seq + char);
            }
        }
    }

    // Counts the number of times the given subsequence repeats in s (up to k)
    function countRepeats(seq) {

        // Empty string, return k
        if (!seq) {
            return k;
        }

        let repeats = 0;
        let seqIdx = 0;

        for (const char of s) {
            if (char === seq[seqIdx]) {
                seqIdx += 1;

                if (seqIdx >= seq.length) {
                    seqIdx = 0;
                    repeats += 1;

                    if (repeats >= k) {
                        break;
                    }
                }
            }
        }

        return repeats;
    } 
};
