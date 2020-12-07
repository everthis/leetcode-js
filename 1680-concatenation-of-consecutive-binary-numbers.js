/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function(n) {
  let res = ''
  const mod = 10 ** 9 + 7
  for(let i = 1; i <= n; i++) {
    res += dec2bin(i)
    res = dec2bin(parseInt(res, 2) % mod)
  }
  return parseInt(res, 2) % mod
};
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
  const mod = BigInt(1e9 + 7)
  let res = 0n
  for (let i = 1n, shift = 0n; i <= n; i++) {
    let singleBit = (i & (i - 1n)) == 0
    if (singleBit) shift++
    res <<= shift
    res += i
    res %= mod
  }
  return res
}
