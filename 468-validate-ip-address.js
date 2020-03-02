/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function(IP) {
  const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/
  const ipv6 = /^([\da-f]{1,4}:){8}$/i
  return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither'
}

// another

/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function(IP) {
  if (IP.indexOf('.') != -1) {
    const arr = IP.split('.')
    if (arr.length !== 4) return 'Neither'
    for (let i = 0; i < arr.length; i++) {
      const numVal = parseInt(arr[i])
      if (
        numVal < 0 ||
        numVal >= 256 ||
        arr[i].length !== ('' + numVal).length
      ) {
        return 'Neither'
      }
    }
    return 'IPv4'
  } else if (IP.indexOf(':') != -1) {
    const arr = IP.split(':')
    if (arr.length !== 8) return 'Neither'
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 4 || arr[i].length === 0) return 'Neither'
      const re = /[^0-9A-F]/i
      if (re.test(arr[i])) return 'Neither'
    }
    return 'IPv6'
  } else {
    return 'Neither'
  }
}
