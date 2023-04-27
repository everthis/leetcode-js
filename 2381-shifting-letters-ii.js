/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
const shiftingLetters = function(s, shifts) {
  const n = s.length
  const arr = Array(n + 1).fill(0)
  const a = 'a'.charCodeAt(0)
  const chToCode = ch => ch.charCodeAt(0)
  const codeToCh = code => String.fromCharCode(code)
  for(const [s, e, d] of shifts) {
    const delta = d === 1 ? 1 : -1
    arr[s] += delta
    arr[e + 1] -= delta
  }
  for(let i = 1; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i]
  }
  const codes = s.split('').map(e => chToCode(e))
  for(let i = 0; i < n; i++) {
    codes[i] += arr[i]
    codes[i] = a + (codes[i] - a + 26 * n) % 26
  }
  return codes.map(c => codeToCh(c)).join('')
};
