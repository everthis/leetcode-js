/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
  const f = new Array(num + 1).fill(0)
  for (let i = 1; i <= num; i++) f[i] = f[i >> 1] + (i & 1)
  return f
}
