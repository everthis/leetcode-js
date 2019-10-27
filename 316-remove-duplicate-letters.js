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
    while (stack.length && char < stack[0] && last[stack[0]] > i) {
      added[stack[0]] = false
      stack.shift()
    }
    stack.unshift(char)
    added[char] = true
  }
  return stack.reverse().join('')
}

// another


/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
  const m = new Array(26)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i) - a
    m[k] = m[k] ? m[k] + 1 : 1
  }
  const aChNo = []
  const visited = {}
  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i) - a
    m[k]--
    if (visited[k]) continue
    while (aChNo.length > 0) {
      const last = aChNo[aChNo.length - 1] - a
      if (last > k && m[last] > 0) {
        visited[last] = 0
        aChNo.pop()
      } else break
    }
    visited[k] = 1
    aChNo.push(k + a)
  }
  return String.fromCharCode(...aChNo)
}
