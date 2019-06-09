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
