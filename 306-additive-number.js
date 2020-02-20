/**

Additive number is a string whose digits can form additive sequence.
A valid additive sequence should contain at least three numbers.
Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Example 1:

Input: "112358"
Output: true
Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
             1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

Example 2:

Input: "199100199"
Output: true
Explanation: The additive sequence is: 1, 99, 100, 199. 
             1 + 99 = 100, 99 + 100 = 199
 
Constraints:

num consists only of digits '0'-'9'.
1 <= num.length <= 35

*/

/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = function(num) {
  const n = num.length
  for (let i = 1; i <= (n / 2) >> 0; ++i) {
    if (num.charAt(0) === '0' && i > 1) return false
    const x1 = +num.slice(0, i)
    for (let j = 1; Math.max(j, i) <= n - i - j; ++j) {
      if (num.charAt(i) == '0' && j > 1) break
      const x2 = +num.slice(i, i + j)
      if (isValid(x1, x2, j + i, num)) return true
    }
  }
  return false
}

function isValid(x1, x2, start, num) {
  if (start === num.length) return true
  x2 = x2 + x1
  x1 = x2 - x1
  const sum = x2 + ''
  return num.startsWith(sum, start) && isValid(x1, x2, start + sum.length, num)
}
