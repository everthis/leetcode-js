/**
 * @param {string} s
 * @return {number}
 */
const longestRepeatingSubstring = function(s) {
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    let pivot = Math.floor((left + right + 1) / 2);
    if (hasRepeat(s, pivot)) {
      left = pivot;
    } else {
      right = pivot - 1;
    }
  }
  return left;
};

const hasRepeat = (s, l) => {
  const strings = new Set();
  for (let i = 0; i < s.length - l + 1; i++) {
    const sub = s.substr(i, l);
    if (strings.has(sub)) {
      return true;
    }
    strings.add(sub);
  }
  return false;
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const longestRepeatingSubstring = function(s) {
    const n = s.length;
    // dp[i][j] means # of repeated chars for substrings ending at i and j
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    let res = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (s.charAt(i - 1) === s.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j]);
            }
        }
    }
    return res;
};

// non-overlap version
// http://nriverwang.blogspot.com/2013/04/longest-repeated-substring.html

/*
You are to find the longest repeated substring in a given text. 
Repeated substrings may not overlap. If more than one substring is 
repeated with the same length, print the first one you find.(starting 
from the beginning of the text). NOTE: The substrings can't be all spaces.

Input Sample:
Your program should accept as its first argument a path to a filename. 
The input file contains several lines. Each line is one test case.
Each line contains a test string. eg.

banana
abc

Output Sample:
For each set of input produce a single line of output which is the 
longest repeated substring. If there is none, print out the string NONE. eg.
an
NONE

std::string repeated_substring(std::string &str) {
    int len = str.length();

    int **c = new int*[len + 1];
    for (int i = 0; i <= len; ++i)
        c[i] = new int[len + 1];
    for (int i = 0; i <= len; ++i) {
        c[i][0] = 0;
        c[0][i] = 0;
    }

    int max_len = 0, index = len + 1;
    for (int i = 1; i <= len; ++i) {
        for (int j = 1; j <= len; ++j) {
            if (str[i-1] == str[j-1] && abs(i-j) > c[i-1][j-1]) {
                c[i][j] = c[i-1][j-1] + 1;
                if (c[i][j] > max_len) {
                    max_len = c[i][j];
                    index = std::min(i, j);
                }
            } else {
                c[i][j] = 0;
            }
        }
    }
    
    for (int i = 0; i <= len; ++i)
        delete[] c[i];
    delete[] c;
 
    if (max_len > 0) {
        std::string ret = str.substr(index - max_len, max_len);
        for (int i = 0; i < max_len; ++i)
            if(ret[i] != ' ')
                return ret;
    }

    return "NONE";
}

*/
