/**

Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true

*/

/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function(s) {
  const m = {}
  for(let i = 0, len = s.length; i < len; i++) {
    if(m[s[i]] == null || m[s[i]] === 0) m[s[i]] = 1
    else m[s[i]] -= 1
  }
  let num = 0
  for(let el in m) {
    if(m.hasOwnProperty(el)) {
      if(m[el] > 0) num++
    }
  }
  return num === 0 || num === 1
};
