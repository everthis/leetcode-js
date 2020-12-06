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
