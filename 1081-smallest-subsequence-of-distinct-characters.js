/**
 * @param {string} text
 * @return {string}
 */
const smallestSubsequence = function(text) {
  if (text === '') return ''
  let counter = new Array(128).fill(0)
  for (let i = 0; i < text.length; i++) counter[text.charCodeAt(i)]++
  let minChar = 128
  let minIndex = 0
  for (let i = 0; i < text.length; i++) {
    let c = text.charCodeAt(i)
    if (c < minChar) {
      minChar = c
      minIndex = i
    }
    if (--counter[c] === 0) {
      return (
        String.fromCharCode(minChar) +
        smallestSubsequence(
          text
            .slice(minIndex + 1)
            .replace(new RegExp(String.fromCharCode(minChar), 'g'), '')
        )
      )
    }
  }
  return ''
}

// another

/**
 * @param {string} text
 * @return {string}
 */
const smallestSubsequence = function(s) {
  let res = []
  const count = new Array(26).fill(0)
  const used = new Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0)
  for (let el of s) count[el.charCodeAt(0) - aCode]++
  for (let el of s) {
    count[el.charCodeAt(0) - aCode]--
    if (used[el.charCodeAt(0) - aCode]++ > 0) continue
    while (
      res.length &&
      res[res.length - 1].charCodeAt(0) > el.charCodeAt(0) &&
      count[res[res.length - 1].charCodeAt(0) - aCode] > 0
    ) {
      used[res[res.length - 1].charCodeAt(0) - aCode] = 0
      res.pop()
    }
    res.push(el)
  }
  return res.join('') 
};

// anoother


/**
 * @param {string} text
 * @return {string}
 */
const smallestSubsequence = function(text) {
  const n = text.length, stack = [], last = {}, visited = {}
  for(let i = 0; i < n; i++) last[text[i]] = i
  for(let i = 0; i < n; i++) {
    const ch = text[i]
    if (visited[ch]) continue
    while(stack.length && stack[stack.length - 1] > ch && last[stack[stack.length - 1]] > i) {
      visited[stack[stack.length - 1]] = 0
      stack.pop()
    }
    visited[ch] = 1
    stack.push(ch)
  }

  return stack.join('')
};
