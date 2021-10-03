/**
 * @param {string} s
 * @param {number} k
 * @param {character} letter
 * @param {number} repetition
 * @return {string}
 */
const smallestSubsequence = function (s, k, letter, repetition) {
  let n_letters = 0
  for (let i = 0; i < s.length; i++) if (s.charAt(i) == letter) n_letters++
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    while (
      stack.length &&
      stack[stack.length - 1] > c &&
      s.length - i + stack.length > k &&
      (stack[stack.length - 1] != letter || n_letters > repetition)
    ) {
      if (stack.pop() == letter) repetition++
    }
    if (stack.length < k) {
      if (c == letter) {
        stack.push(c)
        repetition--
      } else if (k - stack.length > repetition) {
        stack.push(c)
      }
    }
    if (c == letter) n_letters--
  }

  let sb = ''
  for (let c of stack) sb += c
  return sb
}
