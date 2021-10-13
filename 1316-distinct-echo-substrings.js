/**
 * @param {string} text
 * @return {number}
 */
const distinctEchoSubstrings = function (text) {
  const set = new Set()
  for(let len = 1; len <= text.length / 2; len++) {
    for(let l = 0, r = len, count = 0; l < text.length - len; l++, r++) {
      if(text.charAt(l) === text.charAt(r)) count++
      else count = 0

      if(count === len) {
        set.add(text.slice(l - len + 1, l + 1))
        count--
      }
    }
  }
  return set.size
}

// another

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
  const last = {}
  for (let i = 0; i < s.length; i++) last[s.charAt(i)] = i
  const added = {}
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (added[char]) continue
    while (stack.length && char < stack[stack.length - 1] && last[stack[stack.length - 1]] > i) {
      added[stack[stack.length - 1]] = false
      stack.pop()
    }
    stack.push(char)
    added[char] = true
  }
  return stack.join('')
}
