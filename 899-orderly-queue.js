/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const orderlyQueue = function (S, K) {
  if (K === 0) return S
  else if (K > 1) return S.split('').sort().join('')
  let result = 0,
    L = S.length
  for (let i = 1; i < L; i++) {
    for (let j = 0; j < L; j++) {
      let d = S.charCodeAt((result + j) % L) - S.charCodeAt((i + j) % L)
      if (d !== 0) {
        if (d > 0) result = i
        break
      }
    }
  }
  return S.slice(result) + S.slice(0, result)
}
