/**

Given a non-empty string s and an integer k,
rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters.
If it is not possible to rearrange the string, return an empty string "".

Example 1:

Input: s = "aabbcc", k = 3
Output: "abcabc" 
Explanation: The same letters are at least distance 3 from each other.
Example 2:

Input: s = "aaabc", k = 3
Output: "" 
Explanation: It is not possible to rearrange the string.
Example 3:

Input: s = "aaadbbcc", k = 2
Output: "abacabcd"
Explanation: The same letters are at least distance 2 from each other.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const rearrangeString = function(s, k) {
  if(k > 26) return ''
  const length = s.length
  const count = new Array(26).fill(0)
  const valid = new Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < length; i++) {
    count[s.charCodeAt(i) - a]++
  }
  let sb = ''
  for (let index = 0; index < length; index++) {
    let candidatePos = findValidMax(count, valid, index)
    if (candidatePos == -1) return ''
    count[candidatePos]--
    valid[candidatePos] = index + k
    sb += String.fromCharCode(a + candidatePos)
  }
  return sb
}

function findValidMax(count, valid, index) {
  let max = Number.MIN_VALUE
  let candidatePos = -1
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0 && count[i] > max && index >= valid[i]) {
      max = count[i]
      candidatePos = i
    }
  }
  return candidatePos
}

