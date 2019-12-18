/**

Given two strings str1 and str2 of the same length,
determine whether you can transform str1 into str2 by doing zero or more conversions.
In one conversion you can convert all occurrences of one character
in str1 to any other lowercase English character.
Return true if and only if you can transform str1 into str2.

Example 1:

Input: str1 = "aabcc", str2 = "ccdee"
Output: true
Explanation: Convert 'c' to 'e' then 'b' to 'd' then 'a' to 'c'. 
Note that the order of conversions matter.

Example 2:

Input: str1 = "leetcode", str2 = "codeleet"
Output: false
Explanation: There is no way to transform str1 to str2.

Note:

1 <= str1.length == str2.length <= 10^4
Both str1 and str2 contain only lowercase English letters.

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const canConvert = function(str1, str2) {
  if (str1 === str2) return true
  const map = new Map()
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i]) && map.get(str1[i]) !== str2[i]) {
      return false
    }
    map.set(str1[i], str2[i])
  }
  const set = new Set(map.values())
  return set.size < 26
}
