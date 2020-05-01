/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
const ipToCIDR = function (ip, n) {
  const ipToLong = (ip) =>
    ip.split('.').reduce((acc, x) => 256 * acc + parseInt(x), 0)
  const longToIp = (long) =>
    [24, 16, 8, 0].map((i) => (long >>> i) % 256).join('.')
  const bitLength = (num) => Math.floor(Math.log2(num)) + 1
  const ans = []
  let long = ipToLong(ip)
  while (n) {
    let mask = Math.max(33 - bitLength(long & -long), 33 - bitLength(n))
    ans.push(longToIp(long) + '/' + mask)
    long += 1 << (32 - mask)
    n -= 1 << (32 - mask)
  }
  return ans
}
