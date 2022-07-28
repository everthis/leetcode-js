/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function(a, b) {
  let m = a, n = b, ch1 = 'a', ch2 = 'b'
  if(b > a) {
    m = b, n = a, ch1 = 'b', ch2 = 'a'
  }
  let res = ''
  while(m-- > 0) {
    res += ch1
    if(m > n) {
      res += ch1
      m--
    }
    if(n > 0) {
      res += ch2
      n--
    }
  }
  return res
};

// another

/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function (a, b, ac = 'a', bc = 'b') {
  const delta = a - b
  let res = ''
  if (delta < 0) {
    return strWithout3a3b(b, a, 'b', 'a')
  } else {
    while(a-- > 0) {
      res += ac
      if(a > b) res += ac, a--
      if(b-- > 0) res += bc
    }
  }

  return res
}
