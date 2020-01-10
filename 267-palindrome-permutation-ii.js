/**

Given a string s, return all the palindromic permutations (without duplicates) of it.
Return an empty list if no palindromic permutation could be form.

Example 1:

Input: "aabb"
Output: ["abba", "baab"]
Example 2:

Input: "abc"
Output: []

*/

/**
 * @param {string} s
 * @return {string[]}
 */
const generatePalindromes = function(s) {
  const ans = []
  const count = Array(256).fill(0)
  let odds = 0
  for (let c of s) count[c.charCodeAt(0)]++
  for (let c of count) if (c % 2 !== 0) odds++
  if (odds <= 1) {
    let center = null
    for (let idx = 0; idx < count.length; idx++) {
      if (count[idx] % 2 === 1) {
        center = String.fromCharCode(idx)
        count[idx]--
        break
      }
    }
    generate(ans, count, center != null ? center : '', s.length)
  }
  return ans
}

function generate(ans, count, build, len) {
  if (build.length === len) {
    ans.push(build)
    return
  }
  for (let idx = 0; idx < count.length; idx++) {
    if (count[idx] > 0) {
      count[idx] -= 2
      generate(
        ans,
        count,
        String.fromCharCode(idx) + build + String.fromCharCode(idx),
        len
      )
      count[idx] += 2
    }
  }
}
