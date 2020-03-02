/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function(IP) {
  const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/
  const ipv6 = /^([\da-f]{1,4}:){8}$/i
  return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither'
}
