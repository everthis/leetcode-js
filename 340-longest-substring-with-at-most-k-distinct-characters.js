/**

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = new Map()
  let left = 0
  let best = 0
  for(let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    map.set(c, (map.get(c) || 0) + 1)
    while(map.size > k) {
      const lc = s.charAt(left)
      map.set(lc, map.get(lc) - 1)
      if(map.get(lc) === 0) map.delete(lc)
      left++
    }
    best = Math.max(best, i - left + 1)
  }
  return best
};
