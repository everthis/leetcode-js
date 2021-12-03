/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n, ch = 'a') {
  const odd = n % 2 === 1
  const code = ch.charCodeAt(0)
  if(odd) return ch.repeat(n)
  const nch = String.fromCharCode(code + 1), nnch = String.fromCharCode(code + 2)
  const even = (n / 2) % 2 === 0
  return generateTheString(even ? n / 2 - 1 : n / 2, nch) + generateTheString(even ? n / 2 + 1 : n / 2, nnch)
};
