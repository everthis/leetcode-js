/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = function(sentence) {
  const arr = sentence.split(' ')
  const vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  for(let i = 0, n = arr.length; i < n; i++) {
    const first = arr[i][0]
    const ma = vowel.has(first) ? 'ma' : ''
    const tmp = !vowel.has(first) ? `${arr[i].slice(1)}${first}ma` : arr[i]
    const suffix = 'a'.repeat(i + 1)
    arr[i] = `${tmp}${ma}${suffix}`
  }
  return arr.join(' ')
};
