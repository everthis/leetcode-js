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

